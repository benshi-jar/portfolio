import Section from '../components/layout/Section.jsx';
import Timeline from '../components/ui/Timeline.jsx';
import EducationItem from '../components/items/EducationItem.jsx';
import { education } from '../data/education.js';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <Timeline label="Education">
        {education.map((item) => (
          <li key={item.id}>
            <EducationItem item={item} />
          </li>
        ))}
      </Timeline>
    </Section>
  );
}
