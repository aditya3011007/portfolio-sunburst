// src/pages/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 },
};

export default function Education() {
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
                My <span className="text-emerald-300">Education</span>
            </h2>

            <div className="relative z-10 w-full max-w-2xl space-y-8">
                {resume.education.map((e, i) => (
                    <motion.div
                        key={e.institute}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.15, type: "spring" }}
                        className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl hover:border-emerald-300/50 hover:shadow-emerald-500/20 transition-all relative overflow-hidden"
                    >
                        {/* Ambient Inner Glow */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" />

                        <h3 className="text-2xl md:text-3xl font-bold text-emerald-200 mb-2">{e.degree}</h3>
                        <p className="text-lg md:text-xl text-white font-medium mb-6">{e.institute}</p>

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-emerald-100/80 bg-black/20 p-4 rounded-xl backdrop-blur-md border border-white/5">
                            <span className="font-mono">🗓 {e.period}</span>
                            <span className="font-bold text-emerald-300 bg-emerald-900/40 px-3 py-1 rounded-lg">🎓 CGPA: {e.cgpa}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}