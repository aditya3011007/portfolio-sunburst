// src/pages/Education.jsx
import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";
import BackButton from "../components/BackButton";

function EduCard({ item, index }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            onMouseMove={handleMouseMove}
            className="relative group p-8 bg-black/30 backdrop-blur-md border border-emerald-900/50 rounded-3xl shadow-xl overflow-hidden cursor-crosshair"
        >
            {/* Holographic Mouse Flare */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-10 mix-blend-overlay" />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div>
                    <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200 mb-2">
                        {item.degree}
                    </h3>
                    <p className="text-lg text-emerald-100/80 font-medium tracking-wide uppercase text-sm">
                        {item.institute}
                    </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <span className="font-mono text-emerald-400 bg-emerald-950/50 px-4 py-2 rounded-xl border border-emerald-800/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-shadow">
                        GPA: {item.cgpa}
                    </span>
                    <span className="text-sm text-slate-400 font-mono">{item.period}</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function Education() {
    return (
        <motion.section
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen py-24 px-6 flex flex-col items-center"
        >
            <BackButton />

            <h2 className="text-5xl font-black text-white drop-shadow-lg mb-16 tracking-tight z-10 uppercase">
                <span className="text-emerald-400 border-b-4 border-emerald-400 pb-2">Education</span>
            </h2>

            <div className="relative z-10 w-full max-w-3xl space-y-10">
                {/* Connecting Vertical Circuit Line */}
                <div className="absolute left-10 md:left-12 top-10 bottom-10 w-[2px] bg-emerald-900 z-0">
                    <motion.div
                        className="w-full h-1/3 bg-emerald-400 shadow-[0_0_15px_#34d399]"
                        animate={{ y: ["-100%", "300%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {resume.education.map((e, i) => (
                    <EduCard key={e.institute} item={e} index={i} />
                ))}
            </div>
        </motion.section>
    );
}