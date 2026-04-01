// src/pages/Experience.jsx
import React, { useRef } from "react";
import { motion as Motion, useScroll, useSpring } from "framer-motion";
import BackButton from "../components/BackButton";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, y: 16 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -16 },
};

export default function Experience() {
    const timelineRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 0.9", "end 0.2"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 110,
        damping: 28,
        restDelta: 0.001,
    });

    return (
        <Motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.4 }}
            className="min-h-screen px-5 py-24 md:px-8"
        >
            <BackButton />

            <div className="mx-auto w-full max-w-5xl">
                <Motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-[1.85rem] border border-white/15 bg-slate-950/35 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-2xl md:p-8"
                >
                    <div className="max-w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/80">
                        Professional Journey
                    </div>

                    <h1
                        className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl"
                        style={{ fontFamily: "\"Iowan Old Style\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif" }}
                    >
                        Experience
                    </h1>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200/82 md:text-base">
                        A timeline of roles that reflects applied machine learning, product-facing engineering, and consistent delivery across research and web development work.
                    </p>
                </Motion.div>

                <div ref={timelineRef} className="relative mt-8 pb-4">
                    <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 xl:left-1/2 xl:-translate-x-1/2" />
                    <Motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-300/95 via-sky-300/85 to-emerald-300/85 shadow-[0_0_20px_rgba(103,232,249,0.3)] xl:left-1/2 xl:-translate-x-1/2"
                    />

                    <div className="space-y-5 md:space-y-6">
                        {resume.experience.map((role, index) => {
                            const alignLeft = index % 2 === 0;

                            return (
                                <Motion.article
                                    key={`${role.company}-${role.role}`}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.45, delay: index * 0.05 }}
                                    className={`relative pl-12 xl:flex xl:pl-0 ${alignLeft ? "xl:justify-start" : "xl:justify-end"}`}
                                >
                                    <div className="absolute left-4 top-6 z-20 -translate-x-1/2 xl:left-1/2">
                                        <div className="flex h-4 w-4 items-center justify-center rounded-full border border-cyan-200/30 bg-slate-950 shadow-[0_0_16px_rgba(103,232,249,0.24)] xl:h-5 xl:w-5">
                                            <div className="h-2 w-2 rounded-full bg-cyan-300 xl:h-2.5 xl:w-2.5" />
                                        </div>
                                    </div>

                                    <div className={`w-full xl:w-1/2 ${alignLeft ? "xl:pr-12" : "xl:pl-12"}`}>
                                        <div className="max-w-2xl rounded-[1.45rem] border border-white/12 bg-slate-950/28 p-4 shadow-[0_18px_48px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/16 hover:bg-white/[0.05] md:p-5 xl:max-w-[28rem]">
                                            <div className="flex flex-wrap items-center gap-2.5">
                                                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.76rem] text-white/86">
                                                    {role.period}
                                                </div>
                                                <div className="rounded-full border border-cyan-300/14 bg-cyan-300/8 px-3 py-1.5 text-[0.76rem] text-cyan-50">
                                                    {role.location}
                                                </div>
                                            </div>

                                            <div className="mt-4 flex items-center justify-between gap-4">
                                                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/72">
                                                    {role.company}
                                                </p>
                                                <div className="text-[0.72rem] font-semibold text-white/38">
                                                    0{index + 1}
                                                </div>
                                            </div>

                                            <h2 className="mt-2 text-lg font-semibold tracking-tight text-white md:text-xl">
                                                {role.role}
                                            </h2>

                                            <div className="mt-4">
                                                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/72">
                                                    Key Contributions
                                                </p>
                                                <ul className="mt-3 space-y-2">
                                                    {role.bullets.map((bullet) => (
                                                        <li key={bullet} className="flex gap-3 text-[0.88rem] leading-6 text-slate-200/84">
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Motion.section>
    );
}
