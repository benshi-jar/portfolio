import './Card.css';

export default function Card({ as: Element = 'div', className = '', children, ...rest }) {
  return (
    <Element className={`card ${className}`.trim()} {...rest}>
      {children}
    </Element>
  );
}
