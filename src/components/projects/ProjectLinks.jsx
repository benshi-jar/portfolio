import ExternalLink from '../ui/ExternalLink.jsx';
import { GitHubIcon } from '../ui/icons.jsx';
import './ProjectLinks.css';

// Shows whichever of GitHub / Live demo exist. Renders nothing if neither does.
export default function ProjectLinks({ project }) {
  const { github, demo, title } = project;
  if (!github && !demo) return null;
  return (
    <div className="project-links">
      {github && (
        <ExternalLink href={github} showIcon={false} aria-label={`${title} source code on GitHub`}>
          <GitHubIcon /> Code
        </ExternalLink>
      )}
      {demo && (
        <ExternalLink href={demo} aria-label={`${title} live demo`}>
          Live demo
        </ExternalLink>
      )}
    </div>
  );
}
