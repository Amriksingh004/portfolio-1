export const personalInfo = {
  name: "Amrik Singh",
  roleTitle: "Full-Stack Developer | MERN Stack Developer",
  shortBio: "I build modern, responsive, and user-friendly web applications.",
  fullBio: "I am a Computer Science and Engineering student at DAV University with practical experience in full-stack development, React.js, Firebase, Node.js, Express.js, and MongoDB. I am passionate about crafting high-performance, visually stunning web applications with intuitive user experiences and resilient backend architectures.",
  email: "as8469004@gmail.com",
  location: "Punjab, India",
  university: "DAV University, Jalandhar",
  degree: "B.Tech in Computer Science and Engineering",
  cgpa: "6.5",
  socials: {
    github: "https://github.com/amriksingh",
    linkedin: "https://linkedin.com/in/amriksingh",
    email: "mailto:as8469004@gmail.com",
  },
  resumeUrl: "/Amrik-Resume.pdf",
};

export const stats = [
  { label: "Completed Internships", value: "2", suffix: "" },
  { label: "Flagship Projects", value: "3+", suffix: "" },
  { label: "Technologies Mastered", value: "15+", suffix: "" },
  { label: "High School Score", value: "92%", suffix: "" },
];

export const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "languages", name: "Languages" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "databases", name: "Databases" },
  { id: "tools", name: "Tools & Cloud" },
];

export const skills = [
  // Languages
  {
    name: "C",
    category: "languages",
    level: "Proficient",
    levelPercent: 80,
    icon: "Cpu",
    description: "Strong foundation in data structures, algorithms, and memory management concepts.",
  },
  {
    name: "C++",
    category: "languages",
    level: "Advanced",
    levelPercent: 85,
    icon: "Code2",
    description: "Object-oriented programming, standard template library (STL), and problem-solving.",
  },
  {
    name: "Python",
    category: "languages",
    level: "Intermediate",
    levelPercent: 78,
    icon: "FileCode",
    description: "Core programming, scripting, OpenCV fundamentals, and algorithmic workflows.",
  },
  {
    name: "JavaScript",
    category: "languages",
    level: "Advanced",
    levelPercent: 90,
    icon: "Braces",
    description: "ES6+, asynchronous programming, event loop, DOM manipulation, and modern web standards.",
  },

  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    level: "Expert",
    levelPercent: 95,
    icon: "Layers",
    description: "Semantic web architecture, accessible markup, forms, and modern web standards.",
  },
  {
    name: "CSS3",
    category: "frontend",
    level: "Expert",
    levelPercent: 92,
    icon: "Palette",
    description: "Flexbox, Grid, custom animations, responsive design, and CSS variables.",
  },
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced",
    levelPercent: 90,
    icon: "Atom",
    description: "Component lifecycle, custom hooks, context API, state management, and Vite tooling.",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    level: "Advanced",
    levelPercent: 88,
    icon: "Server",
    description: "Scalable backend services, asynchronous event-driven I/O, and npm package ecosystem.",
  },
  {
    name: "Express.js",
    category: "backend",
    level: "Advanced",
    levelPercent: 86,
    icon: "Workflow",
    description: "RESTful architecture, custom middleware, routing, JWT auth, and error handling.",
  },
  {
    name: "REST APIs",
    category: "backend",
    level: "Advanced",
    levelPercent: 89,
    icon: "Network",
    description: "API design, CRUD operations, endpoint security, payload validation, and HTTP standards.",
  },

  // Databases
  {
    name: "MongoDB",
    category: "databases",
    level: "Advanced",
    levelPercent: 87,
    icon: "Database",
    description: "Document data modeling, Mongoose ODM, aggregation pipelines, and indexing.",
  },
  {
    name: "SQL",
    category: "databases",
    level: "Intermediate",
    levelPercent: 78,
    icon: "Table",
    description: "Relational database modeling, complex JOIN queries, normalization, and constraints.",
  },
  {
    name: "Firebase Realtime DB",
    category: "databases",
    level: "Advanced",
    levelPercent: 85,
    icon: "Zap",
    description: "Real-time synchronization, JSON data tree structures, and live listeners.",
  },
  {
    name: "Cloud Firestore",
    category: "databases",
    level: "Advanced",
    levelPercent: 86,
    icon: "Flame",
    description: "Document/collection model, security rules, offline persistence, and compound queries.",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    level: "Advanced",
    levelPercent: 88,
    icon: "GitBranch",
    description: "Version control, branching strategies, merge conflict resolution, and pull requests.",
  },
  {
    name: "VS Code",
    category: "tools",
    level: "Expert",
    levelPercent: 92,
    icon: "Laptop",
    description: "Productive development workflow, debugging, extensions, and CLI integration.",
  },
  {
    name: "Firebase Hosting",
    category: "tools",
    level: "Advanced",
    levelPercent: 86,
    icon: "CloudUpload",
    description: "Production deployments, custom domains, SSL certificates, and CI/CD pipelines.",
  },
];

export const projects = [
  {
    id: "uni-demands",
    title: "UNI-Demands",
    subtitle: "MERN Stack University Marketplace",
    category: "Full-Stack Web App",
    description:
      "A comprehensive multi-vendor digital marketplace engineered specifically for university colleges and academic departments to streamline peer-to-peer and departmental resource exchanges.",
    longDescription:
      "UNI-Demands resolves campus procurement inefficiencies by connecting collegiate departments, faculties, and students through an integrated portal. Built with the MERN stack, it features secure multi-vendor store registration, inventory management, role-based access control, and dynamic requisition workflows.",
    keyFeatures: [
      "Multi-vendor collegiate marketplace for university departments & student bodies",
      "Dynamic product catalog, demand requests, and comprehensive order lifecycle management",
      "Secure authentication with granular role-based access control (Admin, Vendor, Student)",
      "Real-time order tracking and departmental approval status dashboards",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    accentColor: "from-purple-500/20 to-indigo-500/20",
    glowColor: "rgba(168, 85, 247, 0.4)",
    tag: "Flagship Project",
    demoUrl: "#",
    githubUrl: "#",
    metrics: "Multi-Role RBAC & Full CRUD",
    mockType: "marketplace",
  },
  {
    id: "prepmate",
    title: "PrepMate",
    subtitle: "React.js & Firebase E-Learning Platform",
    category: "EdTech Web App",
    description:
      "An interactive e-learning platform providing structured curriculum management, high-definition video lecture streaming, and real-time study material repositories.",
    longDescription:
      "PrepMate is crafted to elevate remote and hybrid learning environments. Leveraging React.js on the client and Google Firebase on the cloud, the platform offers instant student onboarding via Firebase Authentication, live synchronized discussion channels, and structured modular courses.",
    keyFeatures: [
      "Structured course modules, video lecture player, and downloadable curated study materials",
      "Seamless Firebase Authentication supporting secure credentials and session management",
      "Real-time database integration for instantaneous note updates and progress tracking",
      "Fluid, responsive interface optimized for mobile tablets and high-res desktop monitors",
    ],
    technologies: ["React.js", "Firebase Auth", "Cloud Firestore", "Realtime DB", "Firebase Hosting"],
    accentColor: "from-violet-500/20 to-fuchsia-500/20",
    glowColor: "rgba(192, 132, 252, 0.4)",
    tag: "Cloud Platform",
    demoUrl: "#",
    githubUrl: "#",
    metrics: "Instant Live Sync & Video Hub",
    mockType: "elearning",
  },
  {
    id: "shopzone",
    title: "ShopZone",
    subtitle: "MERN Stack E-commerce Application",
    category: "Full-Stack E-commerce",
    description:
      "A feature-packed commercial web application with instantaneous product browsing, intuitive multi-item shopping carts, checkout workflows, and dedicated administration tools.",
    longDescription:
      "ShopZone delivers an end-to-end modern retail shopping experience. Backed by custom Node.js and Express REST APIs with MongoDB data persistence, it incorporates product search, category filtering, cart state persistence, mock checkout validation, and an administrative panel for catalog control.",
    keyFeatures: [
      "Interactive product discovery with category filtering, search, and dynamic price sorting",
      "Persistent client-side shopping cart with real-time stock and cost recalculation",
      "Secure REST APIs handling products, customer credentials, and order validation",
      "Dedicated Admin Dashboard for adding, updating, and removing inventory items",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Modern CSS"],
    accentColor: "from-blue-500/20 to-purple-500/20",
    glowColor: "rgba(56, 189, 248, 0.35)",
    tag: "Full-Stack Retail",
    demoUrl: "#",
    githubUrl: "#",
    metrics: "Admin Portal & REST Architecture",
    mockType: "ecommerce",
  },
];

export const experiences = [
  {
    id: "coder-roots",
    role: "Web Developer",
    company: "Coder Roots",
    location: "Mohali, Punjab",
    period: "June 2025 – July 2025",
    type: "Internship",
    badge: "Recent",
    description:
      "Engineered high-performance web applications using React.js and Google Firebase cloud infrastructure, focusing on responsiveness, real-time data persistence, and reliable hosting delivery.",
    responsibilities: [
      "Developed responsive, accessible, and high-fidelity user interfaces utilizing React.js functional components and modern CSS.",
      "Integrated robust Firebase Authentication mechanisms to protect application routes and user accounts.",
      "Implemented real-time reactive data synchronization using Firebase Realtime Database and Cloud Firestore.",
      "Configured automated build and deployment pipelines leveraging Firebase Hosting for optimal global distribution.",
    ],
    technologies: ["React.js", "Firebase Auth", "Cloud Firestore", "Realtime DB", "Firebase Hosting", "JavaScript"],
  },
  {
    id: "thinknext",
    role: "MERN Stack Developer",
    company: "ThinkNEXT",
    location: "Mohali, Punjab",
    period: "June 2024 – July 2024",
    type: "Internship",
    badge: "Full-Stack",
    description:
      "Built production-ready MERN stack web applications with end-to-end REST API architecture, secure authentication, and responsive modern frontend designs.",
    responsibilities: [
      "Engineered end-to-end full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Designed and developed scalable RESTful APIs with JSON payloads, request validation, and error-handling middleware.",
      "Implemented responsive UI components with clean state management and intuitive user interactions.",
      "Managed schema design, data modeling, and performance optimization within MongoDB databases.",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT", "Tailwind CSS"],
  },
];

export const educationList = [
  {
    id: "dav-university",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "DAV University",
    location: "Jalandhar, Punjab",
    period: "Graduation Expected 2026",
    grade: "CGPA: 6.5",
    description:
      "Core coursework in Data Structures, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, and Software Engineering.",
    highlights: ["Active participant in campus hackathons", "Core focus on Full-Stack Web Development and MERN"],
    icon: "GraduationCap",
  },
  {
    id: "sarvithkari-inter",
    degree: "Senior Secondary (Intermediate)",
    institution: "Sarvithkari Vidya Mandir",
    location: "Punjab, India",
    period: "Completed",
    grade: "Score: 92%",
    description:
      "Specialized in Non-Medical Sciences (Physics, Chemistry, and Mathematics) with exceptional academic distinction.",
    highlights: ["Academic Excellence Award", "Scored 92% in Board Examinations"],
    icon: "Award",
  },
  {
    id: "sarvithkari-matric",
    degree: "Matriculation (High School)",
    institution: "Sarvithkari Vidya Mandir",
    location: "Punjab, India",
    period: "Completed",
    grade: "Score: 91%",
    description:
      "Strong foundational education with distinction in Mathematics, Science, and Computer Basics.",
    highlights: ["Distinction with 91% Marks", "Foundational Computer Applications"],
    icon: "BookOpen",
  },
];

export const certifications = [
  {
    id: "cert-coder-roots",
    title: "React with Firebase Web Development",
    issuer: "Coder Roots, Mohali",
    date: "July 2025",
    category: "Professional Certification",
    skills: ["React.js", "Firebase Auth", "Realtime DB", "Firestore", "Firebase Hosting"],
    description:
      "Comprehensive industrial training covering modern React principles, custom hooks, real-time database architecture, and serverless Firebase deployments.",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    id: "cert-thinknext",
    title: "MERN Stack Development",
    issuer: "ThinkNEXT, Mohali",
    date: "July 2024",
    category: "Professional Certification",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    description:
      "Full-stack MERN certification demonstrating expertise in developing full-cycle web applications, REST APIs, and database management.",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  },
  {
    id: "cert-hackathon",
    title: "Campus Hackathon Participant",
    issuer: "DAV University",
    date: "Academic Year",
    category: "Achievement & Competition",
    skills: ["Rapid Prototyping", "Team Collaboration", "Problem Solving", "Full-Stack Design"],
    description:
      "Collaborated in a time-constrained environment to ideate, prototype, and present software solutions addressing practical challenges.",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  },
  {
    id: "cert-ai-opencv",
    title: "AI with Python & OpenCV Workshop",
    issuer: "Hands-on Workshop",
    date: "Completed",
    category: "Technical Workshop",
    skills: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    description:
      "Hands-on workshop exploring fundamental computer vision concepts, edge detection, video feed processing, and Python-based automation.",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
];
