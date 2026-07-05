"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../Components/animations";
import Loader from "../Components/Loader"
// import { project } from "../Components/homeData"



export default function projectsPage() {
    const [projects, setprojects] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchprojects = async () => {
            try {
                const res = await fetch(
                    "https://devzaidbackend.onrender.com/api/content/projects",
                    { cache: "no-store" }
                );
                if (!res.ok) { setError(true); return; }
                const data = await res.json();
                setprojects(data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchprojects();
    }, []);

    return (
        <main className="min-h-screen px-4 py-14 md:my-6 my-10 w-full">
            {/* Back to Home */}
            <motion.div
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="mb-10"
            >
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--maincolor) transition-colors duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>
            </motion.div>

            <div className="mx-auto md:w-full">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 max-w-4xl mx-auto"
                >
                    <p className="sec-label mb-3 flex justify-center md:block">All Articles</p>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex justify-center md:block">
                        <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-(--text-muted) text-base max-w-xl leading-relaxed">
                        Simple, beginner-friendly projects about programming and tech — without the unnecessary theory.
                    </p>
                </motion.div>

                <div className="divider mb-12" />

                {/* ── Loading ── */}
                {loading && (
                    <div className="min-h-[50vh] flex items-center justify-center">
                        <Loader />
                    </div>
                )}

                {/* ── Error ── */}
                {!loading && error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="glass rounded-2xl p-12 text-center"
                    >
                        <p className="text-4xl mb-4">📡</p>
                        <h2 className="text-xl font-bold text-(--maincolor) mb-2">Could not load Projects</h2>
                        <p className="text-(--text-muted) text-sm">
                            Server might be starting up. Please try again in a moment.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-6 px-6 py-2.5 rounded-xl bg-(--maincolor) text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_var(--mainglow-strong)] transition-all"
                        >
                            Try Again
                        </button>
                    </motion.div>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-10">
                        {projects.map((t, i) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                viewport={{ once: true }}
                                className="group glass rounded-2xl overflow-hidden hover:glow-border transition-all duration-300 "
                            >

                                {/* ── Preview Image ── */}
                                <div className="relative overflow-hidden h-52 bg-[rgba(34,197,94,0.04)]">
                                    <img
                                        src={`/projects/img/${t.image}`}
                                        alt={t.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />

                                </div>

                                {/* ── Card Body ── */}
                                <div className="p-6">

                                    <h3 className="text-lg font-bold text-(--text) mb-2 group-hover:text-(--maincolor) transition-colors duration-300">
                                        {t.title}
                                    </h3>

                                    <p className="text-sm text-(--text-muted) leading-relaxed mb-4">
                                        {t.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {t.tags.map((tag, j) => (
                                            <span
                                                key={j}
                                                className="text-xs px-2.5 py-1 rounded-full bg-[rgba(34,197,94,0.08)] text-(--mainsoft) font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <a
                                        href={`/project/${t.url}`}
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-(--border) text-(--text-muted) text-sm font-medium hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(34,197,94,0.05)] hover:shadow-[0_0_15px_var(--mainglow)] transition-all duration-300 group"
                                    >
                                        <span>View Project</span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </a>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}