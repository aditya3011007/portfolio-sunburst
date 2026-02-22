// src/data.js
export const resume = {
    personal: {
        name: "Aditya Raj Singh",
        title: "Associate Software Engineer",
        summary: "Associate Software Engineer and MS Computer Science student with hands-on experience in building and optimizing single-page applications. I have a solid foundation in data structures, algorithms, and RESTful API integration. When I'm not building scalable React apps or exploring distributed systems, you might find me taking a break to enjoy the views at Niagara Falls.",
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
            company: "HackerShala",
            role: "Software Engineering Intern",
            period: "Aug 2022 – Sep 2022",
            location: "Noida, UP",
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
            location: "Noida, UP",
            bullets: [
                "Managed and optimized relational database schemas to support backend functionalities.",
                "Implemented attendance tracking systems, ensuring data integrity and reliable reporting.",
                "Maintained site reliability and deployed code changes to production using Git and CI workflows."
            ],
        },
    ],
    projects: [
        {
            title: "AI Agentic Text Dashboard",
            desc: "Developing an intelligent, AI-driven dashboard designed to autonomously summarize, analyze, and correct text streams.",
            tech: ["React", "Python", "LLMs"],
            link: "#",
        },
        {
            title: "AI-Powered Video Surveillance",
            desc: "Designed a deep learning pipeline to analyze CCTV footage for real-time threat detection, optimizing inference speed for live video streams.",
            tech: ["Python", "TensorFlow", "OpenCV"],
            link: "#",
        },
        {
            title: "Distributed Edge Computing",
            desc: "Engineered a protocol to compress and transmit data, minimizing bandwidth and addressing latency constraints in federated learning environments.",
            tech: ["Python", "Socket.io", "PyWavelets"],
            link: "#",
        },
        {
            title: "Drone Imagery Analysis",
            desc: "Built a computer vision model to detect valid parking spots by processing high-resolution satellite imagery for automated navigation.",
            tech: ["Python", "Computer Vision"],
            link: "#",
        },
        {
            title: "DSA CRACKER Platform",
            desc: "Developed a full-stack web application to track coding progress across LeetCode and GeeksForGeeks with a scalable, responsive UI.",
            tech: ["React", "JavaScript", "HTML/CSS"],
            link: "#",
        },
    ],
    skills: [
        "Python", "C++", "JavaScript", "Go", "SQL",
        "React", "HTML/CSS", "Tailwind",
        "TensorFlow", "PyTorch", "OpenCV",
        "Linux", "Git", "Cloud Computing",
        "Data Structures & Algorithms", "REST APIs"
    ],
    accolades: [
        "LeetCode: 500+ problems solved (Strong grasp of Data Structures & Algorithms)",
        "GeeksForGeeks: 200+ problems solved"
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