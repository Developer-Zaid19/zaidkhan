"use client"
import Loader from "../../Components/Loader"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import project from "../../Components/project.json"


export default function ProjectCaseStudy({ params }) {


  // const projects =  project.find((item) => item.id === 1)

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projects, setprojects] = useState(null)

  useEffect(() => {
    const fetchproject = async () => {
      try {
        const { slug } = await params;
        const res = await fetch(
          `http://localhost:5000/api/content/projects/${slug}`,
          { cache: "no-store" }
        );
        if (!res.ok) { setError(true); return; }
        const data = await res.json();
        setprojects(data);
        console.log(data)
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchproject();
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
  if (error || !projects) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-12 text-center max-w-md w-full"
        >
          <p className="text-5xl mb-5">🔍</p>
          <h1 className="text-2xl font-bold text-(--maincolor) mb-3">
            Project Not Found
          </h1>
          <p className="text-(--text-muted) text-sm mb-8 leading-relaxed">
            Check Your Internet Connection, This Case Study does not exist or may have been removed.
          </p>
          <Link
            href="/project"
            className="inline-block px-6 py-2.5 rounded-xl bg-(--maincolor) text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
          >
            ← Back to Projects
          </Link>
        </motion.div>
      </main>
    );
  }

  const techtags = projects.herosection.tech_tags
  const uniquetags = projects.herosection.unique
  const facility = projects.overview.facilities
  const systemtags = projects.architecture.systemtags

  let supertags
  let appfeatures

  if (projects.structure.section_superconcept === true) {
    supertags = projects.section_superconcept.techdivtags
  } else {
    supertags = []
  }
  if (projects.structure.section_mobileapp === true) {
    appfeatures = projects.section_mobileapp.appfeatures
  } else {
    appfeatures = []
  }


  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/project"
            className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--maincolor) transition-colors duration-300 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            Back to all projects
          </Link>
        </motion.div>

        {/* ── Hero ── */}
        <section className="mb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Case Study
            </span>
            <span className="h-px flex-1 bg-zinc-800" />
          </div>

          <h1 className="text-6xl font-bold leading-tight mb-5 tracking-tight">

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {projects.herosection.title}
            </span>
          </h1>

          <p className="text-zinc-400 text-lg mb-8 max-w-2xl leading-relaxed">
            {projects.herosection.title_desc}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-12">
            {techtags.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-zinc-900 border border-zinc-700 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Hero Screenshot — Browser Frame */}
          <BrowserFrame src={`/projects/img/${projects.herosection.title_banner}`} alt="Banner image" />
        </section>

        {/* ── Stats ── */}
        <section className="mb-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {uniquetags.map((s) => (
              <div
                key={s.value}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
              >
                <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-sm font-semibold text-zinc-300">{s.label}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="mb-28">
          <SectionLabel text="01 — Overview" />
          <h2 className="text-3xl font-bold mb-4">{projects.overview.purpose}</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-zinc-400 leading-8 mb-4">
                {projects.overview.whatdo}
              </p>
              <p className="text-zinc-400 leading-8">
                {projects.overview.howdo}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {facility.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <BrowserFrame src={`/projects/img/${projects.overview.purpose_img}`} alt="overview image" compact />
          </div>
        </section>

        {/* ── Notes Library ── */}
        {projects.structure.section_superconcept && (
          <section className="mb-28">
            <SectionLabel text={`02 — ${projects.section_superconcept.title}`} />
            <h2 className="text-3xl font-bold mb-4">{projects.section_superconcept.title}</h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <BrowserFrame src={`/projects/img/${projects.section_superconcept.superconceptimg}`} alt={projects.section_superconcept.superconceptimgalt} compact />
              <div>
                <p className="text-zinc-400 leading-8 mb-4">
                  {projects.section_superconcept.whatitworks}
                </p>
                <p className="text-zinc-400 leading-8">
                  {projects.section_superconcept.howitworks}
                </p>
                <div className="mt-6 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                  <p className="text-xs text-zinc-500 font-mono mb-1">{projects.section_superconcept.techdivtitle}</p>
                  <div className="flex gap-2 flex-wrap">
                    {supertags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Mobile App ── */}
        {projects.structure.section_mobileapp && (
          <section className="mb-28">
            <SectionLabel text={`03 — ${projects.section_mobileapp.title}`} />
            <h2 className="text-3xl font-bold mb-4">{projects.section_mobileapp.apptitle}</h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-zinc-400 leading-8 mb-4">
                  {projects.section_mobileapp.whatappworks}
                </p>
                <p className="text-zinc-400 leading-8 mb-6">
                  {projects.section_mobileapp.howappworks}
                </p>
                <div className="space-y-3">
                  {appfeatures.map((item) => (
                    <div key={item.title} className="flex gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                      <div className="w-1 rounded-full bg-emerald-400 self-stretch" />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-zinc-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <PhoneFrame src={`/projects/img/${projects.section_mobileapp.appimage}`} alt={projects.section_mobileapp.appimagealt} />
            </div>
          </section>
        )}


        {/* ── Upload Workflow ── */}
        {projects.structure.section_mobileworking && (
          <section className="mb-28">
            <SectionLabel text={`04 — ${projects.section_mobileworking.title}`} />
            <h2 className="text-3xl font-bold mb-4">{projects.section_mobileworking.systemworktitle}</h2>
            <p className="text-zinc-400 leading-relaxed mb-10 max-w-2xl">
              {projects.section_mobileworking.systemworkdesc}
            </p>
            <div className="flex justify-center">
              <PhoneFrame src={`/projects/img/${projects.section_mobileworking.systemworkimg}`} alt={projects.section_mobileworking.systemworkimgalt} tall />
            </div>
          </section>
        )}

        {/* ── Architecture ── */}
        <section className="mb-20">
          <SectionLabel text=" — Architecture" />
          <h2 className="text-3xl font-bold mb-4">{projects.architecture.systemstructure}</h2>
          <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl">
            {projects.architecture.systemstrucdesc}
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-3">
            <img
              src={`/projects/img/${projects.architecture.systemstrucbanner}`}
              alt="System Architecture Diagram"
              className="w-full rounded-2xl"
            />
          </div>

          {/* Architecture Summary */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {systemtags.map((l) => (
              <div key={l.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                <p className={`text-xs font-semibold tracking-widest uppercase mb-1 `}>{l.title}</p>
                <p className="text-sm text-zinc-300 font-medium">{l.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

/* ── Reusable Sub-components ── */

function SectionLabel({ text }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-emerald-500 uppercase mb-3">
      {text}
    </p>
  );
}

function BrowserFrame({ src, alt, compact = false }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-800 border-b border-zinc-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="ml-3 flex-1 bg-zinc-700 rounded-md h-5 max-w-xs flex items-center px-2">
          <span className="text-zinc-400 text-xs truncate">localhost:3000</span>
        </div>
      </div>
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover ${compact ? "max-h-64 object-top" : ""}`}
      />
    </div>
  );
}

function PhoneFrame({ src, alt, tall = false }) {
  return (
    <div className="flex justify-center">
      <div
        className={`relative bg-zinc-800 rounded-[2.5rem] border-4 border-zinc-600 shadow-2xl overflow-hidden ${tall ? "w-56" : "w-52"
          }`}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-zinc-800 rounded-b-2xl z-10" />
        <img
          src={src}
          alt={alt}
          className={`w-full object-cover object-top ${tall ? "h-[480px]" : "h-96"}`}
        />
        {/* Home bar */}
        <div className="flex justify-center py-2 bg-zinc-800">
          <div className="w-20 h-1 bg-zinc-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}