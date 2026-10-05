import Section from '../components/layout/Section.jsx';
import Card from '../components/ui/Card.jsx';
import CurrentlyItem from '../components/items/CurrentlyItem.jsx';
import { currently } from '../data/currently.js';
import { formatDate } from '../lib/dates.js';

export default function Currently() {
  return (
    <Section id="currently" title="Currently">
      <Card>
        <ul>
          {currently.items.map((item) => (
            <CurrentlyItem key={item.label} item={item} />
          ))}
        </ul>
        {currently.updated && (
          <p className="mono muted" style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--space-3)' }}>
            Last updated {formatDate(currently.updated)}
          </p>
        )}
      </Card>
    </Section>
  );
}
