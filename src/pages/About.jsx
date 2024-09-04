import BB from '../assets/about.jpeg';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center py-16 px-8 bg-[#0a0b1e] text-white">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={BB}
          alt="About Myself"
          className="rounded-lg shadow-xl w-full max-w-sm transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-4xl font-bold mb-4">About Myself</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mb-6"></div>
        <p className="text-gray-400 mb-8">
          Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards, especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed off as “boys will be boys,” women face higher. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 border border-[#5B4EFF] rounded-full text-[#5B4EFF] hover:bg-[#5B4EFF] hover:text-white transition-colors duration-300">
            More Info
          </button>
          <button className="px-6 py-2 bg-[#5B4EFF] text-white rounded-full hover:bg-[#32F6FF] transition-colors duration-300">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
