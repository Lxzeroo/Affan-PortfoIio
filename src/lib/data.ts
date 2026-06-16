export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type PersonalInfo = {
  name: string;
  title: string;
  bio: string;
  subtext: string;
  resumeUrl: string;
  social: {
    email: string;
    github: string;
    linkedin: string;
  };
};

// Placeholder data - replace with real GitHub fetch if possible
export const projects: Project[] = [
  {
    id: 'promptly',
    title: 'Promptly',
    description: 'AI prompt optimizer with Bauhaus-inspired UI, built with Next.js and OpenRouter.',
    techStack: ['Next.js', 'OpenRouter', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Lxzeroo/Promptly',
    liveUrl: 'https://promptly.vercel.app',
  },
  {
    id: 'textfix',
    title: 'TextFix',
    description: 'Chrome extension (Manifest V3) for automatic text correction.',
    techStack: ['JavaScript', 'Chrome Extension API', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Lxzeroo/TextFix',
  },
  {
    id: 'expense-anomaly-detector',
    title: 'Personal Expense Anomaly Detector',
    description: 'ML project using Isolation Forest to detect anomalies in personal expense data, with Streamlit UI and CLI pipeline.',
    techStack: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'CLI'],
    githubUrl: 'https://github.com/Lxzeroo/expense-anomaly-detector',
  },
  {
    id: 'nemotron-terminal',
    title: 'Nemotron Terminal',
    description: 'A terminal emulator built with web technologies, featuring custom commands and themes.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubUrl: 'https://github.com/Lxzeroo/Nemotron-Terminal', // placeholder
  },
  // Add more projects here
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Streamlit', 'Flask', 'FastAPI', 'shadcn/ui'],
  },
  {
    title: 'ML / Data',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Isolation Forest'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git & GitHub', 'VS Code', 'Vercel', 'Netlify', 'Chrome Extension APIs', 'OpenRouter API', 'Docker', 'Postman'],
  },
];

export const personalInfo: PersonalInfo = {
  name: 'Affan',
  title: 'Aspiring SDE | Builder',
  bio: "I'm a builder who learns by shipping—taking ideas from concept to working deployed projects across web apps, browser extensions, and ML tooling. My focus is on creating practical solutions that solve real problems, whether it's optimizing prompts with AI, automating text corrections, detecting anomalies in expenses, or building custom terminals. I enjoy the full-cycle process: designing, coding, testing, and deploying, often exploring new technologies along the way. Each project is a chance to deepen my skills and deliver something tangible.",
  subtext: 'Full-stack builder shipping real projects, one repo at a time',
  resumeUrl: '/resume.pdf', // Place in public folder
  social: {
    email: 'affanimtiyaz2312@gmail.com', // Replace with real email
    github: 'https://github.com/Lxzeroo',
    linkedin: 'https://www.linkedin.com/in/affan-ahmed1/',
  },
};