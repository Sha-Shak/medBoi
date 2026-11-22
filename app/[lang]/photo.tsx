'use client';

import { useState, type ReactNode } from 'react';

export function Photo({ src, alt, icon, className, priority = false }: {
  src: string; alt: string; icon: ReactNode; className?: string; priority?: boolean;
}) {
  const [failedSource, setFailedSource] = useState<string>();
  return <span className={'photo ' + (className || '')}>
    {failedSource === src ? <span className="photo-fallback" aria-hidden>{icon}</span>
      : <img src={src} alt={alt} decoding="async" loading={priority ? 'eager' : 'lazy'} onError={() => setFailedSource(src)} />}
  </span>;
}
