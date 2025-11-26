import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white/90 z-40 flex flex-col items-center justify-center
               transition-all duration-300 ease-in-out
               ${
                 menuOpen
                   ? "h-screen opacity-100"
                   : "h-0 opacity-0 pointer-events-none"
               }
  `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-gray-800 text-3xl"
      >
        &times;
      </button>

      {["Home", "About", "Projects", "Contact"].map((item, i) => (
        <a
          key={i}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-gray-900 my-4 transition
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
