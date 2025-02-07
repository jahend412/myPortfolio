export default function DinBallyhooCaseStudy() {
  return (
    <div className="bg-amber-50 pt-12 dark:bg-gray-800 dark:text-white lg:px-64">
      <div className="border-solid border-black p-4 text-center dark:border-white">
        <h1 className="p-4 text-4xl text-blue-800 dark:text-red-600">
          Din Ballyhoo Website
        </h1>
        <p className="font-serif text-2xl text-blue-800 underline dark:text-red-600">
          Case Study
        </p>
        <div className="mx-auto my-8 flex justify-center">
          <img
            src="/mymovcs1.png"
            alt="Title Image"
            className="md:-2/3 w-full rounded-lg object-cover sm:w-3/4 lg:w-1/2 xl:max-w-4xl"
          />
        </div>
        <h3 className="font-extrabold text-blue-800 dark:text-red-600">
          Josh Endemann
        </h3>

        <div className="flex flex-col items-center gap-4 pt-8 lg:flex-row lg:justify-center lg:gap-12">
          <a
            href="https://din-ballyhoo.vercel.app/"
            className="rounded bg-blue-800 px-9 py-3 text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-400"
          >
            Website
          </a>
          <a
            href="https://github.com/jahend412/din-ballyhoo"
            className="rounded bg-blue-800 p-3 text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-400"
          >
            Code
          </a>
        </div>
      </div>
      <div className="py-12 font-semibold md:px-36 lg:px-64">
        <h2 className="py-4 text-center text-3xl font-bold text-blue-800 underline dark:text-red-600">
          Overview
        </h2>
        <p className="text-lg font-semibold">
          The band website is a full-stack web application built using the MERN
          stack (MongoDB, Express, React with Next.js, and Node.js). This
          platform delivers a dynamic and engaging experience for fans, offering
          access to the band`s albums, live shows, and monthly webcasts. Users
          can create accounts, securely log in, and explore a robust collection
          of music and performances.
        </p>

        <h4 className="py-4 text-center text-2xl font-bold text-blue-800 dark:text-red-600">
          Purpose
        </h4>
        <p className="text-lg">
          The primary purpose of this project was to create a comprehensive and
          interactive web application that connects fans to the band’s creative
          journey. As a solo project built entirely by me, it served as a
          practical and valuable learning experience, allowing me to deepen my
          understanding of full-stack development and backend/frontend
          integration. The project also emphasized user management, secure
          authentication, and database-driven content management.
        </p>
        <img src="/mymovcs2.png" alt="myMovie image" className="p-16" />
        <h4 className="pb-4 text-center text-2xl font-bold text-blue-800 dark:text-red-600">
          Goal
        </h4>
        <p className="text-lg">
          The goal of the band website was to create a fully functional,
          scalable application that caters to both the band's creative needs and
          fans’ engagement. Key objectives included:
        </p>
        <ol className="list-disc p-4 pl-4">
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              Music Content Management
            </span>
            : Develop a backend that stores and organizes information about
            albums, tracks, and live shows using MongoDB.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              User Authentication
            </span>
            : Implement secure account management, enabling users to register,
            log in, and access exclusive content.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              Monthly Webcasts
            </span>
            : Provide functionality for posting and managing recurring webcasts,
            allowing fans to enjoy live or archived performances.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              Music Streaming
            </span>
            : Allow users to stream music seamlessly from the platform. I stored
            the files using firebase and allow the user to play them using React
            Player.
          </li>
        </ol>
        <h2 className="py-4 text-center text-3xl font-bold text-blue-800 underline dark:text-red-600">
          Duration
        </h2>
        <p>
          The development process for myMovie was divided into two main phases:
          server- side and client-side.
        </p>
        <h2 className="py-4 text-center text-3xl font-bold text-blue-800 dark:text-red-600">
          Server-side:
        </h2>
        <p>
          The server-side development involved setting up a RESTful API using
          Express and integrating MongoDB for efficient content management.
          Designing and structuring the database was crucial to handle data for
          albums, tracks, webcasts, and user profiles. Key aspects of the
          server-side development included:
        </p>
        <img src="/mymovcs5.png" alt="server side image" className="p-16" />
        <ol className="list-disc p-4 pl-4">
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              Database Design
            </span>
            : MongoDB collections were designed to efficiently store structured
            data for music content, users, and webcasts. Relationships were
            modeled to enable fast and scalable data retrieval.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              API Development
            </span>
            : RESTful endpoints were created for various resources, such as
            albums, tracks, shows, webcasts, and user profiles. These endpoints
            allowed secure and efficient communication between the client and
            server.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              User Authentication
            </span>
            : Secure user authentication was implemented using bcrypt for
            password hashing and JWT (JSON Web Tokens) for session management.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              Middleware Integration
            </span>
            : Middleware functions were set up for error handling, request
            validation, and secure routing.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              Testing
            </span>
            : Postman was used to test and document API endpoints, ensuring the
            backend operated as expected.
          </li>
        </ol>
        <img src="/mymovcs6.png" alt="server side image" className="p-16" />

        <h2 className="py-4 text-center text-3xl font-bold text-blue-800 dark:text-red-600">
          Client-side:
        </h2>
        <ol className="list-disc p-4 pl-4">
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              UI/UX Design
            </span>
            : The user interface was designed to be clean and intuitive,
            allowing fans to easily navigate through albums, live shows, and
            webcasts.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              Routing and Navigation
            </span>
            : Next.js's built-in routing system was utilized to create a
            seamless navigation experience, enabling users to switch between
            different sections without page reloads.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              State Management
            </span>
            : React's built-in hooks were used to manage component state
            efficiently, ensuring a responsive and dynamic user interface.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              Styling
            </span>
            : CSS Modules were implemented for component-level styling,
            providing modular and maintainable styles that kept the UI
            consistent and modern.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              Music Player Integration
            </span>
            : I used React Player and applied state management to set a track to
            playing. I also had to fetch the track from the database which had
            the file stored in a firebase url.
          </li>
          <li>
            <span className="font-bold text-blue-800 dark:text-red-600">
              Authentication Flow
            </span>
            : The frontend seamlessly integrated with backend APIs to handle
            user registration, login, and secure access to protected routes.
          </li>
        </ol>
        <br />
        <p>
          Overall, the client-side development focused on delivering a polished,
          user-friendly interface that complements the server-side
          functionality, providing fans with a comprehensive platform for
          exploring the band’s creative journey.
        </p>
        <br />
        <h2 className="py-4 text-center text-3xl font-bold text-blue-800 dark:text-red-600">
          Retrospective
        </h2>
        <p>
          Building the band website was a rewarding and challenging experience.
          Developing both the backend and frontend from scratch gave me
          invaluable insights into full-stack development, API design, and
          user-focused application architecture. One of the key lessons learned
          was the importance of planning a scalable and maintainable project
          structure to accommodate future features and enhancements.
        </p>
        <br />
        <p>
          Through trail and error there was a lot to be learned from this
          project. I found myself altering my backend to make it more
          effiecient. I also had help from tutorials I was working with
          implementing some of the features that were in their projects. I also
          reached out to a Node group on slack with a few questions on how to go
          about making the backend. I found out how to set roles and permissions
          for user roles through that line of communication. I plan to add more
          features to the app in due time, but for now I am off to learn some
          necessary skills to further my expertise in web development.
        </p>

        <h4 className="py-4 text-center text-2xl font-bold text-blue-800 dark:text-red-600">
          Tools and Methodologies
        </h4>
        <ul className="text-center">
          <li>MongoDB</li>
          <li>Express</li>
          <li>React/Next.js</li>
          <li>Node.js</li>
          <li>Postman</li>
          <li>Heroku</li>
          <li>CSS Modules</li>
          <li>Axios</li>
        </ul>

        <h4 className="py-4 text-center text-2xl font-bold text-blue-800 dark:text-red-600">
          Credits
        </h4>
        <ul className="text-center">
          <li>Lead Developer: Joshua Endemann</li>
        </ul>
      </div>
    </div>
  );
}
