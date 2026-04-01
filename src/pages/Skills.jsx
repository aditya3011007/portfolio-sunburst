// src/pages/Skills.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import BackButton from "../components/BackButton";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, y: 16 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -16 },
};

const skillHighlights = [
    "AI / ML product engineering",
    "Full-stack application development",
    "Backend APIs and systems thinking",
];

export default function Skills() {
    return (
        <Motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.4 }}
            className="min-h-screen px-6 py-24 md:px-8"
        >
            <BackButton />

            <div className="mx-auto w-full max-w-6xl">
                <Motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-[2rem] border border-white/15 bg-slate-950/35 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-2xl md:p-10"
                >
                    <div className="max-w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/80">
                        Technical Strengths
                    </div>

                    <h1
                        className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl"
                        style={{ fontFamily: "\"Iowan Old Style\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif" }}
                    >
                        Skills & Tools
                    </h1>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200/82 md:text-lg">
                        A recruiter-focused overview of the technologies I use across machine learning, backend systems,
                        full-stack application development, and deployment-oriented engineering.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        {skillHighlights.map((item) => (
                            <div
                                key={item}
                                className="rounded-full border border-cyan-300/16 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-50"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </Motion.div>

                <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {resume.skillGroups.map((group, index) => (
                        <Motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08 + index * 0.06, duration: 0.4 }}
                            className="rounded-[1.75rem] border border-white/12 bg-slate-950/30 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl"
                        >
                            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/75">
                                {group.title}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-3">
                                {group.items.map((skill) => (
                                    <div
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-100/88 transition-all duration-300 hover:border-cyan-200/20 hover:bg-white/[0.08]"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </Motion.section>
    );
}
