import { useNavigate } from 'react-router-dom';
import DinImg from '/din-site.png';
import MyMovieImg from '/reactApp.png';
import ChatAppImg from '/chat-app.png';
import myMovie from './caseStudy/myMovie';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-amber-50 p-4 dark:bg-gray-800 sm:px-8 lg:px-64">
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
            <button
              onClick={() => navigate('/caseStudy/DinBallyhoo')}
              className="mx-auto mt-6 flex items-center rounded bg-blue-800 p-3 font-semibold text-white hover:-translate-y-1 hover:bg-gray-700 dark:bg-red-600 dark:hover:bg-red-500 lg:mt-12"
            >
              Case Study
            </button>
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
            <button
              onClick={() => navigate('/caseStudy/myMovie')}
              className="mx-auto mt-6 flex items-center rounded bg-blue-800 p-3 font-semibold text-white hover:-translate-y-1 hover:bg-gray-700 dark:bg-red-600 dark:hover:bg-red-500 lg:mt-12"
            >
              Case Study
            </button>
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
            <button className="mx-auto mt-6 flex items-center rounded bg-blue-800 p-3 font-semibold text-white hover:-translate-y-1 hover:bg-gray-700 dark:bg-red-600 dark:hover:bg-red-500 lg:mt-12">
              Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
