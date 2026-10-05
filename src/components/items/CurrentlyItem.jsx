import ExternalLink from '../ui/ExternalLink.jsx';
import './CurrentlyItem.css';

export default function CurrentlyItem({ item }) {
  return (
    <li className="currently-item">
      <span className="currently-item__label">{item.label}</span>
      <span>{item.link ? <ExternalLink href={item.link}>{item.text}</ExternalLink> : item.text}</span>
    </li>
  );
}
