// src/pages/Personal.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, x: 50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -50 },
};

export default function Personal() {
    const { name, title, summary, email, phone, location } = resume.personal;

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

            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 max-w-2xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-14 shadow-2xl hover:border-fuchsia-400/30 hover:shadow-fuchsia-500/20 transition-all overflow-hidden"
            >
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-fuchsia-500/20 blur-[80px] rounded-full pointer-events-none" />

                <header className="mb-8 border-b border-white/10 pb-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow-md">
                        {name}
                    </h2>
                    <p className="text-xl text-fuchsia-300 font-medium">{title}</p>
                </header>

                <p className="text-lg leading-relaxed text-slate-200 mb-8">
                    {summary}
                </p>

                <ul className="space-y-4 text-sm md:text-base text-white/90 bg-black/20 p-6 rounded-2xl border border-white/5">
                    <li className="flex gap-3"><span className="text-fuchsia-400">✉️</span> {email}</li>
                    <li className="flex gap-3"><span className="text-fuchsia-400">📞</span> {phone}</li>
                    <li className="flex gap-3"><span className="text-fuchsia-400">📍</span> {location}</li>
                </ul>
            </motion.article>
        </motion.section>
    );
}