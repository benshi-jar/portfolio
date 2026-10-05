import './Tag.css';

export function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export function TagList({ items, label }) {
  if (!items?.length) return null;
  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
