import { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Update class on HTML element
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="flex items-center justify-between bg-amber-50 py-4 dark:bg-gray-800 lg:px-64">
      <a className="text-xl font-bold text-gray-800 dark:text-white" href="/">
        Josh Endemann
      </a>

      <div className="flex items-center gap-6">
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600"
        >
          {theme === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
        </button>

        {/* Hamburger button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 dark:text-white lg:hidden"
        >
          <div className="space-y-2">
            <span className="block h-0.5 w-8 bg-current"></span>
            <span className="block h-0.5 w-8 bg-current"></span>
            <span className="block h-0.5 w-8 bg-current"></span>
          </div>
        </button>

        {/* Desktop menu */}
        <ul className="hidden gap-6 lg:flex">
          <a
            href=""
            className="text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600"
          >
            About
          </a>
          <a
            href=""
            className="text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600"
          >
            Posts
          </a>
          <a
            href=""
            className="text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600"
          >
            Projects
          </a>
          <a
            href=""
            className="text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600"
          >
            Services
          </a>
          <a
            href=""
            className="text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600"
          >
            Contact
          </a>
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 bg-white dark:bg-gray-800 lg:hidden">
          <ul className="flex flex-col items-center py-4">
            <a
              href=""
              className="w-full py-2 text-center text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300"
            >
              About
            </a>
            <a
              href=""
              className="w-full py-2 text-center text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300"
            >
              Posts
            </a>
            <a
              href=""
              className="w-full py-2 text-center text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300"
            >
              Projects
            </a>
            <a
              href=""
              className="w-full py-2 text-center text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300"
            >
              Services
            </a>
            <a
              href=""
              className="w-full py-2 text-center text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300"
            >
              Contact
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
