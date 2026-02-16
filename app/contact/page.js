"use client"
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submithandle = async (formData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (!result.success) {
      alert("We are trying to reply faster");
    } else {
      alert("I will contact you soon");
    }
  };


  return (
    <main className="px-4 sm:px-8 lg:px-20 py-20 bg-(--bg) text(--text)">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side - Info */}
        <div className="border-2 border-(--border) rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left text-(--text)">
            Contact <span className="text-(--maincolor)">Me</span>
          </h1>

          <p className="text-center lg:text-left text-sm sm:text-base text-(--text)/80 leading-relaxed ">

            If you need <span className="font-semibold text-(--maincolor) text-2xl">Professional</span> help with website, app development, Data Management Help, or any other tech project, Email <span className="font-semibold text-(--maincolor) text-2xl">Me</span> on <a
              href="mailto:developerzaid26@gmail.com"
              className="text-blue-500 font-semibold text-xl
               underline hover:opacity-80"
            >
              developerzaid26@gmail.com
            </a> or Fill this <span className="font-semibold text-(--maincolor) text-2xl">Form</span> And I will <span className="font-semibold text-(--maincolor) text-2xl">Contact</span> You. I build scalable, fast, and modern solutions that solve real-world <span className="font-semibold text-(--maincolor) text-2xl">Problems</span>.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="border-2 border-(--border) rounded-2xl p-5 py-8 sm:p-10">
          <form className="space-y-6" onSubmit={handleSubmit(submithandle)}>

            <input
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Min 3 characters" },
                maxLength: { value: 15, message: "Max 15 characters" },
              })}
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3
              outline-none focus:border-(--maincolor) transition placeholder:text-gray-500 text-(--text)"
            />
            {errors.name && (
              <p className="text-red-500 font-semibold">{errors.name.message}</p>
            )}

            <input
              {...register("email", {
                required: "Email is required",
                minLength: { value: 5, message: "Min 5 characters" },
                maxLength: { value: 50, message: "Max 50 characters" },
              })}
              type="email"
              placeholder="Email or Phno."
              className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3
              outline-none focus:border-(--maincolor) transition placeholder:text-gray-500 text-(--text)"
            />
            {errors.email && (
              <p className="text-red-500 font-semibold">{errors.email.message}</p>
            )}

            <textarea
              {...register("message", {
                required: "Your Message is Helpful for us",
                minLength: { value: 5, message: "Min 5 characters" },
                maxLength: { value: 500, message: "Max 500 characters" },
              })}
              rows="5"
              placeholder="Your Message Here"
              className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3
              outline-none focus:border-(--maincolor) transition placeholder:text-gray-500 text-(--text)"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 font-semibold">{errors.message.message}</p>
            )}
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-3 rounded-xl font-bold
              bg-(--maincolor) text-[#022c22]
              hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]
              transition-all duration-300"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
      <div className='mt-20 sm:mt-20 flex flex-col sm:flex-row gap-5  items-center justify-center '>
        <button className="bg-(--maincolor) rounded-xl text-(--bgcolor) font-bold p-3 text-sm w-[60vw] md:w-[40vw]"
        >
          <a
          href="mailto:developerzaid26@gmail.com"
          >Email Me</a>
        </button>
        <button className="border-2 border-(--maincolor) rounded-xl text-(--maincolor) bg-transparent font-bold p-3 text-sm w-[60vw] md:w-[40vw]"
        >
          <Link
          href={'https://wa.me/919044337110?text=Hi%20I%20want%20a%20website%20like%20this'
}>
          Whatsapp Me
          </Link>
        </button>
      </div>
    </main>
  );
}
