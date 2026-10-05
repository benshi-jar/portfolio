import { profile } from '../data/profile.js';
import Section from '../components/layout/Section.jsx';
import LinkButton from '../components/ui/LinkButton.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/ui/icons.jsx';
import './Home.css';

export default function Home() {
  return (
    <Section id="home">
      <div className="home">
        <p className="home__eyebrow">
          <span aria-hidden="true">$ </span>whoami
        </p>
        <h1 className="home__name">{profile.name}</h1>
        <p className="home__tagline">{profile.tagline}</p>

        <div className="home__bio">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {profile.outsideOfCode && <p className="home__outside">{profile.outsideOfCode}</p>}

        <div className="home__actions">
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
    </Section>
  );
}
