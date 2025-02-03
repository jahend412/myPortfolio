import ProfilePic from '/profile-pic.png';

export default function Hero() {
  return (
    <div className="flex flex-col border-b-2 border-gray-800 bg-amber-50 dark:border-white dark:bg-gray-800 lg:flex-row lg:p-12 lg:px-64">
      <div>
        <h3 className="pt-8 text-left text-2xl font-bold text-red-600 lg:pt-20 lg:text-3xl">
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
  );
}
