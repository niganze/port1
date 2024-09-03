

import BB from '../assets/about.jpeg'
function About() {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 bg-white">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={BB}
          alt="About Myself"
          className="rounded-lg shadow-lg w-full max-w-sm"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">About Myself</h2>
        <div className="w-12 h-1 bg-red-500 mb-4"></div>
        <p className="text-gray-600 mb-6">
          Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed. Inappropriate behavior is often laughed off as “boys will be boys,” women face higher.
          That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed.
        </p>
        <div className="flex space-x-4 mt-6">
          <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100">
            More Info
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
