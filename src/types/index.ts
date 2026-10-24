export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  isExternal?: boolean;
}

export interface ProfileConfig {
  name: string;
  title: string;
  headline: string;
  supportingText: string;
  shortBio: string[];
  location: string;
  email: string;
  phone?: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;
  resumeLastUpdated?: string;
  avatarPlaceholderText: string;
  primaryInterests: string[];
  careerGoals: string[];
  currentlyExploring: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
  notes?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Computer Vision & AI' | 'Full-Stack & LLM' | 'IoT & Embedded' | 'Other';
  shortDescription: string;
  problemStatement: string;
  overview: string;
  technologies: string[];
  myContribution: string[];
  keyFeatures: string[];
  githubUrl?: string; // empty string or undefined if placeholder
  liveUrl?: string;
  isFeatured: boolean;
  status: 'Prototype Completed' | 'In Active Development' | 'Hardware Validated';
  futureRoadmap?: string[];
  imagePlaceholderTitle?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  university: string;
  period: string;
  location: string;
  cgpa?: string;
  courseworkHighlights: string[];
  notes?: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  type: 'Project' | 'Milestone' | 'Academic' | 'Exploration';
  summary: string;
  takeaways: string[];
}
