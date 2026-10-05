import { TagList } from '../ui/Tag.jsx';
import { formatRange } from '../../lib/dates.js';
import './Entry.css';

export default function ExperienceItem({ item }) {
  const periods = item.periods ?? [{ start: item.start, end: item.end }];
  const dates = periods.map((p) => formatRange(p.start, p.end)).join(', ');

  return (
    <article className="entry">
      <header className="entry__header">
        <h3 className="entry__title">
          {item.role} <span className="entry__org">· {item.org}</span>
        </h3>
        <p className="entry__meta">
          <span>{dates}</span>
          {item.location && <span>{item.location}</span>}
        </p>
      </header>
      {item.bullets?.length > 0 && (
        <ul className="entry__bullets">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      <TagList items={item.tags} label={`${item.org} tools`} />
    </article>
  );
}
