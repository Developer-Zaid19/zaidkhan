"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

export default function BlogSection() {
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
        // sirf latest 3 blogs
        setBlogs(data.slice(0, 3));
      } catch (err) {
        console.error("Blog fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <section id="blogs" className="py-24 px-4 sm:px-6 lg:px-16 bg-(--bgsection)">
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
            <p className="sec-label mb-3">From My Desk</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Latest <span className="gradient-text">Blogs</span>
            </h2>
            <p className="text-(--text-muted) text-sm mt-3 max-w-md leading-relaxed">
              Simple, beginner-friendly articles about programming and tech — without the unnecessary theory.
            </p>
          </div>
    
          <a
            href={"/blogs"}            
            className="-0 px-6 py-2.5 rounded-xl border border-(--border) text-(--text-muted) text-sm font-medium hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(34,197,94,0.05)] transition-all duration-300 self-start sm:self-auto"
          >
            View All Blogs →
          </a>
        </motion.div>
    
        {/* ── Loading state ── */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 animate-pulse space-y-4"
              >
                <div className="h-3 w-1/3 bg-[rgba(34,197,94,0.1)] rounded-full" />
                <div className="h-5 w-3/4 bg-[rgba(34,197,94,0.08)] rounded-full" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-[rgba(255,255,255,0.04)] rounded-full" />
                  <div className="h-3 w-5/6 bg-[rgba(255,255,255,0.04)] rounded-full" />
                  <div className="h-3 w-4/6 bg-[rgba(255,255,255,0.04)] rounded-full" />
                </div>
              </div>
            ))}
          </div>
        )}
    
        {/* ── Error state ── */}
        {!loading && error && (
          <div className="glass rounded-2xl p-10 text-center">
            <p className="text-2xl mb-3">📡</p>
            <p className="text-(--text-muted) text-sm">
              Could not load blogs right now.{" "}
              <a
                href="https://developerzaid.vercel.app/blogs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--maincolor) underline hover:opacity-80"
              >
                Visit blog site directly →
              </a>
            </p>
          </div>
        )}
    
        {/* ── Blog Cards ── */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 flex flex-col justify-between group hover:glow-border transition-all duration-300"
              >
                {/* Top */}
                <div>
                  {/* Blog number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(34,197,94,0.1)] text-(--mainsoft) tracking-widest">
                      BLOG #{String(i + 1).padStart(2, "0")}
                    </span>
                    {blog.date && (
                      <span className="text-xs text-(--text-muted)">{blog.date}</span>
                    )}
                  </div>
    
                  {/* Title */}
                  <h3 className="text-lg font-bold text-(--text) mb-3 leading-snug group-hover:text-(--maincolor) transition-colors duration-300">
                    {blog.title}
                  </h3>
    
                  {/* Description */}
                  <p className="text-sm text-(--text-muted) leading-relaxed line-clamp-3">
                    {blog.description}
                  </p>
                </div>
    
                {/* Bottom */}
                <div className="mt-6 pt-4 border-t border-(--border) flex items-center justify-between">
                  <span className="text-xs text-(--text-muted)">📖 Read article</span>
                  <a
                    href={`https://developerzaid.vercel.app/blogs/${blog.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-(--maincolor) hover:glow-text hover:underline transition-all duration-300 flex items-center gap-1"
                  >
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
    
        {/* ── Empty state ── */}
        {!loading && !error && blogs.length === 0 && (
          <div className="glass rounded-2xl p-10 text-center">
            <p className="text-2xl mb-3">✍️</p>
            <p className="text-(--text-muted) text-sm">No blogs yet. Coming soon!</p>
          </div>
        )}
    
        {/* ── Bottom CTA ── */}
        {!loading && !error && blogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://developerzaid.vercel.app/blogs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
            >
              Read All Blogs →
            </a>
          </motion.div>
        )}
    
      </div>
    </section>
  );
}
