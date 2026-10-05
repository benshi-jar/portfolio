// All project access goes through here, so the Projects section today and
// a detail page later (e.g. /projects/:slug) read the same normalized shape.
import { projects as rawProjects } from '../data/projects.js';

export const PROJECT_STATUS = {
  complete: 'Complete',
  'in-progress': 'In progress',
  archived: 'Archived',
};

export const PROJECT_CATEGORIES = {
  personal: 'Personal',
  coursework: 'Coursework',
};

// Tech entries that count as programming languages for the filter chips.
const KNOWN_LANGUAGES = ['Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'C#', 'Go', 'Rust', 'Kotlin', 'Swift', 'SQL'];

// Fill every optional field so components never have to guess.
export function normalizeProject(project) {
  const p = {
    tagline: null,
    highlights: [],
    tech: [],
    category: null,
    course: null,
    context: null,
    status: null,
    featured: false,
    date: null,
    github: null,
    demo: null,
    images: [],
    details: null,
    ...project,
  };
  // Older entries may use a single `image`; treat it as the first of `images`.
  if (!p.images.length && project.image) {
    p.images = [{ src: project.image, alt: project.imageAlt ?? `Screenshot of ${p.title}` }];
  }
  p.languages = project.languages ?? p.tech.filter((t) => KNOWN_LANGUAGES.includes(t));
  p.label = p.context ?? p.course ?? (p.category ? `${PROJECT_CATEGORIES[p.category]} project` : null);
  return p;
}

const allProjects = rawProjects.map(normalizeProject);

export function getProjects() {
  return allProjects;
}

export function getFeaturedProjects() {
  return allProjects.filter((p) => p.featured);
}

export function getMoreProjects() {
  return allProjects.filter((p) => !p.featured);
}

export function getProjectBySlug(slug) {
  return allProjects.find((project) => project.slug === slug) ?? null;
}

// Filter chips built from the data: categories first, then languages by count.
// A chip that matches nothing or every project adds nothing, so it's left out.
export function getFilterOptions(projects = allProjects) {
  const options = [];
  for (const [key, label] of Object.entries(PROJECT_CATEGORIES)) {
    options.push({ id: `category:${key}`, label, test: (p) => p.category === key });
  }
  const counts = new Map();
  projects.forEach((p) => p.languages.forEach((l) => counts.set(l, (counts.get(l) ?? 0) + 1)));
  [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .forEach(([lang]) => options.push({ id: `lang:${lang}`, label: lang, test: (p) => p.languages.includes(lang) }));

  return options
    .map((o) => ({ ...o, count: projects.filter(o.test).length }))
    .filter((o) => o.count > 0 && o.count < projects.length);
}

// Where a project's detail page will live. Unused until detail pages exist.
export function getProjectPath(slug) {
  return `/projects/${slug}`;
}

// Flip to true once src/pages/ProjectDetail.jsx exists. Until then, cards keep
// linking to GitHub even if a project already has `details` written.
const DETAIL_PAGES_ENABLED = false;

export function hasDetailPage(project) {
  return DETAIL_PAGES_ENABLED && Boolean(project.details);
}

// The one place a card links to: its detail page once it has one, otherwise GitHub.
export function getPrimaryLink(project) {
  if (hasDetailPage(project)) return { href: getProjectPath(project.slug), external: false };
  if (project.github) return { href: project.github, external: true };
  if (project.demo) return { href: project.demo, external: true };
  return null;
}

// Element id for a project's card, so other sections can link to it.
export function projectAnchor(slug) {
  return `project-${slug}`;
}
