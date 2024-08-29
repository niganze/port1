
import HH from '../assets/home.png';
// import LL from '../assets/home.png'
function Home() {
  return (
    <main className="pt-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24">

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left relative mb-8 md:mb-0">
          {/* "It's me" Badge */}
          <div className="absolute -top-6 md:-top-12 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-blue-500 text-white rounded-xl px-6 py-2 text-sm shadow-lg">
            Its me
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-16 md:mt-20">
            Alain Niganze

          </h1>
          <p className="mt-6 text-lg lg:text-xl text-gray-600">
            Senior Creative <span className="text-red-500">Designer</span> and Content <span className="text-blue-500">Developer</span>
          </p>
          <button className="mt-8 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
            Hire Me
          </button>
        </div>
        
        {/* Image Section */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center">
          <div className="relative max-w-xs md:max-w-md lg:max-w-lg">
            <img src={HH} alt="Kenedy Jackson" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>

      {/* Logos Section */}
      {/* <div className="mt-16 py-10 bg-white rounded-full">
        <div className="container mx-auto flex justify-around items-center space-x-4">
          <img src={LL} alt="99designs" className="h-12 w-auto" />
          <img src={LL} alt="colorlib" className="h-12 w-auto" />
          <img src={LL} alt="AWWWARDS" className="h-12 w-auto" />
          <img src={LL} alt="Forbes" className="h-12 w-auto" />
          <img src={LL} alt="dribbble" className="h-12 w-auto" />
        </div>
      </div> */}
    </main>
  );
}

export default Home;
