export default function myMovieCaseStudy() {
  return (
    <div className="bg-amber-50 pt-12 dark:bg-gray-800 dark:text-white lg:px-64">
      <div className="border-solid border-black p-4 text-center dark:border-white">
        <h1 className="p-4 text-4xl text-blue-800 dark:text-red-600">
          myMovie
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
        <h4 className="font-extrabold text-blue-800 dark:text-red-600">
          Project from CareerFoundry
        </h4>
        <div className="flex flex-col items-center gap-4 pt-8 lg:flex-row lg:justify-center lg:gap-12">
          <a
            href="https://mymovieapp44.netlify.app/"
            className="rounded bg-blue-800 px-9 py-3 text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-400"
          >
            Website
          </a>
          <a
            href="https://github.com/jahend412/My_Movie_api"
            className="rounded bg-blue-800 p-3 text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-400"
          >
            Backend Code
          </a>
          <a
            className="rounded bg-blue-800 p-3 text-white hover:-translate-y-1 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-400"
            href="https://github.com/jahend412/myMovie-client"
          >
            Frontend Code
          </a>
        </div>
      </div>
      <div className="py-12 font-semibold md:px-36 lg:px-64">
        <h2 className="py-4 text-center text-3xl font-bold text-blue-800 underline dark:text-red-600">
          Overview
        </h2>
        <p className="text-lg font-semibold">
          myMovie is a feature-rich movie web application developed using the
          MERN stack (MongoDB, Express, React, and Node). It offers users an
          extensive collection of movies with detailed information about
          directors and genres. Additionally, users can create accounts, log in,
          update their profiles, and curate a personalized list of favorite
          movies.
        </p>

        <h4 className="py-4 text-center text-2xl font-bold text-blue-800 dark:text-red-600">
          Purpose
        </h4>
        <p className="text-lg">
          The primary purpose of this project was to gain a comprehensive
          understanding of both backend and frontend technologies and their
          seamless integration. Developed as part of a full stack immersion
          course at CareerFoundry, myMovie served as a practical learning
          experience, enabling the exploration of API development with MongoDB
          and the implementation of a React app with Redux for efficient data
          retrieval.
        </p>
        <img src="/mymovcs2.png" alt="myMovie image" className="p-16" />
        <h4 className="pb-4 text-center text-2xl font-bold text-blue-800 dark:text-red-600">
          Goal
        </h4>
        <p className="text-lg">
          The goal of myMovie was to create a fully functional, end-to-end
          application that provides users with an immersive movie browsing
          experience. The key objective of the project were as follows:
        </p>
        <ol className="list-disc p-4 pl-4">
          <li>
            Movie Database: Develop a robust backend utilizing MongoDB as the
            database to store movie data, including information about directors
            and genres.
          </li>
          <li>
            User Authentication: Implement user account management features,
            enabling users to create accounts, log in securely, and update their
            profiles with personalized information.
          </li>
          <li>
            Seamless Data Retrieval: Utilize React with Redux to efficiently
            pull data from the MongoDB database and present it to users in an
            intuitive and responsive manner, ensuring a seamless browsing
            experience.
          </li>
          <li>
            Favorite Movies List: Enable users to add their own list of favorite
            movies, allowing them to save and access their preferred films
            conveniently.
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
          Using the MERN stack, I developed a robust RESTful API using Node.js
          and Express, seamlessly integrating with MongoDB through CRUD methods.
          During the project, I faced the decision of selecting between a
          relational or non-relational database. After conducting thorough tests
          with PostGreSQL (relational) and MongoDB (non-relational), I opted for
          MongoDB due to its flexibility.{' '}
        </p>
        <img src="/mymovcs5.png" alt="server side image" className="p-16" />
        <p>
          Upon data entry, I employed Mongoose to streamline interactions with
          the database. To ensure user security, I implemented various measures.
          For the initial login, I utilized basic HTTP authentication coupled
          with JWT token-based authorization. Additionally, I fortified the
          system with CORS, password hashing, and meticulous data validation to
          bolster overall security.
        </p>
        <img src="/mymovcs6.png" alt="server side image" className="p-16" />
        <p>
          To validate the functionality of the API endpoints, I extensively
          tested them using Postman, employing HTTP methods like GET, POST,
          UPDATE, and DELETE. Once satisfied with the thorough testing, I
          proceeded to deploy my application on Heroku, while relying on MongoDB
          Atlas to serve as the hosting platform for the database.
        </p>
        <h2 className="py-4 text-center text-3xl font-bold text-blue-800 dark:text-red-600">
          Client-side:
        </h2>
        <p>
          Upon completing the API development, the next step was to provide
          users with an intuitive interface to interact with the server-side. To
          achieve this, I utilized React and React-Redux to build a single-page,
          responsive application.
        </p>
        <h5 className="py-4 text-center text-xl font-bold text-blue-800 dark:text-red-600">
          The Process
        </h5>
        <p>
          One of the primary objectives of this project was to implement the MVC
          architecture as a design pattern. React was an ideal choice due to its
          speed, ease of maintenance, and comprehensive documentation. To
          streamline the build process, I incorporated Parcel for bundling
          operations.
        </p>
        <br />
        <p>
          Once the foundation was set, I proceeded to create components for the
          different views. After learning about the power of React hooks, I
          efficiently managed the state of the application. Axios commands were
          employed to fetch data from the API, ensuring seamless integration.
        </p>
        <img src="/mymovcs7.png" alt="client side image" className="p-16" />
        <p>
          To enhance the overall styling and design, I utilized React Bootstrap,
          guaranteeing consistency across all pages. By implementing Redux, I
          effectively managed the state of the application. Rigorous testing was
          conducted to ensure responsiveness and compatibility across various
          devices.
        </p>
        <br />
        <p>
          For hosting the completed application, I selected Netlify as it
          offered reliability and was available free of charge. During the
          Process, I faced problems with deprecated software and some software
          that just didn`t work well. I had issues with Parcel on my Windows
          computer. After downloading it as admin, I was able to get it to work.
          I was able to fix problems by reading documentation, using stack
          overflow and other sites. If all else failed, CareerFoundry provided
          me with a mentor and a tutor that helped me further understand how to
          find a solution on my own.
        </p>

        <h5 className="pt-8 text-center text-xl font-bold text-blue-800 dark:text-red-600">
          The Purpose of the Views
        </h5>
        <img src="/mymovcs8.png" alt="client side image" className="p-16" />
        <p>
          The registration view facilitated the process for users to provide the
          necessary information required for registration. The login view
          required users to enter their username and password to gain access to
          the main view.
        </p>
        <img src="/mymovcs9.png" alt="client side image" className="p-16" />
        <p>
          The main view served as a gateway for users, offering a navigation bar
          that provided access to their profile, the main page, and an option to
          log out. It also displayed movie cards, each featuring an image,
          synopsis, and a button for more information leading to the movie view.
        </p>
        <img src="/mymovcs0.png" alt="client side image" className="p-16" />
        <p>
          The movie view showcased detailed information about a specific movie,
          including its image, title, short description, buttons to explore the
          director's information and genre details, and an option to add it to
          favorites.{' '}
        </p>
        <br />
        <p>
          In the navigation bar, clicking on the user's name directed them to
          the profile view. Here, users could update their information and view
          their favorite movies.
        </p>
        <br />
        <p>
          <h2 className="py-4 text-center text-3xl font-bold text-blue-800 dark:text-red-600">
            Retrospective
          </h2>
          My objective was to develop a web application from scratch, utilizing
          both server-side and client-side technologies. I found satisfaction in
          constructing the backend database, as I leaned how to use the
          intricacies of Node.js, Mongoose, Express, React, Redux, and various
          testing methodologies.
        </p>
        <br />
        <p>
          Through experimentation and exploration, I was able to understand how
          to develop using these technologies. However, this project did not
          come without its fair share of challenges. Balancing a physically
          demanding job with a lengthy commute while also prioritizing quality
          family time with my wife and two daughters presented significant
          hurdles. Overcoming these obstacles required strict time management,
          setting daily goals, and maintaining focus. Additionally, developing
          with deprecated software further tested my problem-solving abilities.
          Working with deprecated software made me think outside of the box to
          come up with solutions. Downloading some of the software as the
          administrator of my computer would sometimes help. When that didn`t
          work I would find other software to replicate what I needed.
        </p>
        <br />
        <p>
          Looking ahead, I am enthusiastic about continuing my learning journey
          with React. I firmly believe that the more we immerse ourselves in a
          technology, the more confident we become. Therefore, my future plans
          involve creating more React applications to deepen my expertise. I
          also aspire to explore different backend technologies, as this will
          provide valuable experience with diverse server-side tools and
          frameworks.
        </p>
        <br />
        <p>
          I take pride in the myMovie web page, considering it the most
          sophisticated application I have built during my time at
          CareerFoundry. I often showcase this project, highlighting the
          solutions I came up with for the challenges I encountered along the
          way. The experience has given me confidence in the technologies
          utilized throughout the development process, leaving me with a sense
          of accomplishment and a thirst for further growth.
        </p>
        <h4 className="py-4 text-center text-2xl font-bold text-blue-800 dark:text-red-600">
          Tools and Methodologies
        </h4>
        <ul className="text-center">
          <li>MongoDB</li>
          <li>Express</li>
          <li>React-Redux</li>
          <li>Node.js</li>
          <li>Postman</li>
          <li>Heroku</li>
          <li>React Bootstrap</li>
          <li>Axios</li>
        </ul>

        <h4 className="py-4 text-center text-2xl font-bold text-blue-800 dark:text-red-600">
          Credits
        </h4>
        <ul className="text-center">
          <li>Lead Developer: Joshua Endemann</li>
          <li>Tutor: Mathew Henderson</li>
          <li>Mentor: Trey Fletcher</li>
        </ul>
      </div>
    </div>
  );
}
