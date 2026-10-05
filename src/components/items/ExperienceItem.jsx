import { TagList } from '../ui/Tag.jsx';
import { formatRange } from '../../lib/dates.js';
import './Entry.css';

export default function ExperienceItem({ item }) {
  const periods = item.periods ?? [{ start: item.start, end: item.end }];

  return (
    <article className="entry">
      <div className="entry__when">
        {periods.map((p) => (
          <span key={`${p.start}-${p.end}`}>{formatRange(p.start, p.end)}</span>
        ))}
        {item.location && <span className="entry__where">{item.location}</span>}
      </div>
      <div className="entry__body">
        <h4 className="entry__title">
          {item.role} <span className="entry__org">· {item.org}</span>
        </h4>
        {item.bullets?.length > 0 && (
          <ul className="entry__bullets">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        <TagList items={item.tags} label={`${item.org} tools`} />
      </div>
    </article>
  );
}
