import Section from '../components/layout/Section.jsx';
import ExternalLink from '../components/ui/ExternalLink.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/ui/icons.jsx';
import { profile } from '../data/profile.js';
import './Contact.css';

const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '');

export default function Contact() {
  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, text: profile.email, Icon: MailIcon },
    { label: 'GitHub', href: profile.links.github, Icon: GitHubIcon },
    { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedInIcon },
    ...profile.extraLinks.map((link) => ({ label: link.label, href: link.url })),
  ].filter((link) => link.href);

  return (
    <Section id="contact" title="Contact" intro="The best way to reach me is email. I'm happy to talk about projects, classes or opportunities.">
      <ul className="contact-list">
        {links.map(({ label, href, text, Icon }) => (
          <li key={label} className="contact-list__item">
            <span className="contact-list__label">
              {Icon && <Icon />}
              {label}
            </span>
            <ExternalLink href={href}>{text ?? displayUrl(href)}</ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
