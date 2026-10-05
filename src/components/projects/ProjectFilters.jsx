import './ProjectFilters.css';

// A quiet row of text-style toggles. `options` comes from getFilterOptions().
export default function ProjectFilters({ options, active, onChange, total }) {
  if (options.length === 0) return null;
  const all = { id: null, label: 'All', count: total };

  return (
    <div className="project-filters" role="group" aria-label="Filter projects">
      <span className="project-filters__label" aria-hidden="true">
        filter:
      </span>
      {[all, ...options].map((option) => (
        <button
          key={option.id ?? 'all'}
          type="button"
          className="project-filters__option"
          aria-pressed={active === option.id}
          onClick={() => onChange(option.id)}
        >
          {option.label}
          <span className="project-filters__count">{option.count}</span>
        </button>
      ))}
    </div>
  );
}
