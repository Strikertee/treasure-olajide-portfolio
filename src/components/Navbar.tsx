import { useState, useEffect } from 'react';
import { personalInfo } from '../data/personal.ts';
import './Navbar.css';

const navLinks: { href: string; label: string }[] = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#recognition', label: 'Recognition' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-container container">
        <a href="#home" className="navbar-brand" aria-label="Go to homepage">
          <span className="navbar-brand-name">TREASURE.</span>
          <span className="navbar-brand-dot" aria-hidden="true">●</span>
        </a>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}

          <div className="navbar-status">
            <span className="status-dot" aria-hidden="true">●</span>
            <span className="status-text">{personalInfo.availability}</span>
          </div>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="navbar-links"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="hamburger" aria-hidden="true">
            <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
          </span>
        </button>
      </div>

      <div className="navbar-backdrop" onClick={() => setMobileOpen(false)} aria-hidden="true"></div>
    </nav>
  );
}