'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { local, type Language, type Section } from '../../lib/content';
import type { Card } from '../../lib/record-card';
import { RecordCards } from './record-cards';

// Keep only the last directory left through a record link, in this tab.
let lastDirectory: { key: string; cards: Card[]; nextPage: number | null; offset: number; savedAt: number } | undefined;

export function DirectoryResults({ lang, section, initial, query, page, more }: {
  lang: Language; section: Section; initial: Card[]; query: string; page: number; more: boolean;
}) {
  const [cards, setCards] = useState(initial);
  const [nextPage, setNextPage] = useState(more ? page + 1 : null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLUListElement>(null);
  const pending = useRef<AbortController | null>(null);
  const restore = useRef<number>(undefined);
  const key = JSON.stringify([lang, section, query, page]);
  const l = (en: string, bn: string) => local(lang, en, bn);
  useLayoutEffect(() => {
    if (lastDirectory?.key !== key) return;
    const previous = lastDirectory;
    lastDirectory = undefined;
    if (Date.now() - previous.savedAt > 120_000) return;
    restore.current = previous.offset;
    setCards(previous.cards);
    setNextPage(previous.nextPage);
  }, [key]);
  useLayoutEffect(() => {
    if (restore.current === undefined) return;
    const y = restore.current;
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: y, behavior: 'instant' });
      restore.current = undefined;
    });
    return () => cancelAnimationFrame(frame);
  }, [cards]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 850);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => () => {
    pending.current?.abort();
    pending.current = null;
  }, []);

  const load = useCallback(async () => {
    if (!nextPage || pending.current) return;
    const controller = new AbortController();
    pending.current = controller;
    setStatus('loading');
    const params = new URLSearchParams(query);
    params.set('lang', lang);
    params.set('section', section);
    params.set('page', String(nextPage));
    try {
      const response = await fetch('/api/catalogue?' + params, { signal: controller.signal });
      if (!response.ok) throw new Error('Directory request failed');
      const { cards: batch, hasMore }: { cards: Card[]; hasMore: boolean } = await response.json();
      if (controller.signal.aborted) return;
      setCards(previous => {
        const seen = new Set(previous.map(card => card.id));
        return [...previous, ...batch.filter(card => !seen.has(card.id))];
      });
      setNextPage(hasMore && batch.length ? nextPage + 1 : null);
      setStatus('idle');
    } catch {
      if (!controller.signal.aborted) setStatus('error');
    } finally {
      if (pending.current === controller) pending.current = null;
    }
  }, [lang, nextPage, query, section]);

  useEffect(() => {
    const target = sentinel.current;
    if (!target || !nextPage || status !== 'idle') return;
    const Observer = window.IntersectionObserver;
    if (typeof Observer !== 'function') {
      const check = () => {
        if (target.getBoundingClientRect().top <= window.innerHeight + 180) void load();
      };
      window.addEventListener('scroll', check, { passive: true });
      window.addEventListener('resize', check);
      check();
      return () => {
        window.removeEventListener('scroll', check);
        window.removeEventListener('resize', check);
      };
    }
    const observer = new Observer(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        void load();
      }
    }, { rootMargin: '180px' });
    observer.observe(target);
    return () => observer.disconnect();
  }, [load, nextPage, status]);
  return <>
    <ul className="catalogue-grid" aria-busy={status === 'loading'} ref={grid}>
      <RecordCards section={section} cards={cards} onOpen={() => {
        lastDirectory = { key, cards, nextPage, offset: window.scrollY, savedAt: Date.now() };
      }} />
    </ul>
    {scrolled && <button className="directory-top" type="button"
      aria-label={l('Back to top', 'উপরে ফিরে যান')} onClick={() => {
        grid.current?.querySelector('a')?.focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      }}><span aria-hidden>↑</span></button>}
    <div className="directory-more" ref={sentinel}>
      <p role="status">{status === 'loading'
        ? l('Loading more results…', 'আরও ফলাফল লোড হচ্ছে…')
        : status === 'error' ? l('More results could not be loaded.', 'আরও ফলাফল লোড করা যায়নি।')
        : l(`${new Intl.NumberFormat(lang).format(cards.length)} results shown`, `${new Intl.NumberFormat(lang).format(cards.length)}টি ফলাফল দেখানো হয়েছে`)}</p>
      {nextPage && status === 'error' && <button className="pill" type="button" onClick={() => void load()}>
        {l('Try again', 'আবার চেষ্টা করুন')}</button>}
    </div>
  </>;
}
