import { TagList } from '../ui/Tag.jsx';
import { ArrowIcon } from '../ui/icons.jsx';
import ProjectStatus from './ProjectStatus.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import { getPrimaryLink, projectAnchor } from '../../lib/projects.js';
import { formatDate } from '../../lib/dates.js';
import './ProjectCard.css';

// Compact card for non-featured projects. The whole card links to the
// project's primary destination (GitHub now, its own page later).
export default function ProjectCard({ project }) {
  const primary = getPrimaryLink(project);
  // When the card's link is the same as its visible Code/Demo link, keyboard and
  // screen-reader users get that link once; the card-wide click is for the mouse.
  const duplicate = primary && [project.github, project.demo].includes(primary.href);
  const meta = [project.label, formatDate(project.date)].filter(Boolean).join(' · ');

  return (
    <article id={projectAnchor(project.slug)} className={`project-card ${primary ? 'project-card--linked' : ''}`}>
      <header className="project-card__header">
        {meta && <p className="project-card__meta">{meta}</p>}
        <ProjectStatus status={project.status} />
      </header>

      <h3 className="project-card__title">
        {project.title}
        {primary && <ArrowIcon className="project-card__arrow" />}
      </h3>
      {primary && (
        <a
          className="project-card__overlay"
          href={primary.href}
          {...(primary.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...(duplicate ? { tabIndex: -1, 'aria-hidden': true } : { 'aria-label': `${project.title} details` })}
        />
      )}

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
    </article>
  );
}
