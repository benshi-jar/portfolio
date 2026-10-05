import { TagList } from '../ui/Tag.jsx';
import './SkillGroup.css';

export default function SkillGroup({ group }) {
  return (
    <div className="skill-group">
      <h3 className="eyebrow skill-group__name">{group.group}</h3>
      <TagList items={group.items} label={group.group} />
    </div>
  );
}
