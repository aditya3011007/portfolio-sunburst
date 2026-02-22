// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { resume, NAV } from "../data";

const RADIUS = 220;
const OFFSET_X = -36;
const RAY_LEN = RADIUS - 40;

const rayColors = [
    "rgba(251, 191, 36, 1)",  // Amber Gold
    "rgba(56, 189, 248, 1)",  // Sky Blue
    "rgba(52, 211, 153, 1)",  // Emerald
    "rgba(244, 114, 182, 1)", // Pink
    "rgba(167, 139, 250, 1)", // Purple
    "rgba(250, 204, 21, 1)",  // Bright Yellow
];

const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.05 },
};

export default function Home() {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const springConfig = { damping: 25, stiffness: 150 };
    const parallaxX = useSpring(useTransform(mouseX, [-1, 1], [-25, 25]), springConfig);
    const parallaxY = useSpring(useTransform(mouseY, [-1, 1], [-25, 25]), springConfig);
    // Reduced the ray parallax slightly so it drifts beautifully behind your name
    const rayParallaxX = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), springConfig);
    const rayParallaxY = useSpring(useTransform(mouseY, [-1, 1], [-15, 15]), springConfig);

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
            className="relative flex items-center justify-center w-full h-screen overflow-hidden"
        >
            {/* 1. CENTRAL SUN CORE */}
            <motion.div
                style={{ x: parallaxX, y: parallaxY }}
                className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-yellow-300/10 blur-[100px] pointer-events-none z-0"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 2. UNTOUCHABLE NAME ELEMENT */}
            <motion.div style={{ x: parallaxX, y: parallaxY }} className="z-20">
                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className="ml-9 text-4xl md:text-6xl font-extrabold tracking-tight text-fuchsia-700 select-none drop-shadow-xl"
                >
                    {resume.personal.name}
                </motion.h1>
            </motion.div>

            {/* 3. INTERACTIVE SUN RAYS (Wrapped in a single Parallax container to prevent math conflicts) */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ x: rayParallaxX, y: rayParallaxY }}
            >
                {NAV.map((item, i) => {
                    const angle = (360 / NAV.length) * i - 90;
                    const rad = (angle * Math.PI) / 180;
                    const x = RADIUS * Math.cos(rad) + OFFSET_X;
                    const y = RADIUS * Math.sin(rad);
                    const isHover = hoveredIdx === i;
                    const activeColor = rayColors[i];

                    return (
                        <motion.div
                            key={item.path}
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{ x, y, opacity: 1 }}
                            transition={{ delay: 0.6 + i * 0.08, type: "spring", stiffness: 120 }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                        >
                            {/* Energy Ray */}
                            <motion.span
                                className="absolute h-[2px] origin-left rounded-full transition-all duration-300"
                                style={{
                                    width: `${RAY_LEN}px`,
                                    left: "50%",
                                    top: "50%",
                                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                                    backgroundImage: isHover
                                        ? `linear-gradient(to right, ${activeColor}, transparent)`
                                        : `linear-gradient(to right, rgba(255,255,255,0.15), transparent)`,
                                    boxShadow: isHover ? `0 0 15px ${activeColor}` : "none",
                                }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.6 + i * 0.08, duration: 0.45 }}
                            />

                            {/* Glassmorphic Capsule */}
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                onHoverStart={() => setHoveredIdx(i)}
                                onHoverEnd={() => setHoveredIdx(null)}
                                className="relative group cursor-pointer"
                            >
                                <Link
                                    to={item.path}
                                    className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 transition-all duration-300 text-sm md:text-base font-bold text-white overflow-hidden"
                                    style={{
                                        textShadow: isHover ? `0 0 10px ${activeColor}` : "0 2px 4px rgba(0,0,0,0.5)",
                                        borderColor: isHover ? activeColor : "rgba(255,255,255,0.2)",
                                        backgroundColor: isHover ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
                                        boxShadow: isHover ? `0 0 25px ${activeColor.replace('1)', '0.4)')}` : "0 10px 15px rgba(0,0,0,0.2)",
                                    }}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}