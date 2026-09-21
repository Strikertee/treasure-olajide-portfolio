import { experience, education } from '../data/experience.ts';
import Tag from '../components/Tag.tsx';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience" aria-labelledby="experience-title">
      <div className="container">
        <header className="section-header">
          <Tag variant="primary" size="sm" className="section-tag">
            Experience
          </Tag>
          <h2 id="experience-title" className="section-title display-md">
            Experience
          </h2>
        </header>

        <div className="experience-content">
          <div className="experience-timeline">
            {experience.map((exp, _index) => (
              <article key={exp.id} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot" aria-hidden="true"></div>
                  <div className="marker-line" aria-hidden="true"></div>
                </div>
                <div className="timeline-content">
                  <div className="content-header">
                    <div className="content-meta">
                      <Tag variant="primary" size="sm">{exp.type === 'leadership' ? 'Leadership' : exp.type === 'employment' ? 'Employment' : 'Internship'}</Tag>
                      <span className="content-period">{exp.period}</span>
                    </div>
                  </div>
                  <h3 className="content-title">{exp.title}</h3>
                  <p className="content-org">{exp.description}</p>
                  <ul className="content-responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>
                        <span className="resp-bullet" aria-hidden="true">▸</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                  <div className="content-tech">
                    {exp.technologies.map((tech, i) => (
                      <Tag key={i} variant="cyan" size="sm">{tech}</Tag>
                    ))}
                  </div>
                  {exp.projects && (
                    <div className="content-projects">
                      <span className="projects-label">Key Projects:</span>
                      {exp.projects.map((proj, i) => (
                        <Tag key={i} variant="primary" size="sm">{proj}</Tag>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="education-section">
            <h3 className="education-title">Education</h3>
            {education.map((edu, _index) => (
              <div key={edu.id} className="education-item">
                <div className="edu-header">
                  <div className="edu-info">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-institution">{edu.institution}</p>
                  </div>
                  <div className="edu-meta">
                    <span className="edu-level">{edu.level}</span>
                    <span className="edu-period">{edu.period}</span>
                  </div>
                </div>
                <p className="edu-focus">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}