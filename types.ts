export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Box' | 'Layers' | 'Zap' | 'Monitor';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PORTFOLIO = 'work',
  SERVICES = 'services',
  CONTACT = 'contact',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}