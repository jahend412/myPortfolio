import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex items-center justify-between bg-amber-50 p-8 dark:bg-gray-800">
      <p className="text-left text-blue-800 dark:text-red-600">
        © 2025 Josh Endemann | Contact:{' '}
        <a
          href="mailto:joshendemann@gmail.com"
          className="hover:-translate-y-1 hover:text-blue-600 dark:text-white dark:hover:text-red-600"
        >
          joshendemann@gmail.com
        </a>
      </p>
      <div className="flex gap-6">
        <a
          href="https://github.com/jahend412"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-800 transition-all hover:-translate-y-1 hover:text-blue-600 dark:text-white dark:hover:text-red-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joshua-endemann/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-800 transition-all hover:-translate-y-1 hover:text-blue-600 dark:text-white dark:hover:text-red-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://dev.to/jahend412"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-800 transition-all hover:-translate-y-1 hover:text-blue-600 dark:text-white dark:hover:text-red-600"
        >
          <FaBlog />
        </a>
      </div>
    </div>
  );
}
