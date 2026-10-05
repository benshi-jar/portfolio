import Section from '../components/layout/Section.jsx';
import Timeline from '../components/ui/Timeline.jsx';
import ExperienceItem from '../components/items/ExperienceItem.jsx';
import { experience } from '../data/experience.js';
import { dateKey } from '../lib/dates.js';
import './Experience.css';

const GROUPS = [
  { kind: 'work', label: 'Work' },
  { kind: 'leadership', label: 'Leadership & Activities' },
];

// Most recent first. Ongoing roles (end: null) count as newest.
function latestEnd(item) {
  const periods = item.periods ?? [{ end: item.end }];
  return Math.max(...periods.map((p) => (p.end ? dateKey(p.end) : Infinity)));
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="experience-groups">
        {GROUPS.map(({ kind, label }) => {
          const items = experience
            .filter((item) => item.kind === kind)
            .sort((a, b) => latestEnd(b) - latestEnd(a));
          if (!items.length) return null;
          return (
            <div key={kind} className="experience-group">
              <h3 className="experience-group__title">{label}</h3>
              <Timeline label={label}>
                {items.map((item) => (
                  <li key={item.id}>
                    <ExperienceItem item={item} />
                  </li>
                ))}
              </Timeline>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
