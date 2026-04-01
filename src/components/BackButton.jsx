// src/components/BackButton.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BackButton() {
    return (
        <Motion.div className="fixed left-3 top-4 z-[100] md:left-5 md:top-6">
            <Link to="/">
                <Motion.div
                    whileHover={{ y: -2, x: -1 }}
                    transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    className="group flex min-w-[10.5rem] items-center gap-2.5 rounded-[1.25rem] border border-white/12 bg-slate-950/60 px-2 py-2 shadow-[0_18px_40px_rgba(2,6,23,0.24)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-200/24 hover:bg-slate-950/72"
                >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-base text-cyan-50 transition-colors duration-300 group-hover:border-cyan-200/34 group-hover:bg-cyan-300/16">
                        ←
                    </div>

                    <div className="min-w-0 whitespace-nowrap">
                        <div className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/48">
                            Navigation
                        </div>
                        <div className="text-[0.92rem] font-semibold text-white/92">
                            Return Home
                        </div>
                    </div>
                </Motion.div>
            </Link>
        </Motion.div>
    );
}
