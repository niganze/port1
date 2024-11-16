import { FaReact, FaGithub, FaNodeJs } from "react-icons/fa"; 
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si"; 
import projectImg from "../assets/project.jpg";  
import giraImg from "../assets/gira.png";  // Importing another image
import bazaImg from "../assets/baza.png";  // Importing the third image

function Project() {
  const projects = [
    {
      image: projectImg,  // Use imported image
      title: "Musa Healthcare Platform",
      description:
        "An innovative platform connecting Rwandans with Muganga Musa, specializing in traditional medicine. Users can book appointments, access healthcare advice, and engage with knowledge-sharing content about Rwandan culture. It serves as a bridge between patients and healthcare practitioners, facilitating a deeper understanding of traditional healing practices.",
      techStack: [
        { Icon: FaReact, color: "#61DAFB" }, 
        { Icon: SiTailwindcss, color: "#38B2AC" }, 
        { Icon: FaNodeJs, color: "#339933" }, 
        { Icon: SiMongodb, color: "#47A248" },
      ],
      previewLink: "https://musa-website.vercel.app/",
      githubLink: "https://github.com/niganze/healthcare",
    },
    {
      image: giraImg,  // Use imported image
      title: "Ecommerce Web for GiralCT",
      description:
        "A comprehensive eCommerce platform for GiralCT, offering a wide range of electronics such as smartphones, tablets, and accessories. The platform is built with Next.js and optimized for performance, ensuring a smooth online shopping experience for users.",
      techStack: [
        { Icon: SiNextdotjs, color: "#000000" }, 
        { Icon: SiTailwindcss, color: "#38B2AC" }, 
        { Icon: SiMongodb, color: "#47A248" },
      ],
      previewLink: "https://gira.vercel.app/",
      githubLink: "https://github.com/data-systems-ltd/giraict",
    },
    {
      image: bazaImg,  // Use imported image
      title: "Bazafarm Smart Farming",
      description:
        "Bazafarm is a solar-powered IoT device designed for smart farming. It monitors soil fertility, water levels, and temperature, helping farmers optimize crop yields. The device sends real-time data to the farmer's mobile device, enabling better decision-making and higher crop productivity. This project showcases the integration of IoT and renewable energy solutions.",
      techStack: [
        { Icon: SiTypescript, color: "#3178C6" }, 
        { Icon: SiNextdotjs, color: "#000000" }, 
        { Icon: SiMongodb, color: "#47A248" }, 
        { Icon: SiTailwindcss, color: "#38B2AC" },
      ],
      previewLink: "http://172.104.56.161/",
      githubLink: "https://github.com/Baza-Farm/Bazafarm-frontend-v2.git",
    },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-12 mt-8 bg-[#0a0b1e] text-white min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fade-in mt-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-6 animate-width-grow"></div>
        <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
          Below are some of the projects I have worked on, showcasing my skills in web development, IoT, and eCommerce solutions using modern technologies like React, Next.js, and Tailwind CSS.
        </p>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e1e2f] p-6 md:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up delay-4"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="rounded-lg shadow-md mb-6 w-full h-40 sm:h-48 object-cover"
            />
            {/* Project Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
            {/* Project Description */}
            <p className="text-gray-400 mb-4">{project.description}</p>
            {/* Tech Stack */}
            <div className="flex space-x-4 mb-4">
              {project.techStack.map(({ Icon, color }, i) => (
                <Icon key={i} className="text-3xl md:text-4xl" style={{ color }} />
              ))}
            </div>
            {/* Buttons */}
            <div className="flex space-x-4">
              {/* Preview Button */}
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-6 py-2 bg-[#5B4EFF] text-white rounded-full hover:bg-[#32F6FF] transition-colors duration-300"
              >
                Preview
              </a>

              {/* GitHub Button */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-6 py-2 border border-[#5B4EFF] rounded-full text-[#5B4EFF] hover:bg-[#5B4EFF] hover:text-white transition-colors duration-300 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
