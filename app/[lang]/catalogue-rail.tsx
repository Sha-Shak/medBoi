'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function CatalogueRail({ children, title, previous, next, activeKey }: {
  children: ReactNode; title: string; previous: string; next: string; activeKey?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = track.current;
    const active = node?.querySelector('[aria-current="true"]');
    if (!node || !active || !activeKey) return;
    const bounds = node.getBoundingClientRect();
    const chip = active.getBoundingClientRect();
    if (chip.left < bounds.left || chip.right > bounds.right) {
      node.scrollLeft += chip.left + chip.width / 2 - (bounds.left + bounds.width / 2);
    }
  }, [activeKey]);
  function scroll(which: 'previous' | 'next') {
    const node = track.current;
    if (!node) return;
    const direction = (which === 'next' ? 1 : -1) * (getComputedStyle(node).direction === 'rtl' ? -1 : 1);
    node.scrollBy({
      left: direction * node.clientWidth * .8,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }
  return <div className="rail-frame">
    <div className="rail-controls">
      <button className="pill glass" type="button" aria-label={previous} onClick={() => scroll('previous')}>‹</button>
      <button className="pill glass" type="button" aria-label={next} onClick={() => scroll('next')}>›</button>
    </div>
    <div className="rail-track" ref={track} tabIndex={0} role="region" aria-label={title}>{children}</div>
  </div>;
}
