import ProfilePic from '/profile-pic.png';
import Pic1 from '/josh1.jpeg';
import { useState } from 'react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('false');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex flex-col border-b-2 border-gray-800 bg-amber-50 p-4 dark:border-white dark:bg-gray-800 lg:flex-row lg:p-12 lg:px-64">
        <div>
          <h3 className="pt-8 text-left text-2xl font-bold text-blue-800 dark:text-red-600 lg:pt-20 lg:text-3xl">
            Welcome, my name is Josh
          </h3>
          <h1 className="pb-8 pt-4 text-left text-4xl text-gray-800 dark:text-white lg:pt-8 lg:text-7xl">
            I am a Full-Stack Web Developer.
          </h1>
        </div>
        <div className="flex items-center justify-center lg:flex-1">
          <img
            src={ProfilePic}
            alt="profile-pic"
            className="h-64 w-64 object-cover lg:h-80 lg:w-80"
          />
        </div>
      </div>

      <div className="flex flex-col items-center border-b-2 border-gray-800 bg-amber-50 p-4 pt-10 dark:border-white dark:bg-gray-800 lg:flex-row lg:items-start lg:px-64">
        <img
          src={Pic1}
          alt="Picture"
          className="h-64 w-64 rounded-lg object-cover lg:h-96 lg:w-96"
        />

        <div className="mt-8 lg:mt-0">
          <h3 className="text-center font-serif text-3xl font-bold dark:text-white lg:pl-20 lg:text-left lg:text-4xl">
            About
          </h3>
          <p className="px-4 pt-4 text-left text-lg dark:text-white lg:px-20 lg:pt-8 lg:text-2xl">
            From the pipeline to programming, I bring a strong work ethic rooted
            in production and communication. I apply the same precision required
            for natural gas pipeline systems to building web applications -
            where attention to detail and systematic thinking are just as
            critical. I specialize in the MERN stack, with deep focus on Node.js
            and React. Currently expanding into AWS and financial tech while
            building applications that solve real problems. My projects range
            from movie databases to real-time chat applications, each one
            strengthening my full-stack capabilities. When I'm not coding,
            you'll find me with my family or playing music with my bands. I
            thrive on teams that value hard work and clear communication to
            build products.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pb-4 pt-6 lg:justify-start lg:pl-20">
            <button
              className={`text-xl font-medium lg:text-3xl ${
                activeTab === 'skills'
                  ? 'text-blue-600 underline dark:text-red-600'
                  : 'dark:text-white'
              }`}
              onClick={() => handleTabClick('skills')}
            >
              Skills
            </button>
            <button
              className={`text-xl font-medium lg:text-3xl ${
                activeTab === 'education'
                  ? 'text-blue-600 underline dark:text-red-600'
                  : 'dark:text-white'
              }`}
              onClick={() => handleTabClick('education')}
            >
              Education
            </button>
            <button
              className={`text-xl font-medium lg:text-3xl ${activeTab === 'technology' ? 'text-blue-600 underline dark:text-red-600' : 'dark:text-white'}`}
              onClick={() => handleTabClick('technology')}
            >
              Technology
            </button>
            <button
              className={`text-xl font-medium lg:text-3xl ${activeTab === 'hobbies' ? 'text-blue-600 underline dark:text-red-600' : 'dark:text-white'}`}
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
                  <li className="pb-2 text-lg font-bold lg:text-xl">
                    Languages
                  </li>
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
    </div>
  );
}
