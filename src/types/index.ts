import type { Project, ProjectEvolution } from '../data/projects';
import type { Experience, Education } from '../data/experience';
import type { RecognitionItem, MilestoneYear } from '../data/recognition';
import type { SkillCategory, ProficiencyLevel } from '../data/skills';

export interface NavLink {
  href: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  shortTitle: string;
  status: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  tiktok: string;
  twitter: string;
  tagline: string;
  bio: string;
  availability: string;
  hero: {
    headline: string;
    subheadline: string;
    rotatingTexts: string[];
    stats: { value: string; label: string }[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    interests: string[];
  };
  contact: {
    heading: string;
    subheading: string;
    formNote: string;
  };
  footer: {
    copyright: string;
  };
}

export interface CurrentlyBuildingItem {
  id: string;
  name: string;
  emoji: string;
  description: string;
  status: string;
}

export interface DevionsInfo {
  name: string;
  tagline: string;
  description: string;
  type: string;
  pillars: string[];
  projects: { name: string; category: string }[];
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  as?: React.ElementType;
  href?: string;
}

export type TagVariant = 'default' | 'primary' | 'blue' | 'cyan' | 'devions' | 'active' | 'evolving' | 'exploring';
export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  size?: TagSize;
  className?: string;
}

export type CardVariant = 'default' | 'interactive' | 'elevated' | 'flat';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  interactive?: boolean;
  padding?: CardPadding;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  isExpanded: boolean;
  onClose: () => void;
}

export interface ProjectEvolutionProps {
  evolution: ProjectEvolution;
}

export interface ExperienceSectionProps {
  experience: Experience[];
  education: Education[];
}

export interface RecognitionSectionProps {
  recognition: RecognitionItem[];
  milestones: MilestoneYear[];
}

export interface SkillsSectionProps {
  skills: SkillCategory[];
  proficiencyLevels: Record<ProficiencyLevel, { label: string; description: string }>;
}

export interface DevionsSectionProps {
  devions: DevionsInfo;
}

export interface CurrentlyBuildingProps {
  currentlyBuilding: CurrentlyBuildingItem[];
}