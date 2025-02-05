import Header from '../Header';

export default function myMovieCaseStudy() {
  return (
    <div>
      <Header />
      <div>
        <h1>myMovie</h1>
        <p>Case Study</p>
        <img src="" alt="" />
        <h3>Josh Endemann</h3>
        <h4>Project from CareerFoundry</h4>
      </div>
      <div>
        <h2>Overview</h2>
        <p>
          myMovie is a feature-rich movie web application developed using the
          MERN stack (MongoDB, Express, React, and Node). It offers users an
          extensive collection of movies with detailed information about
          directors and genres. Additionally, users can create accounts, log in,
          update their profiles, and curate a personalized list of favorite
          movies.
        </p>
        <h4>Purpose</h4>
        <p>
          The primary purpose of this project was to gain a comprehensive
          understanding of both backend and frontend technologies and their
          seamless integration. Developed as part of a full stack immersion
          course at CareerFoundry, myMovie served as a practical learning
          experience, enabling the exploration of API development with MongoDB
          and the implementation of a React app with Redux for efficient data
          retrieval.
        </p>
        <img src="" alt="" />
        <h4>Goal</h4>
        <p>
          The goal of myMovie was to create a fully functional, end-to-end
          application that provides users with an immersive movie browsing
          experience. The key objective of the project were as follows:
        </p>
        <ol>
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
        <h4>Duration</h4>
        <p>
          The development process for myMovie was divided into two main phases:
          server- side and client-side.
        </p>
        <h5>Server-side:</h5>
        <p>
          The server-side development, including creating the API with MongoDB
          integration, was completed relatively quickly. Although data research
          and addition to the MongoDB database required significant time
          investment, it was essential to ensure the availability of accurate
          and comprehensive movie information.
        </p>
        <h5>Client-side:</h5>
        <p>
          The client-side development, which involved understanding and
          problem-solving with React and Redux proved to be more time-consuming.
          Thorough research, implementation, and refinement were necessary to
          ensure a smooth user interface and user experience.
        </p>
        <img src="" alt="" />
        <p>
          Overall, myMovie represents a comprehensive movie website that
          showcases the successful integration of backend and frontend
          technologies. The project served as a valuable learning experience,
          enabling the acquisition of practical skills in developing a dynamic
          web application while providing users with a feature-rich platform for
          movie exploration and personalization. The project was completed in
          approximately 2 months.
        </p>
        <h4>Tools and Methodologies</h4>
        <ul>
          <li>MongoDB</li>
          <li>Express</li>
          <li>React-Redux</li>
          <li>Node.js</li>
          <li>Postman</li>
          <li>Heroku</li>
          <li>React Bootstrap</li>
          <li>Axios</li>
        </ul>

        <h4>Credits</h4>
        <ul>
          <li>Lead Developer: Joshua Endemann</li>
          <li>Tutor: Mathew Henderson</li>
          <li>Mentor: Trey Fletcher</li>
        </ul>
      </div>
    </div>
  );
}
