import Pic1 from '/josh1.jpeg';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('false');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="border-solid-2 flex flex-col items-center border-white bg-amber-50 p-4 dark:bg-gray-800 lg:flex-row lg:items-start lg:px-64">
      <img
        src={Pic1}
        alt="Picture"
        className="h-64 w-64 rounded-lg object-cover lg:h-96 lg:w-96"
      />
      <div className="mt-8 lg:mt-0">
        <h3 className="text-center text-3xl font-bold dark:text-white lg:pl-20 lg:text-left lg:text-4xl">
          About
        </h3>
        <p className="px-4 pt-4 text-left text-lg dark:text-white lg:px-20 lg:pt-8 lg:text-2xl">
          As a web developer, I combine technical skills with a strong drive for
          excellence. I focus on building efficient, user-focused solutions
          while actively expanding my expertise across the development stack. My
          approach combines analytical problem-solving with creative
          implementation, allowing me to tackle complex challenges effectively.
          I thrive in collaborative enviorments where I can contribute to team
          success and learn from others while delivering quality results. With a
          commitment to continuous growth and a passion for clean, functional
          code, I bring both technical capability and reliable teamwork to every
          project.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pb-4 pt-6 lg:justify-start lg:pl-20">
          <button
            className={`text-xl font-medium lg:text-3xl ${
              activeTab === 'skills'
                ? 'text-red-600 underline'
                : 'dark:text-white'
            }`}
            onClick={() => handleTabClick('skills')}
          >
            Skills
          </button>
          <button
            className={`text-xl font-medium lg:text-3xl ${
              activeTab === 'education'
                ? 'text-red-600 underline'
                : 'dark:text-white'
            }`}
            onClick={() => handleTabClick('education')}
          >
            Education
          </button>
          <button
            className={`text-xl font-medium lg:text-3xl ${activeTab === 'technology' ? 'text-red-600 underline' : 'dark:text-white'}`}
            onClick={() => handleTabClick('technology')}
          >
            Technology
          </button>
          <button
            className={`text-xl font-medium lg:text-3xl ${activeTab === 'hobbies' ? 'text-red-600 underline' : 'dark:text-white'}`}
            onClick={() => handleTabClick('hobbies')}
          >
            Offline
          </button>
        </div>
        {activeTab === 'skills' && (
          <div className="px-4 dark:text-white lg:pl-20">
            <ul className="list-disc pl-4">
              <li className="pb-2 text-xl font-bold">Web Development</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Test Driven Development</li>
            </ul>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="px-4 dark:text-white lg:pl-20">
            <ul className="list-disc pl-4">
              <li className="pb-2 text-xl font-bold">CareerFoundry</li>
              <li>Intro to Frontend Development</li>
              <li>Full-Stack Immersion</li>
              <li>Python for Web Developers</li>
              <li>Job Preparation course</li>
            </ul>
          </div>
        )}

        {activeTab === 'technology' && (
          <div className="flex flex-col gap-8 px-4 dark:text-white lg:flex-row lg:pl-20">
            <div className="lg:flex-1">
              <ul className="list-disc pl-4">
                <li className="pb-2 text-lg font-bold lg:text-xl">Languages</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div className="lg:flex-1">
              <ul className="list-disc pl-4">
                <li className="pb-2 text-lg font-bold lg:text-xl">
                  Frameworks
                </li>
                <li>React</li>
                <li>NextJs</li>
                <li>Angular</li>
              </ul>
            </div>

            <div className="lg:flex-1">
              <ul className="list-disc pl-4">
                <li className="pb-2 text-lg font-bold lg:text-xl">
                  Server-side
                </li>
                <li>Node/Express/MongoDB</li>
                <li>Php/Laravel</li>
                <li>AWS</li>
                <li>FireBase</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'hobbies' && (
          <div className="px-4 dark:text-white lg:pl-20">
            <ul className="list-disc pl-4">
              <li className="pb-2 text-xl font-bold">Hobbies</li>
              <li>Spending time with my family</li>
              <li>I am in two bands as a singer and guitarist</li>
              <li>Hiking/Camping</li>
              <li>Working on projects</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
