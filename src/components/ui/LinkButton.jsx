import './LinkButton.css';

// A link styled as a button. variant: 'primary' | 'subtle'
export default function LinkButton({ href, children, variant = 'subtle', external = false, ...rest }) {
  return (
    <a
      href={href}
      className={`link-button link-button--${variant}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
