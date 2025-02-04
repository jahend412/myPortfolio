import dinSite from '/din-site.png';

export default function Projects() {
  return (
    <div className="flex flex-col bg-amber-50 px-64 dark:bg-gray-800">
      <h1 className="p-4 text-center font-serif text-4xl font-bold text-gray-800 dark:text-white">
        Projects
      </h1>
      <p className="p-4 text-center text-xl text-gray-800 dark:text-white">
        Here you will find some of the projects I have built on my own and at
        Career Foundry containing their own case studies
      </p>
      <div className="flex pr-4 pt-12">
        <img
          src={dinSite}
          alt="Image of Din Ballyhoo Site"
          className="h-64 w-64 rounded border-4 border-gray-800 object-cover dark:border-white lg:h-96 lg:w-80"
        />

        <div className="px-8">
          <h1 className="pb-8 text-center font-serif text-3xl font-bold">
            Din Ballyhoo's Website
          </h1>
          <p className="text-2xl">
            My band's website is a full-stack web application built with the
            MERN stack and Next.js. It offers fans access to albums, live shows,
            and webcasts, with secure user authentication and streaming
            capabilities. This project connected fans to our music while
            strengthening my skills as a developer.
          </p>
          <button className="rounded bg-gray-800 p-3 font-semibold text-white">
            Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
