import Card from '../ui/Card.jsx';
import { TagList } from '../ui/Tag.jsx';
import ProjectImage from './ProjectImage.jsx';
import ProjectStatus from './ProjectStatus.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import { formatDate } from '../../lib/dates.js';
import './ProjectCard.css';

// Summary view of a project. A future detail page reuses ProjectImage,
// ProjectStatus, ProjectLinks and TagList with the same project object.
export default function ProjectCard({ project }) {
  const meta = [project.context, formatDate(project.date)].filter(Boolean).join(' · ');

  return (
    <Card as="article" className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <ProjectImage project={project} className="project-card__image" />

      <header className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <ProjectStatus status={project.status} />
      </header>

      {meta && <p className="project-card__meta">{meta}</p>}
      <p className="project-card__summary">{project.summary}</p>

      {project.highlights.length > 0 && (
        <ul className="project-card__highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <footer className="project-card__footer">
        <TagList items={project.tech} label={`${project.title} technologies`} />
        <ProjectLinks project={project} />
      </footer>
    </Card>
  );
}
