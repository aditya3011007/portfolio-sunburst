// src/components/Background.jsx
import React from "react";
import { motion } from "framer-motion";

// Your EXACT array from your original code.
const originalHomeBlobs = [
    { cls: "w-[150vw] h-[150vh] rounded-[45%] bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900", left: "20%", top: "20%", cw: true, dur: 70, rot: 0 },
    { cls: "w-[140vw] h-[140vh] rounded-[50%] bg-gradient-to-tr from-emerald-900 via-emerald-800 to-teal-800", left: "80%", top: "25%", cw: false, dur: 90, rot: 30 },
    { cls: "w-[140vw] h-[140vh] rounded-[48%] bg-gradient-to-bl from-fuchsia-800 via-pink-800 to-purple-900", left: "25%", top: "80%", cw: true, dur: 110, rot: 90 },
    { cls: "w-[135vw] h-[135vh] rounded-[55%] bg-gradient-to-br from-amber-800 via-orange-800 to-rose-800", left: "80%", top: "80%", cw: false, dur: 130, rot: -45 },
];

export default function Background() {
    return (
        // Your EXACT original background gradient
        <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-violet-300 via-blue-300 to-emerald-300">
            {originalHomeBlobs.map((b, i) => (
                <motion.div
                    key={i}
                    className={`${b.cls} absolute mix-blend-overlay`}
                    // Bypassing Tailwind: Hardcoding positions so they cannot be ignored
                    style={{ left: b.left, top: b.top }}
                    // Forcing Framer Motion to handle the centering offset
                    initial={{ x: "-50%", y: "-50%", scale: 1, rotate: b.rot }}
                    animate={{ x: "-50%", y: "-50%", scale: 1.35, rotate: b.cw ? 360 : -360 }}
                    transition={{ duration: b.dur, ease: "linear", repeat: Infinity }}
                />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] mix-blend-soft-light opacity-20" />
        </div>
    );
}