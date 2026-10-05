import { ExternalIcon } from './icons.jsx';
import './ExternalLink.css';

// Opens off-site links in a new tab safely. mailto: links stay in place.
export default function ExternalLink({ href, children, showIcon = true, className = '', ...rest }) {
  const isMail = href.startsWith('mailto:');
  return (
    <a
      href={href}
      className={`external-link ${className}`.trim()}
      {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    >
      {children}
      {showIcon && !isMail && <ExternalIcon className="external-link__icon" />}
      {!isMail && <span className="visually-hidden"> (opens in a new tab)</span>}
    </a>
  );
}
