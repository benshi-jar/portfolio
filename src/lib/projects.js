// All project access goes through here, so the list section today and
// a detail page later (e.g. /projects/:slug) read the same normalized shape.
import { projects as rawProjects } from '../data/projects.js';

export const PROJECT_STATUS = {
  complete: 'Complete',
  'in-progress': 'In progress',
  archived: 'Archived',
};

// Fill every optional field so components never have to guess.
export function normalizeProject(project) {
  return {
    highlights: [],
    tech: [],
    context: null,
    status: null,
    featured: false,
    date: null,
    image: null,
    imageAlt: null,
    github: null,
    demo: null,
    details: null,
    ...project,
  };
}

// Featured first, then the order they appear in the data file.
export function getProjects() {
  return rawProjects
    .map(normalizeProject)
    .map((project, index) => ({ project, index }))
    .sort((a, b) => Number(b.project.featured) - Number(a.project.featured) || a.index - b.index)
    .map(({ project }) => project);
}

export function getProjectBySlug(slug) {
  const found = rawProjects.find((project) => project.slug === slug);
  return found ? normalizeProject(found) : null;
}

// Where a project's detail page will live. Unused until detail pages exist.
export function getProjectPath(slug) {
  return `/projects/${slug}`;
}

export function hasDetailPage(project) {
  return Boolean(project.details);
}
