export type RoleType =
  | 'software-engineer'
  | 'aiml-engineer'
  | 'backend-engineer'
  | 'data-engineer'
  | 'data-analyst'
  | 'fullstack'

export interface RoleConfig {
  id: RoleType
  title: string
  subtitle: string
  tagline: string
  accentColor: string
  primaryMetric: string
  featuredProjects: string[]
  highlightedSkills: string[]
  icon: string
  description: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  duration: string
  startDate: string
  endDate: string
  current: boolean
  achievements: {
    text: string
    relevantFor: RoleType[]
  }[]
  techStack: string[]
  logo?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  achievements: string[]
  techStack: string[]
  tags: string[]
  relevantFor: RoleType[]
  priority: number
  github?: string
  live?: string
  image?: string
}

export interface Publication {
  id: string
  title: string
  journal: string
  date: string
  achievement: string
  description: string
  pdf?: string
  doi?: string
}

export interface Skill {
  category: string
  command: string
  items: string[]
}
