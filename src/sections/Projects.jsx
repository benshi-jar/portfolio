import { useMemo, useState } from 'react';
import Section from '../components/layout/Section.jsx';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import { getProjects } from '../lib/projects.js';
import './Projects.css';

// The tech filter appears automatically once there are this many projects.
const FILTER_THRESHOLD = 6;

export default function Projects() {
  const projects = useMemo(() => getProjects(), []);
  const [filter, setFilter] = useState(null);

  const techOptions = useMemo(() => {
    const counts = new Map();
    projects.forEach((p) => p.tech.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
    return [...counts.entries()].filter(([, n]) => n > 1).map(([t]) => t);
  }, [projects]);

  const showFilter = projects.length >= FILTER_THRESHOLD && techOptions.length > 1;
  const visible = filter ? projects.filter((p) => p.tech.includes(filter)) : projects;

  return (
    <Section id="projects" title="Projects" intro="Things I've built for classes and on my own.">
      {showFilter && (
        <div className="project-filter" role="group" aria-label="Filter projects by technology">
          {[null, ...techOptions].map((tech) => (
            <button
              key={tech ?? 'all'}
              className="project-filter__button"
              aria-pressed={filter === tech}
              onClick={() => setFilter(tech)}
            >
              {tech ?? 'All'}
            </button>
          ))}
        </div>
      )}

      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
