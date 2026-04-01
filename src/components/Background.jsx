// src/components/Background.jsx
import React from "react";
import { motion as Motion } from "framer-motion";

const ambientBlobs = [
    {
        cls: "w-[120vw] h-[120vh] rounded-[42%] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 opacity-70",
        left: "12%",
        top: "18%",
        cw: true,
        dur: 95,
        rot: 8,
    },
    {
        cls: "w-[95vw] h-[95vh] rounded-[50%] bg-gradient-to-tr from-cyan-950 via-teal-950 to-slate-950 opacity-42",
        left: "84%",
        top: "24%",
        cw: false,
        dur: 120,
        rot: 24,
    },
    {
        cls: "w-[105vw] h-[105vh] rounded-[48%] bg-gradient-to-bl from-indigo-950 via-slate-900 to-blue-950 opacity-46",
        left: "24%",
        top: "84%",
        cw: true,
        dur: 140,
        rot: 78,
    },
    {
        cls: "w-[85vw] h-[85vh] rounded-[55%] bg-gradient-to-br from-amber-950 via-stone-950 to-slate-950 opacity-24",
        left: "86%",
        top: "82%",
        cw: false,
        dur: 165,
        rot: -32,
    },
];

export default function Background() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.2),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#081120_45%,_#0a1628_100%)]">
            {ambientBlobs.map((blob, index) => (
                <Motion.div
                    key={index}
                    className={`${blob.cls} absolute mix-blend-screen blur-[6px]`}
                    style={{ left: blob.left, top: blob.top }}
                    initial={{ x: "-50%", y: "-50%", scale: 1, rotate: blob.rot }}
                    animate={{ x: "-50%", y: "-50%", scale: 1.18, rotate: blob.cw ? 360 : -360 }}
                    transition={{ duration: blob.dur, ease: "linear", repeat: Infinity }}
                />
            ))}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.14)_55%,_rgba(2,6,23,0.62)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(148,163,184,0.08),_transparent_24%),radial-gradient(circle_at_80%_30%,_rgba(34,211,238,0.05),_transparent_22%),radial-gradient(circle_at_70%_80%,_rgba(245,158,11,0.05),_transparent_18%)]" />
        </div>
    );
}
