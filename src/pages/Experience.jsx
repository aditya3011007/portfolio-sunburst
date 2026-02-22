// src/pages/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
};

export default function Experience() {
    return (
        <motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen py-24 px-6 flex flex-col items-center"
        >
            <Link
                to="/"
                className="fixed top-8 left-8 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all shadow-lg font-medium z-50"
            >
                ← Back to Hub
            </Link>

            <h2 className="text-5xl font-black text-white drop-shadow-lg mb-16 tracking-tight z-10">
                My <span className="text-fuchsia-300">Experience</span>
            </h2>

            <div className="relative z-10 flex flex-col gap-10 max-w-4xl w-full">
                {/* Glowing Vertical Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-300/50 via-fuchsia-400/50 to-transparent -translate-x-1/2 hidden md:block" />

                {resume.experience.map((exp, i) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                        className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-fuchsia-400 shadow-[0_0_15px_rgba(232,121,249,0.8)] z-10" />

                        {/* Glass Card */}
                        <div className="w-full md:w-1/2 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hover:bg-white/15 hover:border-fuchsia-300/30 transition-all">
                            <h3 className="text-2xl font-bold text-fuchsia-200 mb-1">{exp.role}</h3>
                            <p className="text-lg text-white font-medium mb-2">@ {exp.company}</p>
                            <p className="text-sm text-fuchsia-100/70 mb-5 font-mono tracking-tight">{exp.period} • {exp.location}</p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-slate-200 leading-relaxed">
                                {exp.bullets.map((b) => <li key={b}>{b}</li>)}
                            </ul>
                        </div>

                        {/* Empty space to push cards to alternating sides */}
                        <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}