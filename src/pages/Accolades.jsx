// src/pages/Accolades.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 },
};

export default function Accolades() {
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

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-2xl w-full shadow-2xl hover:border-amber-300/40 hover:shadow-amber-500/20 transition-all"
            >
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full pointer-events-none" />

                <h2 className="text-4xl font-bold text-amber-300 mb-8 text-center drop-shadow-md">Accolades</h2>

                <ul className="space-y-6 text-lg text-white">
                    {resume.accolades.map((a) => (
                        <li key={a} className="flex items-start gap-4 bg-black/20 p-4 rounded-2xl border border-white/5">
                            <span className="text-amber-400 text-2xl">🏆</span>
                            <span className="leading-relaxed text-amber-50/90">{a}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.section>
    );
}