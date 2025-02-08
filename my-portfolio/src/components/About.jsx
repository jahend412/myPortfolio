import Pic1 from '/josh1.jpeg';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('false');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
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
          As a{' '}
          <span className="font-bold text-blue-800 underline dark:text-red-600">
            web developer
          </span>
          , I combine technical skills with a strong drive for excellence. I
          focus on building efficient, user-focused solutions while actively
          expanding my expertise across the development stack. My approach
          combines analytical problem-solving with creative implementation,
          allowing me to tackle complex challenges effectively. I thrive in
          collaborative enviorments where I can contribute to team success and
          learn from others while delivering quality results. With a commitment
          to continuous growth and a passion for clean, functional code, I bring
          both technical capability and reliable teamwork to every project.
        </p>
        <br />
        <p className="px-4 pt-4 text-left text-lg dark:text-white lg:px-20 lg:pt-8 lg:text-2xl">
          In my current role as a{' '}
          <span className="font-bold text-blue-800 underline dark:text-red-600">
            Steam Fitter
          </span>{' '}
          specializing in Natural Gas Systems, I`ve developed valuable skils
          that translate to web development. While the technial aspects differ,
          the core competencies remain consistent.
        </p>
        <br />
        <p className="px-4 pt-4 text-left text-lg dark:text-white lg:px-20 lg:pt-8 lg:text-2xl">
          <span className="font-bold text-blue-800 underline dark:text-red-600">
            Communication
          </span>{' '}
          stands as a cornerstone of success in any field. My experience has
          taught me the importance of clear project understanding, effective
          team coordination and execution. The ability to ask precise questions
          and establish realistic timelines has been crucial in my current role
          and will be equally valuable in web development.
        </p>
        <br />
        <p className="px-4 pt-4 text-left text-lg dark:text-white lg:px-20 lg:pt-8 lg:text-2xl">
          <span className="font-bold text-blue-800 underline dark:text-red-600">
            My commitment to continous improvement
          </span>{' '}
          drives me to seek new knowledge and enhance efficiency daily. Whether
          working indepenedently or as part of a team, I believe that combining
          a{' '}
          <span className="font-bold text-blue-800 underline dark:text-red-600">
            strong work ethic
          </span>{' '}
          with a
          <span className="font-bold text-blue-800 underline dark:text-red-600">
            positive attitude
          </span>{' '}
          can transform good teams into great ones. This mindset, coupled with
          my dedication to excellence, will contribute significatntly to my
          transistion into web development.{' '}
        </p>
        <br />
        <p className="px-4 pt-4 text-left text-lg dark:text-white lg:px-20 lg:pt-8 lg:text-2xl">
          Beyond my professional life, I apply the same principles of dedication
          and commitment to my personal life. As a devoted father and husband, I
          prioritize quality family time through shared activites like gaming,
          outdoor adventures, and home projects-{' '}
          <span className="font-bold text-blue-800 underline dark:text-red-600">
            always emphasizing teamwork and collaboration
          </span>
          .
        </p>
        <br />
        <p className="px-4 pt-4 text-left text-lg dark:text-white lg:px-20 lg:pt-8 lg:text-2xl">
          My passion for music as a guitarist, songwriter, and vocalist in two
          bands demonstrates my ability to balance multiple commitments while
          mantaining high standards of performance. Additionally, as a Dungeon
          Master for a regular D&D group that plays once a month, I've honed
          skills in{' '}
          <span className="font-bold text-blue-800 underline dark:text-red-600">
            creative problem-solving
          </span>
          , narrative development, and group facilitation- skills that translate
          well to project management and team dynamics.
        </p>
        <br />
        <p className="px-4 pt-4 text-left text-lg dark:text-white lg:px-20 lg:pt-8 lg:text-2xl">
          These diverse experiences, combined with my professional background,
          have prepared me for a career transition into{' '}
          <span className="font-bold text-blue-800 underline dark:text-red-600">
            web development
          </span>
          . I bring not only technical capabilities, but also a commitment to
          continous learning and team success. My varied background has equipped
          me with unique perspectives on problem-solving and collaboration,
          making me a valuable addition to any development team.
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
                <li className="pb-2 text-lg font-bold lg:text-xl">Languages</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Sass</li>
                <li>TypeScript</li>
                <li>Git</li>
                <li>Python</li>
              </ul>
            </div>

            <div className="lg:flex-1">
              <ul className="list-disc pl-4">
                <li className="pb-2 text-lg font-bold lg:text-xl">
                  Frameworks
                </li>
                <li>React/Redux</li>
                <li>NextJs</li>
                <li>Angular</li>
                <li>Django</li>
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
                <li>AWS</li>
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
