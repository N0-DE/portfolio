export interface SocialLinks {
  github: string;
  githubUsername: string;
  linkedin: string;
  email: string;
  location: string;
}

export interface PersonalDetails {
  name: string;
  initials: string;
  title: string;
  institution: string;
  institutionShort: string;
  degree: string;
  location: string;
  headline: string;
  heroBio: string;
  aboutEditorial: string[];
  philosophy: {
    title: string;
    description: string;
  }[];
  socials: SocialLinks;
  availability: {
    status: string;
    detail: string;
    openFor: string[];
  };
}

export interface CaseStudyArchitecture {
  layers: {
    name: string;
    components: string[];
    description: string;
  }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: string;
  domain: 'Computer Vision' | 'Enterprise Systems' | 'Embedded & IoT' | 'Automation & RPA' | 'Applied AI';
  featuredImage: string;
  repoUrl: string;
  liveUrl?: string;
  verificationStatus: 'Repository Verified' | 'Hardware Validated' | 'Production Deployed' | 'Architecture Verified';
  technologies: string[];
  summary: string;
  
  // Deep dive case study fields
  problemStatement: string;
  objectives: string[];
  myRole: string;
  engineeringApproach: string;
  technicalArchitecture: CaseStudyArchitecture;
  keyImplementationDetails: {
    headline: string;
    detail: string;
    codeSnippet?: string;
    language?: string;
  }[];
  engineeringChallenges: {
    challenge: string;
    solution: string;
    tradeoff: string;
  }[];
  verifiedResults: string[];
  nextProjectId?: string;
  prevProjectId?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    verificationNote?: string;
  }[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface PortfolioConfig {
  personal: PersonalDetails;
  projects: CaseStudy[];
  skillCategories: SkillCategory[];
  education: EducationEntry[];
}
