import useInView from '../../hooks/useInView.js';

// Fades and lifts its content in the first time it scrolls into view.
// `delay` (ms) staggers items in a group. Styles live in styles/utilities.css,
// and prefers-reduced-motion shows content immediately.
export default function Reveal({ as: Element = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Element
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Element>
  );
}
