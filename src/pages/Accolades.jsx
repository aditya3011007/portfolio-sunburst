// src/pages/Accolades.jsx
import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";
import BackButton from "../components/BackButton";

export default function Accolades() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ clientX, clientY }) {
        mouseX.set(clientX);
        mouseY.set(clientY);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onMouseMove={handleMouseMove}
            // Extremely dark overlay to make the flashlight pop
            className="min-h-screen py-24 px-6 flex flex-col items-center justify-center bg-black/60 overflow-hidden relative"
        >
            <BackButton />

            {/* THE FLASHLIGHT EFFECT */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(251, 191, 36, 0.15),
              rgba(0,0,0,0.8) 80%
            )
          `,
                }}
            />

            <div className="relative z-10 w-full max-w-3xl">
                <h2 className="text-6xl font-black text-amber-500/20 mb-16 text-center tracking-widest uppercase">
                    Trophies
                </h2>

                <div className="space-y-6">
                    {resume.accolades.map((a, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
                            className="relative group p-6 rounded-2xl border border-amber-900/30 bg-black/40 overflow-hidden"
                        >
                            {/* Internal Gold Shimmer */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent -translate-x-[100%]"
                                whileHover={{ translateX: "100%" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />

                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-amber-950 flex items-center justify-center border border-amber-500/30 group-hover:scale-110 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all duration-300">
                                    <span className="text-3xl">🏆</span>
                                </div>
                                {/* The text is dim by default, but brightens immensely when the flashlight is near (hover simulated) */}
                                <p className="text-xl text-amber-100/30 font-medium leading-relaxed group-hover:text-amber-200 transition-colors duration-500">
                                    {a}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}