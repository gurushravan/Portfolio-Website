"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-100 py-4 flex items-center relative">
        

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="#home" className="text-lg hover:text-gray-400 transition">Home</a>
          <a href="#about" className="text-lg hover:text-gray-400 transition">About</a>
          <a href="#projects" className="text-lg hover:text-gray-400 transition">Projects</a>
          <a href="#experience" className="text-lg hover:text-gray-400 transition">Experience</a>
          <a href="#contact" className="text-lg hover:text-gray-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}