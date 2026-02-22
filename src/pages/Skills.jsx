// src/pages/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.1 },
};

const itemVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
};

export default function Skills() {
    return (
        <motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen py-24 px-6 flex flex-col items-center justify-center"
        >
            <Link
                to="/"
                className="fixed top-8 left-8 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all shadow-lg font-medium z-50"
            >
                ← Back to Hub
            </Link>

            <h2 className="text-5xl font-black text-white drop-shadow-lg mb-12 tracking-tight z-10">
                My <span className="text-cyan-300">Skills</span>
            </h2>

            <motion.ul
                className="relative z-10 flex flex-wrap justify-center gap-6 max-w-4xl"
                transition={{ staggerChildren: 0.1 }}
            >
                {resume.skills.map((s) => (
                    <motion.li
                        key={s}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-lg font-medium text-white shadow-xl hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all cursor-default"
                    >
                        {s}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.section>
    );
}