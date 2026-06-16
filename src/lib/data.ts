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
    id: 'billcraft',
    title: 'BillCraft',
    description: 'Restaurant billing and invoice management software built using Java and Object-Oriented Programming principles.',
    techStack: ['Java', 'OOP'],
    githubUrl: 'https://github.com/Lxzeroo/BillCraft', // placeholder
  },
  {
    id: 'leave-management',
    title: 'Leave Management System',
    description: 'Employee leave request and approval management application developed using Java.',
    techStack: ['Java', 'OOP'],
    githubUrl: 'https://github.com/Lxzeroo/Leave-Management-System', // placeholder
  },
  {
    id: 'test-fix',
    title: 'Test-Fix',
    description: 'Chrome extension that automatically detects and corrects grammatical mistakes in pasted text.',
    techStack: ['JavaScript', 'Chrome Extension'],
    githubUrl: 'https://github.com/Lxzeroo/TestFix', // placeholder
  },
  {
    id: 'nemotron-terminal',
    title: 'Nemotron Terminal',
    description: 'Cyberpunk-themed AI terminal powered by NVIDIA Nemotron APIs with futuristic UI, intelligent conversations, and terminal-inspired interactions.',
    techStack: ['Python', 'FastAPI', 'NVIDIA Nemotron', 'AI'],
    githubUrl: 'https://github.com/Lxzeroo/Nemotron-Terminal', // placeholder
  },
  {
    id: 'promptly-ai',
    title: 'Promptly AI',
    description: 'Transforms messy startup ideas into structured MVP prompts for AI tools, founders, and developers.',
    techStack: ['Prompt Engineering', 'AI', 'Web Development'],
    githubUrl: 'https://github.com/Lxzeroo/Promptly', // placeholder
  },
  {
    id: 'expense-anomaly-detector',
    title: 'Expense Anomaly Detector',
    description: 'Machine learning application that detects unusual spending behavior using Isolation Forest anomaly detection.',
    techStack: ['Python', 'Machine Learning', 'Isolation Forest'],
    githubUrl: 'https://github.com/Lxzeroo/expense-anomaly-detector',
  },
  // Add more projects here
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'FastAPI'],
  },
  {
    title: 'Databases',
    skills: ['SQL', 'MySQL'],
  },
  {
    title: 'AI & Data',
    skills: ['Machine Learning', 'Isolation Forest', 'Prompt Engineering', 'NVIDIA Nemotron'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export const personalInfo: PersonalInfo = {
  name: 'AFFAN IMTHIYAZ AHMED',
  title: 'Full-Stack Developer • AI Engineer • Product Builder',
  bio: 'I build full-stack applications, AI-powered products, automation tools, and intelligent software solutions. My focus is on creating practical technology that solves real-world problems while continuously improving my skills in software engineering, artificial intelligence, product development, and scalable system design.',
  subtext: 'Building intelligent software, autonomous AI systems, and scalable web applications.',
  resumeUrl: '/resume.pdf', // Place in public folder
  social: {
    email: 'affanimtiyaz2312@gmail.com',
    github: 'https://github.com/Lxzeroo',
    linkedin: 'https://www.linkedin.com/in/affan-ahmed1/',
  },
};