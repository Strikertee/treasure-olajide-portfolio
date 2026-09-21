import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from 'react';
import type { Project } from '../data/projects';
import Button from './Button.tsx';
import Tag from './Tag.tsx';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  _index: number;
  onClick: () => void;
  isExpanded: boolean;
  onClose: () => void;
}

export default function ProjectCard({
  project,
  _index,
  onClick,
  isExpanded,
  onClose
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape' && isExpanded) {
      onClose();
    }
  }, [isExpanded, onClose]);

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded, handleKeyDown]);

  if (isExpanded) {
    return (
      <div
        className="project-modal-overlay"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
      >
        <div
          className="project-modal"
          onClick={(e) => e.stopPropagation()}
          ref={cardRef}
        >
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="modal-content">
            <div className="modal-visual" aria-hidden="true">
              <img
                src={project.image}
                alt={`${project.name} project preview`}
                className="modal-image"
              />
              <div className="modal-image-overlay"></div>
            </div>

            <div className="modal-header">
              <div className="modal-meta">
                <Tag variant="cyan" size="sm">{project.category}</Tag>
                <Tag
                  variant={
                    project.status.includes('Active') ? 'active' :
                    project.status.includes('Evolving') ? 'evolving' : 'exploring'
                  }
                  size="sm"
                >
                  {project.status}
                </Tag>
              </div>
              <h2 id={`project-title-${project.id}`} className="modal-title display-sm">
                {project.name}
              </h2>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3 className="modal-section-title">Overview</h3>
                <p className="modal-text">{project.fullDescription}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Problem</h3>
                <p className="modal-text">{project.problem}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Solution</h3>
                <p className="modal-text">{project.solution}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Key Highlights</h3>
                <ul className="modal-highlights">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Technologies</h3>
                <div className="modal-tags">
                  {project.technologies.map((tech, i) => (
                    <Tag key={i} variant="cyan" size="sm">{tech}</Tag>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">My Role</h3>
                <p className="modal-text">{project.role}</p>
              </div>

              {project.evolution && (
                <div className="modal-section">
                  <h3 className="modal-section-title">Evolution</h3>
                  <p className="modal-text">{project.evolution.description}</p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              {project.githubUrl !== '#' && (
                <Button
                  variant="secondary"
                  size="md"
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </Button>
              )}
              {project.demoUrl !== '#' && (
                <Button
                  variant="primary"
                  size="md"
                  as="a"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article
      className="project-card"
      role="listitem"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      tabIndex={0}
      aria-label={`View ${project.name} project details`}
    >
      <div className="card-visual" aria-hidden="true">
        <div className="card-image-wrapper">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="card-image"
            loading="lazy"
          />
          <div className="card-image-overlay" style={{ opacity: hovered ? 1 : 0 }}></div>
        </div>
        <div className="card-status">
          <Tag
            variant={
              project.status.includes('Active') ? 'active' :
              project.status.includes('Evolving') ? 'evolving' : 'exploring'
            }
            size="sm"
          >
            {project.status}
          </Tag>
        </div>
      </div>

      <div className="card-content">
        <div className="card-meta">
          <Tag variant="cyan" size="sm">{project.category}</Tag>
        </div>

        <h3 className="card-title">{project.name}</h3>

        <p className="card-description">{project.shortDescription}</p>

        <div className="card-tech">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <Tag key={i} variant="cyan" size="sm">{tech}</Tag>
          ))}
          {project.technologies.length > 4 && (
            <Tag variant="cyan" size="sm">+{project.technologies.length - 4} more</Tag>
          )}
        </div>

        <div className="card-footer">
          <span className="card-role">{project.role}</span>
          <Button
            variant="ghost"
            size="sm"
            className="card-expand"
            onClick={(e) => { e.stopPropagation(); onClick(); }}
          >
            View Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </article>
  );
}