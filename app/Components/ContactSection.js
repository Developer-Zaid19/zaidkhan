"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const submithandle = async (formData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (!result.success) {
      alert("We are trying to reply faster");
    } else {
      alert("I will contact you soon!");
      reset();
    }
  };
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
    
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="sec-label mb-3">Let&apos;s Work Together</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    
          {/* Left — Info */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="glass rounded-2xl p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Contact <span className="text-(--maincolor)">Me</span>
              </h3>
              <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed mb-8">
                Need{" "}
                <span className="text-(--maincolor) font-semibold">Professional</span> help with website,
                app development, or data projects? Email me at{" "}
                <a href="mailto:developerzaid26@gmail.com" className="text-blue-400 underline hover:opacity-80">
                  developerzaid26@gmail.com
                </a>{" "}
                or fill this form. I build scalable, fast, modern solutions for real-world{" "}
                <span className="text-(--maincolor) font-semibold">Problems</span>.
              </p>
    
              {/* Info cards */}
              <div className="space-y-3">
                {[
                  { icon: "📧", label: "Email", val: "developerzaid26@gmail.com", href: "mailto:developerzaid26@gmail.com" },
                  { icon: "📍", label: "Location", val: "Lucknow, India", href: null },
                  { icon: "💬", label: "WhatsApp", val: "+91 9044337110", href: "https://wa.me/919044337110" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-(--mainglow) border border-(--border) hover:border-(--border-hover) transition-all">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <div className="text-xs text-(--text-muted) uppercase tracking-widest">{c.label}</div>
                      {c.href
                        ? <a href={c.href} className="text-sm font-medium text-(--text) hover:text-(--maincolor) transition-colors">{c.val}</a>
                        : <span className="text-sm font-medium text-(--text)">{c.val}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
    
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="mailto:developerzaid26@gmail.com"
                className="flex-1 py-3 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm text-center hover:shadow-[0_0_25px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
              >
                📧 Email Me
              </a>
              <a
                href="https://wa.me/919044337110?text=Hi%20I%20want%20a%20website%20like%20this"
                className="flex-1 py-3 rounded-xl border-2 border-(--maincolor) text-(--maincolor) font-bold text-sm text-center hover:bg-(--mainglow) hover:scale-105 transition-all duration-300"
              >
                💬 WhatsApp Me
              </a>
            </div>
          </motion.div>
    
          {/* Right — Form */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass rounded-2xl p-8 sm:p-10"
          >
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit(submithandle)}>
    
              <div>
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 3, message: "Min 3 characters" },
                    maxLength: { value: 15, message: "Max 15 characters" },
                  })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-(--border) rounded-xl px-5 py-3.5 outline-none focus:border-(--maincolor) focus:shadow-[0_0_15px_var(--mainglow)] transition-all placeholder:text-(--text-muted) text-(--text) text-sm"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.name.message}</p>}
              </div>
    
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    minLength: { value: 5, message: "Min 5 characters" },
                    maxLength: { value: 50, message: "Max 50 characters" },
                  })}
                  type="email"
                  placeholder="Email or Phone"
                  className="w-full bg-transparent border border-(--border) rounded-xl px-5 py-3.5 outline-none focus:border-(--maincolor) focus:shadow-[0_0_15px_var(--mainglow)] transition-all placeholder:text-(--text-muted) text-(--text) text-sm"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
              </div>
    
              <div>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 5, message: "Min 5 characters" },
                    maxLength: { value: 500, message: "Max 500 characters" },
                  })}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border border-(--border) rounded-xl px-5 py-3.5 outline-none focus:border-(--maincolor) focus:shadow-[0_0_15px_var(--mainglow)] transition-all placeholder:text-(--text-muted) text-(--text) text-sm resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.message.message}</p>}
              </div>
    
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm bg-(--maincolor) text-(--bgcolor) hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
    
            </form>
          </motion.div>
    
        </div>
      </div>
    </section>
  );
}
