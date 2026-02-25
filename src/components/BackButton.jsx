// src/components/BackButton.jsx
import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

export default function BackButton() {
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / 3);
        y.set((e.clientY - centerY) / 3);
    };

    return (
        <motion.div
            className="fixed top-8 left-8 z-[100]"
            style={{ x: mouseXSpring, y: mouseYSpring }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { x.set(0); y.set(0); setIsHovered(false); }}
        >
            <Link to="/">
                <motion.div
                    layout
                    className="flex items-center h-14 bg-white/5 backdrop-blur-2xl border border-white/20 rounded-full shadow-2xl hover:border-fuchsia-500/50 hover:bg-black/60 transition-colors cursor-pointer"
                    animate={{ width: isHovered ? 200 : 70 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                    <div className="flex items-center px-4 w-full h-full relative">

                        {/* THE VISUAL "BACK" INDICATOR */}
                        <div className="flex items-center gap-2">
                            <motion.div
                                className="text-fuchsia-400 text-xl font-black"
                                animate={{ x: isHovered ? -2 : 0 }}
                            >
                                ←
                            </motion.div>

                            {/* Vertical "BACK" text as part of the icon design */}
                            {!isHovered && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-[10px] font-black text-white/40 leading-none uppercase tracking-tighter"
                                    style={{ writingMode: 'vertical-lr' }}
                                >
                                    Back
                                </motion.span>
                            )}
                        </div>

                        {/* EXPANDED LABEL */}
                        <motion.span
                            className="ml-4 text-white font-bold tracking-[0.2em] text-[11px] uppercase whitespace-nowrap"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            Return to Hub
                        </motion.span>

                        {/* Floating Energy Particle */}
                        <motion.div
                            animate={{
                                opacity: isHovered ? [0, 1, 0] : 0,
                                x: [0, 40, 80],
                                y: [-10, 0, 10]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute left-6 top-1/2 w-1 h-1 bg-fuchsia-400 rounded-full blur-[2px]"
                        />
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}