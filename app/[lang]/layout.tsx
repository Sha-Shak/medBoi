import { siteConfig } from '../../site.config';
import { siteOrigin } from '../../lib/site';
import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isLanguage, languages, words } from '../../lib/content';
import '../styles.css';
import '../mobile-first.css';
import { LocaleLink, SiteNavigation } from './site-navigation';

export function generateStaticParams() { return languages.map(lang => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const origin = siteOrigin();
  const { name, branding, seo } = siteConfig;
  return { applicationName: name, title: { default: name, template: '%s | ' + name },
    description: isLanguage(lang) ? words[lang].subtitle : words.en.subtitle,
    metadataBase: origin ? new URL(origin) : undefined,
    icons: { icon: branding.favicon, apple: branding.appleIcon },
    verification: seo.googleVerification ? { google: seo.googleVerification } : undefined };
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const { name, branding: { logo } } = siteConfig;
  return <html lang={lang}><body>
    <a href="#main" className="skip">{lang === 'bn' ? 'মূল তথ্যে যান' : 'Skip to content'}</a>
    <header className="top"><div className="shell top-inner">
      <Link href={'/' + lang} className="brand" aria-label={name}>{logo.src
        ? <img className="brand-wordmark" src={logo.src} width={logo.width} height={logo.height} alt="" /> : name}</Link>
      <SiteNavigation lang={lang} />
      <Suspense fallback={<Link className="locale" href={lang === 'en' ? '/bn' : '/en'}>
        {lang === 'en' ? 'বাংলা' : 'English'}</Link>}>
        <LocaleLink lang={lang} />
      </Suspense>
    </div></header>
    {children}
    <footer className="shell footer"><span className="footer-brand">{logo.src
      ? <img className="brand-wordmark" src={logo.src} width={94} height={Math.round(94 * logo.height / logo.width)} alt={name} /> : name}</span><p>{words[lang].info}</p>
      <Link href={'/' + lang + '/privacy'}>{words[lang].privacy}</Link></footer>
    <SiteNavigation lang={lang} mobile />
  </body></html>;
}
