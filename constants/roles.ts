import { RoleConfig, RoleType } from '@/types'

// Default configuration when viewing all roles
export const defaultRoleConfig: RoleConfig = {
  id: 'all' as RoleType,
  title: 'AI/ML Engineer',
  subtitle: 'Intelligent systems & scalable solutions',
  tagline: 'AI/ML Engineer • Software Engineer • Data Engineer',
  accentColor: '#50207A', // Deep purple
  primaryMetric: '93% ML accuracy',
  featuredProjects: ['churn-prediction', 'medicinal-plants', 'transportation-pipeline'],
  highlightedSkills: ['TensorFlow', 'Python', 'PyTorch', 'AWS', 'React', 'Data Pipelines'],
  icon: '🧠',
  description: 'Building intelligent systems with machine learning, robust software, and scalable data solutions',
}

export const roleConfigs: Record<RoleType, RoleConfig> = {
  'software-engineer': {
    id: 'software-engineer',
    title: 'Software Engineer',
    subtitle: 'Building scalable applications',
    tagline: 'Software Engineer & Full-Stack Developer',
    accentColor: '#838CE5', // Periwinkle
    primaryMetric: '1,000+ users served',
    featuredProjects: ['transportation-pipeline', 'churn-prediction'],
    highlightedSkills: ['React', 'Flutter', 'Python', 'TypeScript', 'Node.js'],
    icon: '⚡',
    description: 'Crafting elegant solutions with modern technologies',
  },
  'aiml-engineer': {
    id: 'aiml-engineer',
    title: 'AI/ML Engineer',
    subtitle: 'Intelligent systems & deep learning',
    tagline: 'AI/ML Engineer & Data Scientist',
    accentColor: '#D6B9FC', // Soft lavender
    primaryMetric: '93% ML accuracy achieved',
    featuredProjects: ['churn-prediction', 'medicinal-plants'],
    highlightedSkills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'MLOps'],
    icon: '🧠',
    description: 'Building intelligent systems that learn and adapt',
  },
  'backend-engineer': {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    subtitle: 'Robust APIs & microservices',
    tagline: 'Backend Engineer & System Architect',
    accentColor: '#838CE5', // Periwinkle
    primaryMetric: '60% efficiency boost',
    featuredProjects: ['transportation-pipeline', 'churn-prediction'],
    highlightedSkills: ['Python', 'Java', 'REST APIs', 'Microservices', 'Docker'],
    icon: '🔧',
    description: 'Architecting scalable backend systems and APIs',
  },
  'data-engineer': {
    id: 'data-engineer',
    title: 'Data Engineer',
    subtitle: 'ETL pipelines & data infrastructure',
    tagline: 'Data Engineer & Pipeline Architect',
    accentColor: '#D6B9FC', // Soft lavender
    primaryMetric: '50K+ records processed',
    featuredProjects: ['transportation-pipeline', 'data-processing'],
    highlightedSkills: ['Apache Airflow', 'Spark', 'AWS', 'ETL', 'Data Pipelines'],
    icon: '📊',
    description: 'Designing robust data pipelines and infrastructure',
  },
  'data-analyst': {
    id: 'data-analyst',
    title: 'Data Analyst',
    subtitle: 'Insights & visualization',
    tagline: 'Data Analyst & Business Intelligence',
    accentColor: '#838CE5', // Periwinkle
    primaryMetric: '85% data accuracy',
    featuredProjects: ['data-processing', 'churn-prediction'],
    highlightedSkills: ['Power BI', 'Tableau', 'SQL', 'Python', 'Data Visualization'],
    icon: '📈',
    description: 'Transforming data into actionable insights',
  },
  'fullstack': {
    id: 'fullstack',
    title: 'Full Stack Developer',
    subtitle: 'End-to-end solutions',
    tagline: 'Full Stack Engineer & Product Developer',
    accentColor: '#D6B9FC', // Soft lavender
    primaryMetric: 'Complete product delivery',
    featuredProjects: ['transportation-pipeline', 'churn-prediction', 'medicinal-plants'],
    highlightedSkills: ['React', 'Python', 'TypeScript', 'AWS', 'Full Stack'],
    icon: '🚀',
    description: 'Building complete solutions from frontend to backend',
  },
}

export const roleOrder: RoleType[] = [
  'software-engineer',
  'aiml-engineer',
  'backend-engineer',
  'data-engineer',
  'data-analyst',
  'fullstack',
]
