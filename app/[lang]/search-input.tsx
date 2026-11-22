'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useId, useState } from 'react';
import { local, sections, type Language, type Section } from '../../lib/content';
import type { Suggestion } from '../../lib/suggestions';

export function SearchInput({ lang, section, initial, label, placeholder }: {
  lang: Language; section?: Section; initial: string; label: string; placeholder: string;
}) {
  const [value, setValue] = useState(initial);
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [results, setResults] = useState<Suggestion[]>([]);
  const id = useId();
  const router = useRouter();
  const expanded = active && results.length > 0;
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
  useEffect(() => {
    if (expanded && current >= 0) document.getElementById(id + '-' + current)?.scrollIntoView({ block: 'nearest' });
  }, [current, expanded, id]);

  return <div className="search-suggest" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActive(false);
      setCurrent(-1);
    }
  }}>
    <input name="q" type="search" role="combobox" aria-autocomplete="list" aria-expanded={expanded}
      aria-controls={expanded ? id : undefined} aria-activedescendant={expanded && current >= 0 ? id + '-' + current : undefined}
      aria-label={label} autoComplete="off" maxLength={90}
      placeholder={placeholder} value={value} onFocus={() => setActive(true)} onChange={event => {
        setResults([]);
        setCurrent(-1);
        setValue(event.target.value);
        setActive(true);
      }} onKeyDown={event => {
        if (event.nativeEvent.isComposing) return;
        if (event.key === 'Escape' && expanded) {
          event.preventDefault();
          setActive(false);
          setCurrent(-1);
        } else if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && results.length) {
          event.preventDefault();
          setActive(true);
          const step = event.key === 'ArrowDown' ? 1 : -1;
          setCurrent(index => index < 0 ? (step > 0 ? 0 : results.length - 1) : (index + step + results.length) % results.length);
        } else if (event.key === 'Enter' && expanded && results[current]) {
          event.preventDefault();
          setActive(false);
          setCurrent(-1);
          router.push(results[current].href);
        }
      }} />
    {expanded && <ul id={id} role="listbox" className="search-suggest-list" aria-label={local(lang, 'Search suggestions', 'অনুসন্ধানের পরামর্শ')}>
      {results.map((result, index) => <li key={result.href} id={id + '-' + index} role="option" aria-selected={index === current}>
        <Link href={result.href} prefetch={false} tabIndex={-1}
          onMouseDown={event => event.preventDefault()} onClick={() => setActive(false)}>
          <strong>{result.label}{result.detail && ' · ' + result.detail}</strong>
          <small>{sections[result.section][lang]}</small>
        </Link>
      </li>)}
    </ul>}
  </div>;
}
