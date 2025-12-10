import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "CLSU-FHES",
      description:
        "A Automated Faculty Hiring designed for faster work flow for the hiring",
      image: "CLSU-FHES.png",
      tech: ["Laravel", "Livewire", "TailwindCSS", "Alphine.js", "MySQL"],
      link: "https://github.com/SilentSevenStars/CLSU-FHES.git",
    },
    {
      title: "Food Delivery App",
      description:
        "A food delivery website to make the customer easier to order without going to the restaurant",
      image: "food.png",
      tech: ["PHP", "MySQL"],
      link: "https://github.com/yourusername/ai-analytics",
    },
    {
      title: "MM Poultry Store Mobile App",
      description:
        "A Poultry Store Mobile App is a mobile that let you manage your inventory and your sales",
      image: "poultry-store.png",
      tech: ["Flutter", "Firebase"],
      link: "https://github.com/SilentSevenStars/PoultryFoodStore.git",
    },
    {
      title: "PTR Bank",
      description:
        "A Banking Management System design for deposit, withdraw, and also loan",
      image: "prt-bank.png",
      tech: ["Laravel", "JQUERY", "MySQL"],
      link: "https://github.com/SilentSevenStars/PTR-Banking-Laravel.git",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div className="rounded-xl overflow-hidden border border-gray-200 hover:border-blue-400/40 shadow-sm hover:shadow-lg transition">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Github Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
