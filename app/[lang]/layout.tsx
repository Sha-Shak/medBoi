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
    metadataBase: origin ? new URL(origin) : undefined };
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <html lang={lang}><body>
    <a href="#main" className="skip">{lang === 'bn' ? 'মূল তথ্যে যান' : 'Skip to content'}</a>
    <header className="top"><div className="shell top-inner">
      <Link href={'/' + lang} className="brand"><span className="brand-icon" aria-hidden>+</span>medBoi<span className="brand-period">.</span></Link>
      <nav aria-label={words[lang].directory} className="nav">{sectionKeys.map(section =>
        <Link key={section} href={'/' + lang + '/' + section}>{sections[section][lang]}</Link>)}</nav>
      <Link className="locale" href={lang === 'en' ? '/bn' : '/en'} hrefLang={lang === 'en' ? 'bn' : 'en'}>
        <span aria-hidden>◎</span> {lang === 'en' ? 'বাংলা' : 'English'}</Link>
    </div></header>
    {children}
    <footer className="shell footer"><span className="footer-brand">medBoi.</span><p>{words[lang].info}</p>
      <Link href={'/' + lang + '/privacy'}>{words[lang].privacy}</Link></footer>
  </body></html>;
}
