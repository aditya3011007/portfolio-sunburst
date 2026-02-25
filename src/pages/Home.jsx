// src/pages/Home.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { resume, NAV } from "../data";

// --- DESKTOP CONSTANTS ---
const RADIUS = 220;
const OFFSET_X = -36;
const RAY_LEN = RADIUS - 40;

// --- MOBILE CONSTANTS ---
const MOBILE_RADIUS = 125;

const rayColors = [
    "rgba(251, 191, 36, 1)",  // Amber Gold
    "rgba(56, 189, 248, 1)",  // Sky Blue
    "rgba(52, 211, 153, 1)",  // Emerald
    "rgba(244, 114, 182, 1)", // Pink
    "rgba(167, 139, 250, 1)", // Purple
    "rgba(250, 204, 21, 1)",  // Bright Yellow
];

// Pre-calculate mobile tab coordinates to detect drag collisions
const mobileTargets = NAV.map((item, i) => {
    const angle = (360 / NAV.length) * i - 90;
    const rad = (angle * Math.PI) / 180;
    return {
        ...item,
        angle,
        x: Math.cos(rad) * MOBILE_RADIUS,
        y: Math.sin(rad) * MOBILE_RADIUS,
        color: rayColors[i]
    };
});

const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.05 },
};

export default function Home() {
    const navigate = useNavigate();

    // Desktop States
    const [hoveredIdx, setHoveredIdx] = useState(null);

    // Mobile States
    const [activeMobileTarget, setActiveMobileTarget] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    // Desktop Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth - 0.5) * 2);
        mouseY.set((clientY / innerHeight - 0.5) * 2);
    };

    const springConfig = { damping: 25, stiffness: 150 };
    const parallaxX = useSpring(useTransform(mouseX, [-1, 1], [-25, 25]), springConfig);
    const parallaxY = useSpring(useTransform(mouseY, [-1, 1], [-25, 25]), springConfig);
    const rayParallaxX = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), springConfig);
    const rayParallaxY = useSpring(useTransform(mouseY, [-1, 1], [-15, 15]), springConfig);

    // --- MOBILE DRAG LOGIC ---
    const handleMobileDrag = (event, info) => {
        const { x, y } = info.offset;
        let foundIdx = null;

        // Check distance between dragged sun and each orbiting tab
        for (let i = 0; i < mobileTargets.length; i++) {
            const target = mobileTargets[i];
            const distance = Math.hypot(target.x - x, target.y - y);

            // If within 50px threshold, light up the target!
            if (distance < 50) {
                foundIdx = i;
                break;
            }
        }
        setActiveMobileTarget(foundIdx);
    };

    const handleMobileDragEnd = () => {
        setIsDragging(false);
        // If the sun was released over a lit-up target, warp to that page!
        if (activeMobileTarget !== null) {
            navigate(mobileTargets[activeMobileTarget].path);
        }
    };

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
            {/* 1. CENTRAL SUN CORE (Background Ambience) */}
            <motion.div
                style={{ x: parallaxX, y: parallaxY }}
                className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-yellow-300/10 blur-[100px] pointer-events-none z-0"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 2. NAME ELEMENT (Shifted up on Mobile, Centered on Desktop) */}
            <motion.div
                style={{ x: parallaxX, y: parallaxY }}
                className="z-20 absolute top-[12%] md:static md:top-auto flex flex-col items-center pointer-events-none"
            >
                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className="text-[2.75rem] md:text-6xl font-extrabold tracking-tight text-fuchsia-700 select-none drop-shadow-xl text-center md:ml-9 md:text-left"
                >
                    {resume.personal.name}
                </motion.h1>
            </motion.div>

            {/* ========================================== */}
            {/* 3. DESKTOP VIEW: SUNBURST (Hidden on Mobile) */}
            {/* ========================================== */}
            <motion.div
                className="hidden md:block absolute inset-0 z-10 pointer-events-none"
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
                                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                                transition={{ delay: 0.6 + i * 0.08, duration: 0.45 }}
                            />

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

            {/* ========================================== */}
            {/* 4. MOBILE VIEW: DRAG-TO-NAVIGATE HUD */}
            {/* ========================================== */}
            <div className="absolute inset-0 z-30 md:hidden flex flex-col items-center justify-center pt-20 overflow-hidden pointer-events-none">
                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center pointer-events-auto">

                    {/* A. The Orbiting Targets (Sunrays) */}
                    {mobileTargets.map((target, i) => {
                        const isActive = activeMobileTarget === i;
                        return (
                            <motion.div
                                key={target.path}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                                animate={{ x: target.x, y: target.y }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            >
                                {/* Visual Ray connecting center to tab */}
                                <div
                                    className="absolute h-[1px] origin-left rounded-full transition-all duration-300"
                                    style={{
                                        width: `${MOBILE_RADIUS - 20}px`,
                                        transform: `rotate(${target.angle}deg) translateX(20px)`,
                                        backgroundImage: isActive
                                            ? `linear-gradient(to right, ${target.color}, transparent)`
                                            : `linear-gradient(to right, rgba(255,255,255,0.1), transparent)`,
                                    }}
                                />

                                {/* Target Capsule */}
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.2 : 1,
                                        backgroundColor: isActive ? target.color.replace('1)', '0.3)') : "rgba(255,255,255,0.05)",
                                        borderColor: isActive ? target.color : "rgba(255,255,255,0.15)",
                                        boxShadow: isActive ? `0 0 25px ${target.color}` : "0 0 0px transparent"
                                    }}
                                    className="px-3 py-1.5 rounded-full border backdrop-blur-md transition-colors duration-200"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap drop-shadow-md">
                                        {target.label}
                                    </span>
                                </motion.div>
                            </motion.div>
                        );
                    })}

                    {/* B. The Draggable Sun Core */}
                    <motion.div
                        drag
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} // Forces snap back to center
                        dragElastic={1} // Allows unhindered dragging 
                        onDragStart={() => setIsDragging(true)}
                        onDrag={handleMobileDrag}
                        onDragEnd={handleMobileDragEnd}
                        whileDrag={{ scale: 0.9, cursor: "grabbing" }}
                        className="absolute z-50 w-20 h-20 rounded-full flex items-center justify-center cursor-grab touch-none"
                        style={{
                            background: "radial-gradient(circle, rgba(236,72,153,0.9) 0%, rgba(139,92,246,0.8) 100%)",
                            boxShadow: "0 0 30px rgba(236, 72, 153, 0.6), inset 0 0 15px rgba(255,255,255,0.4)",
                        }}
                    >
                        {/* Core inner pulse effect */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-8 h-8 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        >
                            <span className="text-white/80 text-[10px] tracking-widest leading-none mt-[1px]">✦</span>
                        </motion.div>
                    </motion.div>

                </div>

                {/* C. Subtle User Guide Instruction */}
                <motion.div
                    animate={{ opacity: isDragging ? 0 : 0.6 }}
                    className="absolute bottom-[15%] text-center px-6"
                >
                    <p className="text-white text-[10px] uppercase font-mono tracking-[0.2em]">
                        Drag the core to explore
                    </p>
                    <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="mt-2 text-fuchsia-400 text-[10px]"
                    >
                        ▼
                    </motion.div>
                </motion.div>
            </div>

        </motion.div>
    );
}