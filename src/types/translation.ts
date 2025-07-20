import type { Translations } from ".";

export interface HeaderTranslations {
    profession: string;
  }

  export interface NavigationTranslations {
    profile: string;
    experience: string;
    projects: string;
    education: string;
    skills: string;
    certifications: string;
  }

  export interface ProfileTranslations {
    profileTitle: string;
    profileDescription: string;
    profileDescription2: string;
  }

  export interface ExperienceTranslations {
    experienceTitle: string;
    position: string;
    company: string;
    period: string;
    responsibilities: string;
    resp1: string;
    resp2: string;
    resp3: string;
  }

  export interface ProjectsTranslations {
    projectsTitle: string;
    project1: string;
    project1Desc: string;
    project2: string;
    project2Desc: string;
    project3: string;
    project3Desc: string;
    project4: string;
    project4Desc: string;
  }

  export interface EducationTranslations {
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
  }

  export interface SkillsTranslations {
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
  }

  export interface LanguagesTranslations {
    languagesTitle: string;
    spanish: string;
    english: string;
  }

  export interface CertificationsTranslations {
    certificationsTitle: string;
  }

  export type TranslationSection =
    | 'header'
    | 'navigation'
    | 'profile'
    | 'experience'
    | 'projects'
    | 'education'
    | 'skills'
    | 'languages'
    | 'certifications';

  export type TranslationKey<T extends TranslationSection> =
    T extends 'header' ? keyof HeaderTranslations :
    T extends 'navigation' ? keyof NavigationTranslations :
    T extends 'profile' ? keyof ProfileTranslations :
    T extends 'experience' ? keyof ExperienceTranslations :
    T extends 'projects' ? keyof ProjectsTranslations :
    T extends 'education' ? keyof EducationTranslations :
    T extends 'skills' ? keyof SkillsTranslations :
    T extends 'languages' ? keyof LanguagesTranslations :
    T extends 'certifications' ? keyof CertificationsTranslations :
    never;

  export type PartialTranslations = Partial<Translations>;
  
  export type TranslationExists<K extends keyof Translations> = K extends keyof Translations ? true : false;