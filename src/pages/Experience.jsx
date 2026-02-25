// src/pages/Experience.jsx
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { resume } from "../data";
import BackButton from "../components/BackButton";

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
};

export default function Experience() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            ref={containerRef}
            className="min-h-screen py-24 px-4 md:px-6 flex flex-col items-center overflow-x-hidden"
        >
            <BackButton />

            <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg mb-16 md:mb-24 tracking-tight z-10">
                My <span className="text-fuchsia-400">Experience</span>
            </h2>

            <div className="relative z-10 flex flex-col gap-12 md:gap-20 max-w-4xl w-full pb-32">

                {/* The Track: Hugs the left on mobile (left-6), centers on desktop (md:left-1/2) */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full -translate-x-1/2" />

                {/* The Laser Scroll Line */}
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-fuchsia-400 to-purple-600 rounded-full -translate-x-1/2 shadow-[0_0_20px_rgba(232,121,249,1)]"
                />

                {resume.experience.map((exp, i) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className={`relative flex flex-col md:flex-row md:gap-8 items-start md:items-center group ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Pulsing Timeline Dot: Sits on the laser line */}
                        <motion.div
                            whileInView={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute left-6 md:left-1/2 top-8 md:top-auto md:-translate-y-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-fuchsia-500 border-[3px] md:border-4 border-[#0B0F19] shadow-[0_0_20px_rgba(232,121,249,1)] z-10"
                        />

                        {/* Glowing Glass Card: Margined away from the left line on mobile */}
                        <div className="w-[calc(100%-3rem)] ml-[3rem] md:ml-0 md:w-1/2 p-6 md:p-8 bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl hover:bg-white/10 hover:border-fuchsia-400/50 hover:shadow-[0_0_40px_rgba(232,121,249,0.2)] transition-all duration-500">
                            <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-300 mb-1">{exp.role}</h3>
                            <p className="text-lg md:text-xl text-white font-bold mb-3">{exp.company}</p>
                            <div className="inline-block px-3 py-1 bg-fuchsia-500/20 border border-fuchsia-300/30 rounded-full text-fuchsia-200 text-xs md:text-sm font-mono mb-6">
                                {exp.period} • {exp.location}
                            </div>
                            <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base text-slate-200 leading-relaxed marker:text-fuchsia-400">
                                {exp.bullets.map((b) => <li key={b}>{b}</li>)}
                            </ul>
                        </div>

                        {/* Desktop Spacer to keep cards alternating left/right */}
                        <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}