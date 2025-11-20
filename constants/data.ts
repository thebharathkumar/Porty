import { Experience, Project, Publication, Skill } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'pace-ga',
    title: 'AI & Data Engineering Graduate Assistant',
    company: 'Pace University',
    location: 'New York, NY',
    duration: 'Mar 2025 - Present',
    startDate: '2025-03',
    endDate: 'Present',
    current: true,
    achievements: [
      {
        text: 'Achieved 60% reduction in processing time through AI-driven automation systems',
        relevantFor: ['aiml-engineer', 'data-engineer', 'software-engineer', 'backend-engineer', 'fullstack'],
      },
      {
        text: 'Implemented scalable AI solutions and DevOps infrastructure',
        relevantFor: ['aiml-engineer', 'backend-engineer', 'data-engineer', 'fullstack'],
      },
      {
        text: 'Developed automated workflows for data processing and analysis',
        relevantFor: ['data-engineer', 'data-analyst', 'software-engineer', 'fullstack'],
      },
    ],
    techStack: ['Python', 'AI/ML', 'DevOps', 'Automation', 'Data Processing'],
  },
  {
    id: 'jpmorgan',
    title: 'Quantitative Research Virtual Experience',
    company: 'JPMorgan Chase & Co. (Forage)',
    location: 'Remote',
    duration: 'July 2025',
    startDate: '2025-07',
    endDate: '2025-07',
    current: false,
    achievements: [
      {
        text: 'Developed probability of default models using advanced statistical techniques',
        relevantFor: ['aiml-engineer', 'data-analyst', 'data-engineer', 'fullstack'],
      },
      {
        text: 'Implemented dynamic programming algorithms for credit risk analysis',
        relevantFor: ['software-engineer', 'backend-engineer', 'aiml-engineer', 'fullstack'],
      },
      {
        text: 'Conducted quantitative analysis for financial risk assessment',
        relevantFor: ['data-analyst', 'aiml-engineer', 'data-engineer', 'fullstack'],
      },
    ],
    techStack: ['Python', 'Statistical Modeling', 'Financial Analysis', 'Dynamic Programming'],
  },
  {
    id: 'lbtc',
    title: 'Software Development Intern',
    company: "Let's Be the Change",
    location: 'Hybrid',
    duration: 'Sept 2023 - May 2024',
    startDate: '2023-09',
    endDate: '2024-05',
    current: false,
    achievements: [
      {
        text: 'Built cross-platform mobile and web system serving 1,000+ users with Flutter & React',
        relevantFor: ['software-engineer', 'fullstack', 'backend-engineer'],
      },
      {
        text: 'Achieved 40% capacity scaling through optimized architecture',
        relevantFor: ['software-engineer', 'backend-engineer', 'fullstack'],
      },
      {
        text: 'Integrated Firebase and REST APIs for real-time data synchronization',
        relevantFor: ['backend-engineer', 'software-engineer', 'fullstack'],
      },
    ],
    techStack: ['Flutter', 'React', 'Firebase', 'REST APIs', 'TypeScript', 'Mobile Development'],
  },
  {
    id: 'compsoft',
    title: 'Data Engineering Intern',
    company: 'Compsoft Technologies',
    location: 'On-site',
    duration: 'Aug 2023 - Sept 2023',
    startDate: '2023-08',
    endDate: '2023-09',
    current: false,
    achievements: [
      {
        text: 'Processed and analyzed 50K+ records using Python and advanced data manipulation',
        relevantFor: ['data-engineer', 'data-analyst', 'backend-engineer', 'fullstack'],
      },
      {
        text: 'Achieved 85% data accuracy through rigorous validation and cleaning processes',
        relevantFor: ['data-engineer', 'data-analyst', 'fullstack'],
      },
      {
        text: 'Built real-time visualization dashboard for data insights',
        relevantFor: ['data-analyst', 'data-engineer', 'fullstack'],
      },
    ],
    techStack: ['Python', 'Pandas', 'Data Analysis', 'Visualization', 'ETL'],
  },
  {
    id: 'alltramatic',
    title: 'Software Engineering Intern',
    company: 'Alltramatic',
    location: 'Remote',
    duration: 'Mar 2023 - Apr 2023',
    startDate: '2023-03',
    endDate: '2023-04',
    current: false,
    achievements: [
      {
        text: 'Automated satellite image processing workflows using Python scripts',
        relevantFor: ['software-engineer', 'backend-engineer', 'data-engineer', 'fullstack'],
      },
      {
        text: 'Developed workflow orchestration for geospatial data processing',
        relevantFor: ['data-engineer', 'software-engineer', 'backend-engineer', 'fullstack'],
      },
      {
        text: 'Optimized image processing pipeline for efficiency',
        relevantFor: ['software-engineer', 'data-engineer', 'fullstack'],
      },
    ],
    techStack: ['Python', 'Automation', 'Geospatial Data', 'Image Processing'],
  },
]

export const projects: Project[] = [
  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction System',
    description: 'Scalable ML pipeline with 90%+ accuracy for customer retention',
    longDescription: 'Built an end-to-end machine learning system for predicting customer churn with advanced feature engineering and model optimization.',
    achievements: [
      'Achieved 90%+ prediction accuracy using ensemble methods',
      'Implemented MLOps pipeline for continuous model training',
      'Reduced customer churn by 25% through proactive interventions',
    ],
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'MLflow', 'Docker', 'AWS'],
    tags: ['ML', 'Logistic Regression', 'KNN', 'Gradient Boosting', 'MLOps'],
    relevantFor: ['aiml-engineer', 'data-engineer', 'data-analyst', 'fullstack'],
    priority: 1,
    github: 'https://github.com/thebharathkumar',
  },
  {
    id: 'transportation-pipeline',
    title: 'Transportation Analytics Data Pipeline',
    description: 'Comprehensive ETL workflows with predictive maintenance',
    longDescription: 'Designed and implemented a robust data pipeline for transportation analytics with real-time processing and predictive capabilities.',
    achievements: [
      'Processed 100K+ transportation records daily',
      'Reduced data processing time by 60%',
      'Implemented predictive maintenance models',
    ],
    techStack: ['Python', 'Apache Airflow', 'AWS', 'PostgreSQL', 'Scikit-learn'],
    tags: ['Data Pipeline', 'ETL', 'Apache Airflow', 'AWS', 'ML'],
    relevantFor: ['data-engineer', 'backend-engineer', 'aiml-engineer', 'fullstack'],
    priority: 1,
    github: 'https://github.com/thebharathkumar',
  },
  {
    id: 'medicinal-plants',
    title: 'Medicinal Plants Classification',
    description: 'Deep CNN for identifying medicinal plants - 93% accuracy',
    longDescription: 'Research project using deep learning to classify medicinal and edible plants in the Western Ghats region.',
    achievements: [
      'Achieved 93%+ classification accuracy',
      'Published in Atlantis Highlights in Computer Sciences',
      'Processed 10K+ plant images',
    ],
    techStack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Computer Vision'],
    tags: ['Deep Learning', 'CNN', 'Computer Vision', 'Research'],
    relevantFor: ['aiml-engineer', 'data-analyst', 'fullstack'],
    priority: 2,
  },
  {
    id: 'data-processing',
    title: 'Real-time Data Processing System',
    description: 'High-performance data processing with 85% accuracy',
    longDescription: 'Built a real-time data processing system handling 50K+ records with visualization capabilities.',
    achievements: [
      'Processed 50K+ records in real-time',
      'Achieved 85% data accuracy',
      'Built interactive dashboards',
    ],
    techStack: ['Python', 'Pandas', 'Power BI', 'SQL', 'ETL'],
    tags: ['Data Engineering', 'ETL', 'Visualization', 'Real-time Processing'],
    relevantFor: ['data-engineer', 'data-analyst', 'backend-engineer', 'fullstack'],
    priority: 2,
    github: 'https://github.com/thebharathkumar',
  },
]

export const publications: Publication[] = [
  {
    id: 'medicinal-plants-paper',
    title: 'A Deep CNN-Based Approach for Identifying Medicinal and Edible Plants in the Western Ghats Region',
    journal: 'Atlantis Highlights in Computer Sciences',
    date: 'December 2023',
    achievement: '93%+ accuracy in plant classification',
    description: 'Research on using deep convolutional neural networks to identify and classify medicinal and edible plants native to the Western Ghats region of India.',
  },
  {
    id: 'drowsiness-detection',
    title: 'AI-Driven Driver Drowsiness Detection System',
    journal: 'International Journal of All Research Education & Scientific Methods',
    date: 'November 2023',
    achievement: '90% detection accuracy',
    description: 'Developed an AI-powered system for real-time driver drowsiness detection using computer vision and deep learning techniques.',
  },
]

export const skills: Skill[] = [
  {
    category: 'Data Pipeline Tools',
    command: 'data_pipeline_tools',
    items: ['Apache Airflow', 'Apache Spark', 'PySpark', 'Hadoop', 'Databricks'],
  },
  {
    category: 'Cloud Platforms',
    command: 'cloud_platforms',
    items: ['AWS', 'Azure', 'Google Cloud', 'S3', 'EC2', 'Lambda'],
  },
  {
    category: 'Programming',
    command: 'programming',
    items: ['Python', 'Java', 'SQL', 'C++', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'ML & AI',
    command: 'ml_&_ai',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost', 'MLflow'],
  },
  {
    category: 'DevOps & Infrastructure',
    command: 'devops_&_infrastructure',
    items: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Visualization',
    command: 'visualization',
    items: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    category: 'Databases',
    command: 'databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
  },
  {
    category: 'Frontend',
    command: 'frontend',
    items: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'TypeScript'],
  },
]

export const education = {
  degree: 'Master of Science in Computer Science',
  school: 'Pace University',
  location: 'New York, NY',
  period: '2024 - 2026',
  gpa: '3.8/4.0',
  focus: 'AI/ML, Data Engineering, Software Development',
}

export const contactInfo = {
  email: 'bharath.kr702@gmail.com',
  location: 'New York, NY',
  linkedin: 'https://linkedin.com/in/thebharathkumar',
  github: 'https://github.com/thebharathkumar',
}
