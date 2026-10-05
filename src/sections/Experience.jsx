import Section from '../components/layout/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
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

export default function Experience({ tone }) {
  return (
    <Section id="experience" title="Experience" tone={tone}>
      <div className="experience-groups">
        {GROUPS.map(({ kind, label }) => {
          const items = experience
            .filter((item) => item.kind === kind)
            .sort((a, b) => latestEnd(b) - latestEnd(a));
          if (!items.length) return null;
          return (
            <div key={kind} className="experience-group">
              <h3 className="eyebrow experience-group__title">{label}</h3>
              <ol className="entry-list" aria-label={label}>
                {items.map((item, i) => (
                  <Reveal as="li" key={item.id} delay={i * 50}>
                    <ExperienceItem item={item} />
                  </Reveal>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
