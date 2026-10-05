import { PROJECT_STATUS } from '../../lib/projects.js';
import './ProjectStatus.css';

// Renders nothing when a project has no status.
export default function ProjectStatus({ status }) {
  if (!status || !PROJECT_STATUS[status]) return null;
  return <span className={`project-status project-status--${status}`}>{PROJECT_STATUS[status]}</span>;
}
