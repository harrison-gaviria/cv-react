import type { LucideIcon } from 'lucide-react';

export type Language = 'es' | 'en';

export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface PersonalInfo {
  name: string;
  contactInfo: ContactInfo;
}

export interface Skill {
  name: string;
  icon?: LucideIcon;
}

export interface Certification {
  name: string;
  url: string;
  year: string;
  institution?: string;
}

export interface SkillsData {
  frontend: string[];
  backend: string[];
  languages: string[];
  databases: string[];
  devops: string[];
  cloud: string[];
  ai: string[];
}

export interface Project {
  title: string;
  description: string;
  color: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
  status?: string;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

// Component Props Types
export interface SkillBadgeProps {
  skill: string;
  icon?: LucideIcon;
}

export interface SectionProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export interface HeaderProps {
  personalInfo: PersonalInfo;
}

export interface SkillsSectionProps {
  skillsData: SkillsData;
}

export interface CertificationsProps {
  certifications: Certification[];
}

export interface Translations {
  profession: string;
  profile: string;
  experience: string;
  projects: string;
  education: string;
  skills: string;
  certifications: string;
  profileTitle: string;
  profileDescription: string;
  profileDescription2: string;
  experienceTitle: string;
  position: string;
  company: string;
  period: string;
  responsibilities: string;
  resp1: string;
  resp2: string;
  resp3: string;
  projectsTitle: string;
  project1: string;
  project1Desc: string;
  project2: string;
  project2Desc: string;
  project3: string;
  project3Desc: string;
  project4: string;
  project4Desc: string;
  educationTitle: string;
  highSchool: string;
  highSchoolInst: string;
  techDegree: string;
  engineering: string;
  engineeringStatus: string;
  awsFoundations: string;
  awsDeveloping: string;
  designPatterns: string;
  uxDesign: string;
  skillsTitle: string;
  frontend: string;
  backend: string;
  languages: string;
  versionControl: string;
  devops: string;
  databases: string;
  cloud: string;
  ai: string;
  additional: string;
  additionalSkills: string[];
  languagesTitle: string;
  spanish: string;
  english: string;
  certificationsTitle: string;
  contactTitle: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface TranslationData {
  es: Translations;
  en: Translations;
}