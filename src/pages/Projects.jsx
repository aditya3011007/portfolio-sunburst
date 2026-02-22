// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 },
};

export default function Projects() {
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
                className="fixed top-8 left-8 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all shadow-lg font-medium"
            >
                ← Back to Hub
            </Link>

            <h2 className="text-5xl font-black text-white drop-shadow-lg mb-16 tracking-tight">
                My <span className="text-fuchsia-300">Projects</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
                {resume.projects.map((project, i) => (
                    <motion.a
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative h-72 rounded-3xl p-8 flex flex-col justify-between cursor-pointer overflow-hidden border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl hover:shadow-fuchsia-500/20 hover:border-fuchsia-300/50 transition-colors"
                    >
                        {/* Subtle glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-fuchsia-200 transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-200">
                                {project.desc}
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-white text-xs font-medium backdrop-blur-md"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
}