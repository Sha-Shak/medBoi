'use client';

import { useEffect, useState } from 'react';
import { local, sections, type Language, type Section } from '../../lib/content';
import type { Suggestion } from '../../lib/suggestions';

export function SearchInput({ lang, section, initial, label, placeholder }: {
  lang: Language; section?: Section; initial: string; label: string; placeholder: string;
}) {
  const [value, setValue] = useState(initial);
  const [active, setActive] = useState(false);
  const [results, setResults] = useState<Suggestion[]>([]);
  useEffect(() => {
    if (!active || value.trim().length < 2) return;
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      const params = new URLSearchParams({ q: value, lang });
      if (section) params.set('section', section);
      try {
        const response = await fetch('/api/search-suggestions?' + params, { signal: controller.signal });
        if (response.ok) {
          const next = await response.json();
          if (!controller.signal.aborted) setResults(next);
        }
      } catch { /* The regular search remains available. */ }
    }, 220);
    return () => { window.clearTimeout(timer); controller.abort(); };
  }, [active, value, lang, section]);
  return <div className="search-suggest" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setActive(false);
  }} onKeyDown={event => {
    if (event.key === 'Escape') setActive(false);
  }}>
    <input name="q" type="search" aria-label={label} autoComplete="off" maxLength={90}
      placeholder={placeholder} value={value} onFocus={() => setActive(true)} onChange={event => {
        setResults([]);
        setValue(event.target.value);
        setActive(true);
      }} />
    {active && results.length > 0 && <ul className="search-suggest-list" aria-label={local(lang, 'Search suggestions', 'অনুসন্ধানের পরামর্শ')}>
      {results.map(result => <li key={result.href}><a href={result.href}>
        <strong>{result.label}{result.detail && ' · ' + result.detail}</strong>
        <small>{sections[result.section][lang]}</small>
      </a></li>)}
    </ul>}
  </div>;
}
