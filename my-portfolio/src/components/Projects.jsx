import { useNavigate } from 'react-router-dom';
import DinImg from '/din-site.png';
import MyMovieImg from '/reactApp.png';
import ChatAppImg from '/chat-app.png';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col border-b-2 border-gray-800 bg-amber-50 p-4 pb-16 dark:border-white dark:bg-gray-800 sm:px-8 lg:px-64">
      <h1 className="p-4 text-center font-serif text-4xl font-bold text-gray-800 dark:text-white">
        Projects
      </h1>
      <p className="p-4 text-center text-base text-gray-800 dark:text-white sm:text-lg lg:text-xl">
        Here you will find some of the projects I have built on my own and at
        Career Foundry containing their own case studies
      </p>
      <div className="flex flex-col gap-8 pt-8 lg:gap-12">
        <div className="flex flex-col items-center lg:flex-row lg:pr-4">
          <img
            src={DinImg}
            alt="Image of Din Ballyhoo Site"
            className="h-48 w-full rounded border-4 border-gray-800 object-top dark:border-white sm:h-56 sm:w-full lg:h-96 lg:w-80 lg:object-cover"
          />

          <div className="mt-4 px-4 lg:mt-0 lg:px-8">
            <h1 className="pb-4 text-center font-serif text-2xl font-bold dark:text-white sm:text-3xl">
              Din Ballyhoo's Website
            </h1>
            <p className="text-base dark:text-white sm:text-lg lg:text-2xl">
              My band's website is a full-stack web application built with the
              MERN stack and Next.js. It offers fans access to albums, live
              shows, and webcasts, with secure user authentication and streaming
              capabilities. This project connected fans to our music while
              strengthening my skills as a developer.
            </p>
            <div className="mt-6 flex flex-row gap-4 lg:mt-12">
              <button
                onClick={() => navigate('/caseStudy/DinBallyhoo')}
                className="flex-1 rounded bg-blue-800 p-3 font-semibold text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-500"
              >
                Case Study
              </button>
              <a
                href="https://din-ballyhoo.vercel.app/"
                className="flex-1 rounded bg-blue-800 p-3 text-center font-semibold text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-400"
              >
                Website
              </a>
              <a
                href="https://github.com/jahend412/din-ballyhoo"
                className="flex-1 rounded bg-blue-800 p-3 text-center font-semibold text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-400"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:pr-4">
          <img
            src={MyMovieImg}
            alt="Image of Din Ballyhoo Site"
            className="h-48 w-full rounded border-4 border-gray-800 object-top dark:border-white sm:h-56 sm:w-full lg:h-96 lg:w-80 lg:object-cover"
          />

          <div className="mt-4 px-4 lg:mt-0 lg:px-8">
            <h1 className="pb-4 text-center font-serif text-2xl font-bold dark:text-white sm:text-3xl">
              MyMovie App
            </h1>
            <p className="text-base dark:text-white sm:text-lg lg:text-2xl">
              This project is the React based client-side component for the
              MyFlix application based on my existing server-side code (REST API
              and database). Users can register, login, view movie info
              (including genres & directors), filter movies, add/remove favorite
              movies to a user specific favorites list, update user info, as
              well as delete their accounts entirely.
            </p>
            <div className="mt-6 flex flex-row gap-4 lg:mt-12">
              <button
                onClick={() => navigate('/caseStudy/myMovie')}
                className="flex-1 rounded bg-blue-800 p-3 font-semibold text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-500"
              >
                Case Study
              </button>
              <a
                href="https://mymovieapp44.netlify.app/"
                className="flex-1 rounded bg-blue-800 p-3 text-center font-semibold text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-400"
              >
                Website
              </a>
              <a
                href="https://github.com/jahend412/myMovie-client"
                className="flex-1 rounded bg-blue-800 p-3 text-center font-semibold text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-400"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:pl-36 lg:pr-4">
          <img
            src={ChatAppImg}
            alt="Image of Din Ballyhoo Site"
            className="h-48 w-full rounded border-4 border-gray-800 object-contain dark:border-white sm:h-56 sm:w-full lg:h-96 lg:w-80 lg:object-cover"
          />

          <div className="mt-4 px-4 lg:mt-0 lg:px-8">
            <h1 className="pb-4 text-center font-serif text-2xl font-bold dark:text-white sm:text-3xl">
              Chat App
            </h1>
            <p className="text-base dark:text-white sm:text-lg lg:text-2xl">
              I created this app using Expo.io, React-Native, and Firebase. The
              user is able to create a username and join a chat room. The user
              is able to send messages to other users in the chat room and see
              who else is in the chat room with them. The user is also able to
              send images to the chat room. This app is optimized for both iOS
              and Android.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="p-4 text-center font-serif text-4xl font-bold text-gray-800 dark:text-white">
          Current Project
        </h1>
        <div className="flex flex-col items-center lg:flex-row lg:px-4">
          <div className="mt-4 w-full px-4 lg:mt-0 lg:px-8">
            <h1 className="pb-8 text-center font-serif text-2xl font-bold dark:text-white sm:text-3xl">
              NestWorth - A Budget App
            </h1>
            <p className="text-base dark:text-white sm:text-lg lg:text-2xl">
              nestWorth is a full-stack budgeting application I'm building to
              help users take control of their finances through intelligent
              expense tracking and visual analytics. Built with the MERN stack,
              the app allows users to import transactions via CSV, automatically
              categorizes spending, and provides insights through interactive
              dashboards. Key features include customizable budget categories,
              expense tracking, goal setting, and spending pattern analysis. I
              am planning to add AWS services for cloud infrastructure and
              exploring bank API integrations for future automated syncing. This
              project demonstrates my ability to handle financial data, create
              intuitive user interfaces, and build practical solutions for
              everyday problems.
            </p>
            <div className="mt-6 flex justify-center lg:mt-12">
              <a
                href="https://github.com/jahend412/nestWorth"
                className="rounded bg-blue-800 px-8 py-3 text-center font-semibold text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-500"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
