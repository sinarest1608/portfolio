// ─────────────────────────────────────────────────────────────
//  data.js — Single source of truth for portfolio content
//  To update: edit this file only. The site re-renders from it.
// ─────────────────────────────────────────────────────────────

const DATA = {
  name: "Kshitij Sinha",
  initials: "KS",
  email: "contact.kshitijsinha@gmail.com",
  linkedin: "https://linkedin.com/in/sinhakshitij319",
  github: "https://github.com/sinarest1608",

  // YOE start date — change this if you want to adjust the calculation
  yoeStart: "2023-12-01", // Dec 2023 (MS graduation)

  bio: "Marketing Data Analyst at Apple, driving user acquisition, engagement & retention across Apple TV, Music & Sports through petabyte-scale analytics. MS in Computer Science from University of Florida. Skilled in PySpark, TrinoSQL & Python; I bridge the gap between statistical insight and business strategy.",

  experience: [
    {
      company: "Apple",
      logo: "https://cdn.simpleicons.org/apple",
      role: "Marketing Data Analyst",
      dates: "Jun 2024 – Present",
      bullets: [
        "Delivered actionable insights by analyzing petabyte-scale data using TrinoSQL, PySpark & Apache Hive to assess the effectiveness of marketing campaigns for Apple Services (Apple TV, Apple Music, Sports & other LOBs), focusing on user acquisition, engagement & retention.",
        "Collaborated with engineering and marketing teams to design A/B tests (Z-test & T-test), establish metric tracking frameworks, and assess performance trends to maximize user engagement & retention.",
        "Developed PySpark jobs & internal reporting dashboards to track top KPIs; delivered insights to senior leadership bridging statistical insights with business strategy to improve user targeting.",
      ],
    },
    {
      company: "University of Florida – CTSI",
      logo: "logos/uf.png",
      role: "Student Software Developer → Software Engineer",
      dates: "Mar 2023 – Jun 2024",
      bullets: [
        "Aggregated & curated 330k+ research records onto the VIVO data platform, managing Docker containers & data orchestration for smooth operations.",
        "Built automated data integration software reducing manual efforts by 90%; managed remote server data with rsync & shell scripting.",
        "Automated testing with Selenium & GitHub Actions, reducing development time by 20% and improving code efficiency by 30%.",
        "Designed a custom Python logging framework to capture system events & errors, increasing system reliability by 25%.",
      ],
    },
    {
      company: "Ritewind Studios",
      logo: "logos/ritewind.png",
      role: "Software Developer Intern",
      dates: "Jul 2021 – Dec 2021",
      bullets: [
        "Designed and developed cross-platform mobile apps using Flutter with Material UI and optimized backend algorithms, reducing operational costs by 30%.",
        "Built a web-based admin panel with authenticated access and push notifications for cross-platform devices.",
        "Designed wireframes in Figma/AdobeXD for a mobile app integrating Redis and Elasticsearch APIs.",
      ],
    },
    {
      company: "Trips N Tales",
      logo: "logos/tripstales.png",
      role: "App Developer Intern",
      dates: "Jun 2020 – Sep 2020",
      bullets: [
        "Developed a cross-platform travel management app with user chat forum, WordPress integration, and authentication via established APIs for seamless onboarding.",
        "Normalised the database for optimised query response, reducing response time by 35% and improving user experience by 60%.",
      ],
    },
  ],

  volunteering: [
    {
      org: "Progate",
      logo: "https://cdn.simpleicons.org/progate",
      role: "Organizer",
      dates: "",
      bullets: [
        "Organized 'Week of Learning' — an 11-day workshop on Web Development, coordinating sessions and guiding participants through hands-on web dev curriculum.",
      ],
    },
    {
      org: "IEEE CS MUJ",
      logo: "https://cdn.simpleicons.org/ieee",
      role: "Technical Team",
      dates: "Jul 2020 – Jun 2021",
      bullets: [
        "Mentored peers in Mobile Application Development, guiding students through Flutter and cross-platform development concepts.",
      ],
    },
    {
      org: "Camp K12",
      logo: "logos/campk12.png",
      role: "LIVE Instructor",
      dates: "Mar 2020 – Jun 2020",
      bullets: [
        "Taught programming concepts and technologies to students live using CampK12's online platform.",
      ],
    },
    {
      org: "CodeSignal",
      logo: "https://cdn.simpleicons.org/codesignal",
      role: "Campus Ambassador",
      dates: "Oct 2019 – May 2020",
      bullets: [
        "Represented CodeSignal on campus, promoting competitive programming and technical assessments among the student community.",
      ],
    },
  ],

  projects: [
    {
      title: "InnerOracle — Grounded RAG Assistant",
      icon: "devicon-fastapi-plain colored",
      tech: ["FastAPI", "Qdrant", "Anthropic Claude", "ONNX", "Docker"],
      bullets: [
        "Designed and shipped a full-stack, grounded RAG application (FastAPI + Qdrant + Anthropic Claude) that answers questions only from a curated corpus and cites its sources.",
        "Implemented hybrid retrieval (ONNX dense embeddings + BM25, fused with Reciprocal Rank Fusion), streaming SSE responses, and conversational memory with LLM query-condensation.",
        "Built an automated groundedness verifier and deployed via Docker on a small VPS behind a Cloudflare Tunnel with edge-based abuse protection.",
      ],
      github: "https://github.com/sinarest1608/inneroracle",
      demo: "https://www.inneroracle.cc",
    },
    {
      title: "F1 Race Winner Predictor",
      icon: { dark: "logos/f1-red.png", light: "logos/f1-black.png" },
      tech: ["scikit-learn", "FastAPI", "FastF1", "HTMX", "GitHub Actions"],
      bullets: [
        "Built a Ridge Regression ML system on 1,882 rows × 26 features; achieved 70.6% top-3 accuracy via leave-one-season-out CV with SHAP-guided feature selection across 21 engineered features.",
        "Developed an interactive analytics dashboard using FastAPI, Jinja2, HTMX & Plotly with driver standings, circuit DRS maps, race position traces, and tire strategy charts.",
        "Automated predictions via GitHub Actions (3× daily cron) with session-aware round detection and Monte Carlo championship simulations (10k runs).",
      ],
      github: "#", // TODO: add your GitHub repo URL
      demo: "#", // TODO: add your live demo URL
    },
    {
      title: "Google Play Trend Analysis",
      icon: { dark: "https://cdn.simpleicons.org/googleplay/ffffff", light: "https://cdn.simpleicons.org/googleplay/01875f" },
      tech: ["Next.js", "Java", "OracleDB", "SQL"],
      bullets: [
        "Built a web analytics app in Next.js with Java REST APIs on a 2M+ tuple Google Play Store dataset with 30+ characteristics.",
        "Implemented filtering, sorting, and pagination via OracleDB & SQL to surface trends across downloads, app categories, and developers.",
      ],
      github: "https://github.com/UFCIS4301/playstore-data-analysis", // TODO: add your GitHub repo URL
      demo: null,
    },
    {
      title: "Stay.in: Subleasing Marketplace",
      icon: "devicon-react-plain colored",
      tech: ["React", "GoLang", "SQLite", "Cypress"],
      bullets: [
        "Built a full-stack rental marketplace with dual portals (tenant & admin), supporting short/long-term subleasing with filters for price, rooms, furnish type, and rent frequency.",
        "Developed admin portal with JWT authentication and property listing management; wrote end-to-end Cypress tests and backend unit tests for reliability.",
        "Designed RESTful APIs in GoLang with a privacy-first architecture — no personal information shared between landlords and tenants.",
      ],
      github: "https://github.com/RajdevKapoor/Stay.in",
      demo: null,
    },
    {
      title: "FLoD: First Line of Defence",
      icon: "devicon-tensorflow-original colored",
      tech: ["Python", "TensorFlow", "Keras", "EfficientNetB0", "CIFAR-100"],
      bullets: [
        "Trained CNN and EfficientNetB0 classifiers on CIFAR-100; built an adversarial example generation pipeline using FGSM and PGD attack methods.",
        "Engineered a defense system using median and Gaussian filtering to detect and neutralize adversarial perturbations, evaluating model robustness against white-box attacks.",
        "Implemented full adversarial ML pipeline: model training, attack generation, defense mechanisms, and robustness evaluation metrics.",
      ],
      github: "https://github.com/sinarest1608/TML-Project",
      demo: null,
    },
    {
      title: "Sahayak: Student Companion App",
      icon: "devicon-flutter-plain colored",
      tech: ["Flutter", "Dart", "Firebase", "GetX", "Hive"],
      bullets: [
        "Built a cross-platform Flutter app for international students with academics resources, professor info, campus housing guides, and property listings.",
        "Integrated Firebase for Google Sign-In and real-time chat; used Hive for offline-first local data persistence.",
        "Architected with GetX for state management and dependency injection across academics, housing, and social modules.",
      ],
      github: "https://github.com/sinarest1608/sahayak",
      demo: null,
    },
    {
      title: "Distributed Systems in Erlang",
      icon: "devicon-apachekafka-plain colored",
      tech: ["Erlang", "Actor Model", "Chord DHT", "Gossip Protocol"],
      bullets: [
        "Implemented Gossip and Push-Sum protocols across full, line, and 2D-grid network topologies using Erlang's concurrent actor model with message passing.",
        "Built a Chord DHT (Distributed Hash Table) with finger tables and consistent hashing for decentralized peer-to-peer key lookup across distributed nodes.",
        "Developed a full Twitter clone in Erlang supporting tweets, retweets, follows, hashtags, and @mentions; extended with a web-accessible backend API.",
      ],
      github: "https://github.com/sinarest1608/DOSP-Fall22-KR",
      demo: null,
    },
    {
      title: "Upasthiti: Proximity Attendance System",
      icon: "devicon-flutter-plain colored",
      tech: ["Flutter", "Dart", "Google Nearby Connections", "Firebase"],
      bullets: [
        "Built a Flutter app that auto-marks student attendance by detecting nearby devices via Google Nearby Connections API — no QR codes or manual entry required.",
        "Developed teacher-side session management with real-time device discovery, connection handling, and Bluetooth/WiFi/location permission orchestration.",
        "Implemented device model tracking, attendance record persistence, and a modal-driven UI for viewing and managing existing attendance sessions.",
      ],
      github: "https://github.com/sinarest1608/Smort-Attendance-System",
      demo: null,
    },
    {
      title: "Quantin: Instagram Automation Bot",
      icon: "devicon-selenium-plain colored",
      tech: ["Python", "Selenium", "Tesseract OCR"],
      bullets: [
        "Built a Selenium bot that automates Instagram profile management — logs in, navigates the following list, and bulk-unfollows users.",
        "Used Tesseract OCR alongside Selenium for screen-reading dynamic UI elements that aren't accessible via standard DOM selectors.",
      ],
      github: "https://github.com/sinarest1608/Quantin",
      demo: null,
    },
    {
      title: "FoodEzzy: Recipe Finder",
      icon: "devicon-flutter-plain colored",
      tech: ["Flutter", "Dart", "REST API", "GetX"],
      bullets: [
        "Built a cross-platform mobile app at ShellHacks 2022 that lets users discover recipes based on ingredients they already have at home.",
        "Integrated a recipe REST API to search by ingredient, surface detailed recipe steps, and display results in a clean ingredient-tile UI.",
        "Implemented GetX for reactive state management and API provider abstraction across search, results, and recipe detail views.",
      ],
      github: "https://github.com/sinarest1608/ShellHacks-2022-FoodEzzy",
      demo: null,
    },
  ],

  certifications: [
    {
      title: "Generative AI with Diffusion Models",
      issuer: "NVIDIA",
      issued: "Feb 2024",
      url: null, // TODO: add NVIDIA credential URL
    },
    {
      title: "Introduction to TensorFlow for AI, ML & Deep Learning",
      issuer: "Coursera",
      issued: "Jun 2019",
      url: "https://www.coursera.org/account/accomplishments/verify/6H7FFEHUUX9A",
    },
    {
      title: "Applied Text Mining in Python",
      issuer: "Coursera",
      issued: "Jul 2019",
      url: "https://www.coursera.org/account/accomplishments/verify/GF9S789UACES",
    },
    {
      title: "Using Python to Access Web Data",
      issuer: "Coursera",
      issued: "Aug 2019",
      url: "https://www.coursera.org/account/accomplishments/verify/MXS9BLBJ47WU",
    },
    {
      title: "Python Data Structures",
      issuer: "Coursera",
      issued: "Aug 2019",
      url: "https://www.coursera.org/account/accomplishments/verify/J3MYECX6FBES",
    },
    {
      title: "Linux Server Management and Security",
      issuer: "Coursera",
      issued: "Mar 2019",
      url: "https://www.coursera.org/account/accomplishments/verify/GQA7M7SCDRCX",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "Coursera",
      issued: "Feb 2019",
      url: "https://www.coursera.org/account/accomplishments/verify/VV48DAF3CQLU",
    },
  ],

  education: {
    school: "University of Florida",
    location: "Gainesville, FL",
    degree: "Master of Science in Computer Science",
    gpa: "3.81 / 4.0",
    dates: "Dec 2023",
    note: "Recipient - College of Engineering Achievement Award Scholarship",
  },

  skills: {
    languages: [
      "Python",
      "SQL",
      "Trino SQL",
      "MySQL",
      "SPARQL",
      "C++",
      "Java",
      "C",
      "Dart",
      "JavaScript",
      "Golang",
      "Erlang",
      "Shell",
      "R",
    ],
    frameworks: [
      "pandas",
      "NumPy",
      "Matplotlib",
      "scikit-learn",
      "TensorFlow",
      "ReactJS",
      "Express.js",
      "Flutter",
      "Material-UI",
    ],
    tools: [
      "PySpark",
      "Statistical Analysis",
      "ETL",
      "Agile",
      "Computer Vision",
      "AWS",
      "Docker",
      "Linux",
      "GitHub",
      "Tableau",
      "Selenium",
      "Jupyter",
      "Oracle DB",
      "Firebase",
      "UI/UX",
      "Android Studio",
      "Git",
      "JIRA",
    ],
  },
};
