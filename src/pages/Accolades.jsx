// src/pages/Accolades.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import BackButton from "../components/BackButton";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, y: 16 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -16 },
};

export default function Accolades() {
    return (
        <Motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.4 }}
            className="min-h-screen px-6 py-24 md:px-8"
        >
            <BackButton />

            <div className="mx-auto w-full max-w-5xl">
                <Motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-[2rem] border border-white/15 bg-slate-950/35 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-2xl md:p-10"
                >
                    <div className="max-w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/80">
                        Recognition
                    </div>

                    <h1
                        className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl"
                        style={{ fontFamily: "\"Iowan Old Style\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif" }}
                    >
                        Accolades & Achievements
                    </h1>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200/82 md:text-lg">
                        A snapshot of competitive coding milestones and accomplishments that reflect consistency,
                        problem-solving discipline, and technical curiosity.
                    </p>
                </Motion.div>

                <div className="mt-8 grid gap-5">
                    {resume.accolades.map((item, index) => (
                        <Motion.div
                            key={item}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                            className="rounded-[1.75rem] border border-white/12 bg-slate-950/30 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-amber-200/25 hover:bg-white/[0.07]"
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-200/18 bg-amber-300/10 text-2xl">
                                    🏆
                                </div>

                                <div className="flex-1">
                                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-amber-100/65">
                                        Achievement {index + 1}
                                    </p>
                                    <p className="mt-3 text-lg leading-8 text-slate-100/88 md:text-xl">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </Motion.section>
    );
}
