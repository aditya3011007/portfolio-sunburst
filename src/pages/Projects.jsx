// src/pages/Projects.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import BackButton from "../components/BackButton";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};

const projectThemes = {
    interview: {
        gradient: "from-sky-400/30 via-cyan-300/16 to-indigo-300/10",
        accent: "bg-sky-300/85",
        text: "Voice • Scoring • Reports",
        tags: ["Resume-aware", "Adaptive", "Interview UX"],
    },
    messaging: {
        gradient: "from-fuchsia-400/24 via-pink-300/16 to-violet-300/10",
        accent: "bg-fuchsia-300/85",
        text: "Tone • Retrieval • Personalization",
        tags: ["Style-aware", "Multilingual", "LLM replies"],
    },
    vision: {
        gradient: "from-rose-400/22 via-orange-300/14 to-amber-300/10",
        accent: "bg-rose-300/85",
        text: "Detection • Evaluation • Safety",
        tags: ["YOLOv8", "Weapon classes", "Real-time"],
    },
    edge: {
        gradient: "from-emerald-400/20 via-teal-300/14 to-cyan-300/10",
        accent: "bg-emerald-300/85",
        text: "Edge • Federated • Optimization",
        tags: ["Multi-node", "Communication", "Scalable"],
    },
    workspace: {
        gradient: "from-violet-400/22 via-indigo-300/14 to-sky-300/10",
        accent: "bg-violet-300/85",
        text: "Agents • Retrieval • Streaming",
        tags: ["Documents", "WebSockets", "Modular"],
    },
    dashboard: {
        gradient: "from-amber-300/24 via-yellow-300/14 to-orange-300/10",
        accent: "bg-amber-300/85",
        text: "Progress • State • UI polish",
        tags: ["GraphQL", "Auth", "Tracking"],
    },
    parking: {
        gradient: "from-cyan-400/22 via-blue-300/14 to-emerald-300/10",
        accent: "bg-cyan-300/85",
        text: "Aerial CV • Backend • Results",
        tags: ["Slots", "Vehicles", "Analysis"],
    },
    ocr: {
        gradient: "from-slate-300/18 via-blue-300/14 to-cyan-300/10",
        accent: "bg-slate-200/85",
        text: "OCR • Translation • Orchestration",
        tags: ["Multilingual", "APIs", "Pipeline"],
    },
};

function ProjectVisual({ project }) {
    const theme = projectThemes[project.theme];

    return (
        <div className={`relative overflow-hidden rounded-[1.35rem] border border-white/12 bg-gradient-to-br ${theme.gradient} p-5`}>
            <img
                src={project.image}
                alt={`${project.title} project visual`}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/48" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent" />

            <div className="relative z-10">
                <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${theme.accent}`} />
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/72">
                        {theme.text}
                    </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {theme.tags.map((tag) => (
                        <div
                            key={tag}
                            className="rounded-full border border-white/14 bg-slate-950/35 px-3 py-1.5 text-[0.7rem] font-medium text-white/88 backdrop-blur-md"
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                <div className="mt-8 h-16 rounded-[1rem] border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-sm" />
            </div>
        </div>
    );
}

function ProjectCard({ project, index }) {
    return (
        <Motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
            className="rounded-[1.9rem] border border-white/12 bg-slate-950/32 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.2)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/18"
        >
            <ProjectVisual project={project} />

            <div className="mt-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/72">
                    {project.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-200/80">
                    {project.desc}
                </p>
            </div>

            <div className="mt-5 rounded-[1.25rem] border border-cyan-300/14 bg-cyan-300/8 p-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/72">
                    Recruiter Signal
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-100/82">
                    {project.highlight}
                </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/86"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </Motion.article>
    );
}

export default function Projects() {
    return (
        <Motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.45 }}
            className="min-h-screen px-6 py-24 md:px-8"
        >
            <BackButton />

            <div className="mx-auto w-full max-w-7xl">
                <Motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-[2rem] border border-white/15 bg-slate-950/35 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-2xl md:p-10"
                >
                    <div className="max-w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/80">
                        Selected Work
                    </div>

                    <h1
                        className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl"
                        style={{ fontFamily: "\"Iowan Old Style\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif" }}
                    >
                        Projects That Reflect My Candidacy
                    </h1>

                    <p className="mt-5 max-w-4xl text-base leading-8 text-slate-200/82 md:text-lg">
                        A portfolio of AI, ML, full-stack, and systems projects that show product thinking, technical execution,
                        and the ability to ship across multiple layers of the stack.
                    </p>
                </Motion.div>

                <div className="mt-8 grid gap-6 xl:grid-cols-2">
                    {resume.projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </Motion.section>
    );
}
