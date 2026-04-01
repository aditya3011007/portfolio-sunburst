// src/components/BackButton.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BackButton() {
    return (
        <Motion.div className="fixed left-5 top-5 z-[100] md:left-8 md:top-8">
            <Link to="/">
                <Motion.div
                    whileHover={{ y: -2, x: -1 }}
                    transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    className="group flex min-w-[12.75rem] items-center gap-3 rounded-[1.4rem] border border-white/12 bg-slate-950/60 px-2.5 py-2.5 shadow-[0_18px_40px_rgba(2,6,23,0.24)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-200/24 hover:bg-slate-950/72"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-lg text-cyan-50 transition-colors duration-300 group-hover:border-cyan-200/34 group-hover:bg-cyan-300/16">
                        ←
                    </div>

                    <div className="min-w-0 whitespace-nowrap">
                        <div className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/48">
                            Navigation
                        </div>
                        <div className="text-sm font-semibold text-white/92">
                            Return Home
                        </div>
                    </div>
                </Motion.div>
            </Link>
        </Motion.div>
    );
}
