import Section from '../components/layout/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import ProjectStatus from '../components/projects/ProjectStatus.jsx';
import { TagList } from '../components/ui/Tag.jsx';
import { currently } from '../data/currently.js';
import { education } from '../data/education.js';
import { getProjectBySlug, projectAnchor } from '../lib/projects.js';
import { formatDate } from '../lib/dates.js';
import './Currently.css';

const allCourses = education.flatMap((school) => school.courses ?? []);

function Tile({ name, count, delay, className = '', children }) {
  return (
    <Reveal as="article" delay={delay} className={`now-tile ${className}`.trim()} aria-labelledby={`now-${name}`}>
      <header className="now-tile__header">
        <h3 id={`now-${name}`} className="now-tile__name">
          {name}/
        </h3>
        {count != null && <span className="now-tile__count">{count}</span>}
      </header>
      {children}
    </Reveal>
  );
}

export default function Currently({ tone }) {
  const building = (currently.building ?? [])
    .map((b) => ({ ...b, project: getProjectBySlug(b.project) }))
    .filter((b) => b.project);
  const taking = (currently.taking ?? []).map(
    (code) => allCourses.find((c) => c.code === code) ?? { code, name: null },
  );
  const term = taking.find((c) => c.term)?.term;
  const learning = currently.learning ?? [];

  return (
    <Section id="currently" title="Currently" tone={tone}>
      <Reveal className="now-bar">
        <span className="now-bar__live">
          <span className="now-bar__dot" aria-hidden="true" />
          status.log
        </span>
        {currently.updated && <span>updated {formatDate(currently.updated)}</span>}
      </Reveal>

      <div className="now-grid">
        {building.length > 0 && (
          <Tile name="building" count={building.length} className="now-tile--building">
            <ul className="now-building">
              {building.map(({ project, note }) => (
                <li key={project.slug} className="now-building__item">
                  <div className="now-building__head">
                    <a className="now-building__title" href={`#${projectAnchor(project.slug)}`}>
                      {project.title}
                    </a>
                    <ProjectStatus status={project.status} pulse />
                  </div>
                  {(note || project.tagline) && <p className="now-building__note">{note ?? project.tagline}</p>}
                  <TagList items={project.tech} label={`${project.title} technologies`} />
                </li>
              ))}
            </ul>
          </Tile>
        )}

        {taking.length > 0 && (
          <Tile name="taking" count={term ?? taking.length} delay={60}>
            <ul className="now-courses">
              {taking.map((course) => (
                <li key={course.code} className="now-courses__item">
                  <span className="now-courses__code">{course.code}</span>
                  {course.name && <span className="now-courses__name">{course.name}</span>}
                </li>
              ))}
            </ul>
          </Tile>
        )}

        {learning.length > 0 && (
          <Tile name="learning" count={learning.length} delay={120}>
            <ul className="now-learning">
              {learning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Tile>
        )}
      </div>
    </Section>
  );
}
