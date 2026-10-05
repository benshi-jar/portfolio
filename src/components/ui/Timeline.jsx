import './Timeline.css';

// Vertical list with a rule and a dot per entry. Pass items as children (<li>s).
export default function Timeline({ children, label }) {
  return (
    <ol className="timeline" aria-label={label}>
      {children}
    </ol>
  );
}
