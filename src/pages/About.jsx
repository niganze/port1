import { FaReact, FaAws } from 'react-icons/fa'; 
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiLaravel } from 'react-icons/si'; 
import BB from "../assets/about.jpeg";
import Resume from "../assets/resume.pdf";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center py-24 px-8 bg-[#0a0b1e] text-white ">
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
        <p className="text-gray-400 mb-8 leading-relaxed">
          As a dedicated software engineer, I bring a strong problem-solving
          mindset and technical proficiency to every project. With hands-on
          experience in Full-stack Engineering, I excel in collaborative
          environments. With a passion for frontend development, I ve dedicated
          my efforts to crafting seamless and visually stunning user interfaces.
          <br />
          <br />
          <span className="text-white font-semibold">
            Let us connect and discuss how my skills can contribute to the
            success of your projects. I build awesome products using:
          </span>
          <br />
          <br />
          <div className="flex flex-wrap gap-4">
            {/* Icons and Tech Names */}
            <div className="flex items-center space-x-2">
              <SiNextdotjs className="text-[#5B4EFF]" size={24} />
              <span>Next.js</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaReact className="text-[#5B4EFF]" size={24} />
              <span>React</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiTypescript className="text-[#5B4EFF]" size={24} />
              <span>TypeScript</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiTailwindcss className="text-[#5B4EFF]" size={24} />
              <span>Tailwind CSS</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaAws className="text-[#5B4EFF]" size={24} />
              <span>AWS</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiGraphql className="text-[#5B4EFF]" size={24} />
              <span>GraphQL</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiLaravel className="text-[#5B4EFF]" size={24} />
              <span>Laravel</span>
            </div>
          </div>
          <br />
          <br />
          <span className="text-[#32F6FF] font-semibold">
            Others: Git • Redux Toolkit • Java • Python • Jest • NodeJS • NestJS
            • OpenCV • SEO
          </span>
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 border border-[#5B4EFF] rounded-full text-[#5B4EFF] hover:bg-[#5B4EFF] hover:text-white transition-colors duration-300">
            More Info
          </button>
          <a href={Resume} download="Resume.pdf">
            <button className="relative px-6 py-2 bg-[#5B4EFF] text-white rounded-full hover:bg-[#32F6FF] transition-colors duration-300 animate-pulse">
              <span className="inline-block overflow-hidden whitespace-nowrap  pr-2 animate-typing">
                Download cv
              </span>
            </button>
          </a>
          {/* border-r-2 border-white */}
        </div>
      </div>
    </div>
  );
}

export default About;
