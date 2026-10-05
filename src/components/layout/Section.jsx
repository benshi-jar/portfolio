import './Section.css';

// Shared wrapper: same id, spacing, width and heading for every section.
export default function Section({ id, title, intro, children }) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} className="section" aria-labelledby={title ? headingId : undefined}>
      <div className="container">
        {title && (
          <header className="section__header">
            <h2 id={headingId} className="section__title">
              {title}
            </h2>
            {intro && <p className="section__intro">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
