import { profile } from '../../data/profile.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="mono">Built with React + Vite</span>
      </div>
    </footer>
  );
}
