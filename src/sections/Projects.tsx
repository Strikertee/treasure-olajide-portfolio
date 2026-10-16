import { useState } from 'react';
import { projects, projectEvolution } from '../data/projects.ts';
import ProjectCard from '../components/ProjectCard.tsx';
import ProjectEvolution from '../components/ProjectEvolution.tsx';
import Button from '../components/Button.tsx';
import Tag from '../components/Tag.tsx';
import './Projects.css';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const featuredProjects = projects.filter(p => p.id !== 'plasmoid-ai');

  return (
    <section id="work" className="projects" aria-labelledby="projects-title">
      <div className="container">
        <header className="section-header">
          <Tag variant="primary" size="sm" className="section-tag">
            Selected Work
          </Tag>
          <h2 id="projects-title" className="section-title display-md">
            Selected Work
          </h2>
          <p className="section-subtitle">
            A collection of systems, products and experiments I've worked on across AI, computer vision, software and product development.
          </p>
        </header>

        <div className="projects-grid" role="list">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setExpandedProject(project.id)}
              isExpanded={expandedProject === project.id}
              onClose={() => setExpandedProject(null)}
            />
          ))}
        </div>

        <div className="projects-evolution-wrapper">
          <ProjectEvolution evolution={projectEvolution} />
        </div>

        <div className="projects-cta">
          <Button variant="ghost" size="lg">
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
