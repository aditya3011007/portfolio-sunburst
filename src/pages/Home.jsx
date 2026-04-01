// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { resume, NAV } from "../data";

const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.02 },
};

const widgetMeta = {
    "/personal": {
        eyebrow: "About",
        blurb: "Personal background, contact details, and resume access.",
    },
    "/education": {
        eyebrow: "Study",
        blurb: "Academic foundation, coursework, and current MS journey.",
    },
    "/projects": {
        eyebrow: "Build",
        blurb: "Selected software, AI, and systems projects I have worked on.",
    },
    "/skills": {
        eyebrow: "Stack",
        blurb: "Core technical strengths across AI, software, and tooling.",
    },
    "/experience": {
        eyebrow: "Work",
        blurb: "Professional roles, impact, and engineering experience.",
    },
    "/accolades": {
        eyebrow: "Wins",
        blurb: "Achievements, coding milestones, and recognition.",
    },
};

const widgetColors = [
    "from-amber-300/30 to-orange-300/10",
    "from-sky-300/30 to-cyan-300/10",
    "from-emerald-300/30 to-teal-300/10",
    "from-fuchsia-300/25 to-pink-300/10",
    "from-violet-300/30 to-purple-300/10",
    "from-yellow-300/30 to-amber-300/10",
];

const widgetHoverStyles = [
    {
        border: "rgba(251, 191, 36, 0.55)",
        background: "rgba(251, 191, 36, 0.12)",
        shadow: "0 0 36px rgba(251, 191, 36, 0.18)",
    },
    {
        border: "rgba(56, 189, 248, 0.55)",
        background: "rgba(56, 189, 248, 0.12)",
        shadow: "0 0 36px rgba(56, 189, 248, 0.18)",
    },
    {
        border: "rgba(52, 211, 153, 0.55)",
        background: "rgba(52, 211, 153, 0.12)",
        shadow: "0 0 36px rgba(52, 211, 153, 0.18)",
    },
    {
        border: "rgba(244, 114, 182, 0.55)",
        background: "rgba(244, 114, 182, 0.12)",
        shadow: "0 0 36px rgba(244, 114, 182, 0.18)",
    },
    {
        border: "rgba(167, 139, 250, 0.55)",
        background: "rgba(167, 139, 250, 0.12)",
        shadow: "0 0 36px rgba(167, 139, 250, 0.18)",
    },
    {
        border: "rgba(250, 204, 21, 0.55)",
        background: "rgba(250, 204, 21, 0.12)",
        shadow: "0 0 36px rgba(250, 204, 21, 0.18)",
    },
];

export default function Home() {
    return (
        <Motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.45 }}
            className="relative min-h-screen overflow-hidden px-6 py-10 md:px-8 md:py-12"
        >
            <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.9fr] lg:items-stretch">
                <Motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/32 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.24)] backdrop-blur-2xl md:p-8"
                >
                    <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-cyan-300/14 blur-[90px]" />
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                        <div className="relative z-10">
                            <div className="max-w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-cyan-100/85">
                                ML / AI Engineer
                            </div>

                            <h1
                                className="mt-6 text-5xl font-semibold leading-[0.92] tracking-tight text-white md:text-6xl xl:text-7xl"
                                style={{ fontFamily: "\"Iowan Old Style\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif" }}
                            >
                                {resume.personal.name}
                            </h1>

                            <p className="mt-5 max-w-xl text-base leading-8 text-slate-100/88 md:text-lg">
                                AI/ML engineer and software developer building practical intelligent systems,
                                production-ready applications, and thoughtful user experiences.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/85">
                                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                                    {resume.personal.location}
                                </div>
                                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                                    University at Buffalo
                                </div>
                                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                                    AI, ML, Software Engineering
                                </div>
                            </div>

                            <div className="mt-8 max-w-xl rounded-[1.5rem] border border-white/12 bg-white/5 p-5">
                                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
                                    Overview
                                </p>
                                <p className="mt-3 text-sm leading-7 text-slate-200/80 md:text-[0.95rem]">
                                    Explore the sections on the right to see my projects, experience, education,
                                    technical strengths, and achievements in a clean portfolio format.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="rounded-[1.75rem] border border-white/15 bg-white/5 p-5">
                                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/30">
                                    <img
                                        src="/aditya-avatar.png"
                                        alt="Illustrated avatar of Aditya Raj Singh"
                                        className="aspect-[4/5] w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Motion.div>

                <Motion.aside
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="rounded-[2rem] border border-white/15 bg-slate-950/28 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-2xl md:p-7"
                >
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
                                Explore
                            </p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                                Portfolio Sections
                            </h2>
                        </div>
                        <div className="hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-50 md:block">
                            Click a card
                        </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {NAV.map((item, index) => {
                            const meta = widgetMeta[item.path];
                            const hoverStyle = widgetHoverStyles[index];

                            return (
                                <Motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.18 + index * 0.06, duration: 0.4 }}
                                >
                                    <Link
                                        to={item.path}
                                        className="group relative block h-full overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/6 p-5 transition-all duration-300 hover:-translate-y-1"
                                        style={{
                                            boxShadow: "0 18px 40px rgba(15,23,42,0.1)",
                                        }}
                                    >
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${widgetColors[index]} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                                        />
                                        <div
                                            className="absolute inset-0 bg-slate-950/45 transition-all duration-300"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                            style={{
                                                background: hoverStyle.background,
                                                boxShadow: hoverStyle.shadow,
                                            }}
                                        />

                                        <div
                                            className="absolute inset-0 rounded-[1.5rem] border opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            style={{ borderColor: hoverStyle.border }}
                                        />

                                        <div className="relative z-10 flex h-full flex-col">
                                            <div className="flex items-center justify-between gap-3">
                                                <span
                                                    className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80 transition-colors duration-300"
                                                >
                                                    {meta.eyebrow}
                                                </span>
                                                <span
                                                    className="text-lg text-white/60 transition-transform duration-300 group-hover:translate-x-1"
                                                    style={{ color: hoverStyle.border }}
                                                >
                                                    →
                                                </span>
                                            </div>

                                            <h3 className="mt-4 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-white">
                                                {item.label}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-slate-200/80 transition-colors duration-300 group-hover:text-slate-100">
                                                {meta.blurb}
                                            </p>
                                        </div>
                                    </Link>
                                </Motion.div>
                            );
                        })}
                    </div>
                </Motion.aside>
            </div>
        </Motion.section>
    );
}
