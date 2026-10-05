import { useEffect, useState } from 'react';
import { profile } from '../../data/profile.js';
import { MenuIcon, CloseIcon } from '../ui/icons.jsx';
import './Nav.css';

// Highlights the section currently in view.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const idKey = ids.join(',');

  useEffect(() => {
    const elements = idKey.split(',').map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [idKey]);

  return active;
}

function useScrolledPast(offset) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);
  return scrolled;
}

export default function Nav({ sections }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sections.map((s) => s.id));
  const scrolled = useScrolledPast(24);
  const navItems = sections.filter((s) => s.inNav !== false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__prompt" aria-hidden="true">~/</span>
          {profile.name.split(' ')[0].toLowerCase()}
        </a>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav aria-label="Sections">
          <ul id="nav-links" className={`nav__links ${open ? 'nav__links--open' : ''}`}>
            {navItems.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav__link ${active === section.id ? 'nav__link--active' : ''}`}
                  aria-current={active === section.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
