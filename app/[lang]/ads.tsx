'use client';
import { useEffect, useRef } from 'react';
import Script from 'next/script';

export function Adsense({ client, slot }: { client: string; slot: string }) {
  const queued = useRef(false);
  const target = useRef<HTMLModElement>(null);
  useEffect(() => {
    const unit = target.current;
    if (!unit || queued.current) return;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting) || queued.current) return;
      queued.current = true;
      observer.disconnect();
      const browser = window as Window & { adsbygoogle?: object[] };
      try { (browser.adsbygoogle ??= []).push({}); } catch { /* A blocked ad leaves the reserved space empty. */ }
    }, { rootMargin: '180px' });
    observer.observe(unit);
    return () => observer.disconnect();
  }, []);
  return <>
    <Script id="medboi-adsense" src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + client}
      strategy="lazyOnload" crossOrigin="anonymous" />
    <ins ref={target} className="adsbygoogle ad-unit" data-ad-client={client} data-ad-slot={slot}
      data-ad-format="auto" data-full-width-responsive="true" />
  </>;
}
