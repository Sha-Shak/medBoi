import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isLanguage, languages, sectionKeys, sections, siteOrigin, words } from '../../lib/content';
import '../styles.css';

export function generateStaticParams() { return languages.map(lang => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const origin = siteOrigin();
  return { title: { default: 'medBoi', template: '%s | medBoi' },
    description: isLanguage(lang) ? words[lang].subtitle : words.en.subtitle,
    metadataBase: origin ? new URL(origin) : undefined,
    icons: { icon: '/favicon.ico', apple: '/brand/medboi-mark.png' } };
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <html lang={lang}><body>
    <a href="#main" className="skip">{lang === 'bn' ? 'মূল তথ্যে যান' : 'Skip to content'}</a>
    <header className="top"><div className="shell top-inner">
      <Link href={'/' + lang} className="brand" aria-label="Medবই"><img className="brand-wordmark" src="/brand/medboi-wordmark.png" width={125} height={44} alt="" /></Link>
      <nav aria-label={words[lang].directory} className="nav">{sectionKeys.map(section =>
        <Link key={section} href={'/' + lang + '/' + section}>{sections[section][lang]}</Link>)}</nav>
      <Link className="locale" href={lang === 'en' ? '/bn' : '/en'} hrefLang={lang === 'en' ? 'bn' : 'en'}>
        <span aria-hidden>◎</span> {lang === 'en' ? 'বাংলা' : 'English'}</Link>
    </div></header>
    {children}
    <footer className="shell footer"><span className="footer-brand" aria-label="Medবই"><img className="brand-wordmark" src="/brand/medboi-wordmark.png" width={94} height={33} alt="" /></span><p>{words[lang].info}</p>
      <Link href={'/' + lang + '/privacy'}>{words[lang].privacy}</Link></footer>
  </body></html>;
}
