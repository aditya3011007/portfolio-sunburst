// src/pages/Personal.jsx
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { resume } from "../data";
import BackButton from "../components/BackButton";

// --- KEPT: YOUR ORIGINAL HACKER TEXT DECRYPT LOGIC ---
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
function DecryptText({ text, trigger }) {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text.split("").map((letter, index) => {
                    if (index < iterations) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 2;
        }, 30);
        return () => clearInterval(interval);
    }, [trigger, text]);

    return <span>{displayText}</span>;
}

export default function Personal() {
    const { name, title, summary, email, phone, location } = resume.personal;
    const [hoverTrigger, setHoverTrigger] = useState(0);

    // Magnetic Physics for the Main Card
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    // Magnetic Physics for the Subtle Resume Button
    const btnX = useMotionValue(0);
    const btnY = useMotionValue(0);
    const btnXSpring = useSpring(btnX, { stiffness: 200, damping: 20 });
    const btnYSpring = useSpring(btnY, { stiffness: 200, damping: 20 });

    const handleCardMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / 6);
        y.set((e.clientY - centerY) / 6);
    };

    const handleBtnMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        btnX.set((e.clientX - centerX) / 4);
        btnY.set((e.clientY - centerY) / 4);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen py-24 px-6 flex flex-col items-center justify-center overflow-hidden"
        >
            <BackButton />

            <motion.div
                onMouseEnter={() => setHoverTrigger(prev => prev + 1)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative z-10 max-w-2xl w-full bg-black/40 backdrop-blur-2xl border border-white/20 rounded-[40px] p-10 md:p-14 shadow-2xl overflow-hidden group"
            >
                {/* KEPT: Sweeping Laser Scan Line */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-fuchsia-500 shadow-[0_0_20px_rgba(236,72,153,1)] opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ y: -100 }}
                    whileHover={{ y: 800 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                <header className="mb-8 border-b border-white/10 pb-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 font-mono">
                        <DecryptText text={name} trigger={hoverTrigger} />
                    </h2>
                    <p className="text-xl text-fuchsia-400 font-bold font-mono tracking-widest uppercase text-sm">
                        <DecryptText text={title} trigger={hoverTrigger} />
                    </p>
                </header>

                <p className="text-lg leading-relaxed text-slate-300 mb-10">
                    {summary}
                </p>

                {/* KEPT: Magnetic Contact Buttons */}
                <div className="flex flex-wrap gap-4 mb-10">
                    {[
                        { icon: "✉️", text: email, link: `mailto:${email}` },
                        { icon: "📞", text: phone, link: `tel:${phone}` },
                        { icon: "📍", text: location, link: "#" }
                    ].map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.link}
                            onMouseMove={handleCardMouseMove}
                            onMouseLeave={() => { x.set(0); y.set(0); }}
                            style={{ x: mouseXSpring, y: mouseYSpring }}
                            className="flex items-center gap-3 bg-white/5 hover:bg-fuchsia-500/20 border border-white/10 hover:border-fuchsia-400/50 p-4 rounded-2xl transition-colors cursor-pointer text-white text-sm md:text-base font-medium"
                        >
                            <span className="text-xl">{item.icon}</span>
                            <DecryptText text={item.text} trigger={hoverTrigger} />
                        </motion.a>
                    ))}
                </div>

                {/* NEW: SUBTLE ETHEREAL RESUME BUTTON */}
                <div className="pt-8 border-t border-white/10 flex justify-center">
                    <motion.a
                        href="/aditya_resume.pdf"
                        download="Aditya_Raj_Singh_Resume.pdf"
                        onMouseMove={handleBtnMouseMove}
                        onMouseLeave={() => { btnX.set(0); btnY.set(0); }}
                        style={{ x: btnXSpring, y: btnYSpring }}
                        whileHover={{ scale: 1.05 }}
                        className="relative group/btn flex items-center gap-4 px-10 py-4 rounded-full transition-all duration-500 cursor-pointer overflow-hidden"
                    >
                        {/* The Glassy Liquid Border */}
                        <div className="absolute inset-0 rounded-full border border-white/20 group-hover/btn:border-fuchsia-400/50 transition-colors" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/10 to-fuchsia-500/0 opacity-0 group-hover/btn:opacity-100 blur-md transition-opacity" />

                        {/* Breathing Core Point */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(232,121,249,0.8)]"
                        />

                        <span className="text-white/60 group-hover/btn:text-white font-light tracking-[0.3em] text-[11px] uppercase transition-colors">
                            Download My Curriculum Vitae
                        </span>

                        {/* Subtle Floating Spark */}
                        <motion.div
                            animate={{ y: [-3, 3, -3], x: [-1, 1, -1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -right-2 top-0 text-[8px] text-fuchsia-300/30"
                        >
                            ✦
                        </motion.div>
                    </motion.a>
                </div>

            </motion.div>
        </motion.section>
    );
}