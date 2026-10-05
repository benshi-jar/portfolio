# Portfolio

My personal portfolio site, built with React, Vite and plain CSS. It's a single page, and every piece of content comes from the files in `src/data/`.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

Requires Node 20.19+ or 22.12+.

## Editing content

| To change… | Edit |
|---|---|
| Name, tagline, bio, email, links, the hero status line | `src/data/profile.js` (`role` and `status` fill the hero's status panel) |
| Projects | `src/data/projects.js` |
| Jobs and leadership roles | `src/data/experience.js` |
| Schools and coursework | `src/data/education.js` |
| Skills | `src/data/skills.js` |
| The "Currently" panel | `src/data/currently.js` |
| Section order, hiding a section | `src/data/sections.js` |
| Resume PDF | replace `public/resume.pdf` and update `profile.resume.updated` |

## Motion and accessibility

Animations run once (the `$ whoami` typing, the hero fade-in and the scroll reveals) and are switched off when the visitor's system asks for reduced motion. Every hover effect also appears on keyboard focus.

## Checking your edits

While `npm run dev` is running, the browser console warns about data mistakes such as a missing title, a duplicate slug, a bad date or an unknown status. These checks aren't included in the production build.

Dates are written as `'YYYY'` or `'YYYY-MM'`. An `end` of `null` means "Present".

### Adding a project

1. Open `src/data/projects.js` and copy the template from the comment at the top.
2. Fill in the required fields: `slug`, `title`, `summary` and `tech`.
3. Add any optional fields you have. Anything you leave out simply doesn't render.

| Field | Example | Notes |
|---|---|---|
| `tagline` | `'Investigate claims, not verdicts.'` | one-line pitch on featured cards |
| `highlights` | `['Built X', 'Solved Y']` | bullet points on the card |
| `category` | `'personal'`, `'coursework'` | powers the Personal / Coursework filters |
| `course` | `'CSE 214'` | label for coursework projects |
| `context` | `'Hackathon'` | overrides the label above the title |
| `languages` | `['Java']` | filter chips; worked out from `tech` if left out |
| `status` | `'complete'`, `'in-progress'`, `'archived'` | colored status dot |
| `featured` | `true` | large card at the top of Projects |
| `date` | `'2026-10'` | |
| `images` | `[{ src, alt, caption }]` | put files in `public/images/projects/`; the first is the card image. Without one, featured cards show a placeholder frame |
| `github` | `'https://github.com/benshi-jar/my-project'` | shows a "Code" link; the whole card links here |
| `demo` | `'https://my-project.vercel.app'` | shows a "Live demo" link |
| `details` | `{ overview, architecture, sections, challenges, lessons }` | longer write-up for a future detail page |

Filter chips are built from the data. A chip only appears when it narrows the list, so Python shows up on its own once a second language does.

### Adding other things

- **A job or role:** add an object to `experience.js` with `kind: 'work'` or `'leadership'`. For seasonal roles, use `periods: [{ start, end }, …]`.
- **A course:** add `{ name, code?, term? }` to a school's `courses` array in `education.js`. Use the official course name.
- **Currently:** `building` lists project slugs, `taking` lists course codes from `education.js`, and `learning` is short labels. Titles, status and course names are looked up, so they never disagree with the rest of the page.
- **A skill:** add a string to a group in `skills.js`, or add a new group.

## Structure

```
src/
  data/                 content (the only folder you need for updates)
  lib/
    projects.js         normalizes projects and provides getProjects, getProjectBySlug, getProjectPath
    dates.js            date formatting and sorting
    validateData.js     dev-only data checks
  components/
    layout/             Nav, Section, Footer
    ui/                 Card, Tag/TagList, LinkButton, ExternalLink, CopyButton, Reveal, TypedText, icons
    projects/           FeaturedProject, ProjectCard, ProjectMedia, ProjectFilters, ProjectStatus, ProjectLinks
    items/              ExperienceItem, EducationItem, SkillGroup
  hooks/                useInView (scroll reveals), usePrefersReducedMotion
  sections/             one component per page section
  styles/
    tokens.css          colors, type, spacing; change the look here
    base.css
    utilities.css
```

## Adding project-detail pages later

The site is already set up for this:

- Every project has a unique `slug`, and `getProjectPath(slug)` already returns `/projects/<slug>`.
- `getProjectBySlug(slug)` returns one project with every optional field filled in.
- `ProjectMedia`, `ProjectStatus`, `ProjectLinks` and `TagList` each take a project as input, so a detail page can reuse them as they are.
- The optional `details` field holds the longer write-up, and `images` can hold more than one screenshot.
- Cards link through `getPrimaryLink(project)`, which already prefers the detail page once `hasDetailPage(project)` is true.

When it's time, the steps are:

1. Add a router, or a small hash-based switch in `App.jsx`.
2. Create `src/pages/ProjectDetail.jsx` using the helpers and components above.
3. Set `DETAIL_PAGES_ENABLED` to `true` in `lib/projects.js`. Cards for projects with `details` then link to their new page automatically.

No data or existing components have to change.
