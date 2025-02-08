import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-amber-50 p-4 dark:bg-gray-800 lg:p-8 lg:px-64">
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div className="max-w-md text-center lg:text-left">
          <h1 className="text-lg font-bold text-blue-800 dark:text-red-600">
            Josh Endemann
          </h1>
          <p className="dark:text-white">
            A Full-Stack Developer crafting end-to-end web applications,
            combining polished user interfaces with scalable backend
            architectures to build complete digital solutions.{' '}
          </p>
        </div>
        <div className="flex justify-center gap-6 lg:items-center">
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

      <div className="relative mt-6 lg:mt-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-amber-50 px-2 text-sm text-blue-800 dark:bg-gray-800 dark:text-red-600 lg:px-4 lg:text-base">
            © Copyright 2025. Made by Josh Endemann
          </span>
        </div>
      </div>
    </div>
  );
}
