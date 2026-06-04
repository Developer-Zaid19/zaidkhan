"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "../../Components/Loader";

export default function BlogSlug({ params }) {
  const [blog,    setBlog]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { slug } = await params;
        const res = await fetch(
          `https://devzaidbackend.onrender.com/api/content/blogs/${slug}`,
          { cache: "no-store" }
        );
        if (!res.ok) { setError(true); return; }
        const data = await res.json();
        setBlog(data);
        console.log(data)
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [params]);

  // ── Loading ──
  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Loader />
      </main>
    );
  }

  // ── Error / Not found ──
  if (error || !blog) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-12 text-center max-w-md w-full"
        >
          <p className="text-5xl mb-5">🔍</p>
          <h1 className="text-2xl font-bold text-(--maincolor) mb-3">
            Blog Not Found
          </h1>
          <p className="text-(--text-muted) text-sm mb-8 leading-relaxed">
            Check Your Internet Connection, This blog does not exist or may have been removed.
          </p>
          <Link
            href="/blogs"
            className="inline-block px-6 py-2.5 rounded-xl bg-(--maincolor) text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
          >
            ← Back to Blogs
          </Link>
        </motion.div>
      </main>
    );
  }

  // ── Blog Content ──
  return (
    <main className="min-h-screen px-4 py-14">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--maincolor) transition-colors duration-300 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            Back to all blogs
          </Link>
        </motion.div>

        {/* ── Article ── */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-(--text) mb-5 leading-tight">
            {blog.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-4 flex-wrap mb-8">
            {blog.date && (
              <span className="flex items-center gap-1.5 text-xs text-(--text-muted) bg-[rgba(0,188,255,0.06)] border border-(--border) px-3 py-1.5 rounded-full">
                📅 {blog.date}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-xs text-(--maincolor) bg-[rgba(0,188,255,0.06)] border border-(--border) px-3 py-1.5 rounded-full">
              ✦ DeveloperZaid
            </span>
          </div>

          <div className="divider mb-10" />

          {/* Content */}
          <div className="space-y-6">

            {blog.content && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-6 sm:p-8 text-base text-(--text) leading-[1.95] tracking-wide"
              >
                {blog.content}
              </motion.div>
            )}

            {blog.para1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="glass rounded-2xl p-6 sm:p-8 text-base text-(--text) leading-[1.95] tracking-wide"
              >
                {blog.para1}
              </motion.div>
            )}

            {blog.para2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="glass rounded-2xl p-6 sm:p-8 text-base text-(--text) leading-[1.95] tracking-wide"
              >
                {blog.para2}
              </motion.div>
            )}

          </div>

          {/* Bottom nav */}
          <div className="divider mt-14 mb-10" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--maincolor) transition-colors duration-300 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
              Back to all blogs
            </Link>

            <a
              href="https://youtube.com/@Developer-zaid"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-(--border) text-sm text-(--text-muted) hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(0,188,255,0.05)] transition-all duration-300"
            >
              🎥 Watch on YouTube
            </a>
          </div>

        </motion.article>
      </div>
    </main>
  );
}