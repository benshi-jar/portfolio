// Development-only sanity checks. Loaded from main.jsx when running `npm run dev`
// and left out of the production build.
import { projects } from '../data/projects.js';
import { experience } from '../data/experience.js';
import { education } from '../data/education.js';
import { currently } from '../data/currently.js';
import { PROJECT_STATUS, PROJECT_CATEGORIES } from './projects.js';

const DATE = /^\d{4}(-(0[1-9]|1[0-2]))?$/;
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export function validateData() {
  const problems = [];
  const warn = (where, message) => problems.push(`${where}: ${message}`);

  const slugs = new Set();
  projects.forEach((p, i) => {
    const where = `projects[${i}] (${p.slug ?? p.title ?? 'unnamed'})`;
    for (const field of ['slug', 'title', 'summary']) if (!p[field]) warn(where, `missing "${field}"`);
    if (!Array.isArray(p.tech) || p.tech.length === 0) warn(where, '"tech" should be a non-empty array');
    if (p.slug && !SLUG.test(p.slug)) warn(where, 'slug should be lowercase-with-dashes');
    if (slugs.has(p.slug)) warn(where, `duplicate slug "${p.slug}"`);
    slugs.add(p.slug);
    if (p.status && !(p.status in PROJECT_STATUS))
      warn(where, `status should be one of ${Object.keys(PROJECT_STATUS).join(', ')}`);
    if (p.category && !(p.category in PROJECT_CATEGORIES))
      warn(where, `category should be one of ${Object.keys(PROJECT_CATEGORIES).join(', ')}`);
    if (p.date && !DATE.test(p.date)) warn(where, 'date should be "YYYY" or "YYYY-MM"');
    (p.images ?? []).forEach((img, j) => {
      if (!img.src) warn(where, `images[${j}] is missing "src"`);
      if (!img.alt) warn(where, `images[${j}] needs "alt" text describing it`);
    });
    if (p.image && !p.imageAlt) warn(where, 'add "imageAlt" to describe the image');
  });

  experience.forEach((e, i) => {
    const where = `experience[${i}] (${e.id ?? e.org ?? 'unnamed'})`;
    for (const field of ['id', 'role', 'org']) if (!e[field]) warn(where, `missing "${field}"`);
    if (!['work', 'leadership'].includes(e.kind)) warn(where, 'kind should be "work" or "leadership"');
    const dates = e.periods ? e.periods.flatMap((p) => [p.start, p.end]) : [e.start, e.end];
    dates.filter(Boolean).forEach((d) => DATE.test(d) || warn(where, `bad date "${d}"`));
  });

  education.forEach((e, i) => {
    if (!e.school) warn(`education[${i}]`, 'missing "school"');
  });

  const courseCodes = new Set(education.flatMap((e) => (e.courses ?? []).map((c) => c.code)));
  (currently.building ?? []).forEach((b) => {
    if (!slugs.has(b.project)) warn('currently.building', `no project with slug "${b.project}"`);
  });
  (currently.taking ?? []).forEach((code) => {
    if (!courseCodes.has(code)) warn('currently.taking', `"${code}" isn't listed in education.js`);
  });

  if (problems.length) {
    console.warn(`[portfolio data] ${problems.length} problem(s):\n- ${problems.join('\n- ')}`);
  }
}
