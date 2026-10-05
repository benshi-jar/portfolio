import Section from '../components/layout/Section.jsx';
import SkillGroup from '../components/items/SkillGroup.jsx';
import { skills } from '../data/skills.js';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
        {skills.map((group) => (
          <SkillGroup key={group.group} group={group} />
        ))}
      </div>
    </Section>
  );
}
