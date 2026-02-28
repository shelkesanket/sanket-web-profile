export const skills = [
  { name: 'React', level: 96, category: 'core' },
  { name: 'TypeScript', level: 90, category: 'core' },
  { name: 'JavaScript', level: 95, category: 'core' },
  { name: 'Redux / RTK', level: 88, category: 'state' },
  { name: 'RTK Query', level: 85, category: 'state' },
  { name: 'React Hook Form', level: 90, category: 'forms' },
  { name: 'Micro Frontends', level: 85, category: 'arch' },
  { name: 'Single-SPA', level: 82, category: 'arch' },
  { name: 'HTML / CSS', level: 95, category: 'core' },
  { name: 'Accessibility (WCAG)', level: 88, category: 'quality' },
  { name: 'Testing Library', level: 87, category: 'quality' },
  { name: 'Git / GitLab', level: 92, category: 'devops' },
  { name: 'Jenkins / CI-CD', level: 78, category: 'devops' },
  { name: 'Node.js', level: 72, category: 'backend' },
]

export const experiences = [
  {
    company: 'Barclays',
    role: 'Frontend Developer',
    period: 'Apr 2022 — Present',
    location: 'Pune, India',
    highlights: [
      'Migrated a large-scale monolithic application to Micro-Frontend architecture using Single-SPA, enabling independent deployments.',
      'Built a common component library, reducing code duplication and improving development efficiency by 30%.',
      'Increased Unit Test coverage to 85%+ and Mutation Testing score to 90%+.',
      'Developed and maintained an API Catalog tool, improving team productivity by 25% and reducing API search time by 65%.',
      'Implemented Service Worker for caching and offline capabilities, reducing unnecessary network calls.',
    ],
  },
  {
    company: 'Cognizant',
    role: 'Associate Developer',
    period: 'Dec 2019 — Apr 2022',
    location: 'Bengaluru, India',
    highlights: [
      'Redesigned Owner Portal tailored for Nissan/Infiniti vehicle owners.',
      'Collaborated with stakeholders to gather requirements and ensure alignment with user needs.',
      'Utilized Android Studio to visualize the application in both iOS and Android platforms.',
      'Led development and deployment of key projects, consistently delivering high-quality solutions on time.',
    ],
  },
]

export const projects = [
  {
    title: 'Micro-Frontend Platform',
    description:
      'Architected and migrated a large-scale monolithic banking application to a Micro-Frontend architecture using Single-SPA. Enabled modular development, independent deployments, and team autonomy across 10+ squads.',
    tech: ['React', 'Single-SPA', 'TypeScript', 'Module Federation', 'Jenkins'],
    color: '#E8FF47',
    category: 'Architecture',
  },
  {
    title: 'Enterprise Component Library',
    description:
      'Designed and built a standardized UI component library used across multiple banking applications. Reduced code duplication by 40% and accelerated feature development by 30%.',
    tech: ['React', 'TypeScript', 'Storybook', 'CSS Modules', 'Testing Library'],
    color: '#A8EDFF',
    category: 'Library',
  },
  {
    title: 'API Catalog Tool',
    description:
      'Built an internal developer tool for discovering, documenting, and testing APIs. Improved team productivity by 25% and reduced API search time by 65% across engineering teams.',
    tech: ['React', 'RTK Query', 'TypeScript', 'Redux', 'Figma'],
    color: '#FFB7A8',
    category: 'Developer Tool',
  },
  {
    title: 'Nissan/Infiniti Owner Portal',
    description:
      'Redesigned and rebuilt the owner portal for Nissan and Infiniti vehicle owners from ground up. Delivered a highly accessible, cross-platform experience aligning with WCAG 2.1 standards.',
    tech: ['React', 'JavaScript', 'WCAG 2.1', 'Redux', 'REST API'],
    color: '#C8FFD4',
    category: 'Enterprise App',
  },
]
