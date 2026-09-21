import { personalInfo } from '../data/personal.ts';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-name">TREASURE OLAJIDE</p>
            <p className="footer-title">{personalInfo.title}</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href={personalInfo.tiktok} target="_blank" rel="noopener noreferrer" className="footer-link">
              TikTok
            </a>
            <a href={`mailto:${personalInfo.email}`} className="footer-link">
              Email
            </a>
            <a href={`tel:${personalInfo.phone}`} className="footer-link">
              Phone
            </a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{personalInfo.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}