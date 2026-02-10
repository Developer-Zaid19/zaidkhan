import React from "react";


export default function Skills() {


    const skills = [
      "HTML / CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "API Integration",
      "Git & GitHub",
    ];
  return (
    <main className="min-h-screen bg-gradient-to-br from-(--bgcolor) to-(--bgfcolor) text-white px-10 py-20">

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">
          My <span className="text-(--maincolor)">Skills</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white/5 border border-(--maincolor)/30 rounded-2xl p-8
              text-center text-lg font-semibold
              shadow-[0_0_30px_rgba(34,197,94,0.25)]
              hover:scale-105 hover:bg-(--maincolor)/10
              transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
