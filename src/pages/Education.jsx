// src/pages/Education.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import BackButton from "../components/BackButton";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, y: 16 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -16 },
};

export default function Education() {
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
                        Academic Background
                    </div>

                    <h1
                        className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl"
                        style={{ fontFamily: "\"Iowan Old Style\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif" }}
                    >
                        Education
                    </h1>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200/82 md:text-lg">
                        A strong academic foundation in computer science, supported by graduate study and a consistent record of technical performance.
                    </p>
                </Motion.div>

                <div className="mt-8 space-y-6">
                    {resume.education.map((item, index) => (
                        <Motion.article
                            key={item.institute}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08 + index * 0.06, duration: 0.4 }}
                            className="rounded-[1.8rem] border border-white/12 bg-slate-950/30 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl md:p-7"
                        >
                            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                <div className="max-w-2xl">
                                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/72">
                                        Institution
                                    </p>
                                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                                        {item.institute}
                                    </h2>
                                    <p className="mt-3 text-base leading-7 text-slate-200/82">
                                        {item.degree}
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2 md:min-w-[18rem]">
                                    <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4">
                                        <p className="text-[0.64rem] uppercase tracking-[0.24em] text-white/55">Period</p>
                                        <p className="mt-2 text-sm font-medium text-white/88">{item.period}</p>
                                    </div>
                                    <div className="rounded-[1.2rem] border border-cyan-300/14 bg-cyan-300/8 px-4 py-4">
                                        <p className="text-[0.64rem] uppercase tracking-[0.24em] text-cyan-100/65">GPA / CGPA</p>
                                        <p className="mt-2 text-sm font-medium text-white/90">{item.cgpa}</p>
                                    </div>
                                </div>
                            </div>
                        </Motion.article>
                    ))}
                </div>
            </div>
        </Motion.section>
    );
}
