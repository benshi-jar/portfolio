import { PROJECT_STATUS } from '../../lib/projects.js';
import './ProjectStatus.css';

// Renders nothing when a project has no status. `pulse` adds a slow pulse to
// the in-progress dot (off under prefers-reduced-motion).
export default function ProjectStatus({ status, pulse = false }) {
  if (!status || !PROJECT_STATUS[status]) return null;
  return (
    <span className={`project-status project-status--${status} ${pulse ? 'project-status--pulse' : ''}`.trim()}>
      {PROJECT_STATUS[status]}
    </span>
  );
}
