import { useState } from "react";
import { Menu, X } from "lucide-react";
import SplashCursor from "../blocks/Animations/SplashCursor/SplashCursor";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Strengths", href: "#strengths" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0e0d1b] shadow-md hover:scale-105 transition">
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo or Name */}
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 text-transparent bg-clip-text"
        >
          Tathastu-AI
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-400 hover:text-transparent hover:bg-clip-text transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#1a192a]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-400 hover:text-transparent hover:bg-clip-text transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
