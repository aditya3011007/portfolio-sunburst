// src/data.js
export const resume = {
    personal: {
        name: "Aditya Raj Singh",
        title: "ML / AI Engineer",
        summary:
            "ML/AI engineer and software developer with hands-on experience building intelligent systems, backend services, and polished user-facing applications. I enjoy turning ambitious ideas into production-ready products, especially across personalization, computer vision, distributed systems, and modern full-stack engineering.",
        email: "ars3011007@gmail.com",
        phone: "716-463-9714",
        location: "Buffalo, NY",
    },
    education: [
        {
            institute: "University at Buffalo",
            degree: "Master of Science, Computer Science",
            period: "Jan 2025 – Present",
            cgpa: "3.9 / 4.0",
        },
        {
            institute: "Jaypee Institute of Information Technology",
            degree: "Bachelor of Technology, Computer Science",
            period: "2020 – 2024",
            cgpa: "8.6 / 10.0",
        },
    ],
    experience: [
        {
            company: "SUNY RF",
            role: "Research Aide (AI & System Engineering)",
            period: "Jan 2025 – Present",
            location: "Buffalo, NY",
            bullets: [
                "Developing and training unsupervised learning models to detect log anomalies, contributing to automated system reliability.",
                "Preparing and processing large-scale datasets, performing feature engineering to ensure high data quality for model inference.",
                "Evaluating model accuracy and optimizing pipelines to handle complex data inputs, ensuring scalability in production-like environments."
            ],
        },
        {
            company: "HackerShala",
            role: "Web Developer",
            period: "Aug 2022 – Sep 2022",
            location: "Noida, India",
            bullets: [
                "Optimized React-based frontend architecture using HTML, CSS, and JavaScript to improve site responsiveness and reduce load times.",
                "Built reusable React components for a dynamic navigation system, enhancing user interface scalability.",
                "Developed single-page applications using React and REST APIs, translating wireframes into high-quality code."
            ],
        },
        {
            company: "MACAWBER BEEKAY",
            role: "Software Engineering Intern",
            period: "Jun 2022 – Aug 2022",
            location: "Noida, India",
            bullets: [
                "Managed and optimized relational database schemas to support backend functionalities.",
                "Implemented attendance tracking systems, ensuring data integrity and reliable reporting.",
                "Maintained site reliability and deployed code changes to production using Git and CI workflows."
            ],
        },
    ],
    projects: [
        {
            title: "InterviewAceAI",
            subtitle: "AI Interview Coach",
            desc: "A personalized interview practice platform that uses resumes and job descriptions to generate adaptive mock interviews with scoring, critique, and role-specific feedback.",
            highlight: "Combines document ingestion, voice interaction, structured reporting, and coding evaluation in a polished full-stack workflow.",
            tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Gemini", "Tailwind CSS"],
            theme: "interview",
            image: "/project-interviewaceai.svg",
            link: "#",
        },
        {
            title: "PersonaReply",
            subtitle: "Personalized AI Messaging Assistant",
            desc: "An AI messaging assistant that learns tone, phrasing, and conversational style from previous chats to generate replies that sound authentic to the user.",
            highlight: "Blends style-aware prompting, multilingual behavior, semantic retrieval, and modern full-stack product design.",
            tech: ["Python", "FastAPI", "Hugging Face", "LoRA", "RAG", "Next.js"],
            theme: "messaging",
            image: "/project-personareply.svg",
            link: "#",
        },
        {
            title: "HazardVision",
            subtitle: "Real-Time Threat Detection Platform",
            desc: "A safety-focused computer vision system for real-time weapon detection, built around YOLOv8 with an emphasis on better detection quality and deployment readiness.",
            highlight: "Focused on reducing false positives, handling overlapping detections, and evolving the work beyond notebooks into a usable platform.",
            tech: ["Python", "YOLOv8", "PyTorch", "Roboflow", "FastAPI", "Docker"],
            theme: "vision",
            image: "/project-hazardvision.svg",
            link: "#",
        },
        {
            title: "Distributed Edge Computing",
            subtitle: "Federated Cost Optimization System",
            desc: "A distributed systems project exploring federated learning, communication efficiency, and scalable multi-node coordination across edge environments.",
            highlight: "Strong systems-thinking project around orchestration, communication pipelines, and cost/performance tradeoffs.",
            tech: ["Python", "PyTorch", "Flower", "NVIDIA FLARE", "Docker", "Kubernetes"],
            theme: "edge",
            image: "/project-edge.svg",
            link: "#",
        },
        {
            title: "Nexus Agentic Workspace",
            subtitle: "Document-Centered AI Workspace",
            desc: "A multi-service AI workspace for ingestion, retrieval, and agentic interaction across document-driven workflows with streamed responses.",
            highlight: "Designed as a modular full-stack system with retrieval pipelines, real-time communication, and enterprise-style architecture.",
            tech: ["React", "FastAPI", "WebSockets", "ChromaDB", "Docker", "Kubernetes"],
            theme: "workspace",
            image: "/project-nexus.svg",
            link: "#",
        },
        {
            title: "DSA CRACKER Platform",
            subtitle: "Coding Progress & Practice Hub",
            desc: "A full-stack product for tracking coding progress, maintaining practice workflows, and delivering a polished experience for structured DSA learning.",
            highlight: "Frontend-heavy product work with strong UI/UX signal, persistent workflows, and clean state-driven architecture.",
            tech: ["React", "Tailwind CSS", "Zustand", "Node.js", "GraphQL", "SQLite"],
            theme: "dashboard",
            image: "/project-dsacracker.svg",
            link: "#",
        },
        {
            title: "Smart Parking AI",
            subtitle: "Drone Imagery Analysis for Parking Logistics",
            desc: "A computer vision workflow for parking and aerial image analysis, focused on detecting vehicles, classifying slots, and presenting usable results through a full-stack interface.",
            highlight: "A practical CV + product integration project shaped by backend debugging, model reliability, and real-world operational flow.",
            tech: ["Next.js", "FastAPI", "Go", "OpenCV", "Roboflow", "Tailwind CSS"],
            theme: "parking",
            image: "/project-parking.svg",
            link: "#",
        },
        {
            title: "OCR Translation Assistant",
            subtitle: "Multilingual OCR & Translation Pipeline",
            desc: "A multilingual OCR workflow that extracts text from uploaded images and translates it into English using a combination of APIs and language-specific tools.",
            highlight: "Strong integration-heavy project spanning OCR orchestration, translation services, debugging, and applied NLP workflows.",
            tech: ["Python", "OCR.Space", "Tesseract", "Google Cloud Translation", "Streamlit", "APIs"],
            theme: "ocr",
            image: "/project-ocr.svg",
            link: "#",
        },
    ],
    skillGroups: [
        {
            title: "Languages",
            items: ["Python", "JavaScript", "TypeScript", "C++", "Go", "SQL"],
        },
        {
            title: "AI / ML",
            items: [
                "PyTorch",
                "TensorFlow",
                "Hugging Face Transformers",
                "PEFT / LoRA",
                "Sentence Embeddings",
                "RAG",
                "Gemini",
                "YOLOv8",
                "OpenCV",
                "Multilingual NLP",
            ],
        },
        {
            title: "Frontend",
            items: ["React", "Next.js", "Tailwind CSS", "Zustand", "Framer Motion", "shadcn/ui", "HTML/CSS"],
        },
        {
            title: "Backend & APIs",
            items: ["FastAPI", "Node.js", "GraphQL", "SQLAlchemy", "Pydantic", "Axios", "WebSockets"],
        },
        {
            title: "Data & Retrieval",
            items: ["PostgreSQL", "SQLite", "Vector Databases", "ChromaDB", "pypdf", "python-docx"],
        },
        {
            title: "Infra & Tooling",
            items: ["Docker", "Kubernetes", "AWS", "Prometheus", "Linux", "Git", "JWT", "Roboflow", "Tesseract", "Streamlit"],
        },
    ],
    skills: [
        "Python", "JavaScript", "TypeScript", "C++", "Go", "SQL",
        "React", "Next.js", "Tailwind CSS", "Zustand", "Framer Motion",
        "FastAPI", "Node.js", "GraphQL", "SQLAlchemy", "PostgreSQL",
        "PyTorch", "TensorFlow", "Hugging Face", "PEFT / LoRA", "RAG",
        "YOLOv8", "OpenCV", "Docker", "Kubernetes", "AWS",
        "ChromaDB", "Vector Databases", "JWT", "Linux", "Git",
    ],
    accolades: [
        "LeetCode: 500+ problems solved, demonstrating strong consistency and problem-solving discipline.",
        "GeeksForGeeks: 200+ problems solved across structured DSA preparation workflows.",
    ],
};

export const NAV = [
    { label: "Personal Info", path: "/personal" },
    { label: "Education", path: "/education" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Experience", path: "/experience" },
    { label: "Accolades", path: "/accolades" },
];
