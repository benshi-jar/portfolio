import { profile } from '../data/profile.js';
import { currently } from '../data/currently.js';
import { getProjectBySlug, getProjects, projectAnchor } from '../lib/projects.js';
import LinkButton from '../components/ui/LinkButton.jsx';
import TypedText from '../components/ui/TypedText.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/ui/icons.jsx';
import './Home.css';

// Languages across all projects, most used first: "Java · JavaScript".
function topLanguages(limit = 3) {
  const counts = new Map();
  getProjects().forEach((p) => p.languages.forEach((l) => counts.set(l, (counts.get(l) ?? 0) + 1)));
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([lang]) => lang);
}

function StatusPanel() {
  const building = currently.building
    ?.map((b) => getProjectBySlug(b.project))
    .filter(Boolean)
    .slice(0, 1)[0];
  const rows = [
    { key: 'role', value: profile.role },
    building && {
      key: 'building',
      value: (
        <a href={`#${projectAnchor(building.slug)}`} className="status-panel__link">
          {building.title}
          <span aria-hidden="true"> ↓</span>
        </a>
      ),
    },
    { key: 'stack', value: topLanguages().join(' · ') },
    { key: 'based', value: profile.location },
    profile.status && {
      key: 'status',
      value: (
        <span className="status-panel__status">
          <span className="status-panel__dot" aria-hidden="true" />
          {profile.status}
        </span>
      ),
    },
  ].filter((row) => row && row.value);

  return (
    <aside className="status-panel hero__item" style={{ '--i': 6 }} aria-label="At a glance">
      <div className="status-panel__bar" aria-hidden="true">
        ~/{profile.name.split(' ')[0].toLowerCase()}/status
      </div>
      <dl className="status-panel__rows">
        {rows.map(({ key, value }) => (
          <div key={key} className="status-panel__row">
            <dt>{key}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export default function Home() {
  return (
    <section id="home" className="hero" aria-labelledby="home-heading">
      <div className="container hero__inner">
        <div className="hero__intro">
          <p className="hero__command">
            <span className="hero__prompt" aria-hidden="true">
              ${' '}
            </span>
            <TypedText text="whoami" />
          </p>
          <h1 id="home-heading" className="hero__name hero__item" style={{ '--i': 0 }}>
            {profile.name}
          </h1>
          <p className="hero__tagline hero__item" style={{ '--i': 1 }}>
            {profile.tagline}
          </p>

          <div className="hero__bio hero__item" style={{ '--i': 2 }}>
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {profile.outsideOfCode && (
            <p className="hero__outside hero__item" style={{ '--i': 3 }}>
              {profile.outsideOfCode}
            </p>
          )}

          <div className="hero__actions hero__item" style={{ '--i': 4 }}>
            <LinkButton href="#projects" variant="primary">
              View projects
            </LinkButton>
            <LinkButton href={profile.links.github} external aria-label="GitHub (opens in a new tab)">
              <GitHubIcon /> GitHub
            </LinkButton>
            <LinkButton href={profile.links.linkedin} external aria-label="LinkedIn (opens in a new tab)">
              <LinkedInIcon /> LinkedIn
            </LinkButton>
            <LinkButton href={`mailto:${profile.email}`}>
              <MailIcon /> Email
            </LinkButton>
          </div>
        </div>

        <StatusPanel />
      </div>
    </section>
  );
}
