const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// '2026-03' → 'Mar 2026', '2026' → '2026', null → ''
export function formatDate(value) {
  if (!value) return '';
  const [year, month] = String(value).split('-');
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

// Same year with months on both ends → 'Jan–Apr 2025'
export function formatRange(start, end, { expected = false } = {}) {
  const endLabel = end ? formatDate(end) + (expected ? ' (expected)' : '') : 'Present';
  if (!start) return endLabel;
  const [sy, sm] = String(start).split('-');
  const [ey, em] = end ? String(end).split('-') : [];
  if (end && sm && em && sy === ey) {
    return `${MONTHS[Number(sm) - 1]}–${formatDate(end)}${expected ? ' (expected)' : ''}`;
  }
  return `${formatDate(start)} – ${endLabel}`;
}

// Comparable key for sorting: '2026-03' → 202603, '2026' → 202600
export function dateKey(value) {
  if (!value) return 0;
  const [year, month = '0'] = String(value).split('-');
  return Number(year) * 100 + Number(month);
}
