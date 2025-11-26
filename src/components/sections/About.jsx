import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Bootstrap", "TailwindCSS"];
  const backendSkills = [
    "PHP",
    "Flutter",
    "Laravel",
    "MySQL",
    "Firebase",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE — PROFILE IMAGE */}
          <div className="flex justify-center">
            <img
              src="image/about.png"
              alt="Profile"
              className="rounded-xl object-cover shadow-xl border border-gray-300 
                         w-auto h-auto max-w-xs md:max-w-sm"
            />
          </div>

          {/* RIGHT SIDE — INFORMATION */}
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-gray-700 mb-6">
              Passionate web developer dedicated to building clean, modern, and
              responsive applications with a focus on user-friendly design and
              futuristic interfaces.
            </p>

            {/* PERSONAL DETAILS */}
            <div className="space-y-2 mb-8">
              <p className="text-gray-700"><strong>Name:</strong> Joseph Matthew B. Ringor</p>
              <p className="text-gray-700"><strong>Email:</strong> josephmatthewringor820@gmail.com</p>
              <p className="text-gray-700"><strong>Address:</strong> Lupao, Nueva Ecija</p>
            </div>

            {/* SKILLS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 border border-gray-200 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                      hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 border border-gray-200 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                      hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
