import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-(--bgcolor) to-(--bgfcolor) text-white px-10 py-20">

      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Contact <span className="text-(--maincolor)">Me</span>
        </h1>

        <form
          className="bg-white/5 border border-white/10 rounded-3xl p-10
          backdrop-blur-xl shadow-[0_0_50px_rgba(34,197,94,0.25)] space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3
            outline-none focus:border-(--maincolor)"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3
            outline-none focus:border-(--maincolor)"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3
            outline-none focus:border-(--maincolor)"
          ></textarea>

          <button
            className="w-full py-3 rounded-xl font-bold
            bg-(--maincolor) text-[#022c22]
            hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]
            transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
