import { siteConfig } from '../../../site.config';
import { notFound } from 'next/navigation';
import { isLanguage, local, words } from '../../../lib/content';
import { seo } from '../../../lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return seo(lang, '/privacy', words[lang].privacy, local(lang, `Privacy information for ${siteConfig.name} visitors.`, `${siteConfig.name} দর্শকদের জন্য গোপনীয়তা তথ্য।`));
}

export default async function Privacy({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <main id="main" className="shell inner"><h1>{words[lang].privacy}</h1><div className="glass panel prose">
    <p>{local(lang, `You can browse ${siteConfig.name} without an account. Search terms are sent to the site to return matching records.`,
      `অ্যাকাউন্ট ছাড়াই ${siteConfig.name} ব্যবহার করা যায়। মিল থাকা তথ্য দেখাতে অনুসন্ধানের শব্দ সাইটে পাঠানো হয়।`)}</p>
    <p>{local(lang, 'When Google ads are enabled, Google and its partners may use cookies or similar technologies to serve and measure ads. You can manage ad preferences in Google’s My Ad Center.',
      'Google বিজ্ঞাপন চালু থাকলে, বিজ্ঞাপন দেখানো ও পরিমাপের জন্য Google ও তার অংশীদারেরা কুকি বা অনুরূপ প্রযুক্তি ব্যবহার করতে পারে। Google-এর My Ad Center-এ বিজ্ঞাপনের পছন্দ বদলাতে পারেন।')}</p>
    <a href="https://myadcenter.google.com/">{local(lang, 'Google My Ad Center', 'Google My Ad Center')}</a>
  </div></main>;
}
