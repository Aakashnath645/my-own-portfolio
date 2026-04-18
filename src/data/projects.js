export const projects = [
  {
    id: 1,
    title: "The Watchful Eye",
    subtitle: "Real-Time Satellite Surveillance",
    description:
      "A real-time satellite tracking platform featuring an interactive 3D globe visualization built with Three.js and a 2D equirectangular map projection. Tracks active satellites with live TLE data, orbital paths, and detailed telemetry overlays.",
    tech: ["Next.js", "Three.js", "React", "TLE.js", "Satellite API"],
    github: "https://github.com/Aakashnath645/the-watchful-eye",
    live: "https://the-watchful-eye.vercel.app",
    category: "Visualization",
    accent: "#d97757",
  },
  {
    id: 2,
    title: "Sentinel",
    subtitle: "Planetary Surveillance Network",
    description:
      "Built a real-time geospatial dashboard using React 19, TypeScript, and Leaflet for global seismic tracking. Integrated Google Gemini AI for automated situational analysis and critical infrastructure mapping. Engineered a robust data layer to normalize and render sub-second telemetry from USGS and NOAA APIs. Features proximity alerts and interactive tectonic plate overlays.",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Leaflet", "Google GenAI SDK"],
    github: "https://github.com/Aakashnath645/Sentinel---Planetary-Surveillance-Network",
    live: "https://sentinel-planetary-surveillance-network-401832542794.us-west1.run.app/",
    category: "AI / Geospatial",
    accent: "#c4956a",
  },
  {
    id: 3,
    title: "F1 Pulse",
    subtitle: "Formula 1 Analytics Engine",
    description:
      "A comprehensive full-stack F1 analytics and simulation platform. Features historical race data visualization, driver/constructor comparisons, championship standings, and physics-based race simulations with tire degradation modeling.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "Ergast API"],
    github: "https://github.com/Aakashnath645/F1-Pulse",
    live: null,
    category: "Full-Stack / Data",
    accent: "#e8825c",
  },
  {
    id: 4,
    title: "ZipRide",
    subtitle: "Smart Ride Booking Platform",
    description:
      "A modern frontend ride-booking application with interactive map-based routing, real-time ride tracking, driver matching, and fare estimation. Designed with a clean, mobile-first interface using Leaflet map integration.",
    tech: ["React", "TypeScript", "Vite", "Leaflet", "Firebase Auth"],
    github: "https://github.com/Aakashnath645/Zipride",
    live: "https://zipride-two.vercel.app",
    category: "Frontend / Maps",
    accent: "#bf8c6b",
  },
  {
    id: 5,
    title: "MochiReviews",
    subtitle: "Entertainment Review Platform",
    description:
      "Reviews are scored with a custom Mochimeter instead of traditional star ratings, offering a unique and playful evaluation method. Covers diverse entertainment mediums including video games, books, TV shows, movies, and music albums — all in one centralized platform. Built with TypeScript and deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Tiptap Editor", "PostgreSQL"],
    github: "https://github.com/Aakashnath645/MochiReviews",
    live: "https://mochi-reviews.vercel.app",
    category: "Design / Content",
    accent: "#d4a574",
  },
  {
    id: 6,
    title: "Cricket Analyst",
    subtitle: "AI-Powered Cricket Intelligence",
    description:
      "An AI-powered cricket analysis platform leveraging the Gemini API to provide intelligent match predictions, player performance analysis, and statistical breakdowns. Features real-time data processing and conversational AI insights.",
    tech: ["React", "Gemini API", "Python", "Data Analytics", "NLP"],
    github: "https://github.com/Aakashnath645/cricket-analyst",
    live: null,
    category: "AI / Sports",
    accent: "#c7875f",
  },
];

export const skills = {
  languages: ["Python", "Java", "JavaScript", "HTML", "CSS", "SQL"],
  frameworks: [
    "Flask",
    "Scikit-learn",
    "HuggingFace Transformers",
    "OpenAI",
    "Gemini",
    "Pandas",
    "SQLite",
    "Git",
    "NLTK",
    "TF-IDF",
  ],
  data_science: [
    "NLP",
    "ML Models",
    "Data Extraction",
    "Transformers",
    "AI Modules",
    "Recruitment Metrics",
  ],
  concepts: [
    "REST APIs",
    "OOPs",
    "Data Structures",
    "DBMS",
    "Version Control",
  ],
  specializations: [
    "NLP & AI/ML Engineering",
    "Full-Stack Development",
    "Data Visualization",
    "Geospatial Systems",
    "Real-Time Applications",
  ],
};

export const experience = [
  {
    role: "IT & Technology Intern",
    company: "Saregama India Ltd.",
    location: "Kolkata",
    period: "Feb 2025 – Jul 2025",
    description:
      "Worked in the IT Department and contributed to HR recruitment initiatives. Developed LLM-based resume screening tool, enhancing candidate shortlisting speed by 40%.",
    highlights: [
      "Developed LLM-based resume screening tool, enhancing candidate shortlisting speed by 40%",
      "Created NLP pipelines using transformers and prompt engineering for data extraction",
      "Integrated AI modules into internal dashboards and fine-tuned models based on recruitment metrics",
    ],
  },
];

export const resumeClassifier = {
  title: "Resume Screening Assistant",
  github: "https://github.com/Aakashnath645/Resume-Processing",
  duration: "22 Weeks (2025)",
  tech: ["Python", "Google Gemini", "TF-IDF", "Streamlit"],
  highlights: [
    "Developed an AI-powered web application for resume analysis and job description matching with Google's Gemini AI model",
    "Built the application with Streamlit and Python to enhance the candidate evaluation process for recruiters and hiring managers",
    "Implemented multi-format support to allow uploads of resumes in PDF, DOCX, and DOC formats",
    "Enabled batch processing for simultaneous upload and evaluation of multiple resumes",
    "Created an interactive dashboard providing real-time analytics on match scores and department-wise performance",
    "Designed a feature for custom report generation in PDF/DOCX formats for individual or batch analysis",
    "Integrated role-based scoring to evaluate candidates based on levels such as Junior, Mid, and Senior",
    "Ensured ATS compatibility through keyword scanning and scoring mechanisms",
    "Developed department-specific analysis with customizable metrics for various fields including Tech, HR, and Marketing",
  ],
};

export const education = {
  degree: "B.Tech in Computer Science & Engineering (IoT, CS, BT)",
  school: "University of Engineering & Management, Kolkata",
  period: "Graduated: June 2025",
  cgpa: "8.36 / 10.00",
};

export const higherSecondary = {
  degree: "Higher Secondary (Science)",
  school: "Pathfinder Higher Secondary Public School, Kolkata",
  period: "Graduated: March 2021",
};

export const aboutSummary =
  "I am a recent graduate Software Engineer with hands-on experience in software development, specializing in NLP, AI/ML. I design and build intuitive user interfaces, focusing on enhancing automation processes. At Saregama India Ltd., I worked in the IT Department and contributed to HR recruitment initiatives.";

export const quotes = [
  "Somewhere between Stack Overflow and sheer stubbornness, I ship products.",
  "I don't debug — I negotiate with the code until it agrees with me.",
  "Every great project starts with 'this should be simple' and ends three all-nighters later.",
  "My code works. The 'why' is a conversation for another day.",
  "I mass produce bugs, fix them, and call it iterative development.",
];

export const contact = {
  email: "aakashnath645@gmail.com",
  phone: "(+91) 9123870182",
  github: "https://github.com/Aakashnath645",
  linkedin: "https://www.linkedin.com/in/aakash-nath-3717b821b/",
};
