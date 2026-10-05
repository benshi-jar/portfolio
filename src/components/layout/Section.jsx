import Reveal from '../ui/Reveal.jsx';
import './Section.css';

// Shared wrapper: same id, spacing, width and heading for every section.
// `label` is the small path above the title (defaults to ~/<id>), and
// `tone="alt"` gives the section a slightly different background band.
export default function Section({ id, title, label, intro, actions, tone, className = '', children }) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      className={`section ${tone === 'alt' ? 'section--alt' : ''} ${className}`.trim()}
      aria-labelledby={title ? headingId : undefined}
    >
      <div className="container">
        {title && (
          <Reveal as="header" className="section__header">
            <div className="section__heading">
              <p className="section__label" aria-hidden="true">
                {label ?? `~/${id}`}
              </p>
              <h2 id={headingId} className="section__title">
                {title}
              </h2>
              {intro && <p className="section__intro">{intro}</p>}
            </div>
            {actions && <div className="section__actions">{actions}</div>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
