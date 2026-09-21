export interface RecognitionItem {
  id: string;
  title: string;
  category: string;
  year: string;
  achievement: string;
  description: string;
  highlights: string[];
  icon: 'trophy' | 'award' | 'medal';
}

export interface MilestoneYear {
  year: string;
  items: string[];
}

export const recognition: RecognitionItem[] = [
  {
    id: 'iesa-forge',
    title: 'Winner — IESA Forge the Future 2026',
    category: 'AI/ML Competition',
    year: '2026',
    achievement: '1st Place',
    description: 'Emerged victorious with the team in the IESA Forge the Future 2026 competition with IntelliCT, an ANPR system built for Nigerian and African environment.',
    highlights: ['Faculty of Engineering, UI', 'Edge AI innovation', 'ANPR system', 'ITS'],
    icon: 'trophy'
  },
  {
    id: 'afretc-unilag',
    title: 'Top 15 in Africa — Afretec-UNILAG',
    category: 'Edtech Inclusive Innovation Challenge',
    year: '2026',
    achievement: 'Top 15 Finalist',
    description: 'Selected as the best team from UI and top 15 in Africa to head into the finals of an Edtech inclusive innovation challange.',
    highlights: ['Pan-African recognition', 'Edtech Innovation', 'Inclusive Innovation'],
    icon: 'award'
  }
];

export const milestones: MilestoneYear[] = [
  {
    year: '2026',
    items: [
      'Winner — IESA Forge the Future',
      'Top 15 in Africa — Afretec-UNILAG',
      'Launched PlasmoID AI (malaria detection)',
      'First hackathon participation & win'
    ]
  },
  {
    year: '2025',
    items: [
      'Began Computer Science at University of Ibadan',
      '3 years of tech experience'
    ]
  },
  {
    year: '2024',
    items: [
      'Early web development projects',
      'Self-taught programming foundations',
      'Discovered passion for AI/ML'
    ]
  }
];