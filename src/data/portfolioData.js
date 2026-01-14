export const personalInfo = {
  name: "Jana Radziuka",
  title: "Senior Front-End Developer",
  tagline: "Frontend Dev",
  location: "Riga, Latvia",
  email: "jana.radziuka@gmail.com",
  phone: "+317 293 295 45",
  experience: "7+ years",
  profileImage: "/img/photos/prof.jpeg",
};

export const about = {
  heading:
    'I <span class="highlight">love</span> building software.',
  description:
    'I`m detail-oriented Senior Front-End Developer with over <span class="highlight">7 years</span> of experience designing and implementing user-centric web applications. Proficient in modern <span class="highlight">React</span>, with expertise in <span class="highlight">CSS, TypeScript and Node.js</span>.',
};

export const skills = [
  "JAVASCRIPT",
  "CSS",
  "FIGMA",
  "GIT",
  "HTML",
  "REACT",
  "TYPESCRIPT",
  "NODE.JS",
  "REDUX",
  "EXPO",
  "REACT NATIVE",
  "FIREBASE",
];

export const techStack = [
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Git", icon: "git" },
];

export const experience = [
  {
    id: 1,
    title: "Founder",
    company: "Petopoly Dev",
    duration: "Present",
    dateRange: "Present",
    description:
      "Founded Petopoly Dev, focusing on mobile application development. Successfully developed and released a mobile app to Google Play production, built from start to end using React Native and Firebase backend.",
    responsibilities: [],
  },
  {
    id: 2,
    title: "Senior Front-End Developer",
    company: "Accenture",
    duration: "2021 - Present",
    dateRange: "Jan 2021 - Present",
    description: "4 years",
    responsibilities: [
      "Led development of scalable, high-performance web applications using React",
      "Architected reusable UI components and front-end libraries",
      "Designed complex state management solutions using Redux and Context API",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with UX/UI designers for intuitive interfaces",
      "Integrated RESTful APIs and GraphQL endpoints",
    ],
  },
  {
    id: 3,
    title: "Front-End Developer",
    company: "Accenture",
    duration: "2018 - 2021",
    dateRange: "Jan 2018 - Dec 2021",
    description: "3 years",
    responsibilities: [
      "Built responsive websites using HTML, CSS, and JavaScript",
      "Translated design mockups into pixel-perfect web pages",
      "Debugged and resolved UI/UX issues",
      "Integrated APIs and backend services",
      "Collaborated with designers and backend developers",
    ],
  },
];

export const formation = [
  {
    id: 1,
    title: "UI/UX Design",
    provider: "Origamid",
    duration: "17 hours",
    icon: "figma",
    color: "#A259FF",
  },
  {
    id: 2,
    title: "HTML & CSS",
    provider: "Origamid",
    duration: "23 hours",
    icon: "html",
    color: "#E44D26",
  },
  {
    id: 3,
    title: "CSS Flexbox & Grid",
    provider: "Origamid",
    duration: "8 hours",
    icon: "css",
    color: "#1572B6",
  },
  {
    id: 4,
    title: "JavaScript",
    provider: "Origamid",
    duration: "37 hours",
    icon: "javascript",
    color: "#F7DF1E",
  },
  {
    id: 5,
    title: "Advanced Programming with JS, HTML & CSS",
    provider: "Rodrigo Branas",
    duration: "12 hours",
    icon: "code",
    color: "#E44D26",
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  institution: "Riga Technical University",
  duration: "2014 - 2017",
};

export const projects = [
  {
    id: 1,
    title: "Streaming Entertainment Platform",
    description:
      "High-performance streaming platform delivering on-demand video content to millions of users.",
    technologies: ["React", "Redux", "Video APIs", "Responsive Design"],
    highlights: [
      "Built video player interface with adaptive streaming",
      "Optimized performance for smooth playback",
      "Implemented content discovery and recommendation UI",
    ],
    image: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 2,
    title: "PixelFlow",
    description:
      "High-performance image gallery with virtual scrolling, advanced filtering, and PWA support.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
    ],
    highlights: [
      "Implemented virtual scrolling with three-stage image rendering for optimal performance",
      "Built real-time search with debouncing and multi-faceted filtering system",
      "Created responsive layouts with masonry grid and justified row heights",
    ],
    image: "/img/photos/pixelFlow.png",
    liveUrl: "https://pixel-flow-three.vercel.app/",
    githubUrl: null,
  },
  {
    id: 3,
    title: "Multilingual Government Tax Platform",
    description:
      "Secure government tax management platform with multilingual support and CRM integration.",
    technologies: [
      "React",
      "TypeScript",
      "CRM Systems",
      "i18n",
      "API Integration",
    ],
    highlights: [
      "Developed bilingual interface with dynamic language switching",
      "Integrated complex CRM systems for data management",
      "Ensured security and compliance with government standards",
    ],
    image: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 4,
    title: "WorldPulse",
    description:
      "Interactive global country data dashboard with multiple chart types and world map visualization.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Recharts",
      "React Leaflet",
      "Zustand",
      "Tailwind CSS",
    ],
    highlights: [
      "Built comprehensive data visualization with 5 different chart types",
      "Integrated interactive world map with geographic visualizations",
      "Implemented debounced search and multi-select region filtering",
    ],
    image: "/img/photos/worldpulse.png",
    liveUrl: "https://world-pulse-weld.vercel.app/",
    githubUrl: null,
  },
  {
    id: 5,
    title: "GenAI Document Insights Platform",
    description:
      "AI-powered platform that generates key insights from documents and enables intelligent chat.",
    technologies: [
      "React",
      "TypeScript",
      "GenAI Integration",
      "Pixel-Perfect Design",
    ],
    highlights: [
      "Led front-end team in building AI-powered document analysis features",
      "Implemented pixel-perfect responsive UI from design specifications",
      "Developed interactive chat interface for document Q&A",
    ],
    image: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 6,
    title: "Lustrum - Tarot Mobile App",
    description:
      "Tarot reading mobile app with personalized spreads, Firebase backend, and in-app purchases.",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Google Sign-In",
      "In-App Purchases",
    ],
    highlights: [
      "Developed complete tarot reading experience with card spreads and interpretations",
      "Integrated Firebase services for authentication, database, and cloud functions",
      "Implemented monetization strategy with in-app purchases and Google Mobile Ads",
    ],
    image: null,
    video: "/img/photos/LustrumPromoVideo.mp4",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.petopoly.lustrum",
    githubUrl: null,
  },
];

export const languages = [
  { language: "English", proficiency: "Fluent" },
  { language: "Latvian", proficiency: "Native speaker" },
  { language: "Russian", proficiency: "Bilingual" },
];

export const contact = {
  title: "Contact me or follow my social media",
  links: [
    {
      id: 1,
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/jana-radziuka-1ab9291a7/",
      enabled: true,
    },
    {
      id: 3,
      name: "Github",
      icon: "github",
      url: "https://github.com/nondante",
      enabled: true,
    },
    {
      id: 4,
      name: "E-mail",
      icon: "email",
      url: "jana.radziuka@gmail.com",
      enabled: true,
      copyable: true,
    },
  ],
};

export const footer = {
  text: `©${new Date().getFullYear()} | Maius Torres de Souza`,
  altText: `©${new Date().getFullYear()} | Jana Radziuka`,
};
