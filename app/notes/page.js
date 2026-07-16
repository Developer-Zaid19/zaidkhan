"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "../Components/Loader";
import { fadeUp } from "../Components/animations";
import Link from "next/link";

export default function NotesPage() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await fetch(
                    "https://devzaidbackend.onrender.com/api/content/notes",
                    { cache: "no-store" }
                );
                if (!res.ok) { setError(true); return; }
                const data = await res.json();
                setNotes(data);
            } catch (err) {
                console.error("Error fetching notes:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchNotes();
    }, []);

    console.log(notes)
    return (
        <main className="min-h-screen px-4 py-14 mt-7">
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
            <div className="max-w-5xl mx-auto">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="sec-label mb-3">Free Resources</p>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Notes & <span className="gradient-text">Cheatsheets</span>
                    </h1>
                    <p className="text-(--text-muted) text-base max-w-xl leading-relaxed">
                        Free PDF notes on programming and coding that support my YouTube videos. Download and keep them forever!
                    </p>
                </motion.div>

                <div className="divider mb-10" />

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
                        <h2 className="text-xl font-bold text-(--maincolor) mb-2">Could not load notes</h2>
                        <p className="text-(--text-muted) text-sm mb-6">
                            Server might be starting up. Please try again in a moment.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2.5 rounded-xl bg-(--maincolor) text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_var(--mainglow-strong)] transition-all"
                        >
                            Try Again
                        </button>
                    </motion.div>
                )}

                {/* ── Content ── */}
                {!loading && !error && (
                    <>

                        {/* Notes Grid */}
                        <div className="max-w-6xl mx-auto">

                            {/* card */}
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5">
                                {notes.map((note, i) => (
                                    <motion.a
                                        key={note.id}
                                        href={`/notes/pdf/${note.url}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.08 }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        {/* Paper Card */}
                                        <div
                                            className="
                                            relative
                                           h-[300px] 
                                            px-6
                                            py-7
                                            glass
                                            rounded-xl
                                            overflow-hidden
                                            hover:glow-border
                                            transition-all
                                            duration-300
                                        "
                                            style={{
                                                clipPath:
                                                    "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
                                            }}
                                        >
                                            {/* Folded Corner */}
                                            <div
                                                className="
                                                absolute
                                                top-0
                                                right-0
                                                w-9
                                                h-9
                                                bg-[rgba(255,255,255,0.08)]
                                            "
                                                style={{
                                                    clipPath: "polygon(0 0,100% 100%,100% 0)",
                                                }}
                                            />

                                            {/* Icon */}
                                            <div className="flex justify-center mt-3 mb-5">
                                                <img
                                                    src={`/notes/img/${note.image}`}
                                                    alt={note.title}
                                                    className="
                                                    md:w-20
                                                    md:h-20 size-15
                                                    rounded-full bg-white
                                                    object-contain
                                                    group-hover:scale-110
                                                    transition-transform
                                                    duration-300
                                                "
                                                />
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className="
                                                text-center
                                                md:text-lg text-sm
                                                font-bold
                                                text-(--text)
                                                group-hover:text-(--maincolor)
                                                transition-colors
                                            "
                                            >
                                                {note.title}
                                            </h3>

                                            {/* Description */}
                                            <p
                                                className="
                                                mt-3
                                                text-center
                                                text-sm
                                                text-(--text-muted)
                                                line-clamp-3
                                            "
                                            >
                                                {note.description}
                                            </p>

                                            {/* Bottom */}
                                            <div className="absolute bottom-5 left-0 right-0">
                                                <p
                                                    className="
                                                    text-center
                                                    text-xs
                                                    uppercase
                                                    tracking-widest
                                                    text-(--mainsoft)
                                                "
                                                >
                                                    View PDF →
                                                </p>
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                        </div>

                        {/* Stats bottom
                        {notes.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 text-center text-xs text-(--text-muted)"
                            >
                                {filtered.length} note{filtered.length !== 1 ? "s" : ""} available
                                {filter !== "All" && ` in "${filter}"`}
                            </motion.div>
                        )} */}
                    </>
                )}

            </div>
        </main>
    );
}