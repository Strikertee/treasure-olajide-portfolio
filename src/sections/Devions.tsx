import { devions } from '../data/personal.ts';
import Tag from '../components/Tag.tsx';
import './Devions.css';

export default function DevionsSection() {
  return (
    <section id="devions" className="devions" aria-labelledby="devions-title">
      <div className="devions-bg" aria-hidden="true"></div>
      <div className="container">
        <header className="devions-header">
          <Tag variant="devions" size="sm" className="section-tag">
            Building with Devions
          </Tag>
          <h2 id="devions-title" className="devions-title display-md">
            Building with Devions
          </h2>
          <p className="devions-description">
            {devions.description}
          </p>
        </header>

        <div className="devions-ecosystem">
          <div className="ecosystem-center">
            <div className="ecosystem-node">
              <span className="node-label">DEVIONS</span>
              <span className="node-type">{devions.type}</span>
            </div>
            <div className="ecosystem-pulse" aria-hidden="true"></div>
          </div>

          <div className="ecosystem-branches">
            {devions.projects.map((project, index) => (
              <div key={project.name} className="ecosystem-branch" style={{ '--index': index }}>
                <div className="branch-line"></div>
                <article className="branch-project">
                  <div className="project-header">
                    <h3 className="project-name">{project.name}</h3>
                    <Tag variant="blue" size="sm">{project.category}</Tag>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="devions-pillars">
          {devions.pillars.map((pillar, index) => (
            <div key={pillar} className="pillar-item">
              <div className="pillar-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="pillar-title">{pillar}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}