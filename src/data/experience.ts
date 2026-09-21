export type ExperienceType = 'leadership' | 'internship' | 'employment';

export interface Experience {
  id: string;
  title: string;
  role: string;
  period: string;
  type: ExperienceType;
  description: string;
  responsibilities: string[];
  technologies: string[];
  projects: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  level: string;
  period: string;
  focus: string;
}

export const experience: Experience[] = [
  {
    id: 'devions',
    title: 'Devions',
    role: 'Technical Lead',
    period: '2026 — Present',
    type: 'leadership',
    description: 'Co-leading a technology-focused team of 5 admins building products across AI, education, healthcare, computer vision and software.',
    responsibilities: [
      'Technical leadership & architecture decisions',
      'Product development & strategy',
      'AI/ML engineering across projects',
      'Team coordination & mentorship',
      'Project planning & execution',
      'Competition preparation & participation'
    ],
    technologies: ['Python', 'React', 'Computer Vision', 'LLMs', 'Product Design'],
    projects: ['RaphaID AI', 'IntelliCT', 'PadeeSpace']
  },
  {
    id: 'samace',
    title: 'Samace Tech Lab',
    role: 'Intern Student',
    period: '2026',
    type: 'internship',
    description: 'Full-stack web development internship focusing on frontend, backend, and database systems.',
    responsibilities: [
      'Frontend development with JavaScript/React',
      'Backend development with PHP',
      'Database design & management with MySQL',
      'REST API development & integration',
      'Web application deployment & maintenance',
      'Collaborative development workflows'
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'REST APIs', 'Git'],
    projects: []
  }
];

export const education: Education[] = [
  {
    id: 'uib',
    institution: 'University of Ibadan',
    degree: 'B.Sc. Computer Science',
    level: '300L',
    period: '2023 — Present',
    focus: 'Artificial Intelligence, Machine Learning, Agentic AI, LLMs, Computer Vision, Software Engineering'
  }
];