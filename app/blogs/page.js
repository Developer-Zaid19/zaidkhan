"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../Components/animations";
import { project } from "../Components/homeData"
import Loader from "../Components/Loader"


export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://devzaidbackend.onrender.com/api/content/blogs",
          { cache: "no-store" }
        );
        if (!res.ok) { setError(true); return; }
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <main className="min-h-screen px-4 py-14 md:my-6 my-10">
      {/* Back to Home */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="mb-10"
      >
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--maincolor) transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </motion.div>

      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="sec-label mb-3 flex justify-center md:block">All Articles</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex justify-center md:block">
            <span className="gradient-text">Blogs</span>
          </h1>
          <p className="text-(--text-muted) text-base max-w-xl leading-relaxed">
            Simple, beginner-friendly blogs about programming and tech — without the unnecessary theory.
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
            <h2 className="text-xl font-bold text-(--maincolor) mb-2">Could not load blogs</h2>
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

        {/* ── Blog List ── */}
        {!loading && !error && (
          <div className="space-y-5">
            {blogs.length === 0 && (
              <div className="glass rounded-2xl p-12 text-center">
                <p className="text-4xl mb-4">✍️</p>
                <p className="text-(--text-muted)">No blogs yet. Coming soon!</p>
              </div>
            )}

            {blogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link href={`/blogs/${blog.id}`} className="block group">
                  <div className="glass rounded-2xl p-6 sm:p-8 hover:glow-border transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 flex-wrap">

                      <div className="flex-1 min-w-0">
                        {/* Blog number */}
                        <span className="sec-label text-[10px] mb-2 block">
                          BLOG #{String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-(--text) mb-3 group-hover:text-(--maincolor) transition-colors duration-300 leading-snug">
                          {blog.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-(--text-muted) leading-relaxed line-clamp-2">
                          {blog.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-(--border) flex items-center justify-center text-(--text-muted) group-hover:border-(--maincolor) group-hover:text-(--maincolor) group-hover:shadow-[0_0_12px_var(--mainglow)] group-hover:translate-x-1 transition-all duration-300">
                        →
                      </div>
                    </div>

                    {/* Bottom meta */}
                    {blog.date && (
                      <div className="mt-4 pt-4 border-t border-(--border) flex items-center gap-2">
                        <span className="text-xs text-(--text-muted)">📅 {blog.date}</span>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}