import type { ProjectEvolution } from '../data/projects';
import Tag from './Tag.tsx';
import './ProjectEvolution.css';

interface ProjectEvolutionProps {
  evolution: ProjectEvolution;
}

export default function ProjectEvolutionComponent({ evolution }: ProjectEvolutionProps) {
  return (
    <section className="project-evolution" aria-labelledby="evolution-title">
      <div className="container">
        <header className="evolution-header">
          <Tag variant="primary" size="sm" className="section-tag">
            Project Evolution
          </Tag>
          <h2 id="evolution-title" className="evolution-title display-md">
            Project Evolution
          </h2>
          <p className="evolution-description">
            {evolution.description}
          </p>
        </header>

        <div className="evolution-timeline">
          {evolution.stages.map((stage, index) => (
            <div key={stage.id} className="evolution-stage">
              <div className="stage-content">
                <div className="stage-meta">
                  <span className="stage-year">{stage.year}</span>
                  <Tag variant={index === 0 ? 'exploring' : 'active'} size="sm">
                    {stage.status}
                  </Tag>
                </div>
                <h3 className="stage-name">{stage.name}</h3>
                <p className="stage-focus">Focus: {stage.focus}</p>
                <div className="stage-tech">
                  {stage.technologies.map((tech, i) => (
                    <Tag key={i} variant="blue" size="sm">{tech}</Tag>
                  ))}
                </div>
              </div>

              {index < evolution.stages.length - 1 && (
                <div className="stage-connector" aria-hidden="true">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}