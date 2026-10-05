import Section from '../components/layout/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import EducationItem from '../components/items/EducationItem.jsx';
import { education } from '../data/education.js';

export default function Education({ tone }) {
  return (
    <Section id="education" title="Education" tone={tone}>
      <ol className="entry-list" aria-label="Education" style={{ listStyle: 'none', padding: 0 }}>
        {education.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 50}>
            <EducationItem item={item} />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
