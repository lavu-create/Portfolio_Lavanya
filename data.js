// ============================================================
// PORTFOLIO DATA — Single source of truth for all content.
// Update this file to change text across the website.
// ============================================================

const DATA = {
  meta: {
    title: "Lavanya | Computer Engineering Student | Software Development & Data Science",
    description:
      "Portfolio of Lavanya — final-year B.Tech. Computer Engineering student at TIET specializing in software development, data science, and AI/ML systems.",
    url: "https://lavu-create.github.io/Portfolio_Lavanya/",
    ogImage: "public/assets/clario-screenshot.png",
  },

  personal: {
    name: "Lavanya",
    tagline: "Computer Engineering Student | Software Development | Data Science & AI",
    subtitle: "Software Development  •  Data Science  •  AI/ML",
    oneLiner:
      "Final-year Computer Engineering student building production-ready web applications, recommendation systems, and data-driven software.",
    email: "lavanya36914@gmail.com",
    phone: "+91-7889272190",
    github: "https://github.com/lavu-create",
    linkedin: "https://www.linkedin.com/in/lavanya14369/",
    location: "Patiala, Punjab, India",
    resumePath: "public/assets/resume.pdf",
  },

  about: `I'm a final-year Computer Engineering student at Thapar Institute of Engineering & Technology with hands-on project experience across full-stack software development, REST APIs, recommendation engines, and data analytics. I have a strong foundation in C++, Python, SQL, Data Structures & Algorithms, and core computer science fundamentals. In addition to qualifying GATE 2026 in Data Science & Artificial Intelligence (DA), I have advanced to Round 3 among 108 teams at the Israel-India Hackathon 2025 and to the National Round of WCHL 2025. I am actively seeking entry-level opportunities across Software Development, Data Science, and AI/ML.`,

  languages: ["English", "Hindi", "Punjabi"],

  skills: [
    {
      category: "Programming",
      items: ["C++", "Python", "SQL", "JavaScript"],
    },
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "Chart.js"],
    },
    {
      category: "Backend and APIs",
      items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT"],
    },
    {
      category: "Data Science and Machine Learning",
      items: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "EDA",
        "Data Cleaning",
        "Model Evaluation",
      ],
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "Core Computer Science",
      items: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
    },
  ],

  projects: [
    {
      id: "clario",
      role: "lead",
      title: "Clario",
      subtitle: "Full-Stack Productivity & Analytics Platform",
      image: "public/assets/clario-screenshot.png",
      github: "https://github.com/lavu-create/Clario-FullStack-Productivity-System",
      problem:
        "Productivity tools often fragment daily tasks, calendar events, and mood tracking across disparate apps with zero unified visual analytics and inadequate API security.",
      description:
        "A full-stack productivity Single Page Application (SPA) built with Vanilla JavaScript, Node.js, Express.js, and MongoDB. Integrates task/event management, daily mood tracking, and visual analytics powered by Chart.js.",
      highlights: [
        { icon: "shield", label: "JWT-authenticated REST API with bcrypt password hashing" },
        { icon: "globe", label: "Strict CORS security controls and protected HTTP routes" },
        { icon: "server", label: "Server-side OpenWeatherMap proxy securing 3rd-party API credentials" },
        { icon: "check", label: "9/9 Jest/Supertest integration tests passing (100% pass rate)" },
        { icon: "database", label: "mongodb-memory-server isolated in-memory test environment" },
        { icon: "file", label: "Test coverage: auth flows, protected routes, task CRUD, and CORS controls" },
      ],
      technologies: [
        "Vanilla JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Chart.js",
        "JWT",
        "bcrypt",
        "Jest",
        "Supertest",
      ],
    },
    {
      id: "shopsense",
      role: "featured",
      title: "ShopSense",
      subtitle: "Multi-Tier E-Commerce Recommendation System",
      image: "public/assets/shopsense-screenshot.png",
      github: "https://github.com/lavu-create/ShopSense",
      problem:
        "E-commerce platforms face severe interaction sparsity and cold-start issues, requiring multi-layered ranking strategies that balance general popularity, user affinity, and content similarity under strict memory limits.",
      description:
        "A multi-tier recommendation system processing 2.98M+ Amazon review interactions using collaborative filtering, TF-IDF, and hybrid pipelines. Deployed through FastAPI with memory-optimized routing engineered for a 512 MB hosting constraint.",
      metrics: [
        { value: "2.98M+", label: "Amazon review interactions processed" },
        { value: "3.16%", label: "Recall@10 on chronological test split" },
        { value: "39K+", label: "Chronological test interactions evaluated" },
        { value: "10K+", label: "Users evaluated across test split" },
        { value: "512 MB", label: "Hosting memory constraint strictly met" },
      ],
      models: [
        "Popularity-based baseline",
        "User-based Collaborative Filtering (User-CF)",
        "Item-based Collaborative Filtering (Item-CF)",
        "Weighted Hybrid model with cold-start routing",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "TF-IDF",
        "Pandas",
        "NumPy",
        "FastAPI",
      ],
    },
    {
      id: "nexora",
      role: "supporting",
      title: "Nexora",
      subtitle: "Assistive Communication Platform Prototype",
      image: "public/assets/nexora-screenshot.png",
      github: "https://github.com/lavu-create/Nexora-Hackathon",
      problem:
        "ICU-ventilated patients face immense barriers communicating basic physical comfort, symptoms, and emotional needs to healthcare providers and visiting families.",
      description:
        "A web-based prototype for an assistive communication platform engineered for ICU-ventilated patients. Developed during the Israel-India Hackathon 2025 using AI-assisted development tools, providing separate interfaces for patients, nurses, and family members.",
      highlights: [
        "Assistive communication prototype built during Israel-India Hackathon 2025",
        "Advanced to Round 3 among 108 competing teams",
        "Dedicated role-based interfaces for patients, nurses, and family members",
        "Frontend workflows for bedside communication, patient status, and care monitoring",
        "Accelerated development workflows leveraging AI-assisted tools",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript"],
      note: "Prototype • AI-assisted development",
    },
  ],

  experience: [
    {
      role: "Software Development Engineer Intern",
      company: "Bluestock Fintech",
      duration: "Aug 2025 – Sep 2025",
      location: "Remote",
      description:
        "Completed a remote internship with exposure to software development workflows, engineering methodologies, and code reviews in a fintech environment.",
    },
  ],

  education: [
    {
      institution: "Thapar Institute of Engineering & Technology",
      degree: "B.Tech. in Computer Engineering",
      graduation: "Expected May 2027",
      scoreLabel: "CGPA",
      scoreValue: "8.07",
      location: "Patiala, Punjab, India",
    },
    {
      institution: "DAV Public School",
      degree: "Class XII (Senior Secondary)",
      details: "CBSE | PCM (Non-Medical)",
      graduation: "2023",
      scoreLabel: "Percentage",
      scoreValue: "86.4%",
      location: "Patiala, Punjab, India",
    },
    {
      institution: "DAV Public School",
      degree: "Class X (Secondary)",
      details: "CBSE",
      graduation: "2021",
      scoreLabel: "Percentage",
      scoreValue: "94.6%",
      location: "Patiala, Punjab, India",
    },
  ],

  achievements: [
    {
      title: "GATE 2026 Qualified",
      description: "Officially qualified in the Data Science and Artificial Intelligence (DA) paper.",
      badge: "National Examination",
      project: null,
    },
    {
      title: "Israel-India Hackathon 2025",
      description: "Advanced to Round 3 among 108 competing teams.",
      badge: "International Hackathon",
      project: "Nexora",
    },
    {
      title: "World Computer Hacker League (WCHL) 2025",
      description: "Advanced to the National Round.",
      badge: "National Hackathon",
      project: "Clario",
    },
  ],

  extracurricular: {
    role: "Performing Member",
    org: "Mudra Dance Society, TIET",
    description:
      "Participated in university-level cultural events, dance productions, and inter-college competitions.",
  },
};
