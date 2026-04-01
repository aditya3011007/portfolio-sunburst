// src/pages/Personal.jsx
import React, { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import BackButton from "../components/BackButton";
import { resume } from "../data";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};

const recruiterHighlights = [
    "AI/ML and software engineering mindset with equal focus on practical delivery and technical depth.",
    "Comfortable working across intelligent systems, application development, and production-ready implementation.",
    "Strong communicator with a builder mentality and a clear interest in meaningful engineering work.",
];

export default function Personal() {
    const { name, title, summary, email, phone, location } = resume.personal;
    const [formData, setFormData] = useState({
        senderName: "",
        senderEmail: "",
        company: "",
        message: "",
    });
    const [copyLabel, setCopyLabel] = useState("Copy Email");
    const [isSending, setIsSending] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

    const emailDraft = useMemo(() => {
        const subjectBase = formData.company
            ? `Recruiter Inquiry from ${formData.company}`
            : "Recruiter Inquiry";
        const body = [
            `Hi ${name},`,
            "",
            formData.message || "I would like to discuss a potential opportunity with you.",
            "",
            formData.senderName ? `Name: ${formData.senderName}` : null,
            formData.senderEmail ? `Email: ${formData.senderEmail}` : null,
            formData.company ? `Company: ${formData.company}` : null,
        ]
            .filter(Boolean)
            .join("\n");

        return `mailto:${email}?subject=${encodeURIComponent(subjectBase)}&body=${encodeURIComponent(body)}`;
    }, [email, formData.company, formData.message, formData.senderEmail, formData.senderName, name]);

    const handleChange = (event) => {
        const { name: fieldName, value } = event.target;
        setFormData((current) => ({ ...current, [fieldName]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSending(true);
        setSubmitStatus({ type: "", message: "" });

        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(async (response) => {
                if (!response.ok) {
                    const payload = await response.json().catch(() => ({}));
                    throw new Error(payload.error || "Unable to send message.");
                }

                setSubmitStatus({
                    type: "success",
                    message: "Your message was sent successfully.",
                });
                setFormData({
                    senderName: "",
                    senderEmail: "",
                    company: "",
                    message: "",
                });
            })
            .catch((error) => {
                setSubmitStatus({
                    type: "error",
                    message:
                        error instanceof Error
                            ? error.message
                            : "Unable to send the message right now.",
                });
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopyLabel("Email Copied");
            window.setTimeout(() => setCopyLabel("Copy Email"), 1800);
        } catch {
            setCopyLabel("Copy Failed");
            window.setTimeout(() => setCopyLabel("Copy Email"), 1800);
        }
    };

    return (
        <Motion.section
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.45 }}
            className="relative min-h-screen overflow-hidden px-6 py-24 md:px-8"
        >
            <BackButton />

            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/35 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.24)] backdrop-blur-2xl md:p-10"
                >
                    <div className="absolute -right-10 top-10 h-44 w-44 rounded-full bg-cyan-300/12 blur-[90px]" />
                    <div className="absolute left-8 top-20 h-32 w-32 rounded-full bg-emerald-300/10 blur-[80px]" />

                    <div className="relative z-10 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                        <div className="rounded-[1.75rem] border border-white/12 bg-white/5 p-4">
                            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/30">
                                <img
                                    src="/aditya-avatar.png"
                                    alt="Illustrated avatar of Aditya Raj Singh"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="max-w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/85">
                                Recruiter Overview
                            </div>

                            <h1
                                className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
                                style={{ fontFamily: "\"Iowan Old Style\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif" }}
                            >
                                {name}
                            </h1>

                            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                                {title}
                            </p>

                            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100/88 md:text-lg">
                                {summary}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/85">
                                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{location}</div>
                                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                                    Open to ML/AI & software roles
                                </div>
                            </div>
                        </div>
                    </div>
                </Motion.div>

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                        className="rounded-[2rem] border border-white/15 bg-slate-950/30 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.2)] backdrop-blur-2xl md:p-8"
                    >
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
                            Why Reach Out
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">A Strong Candidate For Recruiter Conversations</h2>

                        <div className="mt-6 space-y-4">
                            {recruiterHighlights.map((point, index) => (
                                <div
                                    key={point}
                                    className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-300/14 text-sm font-semibold text-cyan-100">
                                            0{index + 1}
                                        </div>
                                        <p className="text-sm leading-7 text-slate-200/85">{point}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-[1.6rem] border border-amber-200/18 bg-gradient-to-br from-amber-300/12 via-orange-300/10 to-slate-950/30 p-6 shadow-[0_0_40px_rgba(245,158,11,0.08)]">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-amber-100/78">
                                Resume
                            </p>
                            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                                Download My Recruiter Resume
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-slate-100/82">
                                A concise version of my profile tailored for hiring conversations in ML/AI engineering and software development roles.
                            </p>

                            <a
                                href="/aditya-resume.pdf"
                                download="Aditya_Raj_Singh_Resume.pdf"
                                className="mt-5 inline-flex rounded-[1.2rem] border border-amber-200/32 bg-amber-300/14 px-5 py-4 text-sm font-semibold text-amber-50 transition-all duration-300 hover:border-amber-200/52 hover:bg-amber-300/20 hover:shadow-[0_0_36px_rgba(245,158,11,0.18)]"
                            >
                                Download Resume PDF
                            </a>
                        </div>

                        <div className="mt-8 rounded-[1.5rem] border border-white/12 bg-white/5 p-5">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
                                Direct Contact
                            </p>
                            <p className="mt-3 text-sm leading-7 text-slate-100/85">
                                Best way to reach me is by email. You can draft a message from this page or open your own mail app directly.
                            </p>
                            <div className="mt-5 space-y-3 text-sm text-slate-200/85">
                                <div className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3">
                                    <span className="block text-[0.68rem] uppercase tracking-[0.24em] text-white/55">Email</span>
                                    <span className="mt-1 block text-base text-white">{email}</span>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3">
                                    <span className="block text-[0.68rem] uppercase tracking-[0.24em] text-white/55">Phone</span>
                                    <span className="mt-1 block text-base text-white">{phone}</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                className="mt-4 w-full rounded-[1.15rem] border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition-all duration-300 hover:border-cyan-200/35 hover:bg-white/10"
                            >
                                {copyLabel}
                            </button>
                        </div>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.14 }}
                        className="rounded-[2rem] border border-white/15 bg-slate-950/30 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.2)] backdrop-blur-2xl md:p-8"
                    >
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
                            Contact Form
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Send A Recruiter Inquiry</h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200/80">
                            Fill this out and send it directly from the portfolio. The website will forward your message to my inbox, and you can still keep the draft option if that is easier for your workflow.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <label className="block">
                                    <span className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/65">
                                        Your Name
                                    </span>
                                    <input
                                        type="text"
                                        name="senderName"
                                        required
                                        value={formData.senderName}
                                        onChange={handleChange}
                                        placeholder="Recruiter name"
                                        className="w-full rounded-[1.1rem] border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-200/35 focus:bg-slate-950/60 focus:shadow-[0_0_0_1px_rgba(165,243,252,0.12)]"
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/65">
                                        Your Email
                                    </span>
                                    <input
                                        type="email"
                                        name="senderEmail"
                                        required
                                        value={formData.senderEmail}
                                        onChange={handleChange}
                                        placeholder="recruiter@company.com"
                                        className="w-full rounded-[1.1rem] border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-200/35 focus:bg-slate-950/60 focus:shadow-[0_0_0_1px_rgba(165,243,252,0.12)]"
                                    />
                                </label>
                            </div>

                            <label className="block">
                                <span className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/65">
                                    Company
                                </span>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company or team name"
                                    className="w-full rounded-[1.1rem] border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-200/35 focus:bg-slate-950/60 focus:shadow-[0_0_0_1px_rgba(165,243,252,0.12)]"
                                />
                            </label>

                            <label className="block">
                                <span className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/65">
                                    Message
                                </span>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={7}
                                    placeholder="Write your message here..."
                                    className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-200/35 focus:bg-slate-950/60 focus:shadow-[0_0_0_1px_rgba(165,243,252,0.12)]"
                                />
                            </label>

                            <div className="flex flex-col gap-3 pt-2 md:flex-row md:flex-wrap">
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="rounded-[1.2rem] border border-emerald-300/25 bg-emerald-300/12 px-5 py-4 text-sm font-semibold text-emerald-50 transition-all duration-300 hover:border-emerald-200/50 hover:bg-emerald-300/18 hover:shadow-[0_0_30px_rgba(52,211,153,0.16)] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isSending ? "Sending..." : "Send From Website"}
                                </button>

                                <a
                                    href={emailDraft}
                                    className="rounded-[1.2rem] border border-white/15 bg-white/5 px-5 py-4 text-center text-sm font-semibold text-white/90 transition-all duration-300 hover:border-cyan-200/35 hover:bg-white/10"
                                >
                                    Open Draft In Mail
                                </a>
                            </div>

                            {submitStatus.message ? (
                                <div
                                    className={`rounded-[1.1rem] border px-4 py-3 text-sm ${
                                        submitStatus.type === "success"
                                            ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-50"
                                            : "border-rose-300/20 bg-rose-300/10 text-rose-50"
                                    }`}
                                >
                                    {submitStatus.message}
                                </div>
                            ) : null}
                        </form>
                    </Motion.div>
                </div>
            </div>
        </Motion.section>
    );
}
