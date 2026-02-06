import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-20 py-8">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio.</div>

        <ul className="flex gap-8 text-slate-300">
          <li className="text-cyan-400 cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Content */}
      <div className="flex justify-between items-center mt-20">
        
        {/* Left */}
        <div className="max-w-xl">
          <p className="text-slate-300 text-lg">Hello, It's Me</p>

          <h1 className="text-5xl font-bold my-3">
            John Kendric
          </h1>

          <h2 className="text-3xl mb-4">
            And I'm a <span className="text-cyan-400">Frontend Developer</span>
          </h2>

          <p className="text-slate-400 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus nulla soluta rerum, animi excepturi.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            {["in", "🐦", "📘", "▶"].map((item, i) => (
              <span
                key={i}
                className="w-10 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>

          <button className="px-8 py-3 rounded-full bg-cyan-400 text-slate-900 font-bold">
            Download CV
          </button>
        </div>

        {/* Right */}
        <div className="relative">
          <div
            className="w-80 h-80 bg-cyan-400 flex items-center justify-center shadow-[0_0_40px_#22d3ee]"
            style={{
              clipPath:
                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            }}
          >
            <img
              src="/profile.png"
              alt="profile"
              className="w-[280px] h-[280px] object-cover"
              style={{
                clipPath:
                  "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              }}
            />
          </div>
        </div>

      </div>
    </main>
  );
}

