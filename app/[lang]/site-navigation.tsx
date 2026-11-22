'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { sectionKeys, sections, words, type Language } from '../../lib/content';

export function SiteNavigation({ lang }: { lang: Language }) {
  const path = usePathname();
  return <nav aria-label={words[lang].directory} className="nav">{sectionKeys.map(section => {
    const href = '/' + lang + '/' + section;
    const active = path === href || path.startsWith(href + '/');
    return <Link key={section} href={href} aria-current={active ? 'page' : undefined}>{sections[section][lang]}</Link>;
  })}</nav>;
}

export function LocaleLink({ lang }: { lang: Language }) {
  const path = usePathname();
  const params = useSearchParams().toString();
  const other = lang === 'en' ? 'bn' : 'en';
  return <Link className="locale" href={'/' + other + path.slice(3) + (params ? '?' + params : '')} hrefLang={other}>
    {other === 'bn' ? 'বাংলা' : 'English'}
  </Link>;
}
