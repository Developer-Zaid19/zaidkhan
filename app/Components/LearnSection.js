"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { notes } from "../Components/homeData"


export default function learnsection() {
    return (
        <section id="learn" className="py-24 px-4 sm:px-6 lg:px-16 bg-(--bgsection)">
            <div className="max-w-6xl mx-auto">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
                >
                    <div>
                        <p className="sec-label mb-3">From My Hand</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Notes & <span className="gradient-text">CheatSheats</span>
                        </h2>
                        <p className="text-(--text-muted) text-sm mt-3 max-w-md leading-relaxed">
                            Here, My Written Work that show my ability.
                        </p>
                    </div>

                    <a
                        href={"/notes"}
                        className="-0 px-6 py-2.5 rounded-xl border border-(--border) text-(--text-muted) text-sm font-medium hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(34,197,94,0.05)] transition-all duration-300 self-start sm:self-auto"
                    >
                        View All PDFs →
                    </a>
                </motion.div>


                {/* card */}

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                            className="group relative"
                        >
                            {/* Paper Card */}
                            <div
                                className="
                    relative
                    h-[250px]
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
                                        src={note.image}
                                        alt={note.title}
                                        className="rounded-full bg-white md:w-20 md:h-20 size-15 object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className=" text-center text-sm font-bold text-(--text) group-hover:text-(--maincolor) transition-colors"
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
                                        className=" text-center text-xs uppercase tracking-widest text-(--mainsoft) "
                                    >
                                        View PDF →
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>



                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="/notes"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3.5 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
                    >
                        See All PDFs →
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
