export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-10 mt-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Quick Links</h3>
          <ul className="text-gray-700">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Socials</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                className="hover:text-blue-400 transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://github.com" 
                target="_blank" 
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center md:items-end justify-center">
          <p className="text-gray-800">
            © {new Date().getFullYear()} Joseph Matthew B. Ringor — All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};