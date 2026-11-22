import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { doctorsAtFacility, getGenericInformation, getPriceFacilities, getRecord, relatedMedicines } from '../../../../lib/catalogue';
import { isLanguage, isSection, local, recordPath, sections, siteOrigin, words, type Language } from '../../../../lib/content';
import { imagePath } from '../../../../lib/media';
import { medicineSections, profileItems, publicText } from '../../../../lib/profile';
import { jsonLd, seo } from '../../../../lib/seo';
import { AdSlot, RecordList, strings, webUrl } from '../../components';
import { Photo } from '../../photo';
import { RecordIcon } from '../../record-icon';
import { PriceComparison } from '../../price-comparison';

type Props = { params: Promise<{ lang: string; section: string; slug: string }> };

async function load(params: Props['params']) {
  const { lang, section, slug } = await params;
  if (!isLanguage(lang) || !isSection(section)) notFound();
  const id = slug.slice(slug.lastIndexOf('--') + 2);
  if (!slug.includes('--') || !/^[\w:-]{1,128}$/.test(id)) notFound();
  const row = await getRecord(section, id);
  if (!row) notFound();
  const path = recordPath(lang, section, row._id, row.name, row.strength);
  if (slug !== decodeURIComponent(path.split('/').at(-1)!)) permanentRedirect(path);
  const name = lang === 'bn' && row.nameBn ? row.nameBn : row.name;
  return { lang, section, id, row, path, name };
}

export async function generateMetadata({ params }: Props) {
  const { lang, section, row, path, name } = await load(params);
  const formulation = [name, row.strength, row.dosageForm].filter(Boolean).join(' ');
  const facts = [row.genericName, row.manufacturerName, row.location?.district].filter(Boolean).join(' · ');
  const description = (formulation + (facts ? ' · ' + facts : '') + '. ' +
    local(lang, 'Explore details in the Bangladesh healthcare directory.', 'বাংলাদেশের স্বাস্থ্যতথ্য নির্দেশিকায় বিস্তারিত দেখুন।')).slice(0, 160);
  return seo(lang, path.slice(3), formulation + ' · ' + (section === 'medicines'
    ? local(lang, 'Price and uses in Bangladesh', 'বাংলাদেশে দাম ও ব্যবহার')
    : section === 'tests' ? local(lang, 'Test price in Bangladesh', 'বাংলাদেশে পরীক্ষার মূল্য') : sections[section][lang]), description);
}

function date(value: unknown, lang: Language) {
  if (typeof value !== 'string' && !(value instanceof Date)) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-BD', {
    dateStyle: 'medium', timeZone: 'Asia/Dhaka',
  }).format(d);
}

function telephone(value: unknown) {
  if (typeof value !== 'string' || !/^\+?[\d ().-]+$/.test(value.trim())) return undefined;
  const number = value.trim().replace(/[^+0-9]/g, '');
  return /^\+?\d{7,15}$/.test(number) ? 'tel:' + number : undefined;
}

function money(value: unknown, lang: Language, currency = 'BDT') {
  if (typeof value !== 'number' || !Number.isFinite(value)) return words[lang].unknown;
  return new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-BD', {
    style: 'currency', currency: /^[A-Z]{3}$/.test(currency) ? currency : 'BDT', maximumFractionDigits: 2,
  }).format(value);
}

function Fact({ label, value }: { label: string; value: unknown }) {
  if (!(typeof value === 'string' && value.trim()) && typeof value !== 'number') return null;
  return <div><dt>{label}</dt><dd>{String(value)}</dd></div>;
}

export default async function Detail({ params }: Props) {
  const { lang, section, id, row, path, name } = await load(params);
  const t = words[lang];
  const l = (en: string, bn: string) => local(lang, en, bn);
  const test = section === 'tests';
  const medicine = section === 'medicines';
  const doctor = section === 'doctors';
  const facility = section === 'facilities';
  const offers = medicine ? row.price?.offers ?? [] : test ? [...(row.prices?.government ?? []), ...(row.prices?.private ?? [])] : [];
  const available = offers.filter((offer: any) => typeof offer?.price === 'number' && Number.isFinite(offer.price)
    && (offer.price > 0 || (test && offer.price === 0 && offer.isFree === true))
    && (!test || (typeof offer.facilityId === 'string' && offer.facilityId.length > 0)));
  const unique = new Set<string>();
  const priceFacilities = new Map((test ? await getPriceFacilities(
    [...new Set<string>(available.map((offer: any) => offer.facilityId))],
  ) : []).map(facility => [facility._id, facility]));
  const comparison: any[] = available.flatMap((offer: any) => {
    if (test && !priceFacilities.has(offer.facilityId)) return [];
    const lines = [offer];
    if (test && typeof offer.eligibleGovernmentOrDependentPrice === 'number') {
      lines.push({ ...offer, price: offer.eligibleGovernmentOrDependentPrice, patientCategory: 'eligible', isFree: offer.eligibleGovernmentOrDependentPrice === 0 });
    }
    return lines.filter(line => {
      const fingerprint = JSON.stringify([line.facilityId, line.providerName, line.branchName, line.sample, line.reportTime, line.patientCategory,
        line.price, line.currency, line.packageUnit, line.priceDate || line.updatedAt, line.priceType]);
      if (unique.has(fingerprint)) return false;
      unique.add(fingerprint);
      return true;
    });
  });
  const qualified = (row.qualifications ?? []).map((item: {originalText?: string}) => item.originalText).filter(Boolean);
  let label = medicine ? medicineSections(row.labelSections, lang) : [];
  let genericLabel = row.labelScope === 'generic';
  const [related, generic] = medicine ? await Promise.all([
    relatedMedicines(id, row.genericId).catch(() => []),
    !label.length && typeof row.genericId === 'string' ? getGenericInformation(row.genericId).catch(() => null) : null,
  ]) : [[], null];
  if (generic && generic.name === row.genericName) {
    label = medicineSections({ indication: generic.indications, 'therapeutic class': generic.drugClass, ...generic.labelSections }, lang);
    genericLabel = true;
  }
  const linkedDoctors = facility ? await doctorsAtFacility(id).catch(() => []) : [];
  const photo = imagePath(section, id, row.picture);
  const profile = row.professionalDetails;
  const doctorGroups = doctor ? [
    { title: t.qualifications, items: [...new Set([...qualified.map(publicText), ...profileItems(profile, 'education')].filter(Boolean))] },
    { title: l('Specialties and expertise', 'বিশেষত্ব ও দক্ষতা'), items: [...new Set([...strings(row.specialties), ...profileItems(profile, 'expertise', 'specializations')])] },
    { title: l('Work experience', 'কর্মজীবনের অভিজ্ঞতা'), items: profileItems(profile, 'workExperience', 'workplace', 'institute', 'affiliation') },
    { title: l('Awards and achievements', 'পুরস্কার ও অর্জন'), items: profileItems(profile, 'awards', 'achievements') },
    { title: l('Publications', 'প্রকাশনা'), items: profileItems(profile, 'publications') },
    { title: l('About the doctor', 'চিকিৎসকের পরিচিতি'), items: profileItems(profile, 'bio', 'about') },
  ].filter(group => group.items.length) : [];
  const designations = doctor ? profileItems(profile, 'designation') : [];
  const years = [...new Set<number>((Array.isArray(profile) ? profile : []).map((item: {experienceYears?: number}) => item.experienceYears)
    .filter((year: unknown): year is number => typeof year === 'number' && Number.isFinite(year) && year > 0 && year < 90))];
  const experience = years.length === 1 ? years[0] : undefined;
  const facilitySpecialties: { specialty: string; doctorCount: number }[] = facility && Array.isArray(row.directory?.specialtyBreakdown)
    ? row.directory.specialtyBreakdown.filter((item: { specialty?: string; doctorCount?: number }) =>
      typeof item?.specialty === 'string' && Number.isSafeInteger(item.doctorCount) && Number(item.doctorCount) > 0) : [];
  const title = [name, medicine ? row.strength : null].filter(Boolean).join(' ');
  const facilityPhone = facility ? strings(row.contact?.phoneNumbers).map(telephone).find(Boolean) : undefined;
  const facilityMap = facility && typeof row.address === 'string' && row.address.trim()
    ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(row.name + ', ' + row.address) : undefined;
  const origin = siteOrigin();
  return <main id="main" className="shell inner record-page">
    {origin && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ '@context': 'https://schema.org',
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.home, item: origin + '/' + lang },
        { '@type': 'ListItem', position: 2, name: sections[section][lang], item: origin + '/' + lang + '/' + section },
        { '@type': 'ListItem', position: 3, name: title, item: origin + path },
      ] }) }} />}
    <div className="crumbs"><Link href={'/' + lang}>{t.home}</Link><span>/</span><Link href={'/' + lang + '/' + section}>{sections[section][lang]}</Link></div>
    <header className="profile glass">
      {photo ? <Photo src={photo} alt={name} icon={<RecordIcon section={section} data={row} />} className={'profile-photo ' + section} priority />
        : <RecordIcon section={section} data={row} />}
      <div><p className="profile-category">{sections[section][lang]}</p><h1>{title}</h1>
        <p>{[name !== row.name ? row.name : row.nameBn, row.genericName, row.dosageForm, row.type,
          facility ? row.location?.district : undefined, ...designations.slice(0, 2), ...strings(row.specialties)].filter(Boolean).join(' · ')}</p>
        {(facilityPhone || facilityMap) && <div className="profile-actions">
          {facilityPhone && <a className="pill" href={facilityPhone}>{l('Call facility', 'প্রতিষ্ঠানে ফোন করুন')}</a>}
          {facilityMap && <a className="pill" href={facilityMap} target="_blank" rel="noreferrer">{t.maps}</a>}
        </div>}
      </div>
    </header>
    {(medicine || test || doctor) && <nav className="profile-jumps" aria-label={l('On this page', 'এই পাতায়')}>
      {(medicine || test) && <a href="#prices" className="pill glass">{t.prices}</a>}
      {doctor && row.chambers?.length > 0 && <a href="#chambers" className="pill glass">{t.chambers}</a>}
      {doctorGroups.length > 0 && <a href="#professional-profile" className="pill glass">{t.qualifications}</a>}
      {label.length > 0 && <a href="#medicine-information" className="pill glass">{l('Medicine information', 'ওষুধের তথ্য')}</a>}
      {medicine && row.genericName && <Link prefetch={false} className="pill glass"
        href={'/' + lang + '/medicines?' + new URLSearchParams({ q: row.genericName })}>
        {l('Browse this generic', 'এই জেনেরিকের ওষুধ দেখুন')}</Link>}
    </nav>}
    <section className="glass panel"><h2>{t.keyFacts}</h2><dl className="facts">
      <Fact label={l('Generic', 'জেনেরিক')} value={row.genericName} />
      <Fact label={l('Manufacturer', 'প্রস্তুতকারক')} value={row.manufacturerName} />
      <Fact label={l('Strength', 'মাত্রা')} value={row.strength} />
      <Fact label={l('Dosage form', 'ওষুধের ধরন')} value={row.dosageForm} />
      <Fact label={l('Pack size', 'প্যাকের আকার')} value={publicText(row.packageSize)} />
      <Fact label={l('DGDA registration number', 'ডিজিডিএ নিবন্ধন নম্বর')} value={row.dgdaRegistry?.registrationNumber} />
      {medicine && row.dgdaRegistry?.registrationNumber && <Fact label={l('Registration status', 'নিবন্ধনের অবস্থা')}
        value={row.dgdaEvidenceType === 'registry-snapshot'
          ? l('Recorded in a registry snapshot. Current status has yet to be confirmed.', 'নিবন্ধনের তথ্য পুরোনো রেকর্ডে আছে। বর্তমান অবস্থা নিশ্চিত করা হয়নি।')
          : l('Registration number on record. Check current status with DGDA.', 'নিবন্ধন নম্বর তালিকাভুক্ত আছে। বর্তমান অবস্থা ডিজিডিএ-তে যাচাই করুন।')} />}
      <Fact label={l('Registration scope', 'নিবন্ধনের আওতা')} value={row.dgdaRegistry?.registeredFor} />
      <Fact label={t.mrp} value={row.price?.mrp != null ? [money(row.price.mrp, lang, row.price.currency), row.price.mrpPackageUnit].filter(Boolean).join(' · ') : undefined} />
      <Fact label={l('Category', 'বিভাগ')} value={strings(row.categories).join(', ')} />
      <Fact label={l('Other names', 'বিকল্প নাম')} value={strings(row.aliases).join(', ')} />
      <Fact label={l('BMDC registration', 'বিএমডিসি নিবন্ধন')} value={doctor ? row.bmdc?.number ?? t.unknown : undefined} />
      {doctor && row.bmdc?.number && <Fact label={l('Registration status', 'নিবন্ধনের অবস্থা')} value={['verified', 'bmdc-verified'].includes(row.bmdc.status)
        ? l('Verified', 'যাচাইকৃত') : l('Listed; verification not confirmed', 'তালিকাভুক্ত; যাচাই নিশ্চিত নয়')} />}
      <Fact label={l('Years of experience', 'অভিজ্ঞতার বছর')} value={experience} />
      {doctor && !qualified.length && <Fact label={t.qualifications} value={strings(row.degrees).join(', ')} />}
      <Fact label={l('Facility type', 'প্রতিষ্ঠানের ধরন')} value={row.type} />
      <Fact label={l('DGHS code', 'ডিজিএইচএস কোড')} value={row.registryCode} />
      <Fact label={l('Facility licence', 'প্রতিষ্ঠানের লাইসেন্স')} value={row.government?.licence?.number} />
      <Fact label={l('Level of care', 'সেবার স্তর')} value={row.healthcareLevel || row.facilityLevel} />
      <Fact label={l('Facility function', 'প্রতিষ্ঠানের কার্যক্রম')} value={row.facilityFunction} />
      <Fact label={l('Established', 'প্রতিষ্ঠাকাল')} value={row.establishmentYear} />
      <Fact label={l('Beds', 'শয্যা')} value={row.capacity?.beds} />
      <Fact label={l('Ownership', 'মালিকানা')} value={row.isPrivate === true ? l('Private', 'বেসরকারি') : row.isPrivate === false ? l('Public', 'সরকারি') : row.ownership} />
      <Fact label={l('Address', 'ঠিকানা')} value={row.address} />
      <Fact label={l('District', 'জেলা')} value={row.location?.district} />
      <Fact label={l('Upazila', 'উপজেলা')} value={row.location?.upazila} />
      <Fact label={l('Services', 'সেবা')} value={[...new Set([...strings(row.services), ...strings(row.directory?.servicesAsListed)])].join(', ')} />
      <Fact label={l('Emergency care', 'জরুরি সেবা')} value={facility && row.emergency?.status !== 'conflicting-sources' && row.emergency?.available === true
        ? row.emergency.open24Hours ? l('Reported open 24 hours', '২৪ ঘণ্টা খোলা বলে উল্লেখ আছে') : l('Reported available', 'উপলভ্য বলে উল্লেখ আছে') : undefined} />
      <Fact label={l('Phone', 'ফোন')} value={strings(row.contact?.phoneNumbers).join(', ')} />
      <Fact label={l('Email', 'ইমেইল')} value={strings(row.contact?.emails).join(', ') || row.email} />
    </dl></section>
    {(medicine || test) && <section className="glass panel" id="prices"><h2>{t.prices}</h2><p className="price-note">{t.caution}</p>
      {!comparison.length ? <p>{test && offers.length
        ? l('No prices have been verified for a specific facility here.', 'এই পরীক্ষার জন্য কোনো নির্দিষ্ট প্রতিষ্ঠানের মূল্য যাচাই করা হয়নি।')
        : t.noPrices}</p> : <PriceComparison lang={lang} test={test} rows={comparison.map((offer, i) => {
          const linkedFacility = priceFacilities.get(offer.facilityId);
          const asOf = offer.priceDate || offer.updatedAt || offer.observedAt;
          const facilityLabel = linkedFacility && (lang === 'bn' ? linkedFacility.nameBn || linkedFacility.name : linkedFacility.name);
          const pack = offer.packageUnit || t.unknown;
          return {
            key: String(i), group: test ? offer.facilityId : pack, groupLabel: facilityLabel || pack,
            amount: offer.price,
            comparisonKey: JSON.stringify([offer.currency || 'BDT', test ? offer.patientCategory || 'standard' : pack,
              test ? offer.sample || '' : offer.priceType || '']),
            date: asOf && Number.isFinite(new Date(asOf).getTime()) ? new Date(asOf).getTime() : 0,
            cells: <>
              {test && <td data-label={t.facility}>{linkedFacility &&
                <Link className="table-link" prefetch={false} href={recordPath(lang, 'facilities', linkedFacility._id, linkedFacility.name)}>{facilityLabel}</Link>}
                {offer.branchName && <small>{offer.branchName}</small>}</td>}
              <td data-label={test ? t.rate : t.pack}>{medicine ? pack : offer.patientCategory === 'eligible' ? t.eligible : offer.patientCategory === 'non-government'
                ? l('Non-government', 'বেসরকারি রোগী') : offer.patientCategory || t.standard}
                {!medicine && (offer.sample || offer.reportTime) && <small>{[offer.sample, offer.reportTime].filter(Boolean).join(' · ')}</small>}</td>
              <td data-label={t.price}><strong>{offer.isFree ? t.free : money(offer.price, lang, offer.currency)}</strong>
                {medicine && typeof offer.mrp === 'number' && <small>{t.mrp} {money(offer.mrp, lang, offer.currency)}</small>}</td>
              <td data-label={t.date}>{date(asOf, lang) || t.unknown}
                {offer.priceType === 'historical-snapshot' && <small>{t.historical}</small>}
                {test && (offer.dateBasis ?? offer.sources?.[0]?.dateBasis) === 'observed' && <small>{t.checked}</small>}</td>
            </>,
          };
        })} />}
    </section>}
    {label.length > 0 && <section className="glass panel" id="medicine-information" aria-label={l('Medicine information', 'ওষুধের তথ্য')}>
      <h2>{l('Medicine information', 'ওষুধের তথ্য')}</h2>
      <p>{genericLabel
        ? l('These reference notes describe the generic medicine. Ask a doctor or pharmacist about your dose and the exact formulation.',
          'এই তথ্য জেনেরিক ওষুধের জন্য। আপনার মাত্রা ও নির্দিষ্ট ওষুধ সম্পর্কে চিকিৎসক বা ফার্মাসিস্টকে জিজ্ঞাসা করুন।')
        : l('Use this information for reference. Ask your doctor or pharmacist about dosing and suitability.',
          'এই তথ্য সহায়ক নির্দেশিকা হিসেবে দেখুন। আপনার মাত্রা ও উপযোগিতা সম্পর্কে চিকিৎসক বা ফার্মাসিস্টকে জিজ্ঞাসা করুন।')}</p>
      {label.map(({ title, html }, i) => <details className="information" key={title} open={i === 0 || undefined}>
        <summary>{title}</summary>
        <div className="medicine-label" lang={/[\u0980-\u09ff]/.test(html) ? 'bn' : 'en'} dangerouslySetInnerHTML={{ __html: html }} />
      </details>)}
    </section>}
    {doctor && Boolean(row.chambers?.length) && <section className="glass panel" id="chambers"><h2>{t.chambers}</h2>
      <p>{l('Call the chamber to confirm the schedule and availability.', 'সময়সূচি ও সিরিয়াল নিশ্চিত করতে চেম্বারে ফোন করুন।')}</p>
      <div className="chamber-grid">{row.chambers.map((chamber: any, i: number) => {
        const phone = telephone(chamber.appointmentPhone);
        const map = webUrl(chamber.mapUrl);
        return <article className="chamber chamber-card" key={i}>
          <h3>{chamber.facilityId && chamber.name
            ? <Link prefetch={false} href={recordPath(lang, 'facilities', chamber.facilityId, chamber.name)}>{chamber.name}</Link>
            : chamber.name || l('Chamber', 'চেম্বার')}</h3>
          {(chamber.address || chamber.room) && <p>{[chamber.address, chamber.room && l('Room ', 'কক্ষ ') + chamber.room].filter(Boolean).join(' · ')}</p>}
          <dl className="facts">
            <Fact label={l('Visiting hours', 'রোগী দেখার সময়')} value={chamber.visitingHours?.raw || t.unknown} />
            <Fact label={l('Consultation fee', 'পরামর্শ ফি')} value={typeof chamber.fee === 'number' ? money(chamber.fee, lang) : undefined} />
            <Fact label={l('Appointment phone', 'সিরিয়ালের ফোন')} value={chamber.appointmentPhone} />
          </dl>
          {(phone || map) && <div className="chamber-actions">
            {phone && <a className="pill call-chamber" href={phone}>{l('Call for appointment', 'সিরিয়ালের জন্য ফোন করুন')}</a>}
            {map && <a className="pill" href={map} rel="noreferrer" target="_blank">{t.maps}</a>}
          </div>}
        </article>;
      })}</div>
    </section>}
    {doctorGroups.length > 0 && <section className="glass panel" id="professional-profile"><h2>{l('Professional profile', 'পেশাগত পরিচিতি')}</h2>
      {doctorGroups.map(({ title, items }) => <details className="information" key={title} open={title === t.qualifications || undefined}>
        <summary>{title}</summary><ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
      </details>)}
    </section>}
    {facilitySpecialties.length > 0 && <section className="glass panel">
      <h2>{l('Specialties and listed doctors', 'বিশেষত্ব ও তালিকাভুক্ত চিকিৎসক')}</h2>
      <p>{l('Counts reflect doctors listed for this facility. Confirm availability directly with the facility.',
        'এই সংখ্যা প্রতিষ্ঠানের তালিকাভুক্ত চিকিৎসকদের ভিত্তিতে। উপস্থিতি সরাসরি প্রতিষ্ঠান থেকে জেনে নিন।')}</p>
      <div className="table-scroll"><table><thead><tr>
        <th>{l('Specialty', 'বিশেষত্ব')}</th><th>{l('Listed doctors', 'তালিকাভুক্ত চিকিৎসক')}</th>
      </tr></thead><tbody>{facilitySpecialties.map(({ specialty, doctorCount }) =>
        <tr key={specialty}><td>{publicText(specialty)}</td><td>{doctorCount.toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-BD')}</td></tr>)}</tbody></table></div>
    </section>}
    {linkedDoctors.length > 0 && <section className="directory">
      <h2>{l('Doctors with a chamber at this facility', 'এই প্রতিষ্ঠানে চেম্বার আছে এমন চিকিৎসক')}</h2>
      <p>{l('Selected linked profiles. Confirm availability directly with the facility.',
        'সংযুক্ত কয়েকজন চিকিৎসকের প্রোফাইল। উপস্থিতি সরাসরি প্রতিষ্ঠান থেকে নিশ্চিত করুন।')}</p>
      <RecordList lang={lang} section="doctors" rows={linkedDoctors} />
    </section>}
    {related.length > 0 && <section className="directory"><h2>{l('More brands with this generic', 'এই জেনেরিকের আরও ব্র্যান্ড')}</h2>
      <RecordList lang={lang} section="medicines" rows={related} /></section>}
    <AdSlot />
  </main>;
}
