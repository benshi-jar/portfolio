import { TagList } from '../ui/Tag.jsx';
import { ArrowIcon } from '../ui/icons.jsx';
import ProjectMedia from './ProjectMedia.jsx';
import ProjectStatus from './ProjectStatus.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import { getPrimaryLink, projectAnchor } from '../../lib/projects.js';
import './FeaturedProject.css';

// Large two-column card for featured projects. `flip` puts the image on the right.
export default function FeaturedProject({ project, flip = false }) {
  const primary = getPrimaryLink(project);
  // When the card's link is the same as its visible Code/Demo link, keyboard and
  // screen-reader users get that link once; the card-wide click is for the mouse.
  const duplicate = primary && [project.github, project.demo].includes(primary.href);

  return (
    <article id={projectAnchor(project.slug)} className={`featured ${flip ? 'featured--flip' : ''}`}>
      <ProjectMedia project={project} className="featured__media" />

      <div className="featured__body">
        <p className="featured__eyebrow">
          <span>Featured</span>
          {project.label && <span>· {project.label}</span>}
        </p>

        <h3 className="featured__title">
          {project.title}
          {primary && <ArrowIcon className="featured__arrow" />}
        </h3>
        {primary && (
          <a
            className="featured__overlay"
            href={primary.href}
            {...(primary.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            {...(duplicate ? { tabIndex: -1, 'aria-hidden': true } : { 'aria-label': `${project.title} details` })}
          />
        )}

        {project.tagline && <p className="featured__tagline">{project.tagline}</p>}
        <ProjectStatus status={project.status} />
        <p className="featured__summary">{project.summary}</p>

        {project.highlights.length > 0 && (
          <ul className="featured__highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className="featured__footer">
          <TagList items={project.tech} label={`${project.title} technologies`} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
