import { personalInfo } from '../data/personal.ts';
import Tag from '../components/Tag.tsx';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="container">
        <header className="section-header">
          <Tag variant="primary" size="sm" className="section-tag">
            About
          </Tag>
          <h2 id="about-title" className="section-title display-md">
            {personalInfo.about.heading}
          </h2>
        </header>

        <div className="about-content">
          <div className="about-text">
            {personalInfo.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-interests">
            <h3 className="interests-title">Areas of Interest</h3>
            <div className="interests-grid">
              {personalInfo.about.interests.map((interest, index) => (
                <Tag key={index} variant="blue" size="md">
                  {interest}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}