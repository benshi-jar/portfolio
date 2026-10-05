import Section from '../components/layout/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import CopyButton from '../components/ui/CopyButton.jsx';
import ExternalLink from '../components/ui/ExternalLink.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/ui/icons.jsx';
import { profile } from '../data/profile.js';
import './Contact.css';

const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '');

export default function Contact({ tone }) {
  const links = [
    { label: 'GitHub', href: profile.links.github, Icon: GitHubIcon },
    { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedInIcon },
    ...profile.extraLinks.map((link) => ({ label: link.label, href: link.url })),
  ].filter((link) => link.href);

  return (
    <Section
      id="contact"
      title="Get in touch"
      label="~/contact"
      intro="The best way to reach me is email. I'm happy to talk about projects, classes or internships."
      tone={tone}
    >
      <Reveal className="contact">
        <div className="contact__email">
          <MailIcon className="contact__mail-icon" />
          <a className="contact__address" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <CopyButton value={profile.email} label="Copy" />
        </div>

        <ul className="contact__links">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <span className="contact__label">
                {Icon && <Icon />}
                {label}
              </span>
              <ExternalLink href={href}>{displayUrl(href)}</ExternalLink>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
