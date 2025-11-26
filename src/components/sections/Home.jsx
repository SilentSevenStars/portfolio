import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* LEFT SIDE — INFORMATION */}
          <div className="text-center md:text-left z-10">
            <h1
              className="text-5xl md:text-6xl font-bold mb-4
              bg-gradient-to-r from-blue-500 to-cyan-400 
              bg-clip-text text-transparent"
            >
              Joseph Matthew B. Ringor
            </h1>

            <p className="text-gray-700 text-lg mb-8 max-w-xl">
              A full stack developer turning ideas into fully functional,
              high-performance web applications.
            </p>

            {/* BUTTONS */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium 
    transition relative overflow-hidden hover:-translate-y-0.5 
    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded 
    font-medium transition-all duration-200 hover:-translate-y-0.5 
    hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>

              <a
                href="/resume.csv"
                download
                className="bg-gradient-to-r from-blue-500 to-cyan-400 
               text-white py-3 px-6 rounded font-medium 
               transition relative overflow-hidden hover:-translate-y-0.5 
               hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Download CSV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="image/home.png"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-xl object-cover shadow-xl 
              border border-white/10"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
