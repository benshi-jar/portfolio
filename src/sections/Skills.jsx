import Section from '../components/layout/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import SkillGroup from '../components/items/SkillGroup.jsx';
import { skills } from '../data/skills.js';
import './Skills.css';

export default function Skills({ tone }) {
  return (
    <Section id="skills" title="Skills" tone={tone}>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 50}>
            <SkillGroup group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
