'use client';

import { useParams } from 'next/navigation';
import { local, words } from '../../lib/content';

export default function ErrorPage({ reset }: { reset: () => void }) {
  const lang = useParams().lang === 'bn' ? 'bn' : 'en';
  return <main id="main" className="shell inner"><section className="glass panel">
    <h1>{words[lang].unavailable}</h1>
    <p><button className="pill" onClick={reset}>{local(lang, 'Try again', 'আবার চেষ্টা করুন')}</button></p>
  </section></main>;
}
