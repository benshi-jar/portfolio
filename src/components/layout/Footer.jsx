import { profile } from '../../data/profile.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="mono">
          Built with React + Vite ·{' '}
          <a href={`${profile.links.github}/portfolio`} target="_blank" rel="noopener noreferrer">
            source<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </span>
      </div>
    </footer>
  );
}
