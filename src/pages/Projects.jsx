// src/pages/Projects.jsx
import React from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";
import BackButton from "../components/BackButton";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 },
};

// --- 3D TILT & SPOTLIGHT CARD COMPONENT ---
function ProjectCard({ project, index }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the 3D tilt
    const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
    const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;

        // Update spotlight position
        mouseX.set(x);
        mouseY.set(y);

        // Calculate 3D tilt
        const rX = (y / height - 0.5) * -15; // Max 15deg tilt
        const rY = (x / width - 0.5) * 15;
        rotateX.set(rX);
        rotateY.set(rY);
    }

    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="group relative h-72 rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl transition-colors cursor-pointer"
        >
            {/* Dynamic Cursor Spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(236, 72, 153, 0.25),
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-fuchsia-300 transition-colors">
                    {project.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-300">
                    {project.desc}
                </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-medium backdrop-blur-md">
                        {t}
                    </span>
                ))}
            </div>
        </motion.a>
    );
}

export default function Projects() {
    return (
        <motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.5 }}
            className="min-h-screen py-24 px-6 flex flex-col items-center"
        >
            <BackButton />

            <motion.h2
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="text-5xl font-black text-white drop-shadow-lg mb-16 tracking-tight z-10"
            >
                My <span className="text-fuchsia-400">Projects</span>
            </motion.h2>

            <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full perspective-1000">
                {resume.projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
            </div>
        </motion.section>
    );
}