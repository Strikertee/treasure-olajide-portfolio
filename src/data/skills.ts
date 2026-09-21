export type ProficiencyLevel = 'primary' | 'working' | 'exploring';

export interface SkillItem {
  name: string;
  level: ProficiencyLevel;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: 'AI / Machine Learning',
    icon: 'brain',
    items: [
      { name: 'Python', level: 'primary' },
      { name: 'PyTorch', level: 'primary' },
      { name: 'Scikit-learn', level: 'primary' },
      { name: 'Computer Vision', level: 'primary' },
      { name: 'YOLO (v8, v11)', level: 'primary' },
      { name: 'OpenCV', level: 'primary' },
      { name: 'LLMs & RAG', level: 'primary' },
      { name: 'AI Agents', level: 'primary' },
      { name: 'Model Optimization', level: 'primary' },
      { name: 'Edge Deployment', level: 'working' }
    ]
  },
  {
    category: 'Backend Engineering',
    icon: 'server',
    items: [
      { name: 'Python', level: 'primary' },
      { name: 'FastAPI', level: 'primary' },
      { name: 'Flask', level: 'working' },
      { name: 'PHP', level: 'working' },
      { name: 'REST APIs', level: 'primary' },
      { name: 'PostgreSQL', level: 'working' },
      { name: 'MySQL', level: 'working' },
      { name: 'Database Design', level: 'working' }
    ]
  },
  {
    category: 'Frontend & Web',
    icon: 'code',
    items: [
      { name: 'React', level: 'primary' },
      { name: 'JavaScript (ES6+)', level: 'primary' },
      { name: 'HTML5 / CSS3', level: 'primary' },
      { name: 'Vite', level: 'primary' },
      { name: 'Responsive Design', level: 'primary' },
      { name: 'CSS Animations', level: 'working' }
    ]
  },
  {
    category: 'Data & Analytics',
    icon: 'chart',
    items: [
      { name: 'NumPy', level: 'primary' },
      { name: 'Pandas', level: 'primary' },
      { name: 'Matplotlib / Seaborn', level: 'working' },
      { name: 'Statistical Analysis', level: 'working' },
      { name: 'Data Visualization', level: 'working' }
    ]
  },
  {
    category: 'Tools & Workflow',
    icon: 'tools',
    items: [
      { name: 'Git / GitHub', level: 'primary' },
      { name: 'VS Code', level: 'primary' },
      { name: 'Streamlit', level: 'primary' },
      { name: 'Linux / CLI', level: 'working' },
      { name: 'Docker', level: 'exploring' },
      { name: 'CI/CD', level: 'exploring' }
    ]
  }
];

export const proficiencyLevels: Record<ProficiencyLevel, { label: string; description: string }> = {
  primary: { label: 'Primary', description: 'Deep practical experience, used in production projects' },
  working: { label: 'Working', description: 'Solid understanding, used in projects, still growing' },
  exploring: { label: 'Exploring', description: 'Actively learning, experimental usage' }
};