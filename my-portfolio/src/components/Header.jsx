import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-gray-800 px-6 py-4">
      <a className="text-xl font-bold text-white" href="/">
        Josh Endemann
      </a>

      {/* Hamburger button - shown on mobile, hidden on desktop */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white lg:hidden"
      >
        <div className="space-y-2">
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
        </div>
      </button>

      {/* Desktop menu - hidden on mobile, shown on desktop */}
      <ul className="hidden gap-6 lg:flex">
        <a href="" className="text-gray-300 transition-colors hover:text-white">
          About
        </a>
        <a href="" className="text-gray-300 transition-colors hover:text-white">
          Posts
        </a>
        <a href="" className="text-gray-300 transition-colors hover:text-white">
          Projects
        </a>
        <a href="" className="text-gray-300 transition-colors hover:text-white">
          Services
        </a>
        <a href="" className="text-gray-300 transition-colors hover:text-white">
          Contact
        </a>
      </ul>

      {/* Mobile menu - shown when hamburger is clicked */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 bg-gray-800 lg:hidden">
          <ul className="flex flex-col items-center py-4">
            <a
              href=""
              className="w-full py-2 text-center text-gray-300 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href=""
              className="w-full py-2 text-center text-gray-300 transition-colors hover:text-white"
            >
              Posts
            </a>
            <a
              href=""
              className="w-full py-2 text-center text-gray-300 transition-colors hover:text-white"
            >
              Projects
            </a>
            <a
              href=""
              className="w-full py-2 text-center text-gray-300 transition-colors hover:text-white"
            >
              Services
            </a>
            <a
              href=""
              className="w-full py-2 text-center text-gray-300 transition-colors hover:text-white"
            >
              Contact
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
