// ============================================================
// PORTFOLIO DATA — Single source of truth for all content.
// Update this file to change any text on the website.
// ============================================================

const DATA = {
  meta: {
    title: "Lavanya | Computer Engineering Student & Developer",
    description:
      "Portfolio of Lavanya — final-year B.Tech. Computer Engineering student at TIET with project experience in full-stack web development, REST APIs, and recommendation systems.",
    url: "https://github.com/lavu-create/Portfolio_Lavanya",
    ogImage: "/public/assets/og-image.png", // Update if you add an OG image
  },

  personal: {
    name: "Lavanya",
    tagline: "Computer Engineering Student @ TIET",
    subtitle: "Full-Stack Development  •  REST APIs  •  Data-Driven Systems",
    oneLiner:
      "Final-year B.Tech. student building web applications and recommendation systems. Seeking entry-level software development roles.",
    email: "lavanya36914@gmail.com",
    phone: "+91-7889272190",
    github: "https://github.com/lavu-create",
    linkedin: "https://www.linkedin.com/in/lavanya14369/",
    location: "India",
    resumePath: "/public/assets/resume.pdf", // Replace this file with your actual resume PDF
  },

  about: `I'm a final-year Computer Engineering student at Thapar Institute of Engineering & Technology with hands-on project experience in full-stack web development, REST APIs, and data-driven recommendation systems. I have a strong foundation in C++, Python, and core computer science fundamentals. I've participated in multiple national-level hackathons, advancing to Round 3 among 108 teams at the Israel-India Hackathon 2025 and to the National Round of WCHL 2025. I'm currently seeking entry-level software development opportunities.`,

  skills: [
    {
      category: "Languages",
      items: ["C++", "Python", "SQL", "JavaScript"],
    },
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "Chart.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT"],
    },
    {
      category: "AI & ML",
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
      category: "Core CS",
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
      role: "lead", // lead | featured | supporting
      title: "Clario",
      subtitle: "Full-Stack Productivity & Analytics Platform",
      image: "public/assets/clario-screenshot.png",
      github: "https://github.com/lavu-create/Clario-FullStack-Productivity-System",
      description:
        "A full-stack productivity SPA built with Vanilla JavaScript, Node.js, Express.js, and MongoDB. Features task/event management, mood tracking, and productivity analytics powered by Chart.js.",
      highlights: [
        { icon: "shield", label: "JWT-authenticated REST API" },
        { icon: "lock", label: "bcrypt password hashing" },
        { icon: "globe", label: "CORS security controls" },
        { icon: "server", label: "Server-side OpenWeatherMap proxy (API key protection)" },
        { icon: "check", label: "9/9 Jest/Supertest integration tests passing" },
        { icon: "database", label: "mongodb-memory-server isolated test environment" },
        { icon: "file", label: "Coverage: auth, protected routes, task CRUD, CORS security" },
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
      description:
        "A product recommendation system that processes 2.98M+ Amazon review interactions using collaborative filtering, TF-IDF, and multiple recommendation models. Deployed through FastAPI with memory-optimized routing.",
      metrics: [
        { value: "2.98M+", label: "cleaned review interactions processed" },
        { value: "3.16%", label: "Recall@10 on chronological test split" },
        { value: "39K+", label: "test interactions evaluated" },
        { value: "10K+", label: "users in evaluation set" },
        { value: "512 MB", label: "hosting memory constraint optimized for" },
      ],
      models: [
        "Popularity-based",
        "User-based Collaborative Filtering (User-CF)",
        "Item-based Collaborative Filtering (Item-CF)",
        "Weighted Hybrid with cold-start routing",
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
      description:
        "A web-based prototype for an assistive communication platform designed for ICU-ventilated patients. Features separate interfaces for patients, nurses, and family members. Built during the Israel-India Hackathon 2025 using AI-assisted development tools.",
      highlights: [
        "Hackathon project: Israel-India Hackathon 2025",
        "Advanced to Round 3 among 108 teams",
        "Patient, nurse, and family role-based interfaces",
        "Frontend workflows for communication and monitoring",
        "Built using AI-assisted development tools",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      note: "AI-assisted development",
    },
  ],

  achievements: [
    {
      title: "Israel-India Hackathon 2025",
      description: "Advanced to Round 3 among 108 teams.",
      project: "Nexora",
    },
    {
      title: "World Computer Hacker League (WCHL) 2025",
      description: "Advanced to the National Round.",
      project: "Clario",
    },
    {
      title: "Adobe India Hackathon",
      description: "Cleared Round 1.",
      project: null,
    },
  ],

  experience: [
    {
      role: "Software Development Engineer Intern",
      company: "Bluestock Fintech",
      duration: "Aug 2025 – Sep 2025",
      location: "Remote",
      description:
        "Completed a remote internship with exposure to software development workflows in a fintech environment.",
    },
  ],

  education: [
    {
      institution: "Thapar Institute of Engineering & Technology",
      degree: "B.Tech. Computer Engineering",
      graduation: "Expected May 2027",
      scoreLabel: "CGPA",
      scoreValue: "8.07",
      location: "Patiala, India",
    },
    {
      institution: "DAV Public School",
      degree: "Class XII (Senior Secondary)",
      details: "CBSE | PCM (Non-Medical)",
      graduation: "2023",
      scoreLabel: "Percentage",
      scoreValue: "86.4%",
      location: "Patiala, India",
    },
    {
      institution: "DAV Public School",
      degree: "Class X (Secondary)",
      details: "CBSE",
      graduation: "2021",
      scoreLabel: "Percentage",
      scoreValue: "94.6%",
      location: "Patiala, India",
    }
  ],

  extracurricular: {
    role: "Performing Member",
    org: "Mudra Dance Society, TIET",
    description:
      "Performed in university-level cultural events and competitions.",
  },
};
