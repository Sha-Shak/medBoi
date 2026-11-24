'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { local, sections, words, type Language } from '../../lib/content';
import { searchCategories } from '../../lib/search-scope';
import { RecordIcon } from './record-icon';

export function SiteNavigation({ lang, mobile = false }: { lang: Language; mobile?: boolean }) {
  const path = usePathname();
  const home = '/' + lang;
  if (!mobile) return <nav aria-label={words[lang].directory} className="nav">{searchCategories.map(section => {
      const href = home + '/' + section;
      const active = path === href || path.startsWith(href + '/');
      return <Link key={section} href={href} aria-current={active ? 'page' : undefined}>{sections[section][lang]}</Link>;
    })}</nav>;
  return <nav className="mobile-dock" aria-label={words[lang].directory}>
      <Link href={home} aria-current={path === home ? 'page' : undefined}>
        <span className="dock-icon" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 10 9-7 9 7M5 9v11h14V9m-9 11v-6h4v6" />
          </svg>
        </span>
        <span>{words[lang].home}</span>
      </Link>
      {searchCategories.map(section => {
        const href = home + '/' + section;
        const active = path === href || path.startsWith(href + '/');
        const label = section === 'tests' ? local(lang, 'Tests', 'পরীক্ষা')
          : section === 'facilities' ? local(lang, 'Hospitals', 'হাসপাতাল') : sections[section][lang];
        return <Link key={section} href={href} aria-current={active ? 'page' : undefined}>
          <span className="dock-icon"><RecordIcon section={section} data={{}} /></span>
          <span>{label}</span>
        </Link>;
      })}
    </nav>;
}

export function LocaleLink({ lang }: { lang: Language }) {
  const path = usePathname();
  const params = useSearchParams().toString();
  const other = lang === 'en' ? 'bn' : 'en';
  return <Link className="locale" href={'/' + other + path.slice(3) + (params ? '?' + params : '')} hrefLang={other}>
    {other === 'bn' ? 'বাংলা' : 'English'}
  </Link>;
}
