// src/components/BackButton.jsx
import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

export default function BackButton() {
    const [isHovered, setIsHovered] = useState(false);

    // Magnetic physics state
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 15 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // The divisor dictates the magnetic pull strength
        x.set((e.clientX - centerX) / 2.5);
        y.set((e.clientY - centerY) / 2.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            className="fixed top-8 left-8 z-[100]"
            style={{ x: mouseXSpring, y: mouseYSpring }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            <Link to="/">
                <motion.div
                    layout
                    className="flex items-center justify-start h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:border-fuchsia-400/50 hover:bg-black/40 overflow-hidden cursor-pointer transition-colors"
                    // Starts as a 56px perfect circle, expands to 180px pill
                    animate={{ width: isHovered ? 180 : 56 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    <div className="flex items-center gap-3 px-4 w-full h-full">
                        {/* The Rotating Neon Star */}
                        <motion.div
                            className="w-6 h-6 shrink-0 flex items-center justify-center text-xl text-fuchsia-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]"
                            animate={{ rotate: isHovered ? 0 : 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            ✦
                        </motion.div>

                        {/* The Hidden Text Reveal */}
                        <motion.span
                            className="text-white font-bold tracking-wide whitespace-nowrap"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            Return to Hub
                        </motion.span>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}