import './ProjectImage.css';

// Renders nothing when a project has no image.
export default function ProjectImage({ project, className = '' }) {
  if (!project.image) return null;
  return (
    <img
      className={`project-image ${className}`.trim()}
      src={project.image}
      alt={project.imageAlt ?? `Screenshot of ${project.title}`}
      loading="lazy"
    />
  );
}
