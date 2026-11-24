'use client';

import { useState } from 'react';
import { local, type Language } from '../../lib/content';

export function CopyRecordLink({ lang }: { lang: Language }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'manual'>('idle');
  const l = (en: string, bn: string) => local(lang, en, bn);
  return <div className="copy-record-link">
    <button className="pill" type="button" onClick={async () => {
      try {
        await navigator.clipboard.writeText(location.origin + location.pathname);
        setStatus('copied');
      } catch {
        setStatus('manual');
      }
    }}>
      {l('Copy link', 'লিংক কপি করুন')}
    </button>
    {status === 'copied' && <span role="status">{l('Link copied', 'লিংক কপি হয়েছে')}</span>}
    {status === 'manual' && <input type="text" readOnly autoFocus aria-label={l('Record link', 'তথ্যের লিংক')}
      value={location.origin + location.pathname} onFocus={event => event.target.select()} />}
  </div>;
}
