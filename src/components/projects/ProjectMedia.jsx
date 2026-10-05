import './ProjectMedia.css';

// A project's main image, or (when it has none) a placeholder frame drawn
// from its own data. The frame is deliberately not a fake screenshot.
export default function ProjectMedia({ project, className = '' }) {
  const image = project.images[0];

  return (
    <figure className={`project-media ${className}`.trim()}>
      <div className="project-media__bar" aria-hidden="true">
        <span className="project-media__path">~/projects/{project.slug}</span>
      </div>
      {image ? (
        <img
          className="project-media__image"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="project-media__placeholder">
          <pre className="project-media__code" aria-hidden="true">
            <span className="project-media__prompt">$</span> cat stack.txt{'\n'}
            {project.tech.map((t) => `  ${t}`).join('\n')}
            {'\n\n'}
            <span className="project-media__prompt">$</span> status{'\n'}
            {'  '}
            {project.status === 'in-progress' ? 'in development' : (project.status ?? 'n/a')}
          </pre>
          <p className="visually-hidden">No screenshot yet.</p>
        </div>
      )}
      {image?.caption && <figcaption className="project-media__caption">{image.caption}</figcaption>}
    </figure>
  );
}
