import { useMemo, useState } from 'react';
import Section from '../components/layout/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import FeaturedProject from '../components/projects/FeaturedProject.jsx';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import ProjectFilters from '../components/projects/ProjectFilters.jsx';
import { getProjects, getFilterOptions } from '../lib/projects.js';
import './Projects.css';

export default function Projects({ tone }) {
  const projects = getProjects();
  const options = useMemo(() => getFilterOptions(projects), [projects]);
  const [filter, setFilter] = useState(null);

  const test = options.find((o) => o.id === filter)?.test ?? (() => true);
  const visible = projects.filter(test);
  const featured = visible.filter((p) => p.featured);
  const more = visible.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Projects"
      intro="Things I've built on my own and for classes."
      tone={tone}
      actions={<ProjectFilters options={options} active={filter} onChange={setFilter} total={projects.length} />}
    >
      <p className="visually-hidden" role="status">
        {filter ? `Showing ${visible.length} of ${projects.length} projects` : ''}
      </p>

      {featured.length > 0 && (
        <div className="featured-list">
          {featured.map((project, i) => (
            <Reveal key={`${filter}-${project.slug}`}>
              <FeaturedProject project={project} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      )}

      {more.length > 0 && (
        <div className="more-projects">
          <h3 className="eyebrow more-projects__title">{featured.length > 0 ? 'More projects' : 'Projects'}</h3>
          <div className="project-grid">
            {more.map((project, i) => (
              <Reveal key={`${filter}-${project.slug}`} delay={i * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
