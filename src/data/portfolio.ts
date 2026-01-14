// Type Definitions

export interface PersonalInfo {
  name: string;
  nickname: string;
  headline: string;
  subHeadline: string;
  bio: string;
  location: string;
  email: string;
  availability: {
    status: "available" | "busy" | "limited";
    message: string;
  };
}

export type TechItem = string;

export interface FlagshipProject {
  id: string;
  title: string;
  link: string;
  focus: string;
  description: string;
  image?: string;
  logo?: string;
  techStack: string[];
}

export interface ClientProject {
  id: string;
  title: string;
  client: string;
  objective: string;
  logo?: string;
  techStack?: string[];
}

export interface EducationItem {
  level: string;
  institution: string;
  program?: string;
  status?: string;
  logo?: string;
  isCurrent?: boolean;
}

export interface Leadership {
  organization: string;
  role: string;
  period: string;
  logo?: string;
  link?: string;
  isCurrent?: boolean;
}

export interface TechStack {
  primary: string[];
  secondary: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
}

// Personal Info

export const personalInfo: PersonalInfo = {
  name: "Kenneth Bulaga",
  nickname: "Kenzo",
  headline: "Hi, I'm Kenneth Bulaga.",
  subHeadline: "4th-Year BSIT Student & Freelance Developer.",
  bio: "Building accessible and scalable institutional systems. Currently serving as an SSC Senator and architecting centralized student service platforms deployed at St. John Paul II College of Davao.",
  location: "Based in Davao City, Philippines.",
  email: "kennethbulaga.dev@gmail.com",
  availability: {
    status: "available",
    message: "Open to freelance projects",
  },
};

// Flagship Projects

export const flagshipProjects: FlagshipProject[] = [
  {
    id: "jp-connect",
    title: "JP Connect",
    link: "https://jpconnect.vercel.app/",
    focus: "Student Services / Zero-Cost Architecture",
    description:
      "The official 'Companion for Campus Life' for every JPCEAN. Engineered as a public-access student service platform optimized for zero-cost infrastructure. Features a powerful Exam Schedule Lookup (batch search by subject code, offer code, or instructor), SSC Clearance tracking, and Officer Directory. Currently integrating the Office of Student Affairs (OSA) suite.",
    image: "/projects/jpconnect.png",
    logo: "/logos/school-logo-nobg.png",
    techStack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS", "TanStack Query", "Upstash"],
  },
  {
    id: "sjp2cd-leaderboard",
    title: "SJP2CD Leaderboard",
    link: "https://sjp2cdintrams.netlify.app/",
    focus: "Performance Engineering / Zero-Cost Architecture",
    description:
      "The official real-time tracking system used during the SJP2CD Intramurals. Engineered to handle 1.4M requests with high concurrency on zero-cost infrastructure, proving that scalability doesn't require a high cloud bill.",
    image: "/projects/sjp2cd-leaderboard.png",
    logo: "/logos/school-logo-nobg.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
  },
  {
    id: "clip-and-style",
    title: "Clip & Style",
    link: "https://www.clipandstyle.tech/",
    focus: "Operational Efficiency",
    description:
      "Web-based appointment portal for barbershops addressing operational bottlenecks. Features a real-time queuing engine, automated appointment alerts, and a service quality monitoring system.",
    image: "/projects/clip-and-style.png",
    logo: "/logos/clipnstyle-logo.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Zod"],
  },
];

// Client Projects

export const clientProjects: ClientProject[] = [
  {
    id: "cswdo-management",
    title: "CSWDO Management System",
    client: "Government / Social Services",
    objective:
      "Engineered an event and inventory tracking system filtered by date and category. Built employee assignment monitoring with automated expiration alerts and real-time notifications.",
    logo: "/logos/cswdo-logo.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "TanStack Table", "Recharts"],
  },
  {
    id: "voicecook",
    title: "VoiceCook",
    client: "Culinary Tech",
    objective:
      "Developed a hands-free, voice-activated system for Philippine cuisine. Integrated 'meal analytics' to visualize nutritional consumption and generate data-driven dietary reports.",
    logo: "/logos/voicecook-logo.png",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase", "Voice Recognition", "Edamam API"],
  },
  {
    id: "moodlift",
    title: "MoodLift",
    client: "Health Tech",
    objective:
      "Created an accessible mental health tool featuring an automated chatbot, daily mood tracking analytics, and an interactive resource library.",
    logo: "/logos/moodlift-logo.png",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase", "Google Gemini"],
  },
  {
    id: "csu-intramurals",
    title: "CSU Intramurals System",
    client: "Cagayan State University",
    objective:
      "Deployed a high-performance event tracking engine capable of handling real-time score updates for university-wide sports events.",
    techStack: ["HTML5", "CSS3", "PHP", "JavaScript", "MySQL", "InfinityFree"],
  },
];

// Education

export const education: EducationItem[] = [
  {
    level: "College",
    institution: "St. John Paul II College of Davao",
    program: "Bachelor of Science in Information Technology",
    status: "Currently taking OJT • Expected Graduation: 2026",
    logo: "/logos/school-logo-nobg.png",
    isCurrent: true,
  },
  {
    level: "Senior High",
    institution: "St. John Paul II College of Davao",
    program: "STEM Strand",
    logo: "/logos/school-logo-nobg.png",
  },
  {
    level: "High School",
    institution: "Jesus J. Soriano National High School",
    logo: "/logos/high-school.jpg",
  },
  {
    level: "Elementary",
    institution: "Catalunan Grande Elementary School",
    logo: "/logos/elementary.jpg",
  },
];

// Leadership

export const leadership: Leadership[] = [
  {
    organization: "Supreme Student Council (SSC)",
    role: "Senator - Social Media Creatives Co-Chairperson",
    period: "2025–Present",
    logo: "/logos/ssc-logo.jpg",
    link: "https://www.facebook.com/sjp2cdSSC",
    isCurrent: true,
  },
  {
    organization: "Moonton Student Leaders PH",
    role: "Student Leader / Campus Representative",
    period: "2025",
    logo: "/logos/msl.jpg",
    link: "https://www.facebook.com/MSLPhilippines",
  },
  {
    organization: "JP Chronicles",
    role: "Social Media Manager",
    period: "2024–2025",
    logo: "/logos/JPCHRONS.png",
    link: "https://www.facebook.com/JPchrons",
  },
  {
    organization: "SJPIICD ELITES (ICT)",
    role: "Senator - Communications Chairperson",
    period: "2024–2025",
    logo: "/logos/ELITES.jpg",
    link: "https://www.facebook.com/sjp2cd.elites",
  },
];

// Tech Stack

export const techStack: TechStack = {
  primary: ["Next.js", "Supabase", "React Native", "Tailwind CSS"],
  secondary: ["TypeScript", "Node.js", "Firebase"],
};

// Social Links

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:kennethbulaga.dev@gmail.com",
    username: "kennethbulaga.dev@gmail.com",
  },
  {
    platform: "GitHub",
    url: "https://github.com/kennethbulaga",
    username: "kennethbulaga",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/kennethbulaga",
    username: "kennethbulaga",
  },
];

// Site Metadata

export const siteMetadata: SiteMetadata = {
  title: "Kenneth Bulaga",
  description:
    "4th-Year BSIT Student and Full Stack Developer based in Davao City. Specialized in accessible institutional systems.",
  keywords: [
    "Kenneth Bulaga",
    "Davao Developer",
    "Next.js",
    "SJP2CD",
    "Freelance",
    "Web Development",
    "Full Stack Developer",
    "React",
    "TypeScript",
  ],
};

// Navigation

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

// Resume

export const resumePath = "/resume.pdf";
