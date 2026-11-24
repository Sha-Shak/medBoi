'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useId, useState, type ReactNode } from 'react';
import { local, sections, type Language, type Section } from '../../lib/content';
import { searchCategories } from '../../lib/search-scope';
import type { Suggestion } from '../../lib/suggestions';

export function SearchInput({ lang, section, initial, label, placeholder, hero, scope, children }: {
  lang: Language; section?: Section; initial: string; label: string; placeholder: string;
  hero: boolean; scope?: Section[]; children: ReactNode;
}) {
  const [value, setValue] = useState(initial);
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [selected, setSelected] = useState<Section[]>(scope && scope.length < searchCategories.length ? scope : []);
  const [response, setResponse] = useState<{ key: string; results: Suggestion[]; failed?: boolean }>();
  const id = useId();
  const router = useRouter();
  const l = (en: string, bn: string) => local(lang, en, bn);
  const scopeKey = selected.join(',');
  const requestKey = JSON.stringify([value, section, scopeKey]);
  const matches = response?.key === requestKey ? response : undefined;
  const results = matches?.results ?? [];
  const showPopover = active && value.trim().length >= 2;
  const expanded = showPopover && Boolean(matches && !matches.failed);
  const all = selected.length === 0 || selected.length === searchCategories.length;

  useEffect(() => {
    if (!active || value.trim().length < 2) return;
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      const params = new URLSearchParams({ q: value, lang });
      if (section) params.set('section', section);
      else if (scopeKey) for (const category of scopeKey.split(',')) params.append('in', category);
      try {
        const result = await fetch('/api/search-suggestions?' + params, { signal: controller.signal });
        if (!result.ok) throw new Error('Suggestions unavailable');
        const results: Suggestion[] = await result.json();
        if (!controller.signal.aborted) setResponse({ key: requestKey, results });
      } catch {
        if (!controller.signal.aborted) setResponse({ key: requestKey, results: [], failed: true });
      }
    }, 150);
    return () => { window.clearTimeout(timer); controller.abort(); };
  }, [active, value, lang, section, scopeKey, requestKey]);

  useEffect(() => {
    if (expanded && current >= 0) document.getElementById(id + '-' + current)?.scrollIntoView({ block: 'nearest' });
  }, [current, expanded, id]);

  const groups = (section ? [section] : all ? searchCategories : selected).map(category => ({
    category, options: results.flatMap((result, index) => result.section === category ? [{ result, index }] : []),
  }));
  return <div className="search-interface" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActive(false);
      setCurrent(-1);
    }
  }}>
    {!section && <fieldset className="search-scope">
      <legend>{l('Search in', 'যেখানে খুঁজবেন')}</legend>
      <button type="button" aria-pressed={all} onClick={() => {
        setCurrent(-1);
        setSelected([]);
        setActive(true);
      }}>{l('All', 'সব')}</button>
      {searchCategories.map(category => {
        const checked = selected.includes(category);
        return <label key={category}>
          <input type="checkbox" name="in" value={category} checked={checked}
            onChange={event => {
              const next = event.target.checked ? [...selected, category] : selected.filter(item => item !== category);
              setSelected(searchCategories.filter(item => next.includes(item)));
              setCurrent(-1);
              setActive(true);
            }} />
          {category === 'tests' ? l('Tests', 'পরীক্ষা') : category === 'facilities' ? l('Hospitals', 'হাসপাতাল') : sections[category][lang]}
        </label>;
      })}
    </fieldset>}
    <div className={hero ? 'search hero-search' : 'search'}>
      <span className="magnify" aria-hidden />
      <div className="search-suggest">
        <input name="q" type="search" role="combobox" aria-autocomplete="list" aria-expanded={expanded}
          aria-controls={expanded ? id : undefined} aria-activedescendant={expanded && results[current] ? id + '-' + current : undefined}
          aria-label={label} autoComplete="off" maxLength={90}
          placeholder={placeholder} value={value} onFocus={() => setActive(true)} onChange={event => {
            setCurrent(-1);
            setValue(event.target.value);
            setActive(true);
          }} onKeyDown={event => {
            if (event.nativeEvent.isComposing) return;
            if (event.key === 'Escape' && showPopover) {
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
      </div>
      {children}
      {showPopover && !expanded && <p className="search-popover search-suggest-list search-suggest-status" role="status">
        {matches?.failed ? l('Suggestions are unavailable. Press Search to see results.', 'পরামর্শ দেখানো যায়নি। ফলাফলের জন্য খুঁজুন চাপুন।')
          : l('Finding matches…', 'মিল খোঁজা হচ্ছে…')}
      </p>}
      {expanded && <div id={id} role="listbox" className={'search-suggest-list search-popover' + (!section ? ' search-suggest-groups' : '')}
        aria-label={l('Search suggestions', 'অনুসন্ধানের পরামর্শ')}>
        {groups.map(({ category, options }) => <div className="search-suggest-group" key={category}
          role="group" aria-labelledby={id + '-' + category}>
          <div className="search-suggest-heading" id={id + '-' + category}>{sections[category][lang]}</div>
          {options.length ? options.map(({ result, index }) =>
            <div key={result.href} id={id + '-' + index} role="option" aria-selected={index === current}>
              <Link href={result.href} prefetch={false} tabIndex={-1}
                onMouseDown={event => event.preventDefault()} onClick={() => setActive(false)}>
                <strong>{result.label}{result.detail && ' · ' + result.detail}</strong>
              </Link>
            </div>) : <p>{l('No quick matches', 'তাৎক্ষণিক মিল নেই')}</p>}
        </div>)}
      </div>}
    </div>
  </div>;
}
