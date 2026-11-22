import Link from 'next/link';
import type { Section } from '../../lib/content';
import type { Card } from '../../lib/record-card';
import { Photo } from './photo';
import { RecordIcon } from './record-icon';

export function RecordCards({ section, cards }: { section: Section; cards: Card[] }) {
  return cards.map(card => {
    const icon = <RecordIcon section={section} data={card.icon} />;
    return <li key={card.id}>
      <Link className={'catalogue-card ' + section} prefetch={false} href={card.href}>
        <span className="catalogue-card-media">
          {card.thumbnail
            ? <Photo className={'catalogue-image ' + section} src={card.thumbnail} alt="" icon={icon} />
            : <span className="catalogue-card-icon">{icon}</span>}
        </span>
        <span className="catalogue-card-copy">
          {card.eyebrow && <span className="catalogue-card-tag">{card.eyebrow}</span>}
          <strong>{card.title}</strong>
          {card.translation && <small lang="en">{card.translation}</small>}
          {card.details.map((value, index) => <small key={index}>{value}</small>)}
        </span>
        <span className="catalogue-card-arrow" aria-hidden>↗</span>
      </Link>
    </li>;
  });
}
