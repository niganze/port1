
import ProfileImage from '../assets/home.png';

function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-900 to-black min-h-screen flex items-center mt-5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-teal-300">
            Hello, I'm Alain Niganze,
          </h1>
          <h2 className="text-3xl md:text-3xl lg:text-6xl font-bold text-white mt-4">
            Software Engineer
          </h2>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-lg">
            Frontend engineer using HTML, CSS, JavaScript, TypeScript, React, and Next.js.
            Backend using Node.js, .NET Core, Express, SQL, Postgres, and Prisma.
            Can assist in building robust web, mobile, and desktop applications.
            Additionally, I can handle deployment tasks.
          </p>
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-400 to-teal-300 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition duration-300">
            Hire me
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative z-10">
            <img src={ProfileImage} alt="Armel Munyaneza" className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl" />
          </div>
          <div className="absolute -z-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-full filter blur-3xl opacity-30 top-10 md:top-12 lg:top-16 right-0 md:right-16 lg:right-24" />
        </div>
      </div>
    </main>
  );
}

export default Home;
