'use client';

import { useState } from 'react';

export function Photo({ src, alt, icon, className, priority = false }: {
  src: string; alt: string; icon: string; className?: string; priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return <span className={'photo ' + (className || '')}>
    {failed ? <span className="photo-fallback" aria-hidden>{icon}</span>
      : <img src={src} alt={alt} decoding="async" loading={priority ? 'eager' : 'lazy'} onError={() => setFailed(true)} />}
  </span>;
}
