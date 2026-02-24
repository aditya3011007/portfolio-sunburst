// src/pages/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";
import BackButton from "../components/BackButton";

const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
};

export default function Skills() {
    return (
        <motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            className="min-h-screen py-24 px-6 flex flex-col items-center justify-center overflow-hidden"
        >
            <BackButton />

            <div className="text-center z-10 mb-16">
                <h2 className="text-5xl font-black text-white drop-shadow-lg tracking-tight mb-4">
                    My <span className="text-cyan-400">Skills</span>
                </h2>
                <p className="text-cyan-200 animate-pulse text-sm font-mono">
                    (Go ahead, grab and throw them around)
                </p>
            </div>

            <motion.ul
                className="relative z-10 flex flex-wrap justify-center gap-6 max-w-4xl"
                transition={{ staggerChildren: 0.05 }}
            >
                {resume.skills.map((s, i) => (
                    <motion.li
                        key={s}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05, type: "spring", stiffness: 200, damping: 15 }}

                        // --- THE MAGIC PHYSICS PROPS ---
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.4} // How far they can stretch it
                        whileDrag={{ scale: 1.2, zIndex: 50, rotate: Math.random() * 20 - 10 }}
                        whileHover={{ scale: 1.1, y: -5 }}

                        className="px-8 py-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-lg font-bold text-white shadow-xl hover:bg-white/20 hover:border-cyan-400/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-colors cursor-grab active:cursor-grabbing"
                    >
                        {s}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.section>
    );
}