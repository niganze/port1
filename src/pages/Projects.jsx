import { FaReact, FaGithub, FaNodeJs } from "react-icons/fa"; 
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiTypescript, SiLaravel, SiMysql, SiLivewire, SiBootstrap  } from "react-icons/si"; 
import projectImg from "../assets/project.jpg";  
import giraImg from "../assets/gira.png";  
import bazaImg from "../assets/baza.png";  
import tostImg from "../assets/tost.png";  

function Project() {
  const projects = [
    {
      image: projectImg,
      title: "Musa Healthcare Platform",
      description:
        "An innovative platform connecting Rwandans with Muganga Musa, specializing in traditional medicine. Users can book appointments, access healthcare advice, and engage with knowledge-sharing content about Rwandan culture.",
      features: [
        "Traditional Medicine Booking",
        "Healthcare Advice",
        "Knowledge Sharing about Rwandan Culture",
      ],
      techStack: [
        { Icon: FaReact, name: "React.js", color: "#61DAFB" },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
        { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
        { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      ],
      previewLink: "https://musa-website.vercel.app/",
      githubLink: "https://github.com/niganze/healthcare",
    },
    {
      image: giraImg,
      title: "Ecommerce Web for GiralCT",
      description:
        "A comprehensive eCommerce platform for GiralCT, offering a wide range of electronics such as smartphones, tablets, and accessories. Built with Next.js and optimized for performance.",
        features: [
          "Browse Products",
          "Add Products to Cart",
          "Save Favorite Products",
          "Filter Products by Category",
          "View Store Products",
          "Search for Products and Stores",
          "User Authentication (Login and Sign Up)",
          "Payment Gateway Integration",
          "Track Order Status",
          "Responsive Design for All Devices",
          "Admin Panel for Product Management",
          "Secure Checkout Process",
          "Email Notifications for Orders",
        ],
              techStack: [
        { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
        { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      ],
      previewLink: "https://gira.vercel.app/",
      githubLink: "https://github.com/data-systems-ltd/giraict",
    },
    {
      image: bazaImg,
      title: "Bazafarm Smart Farming",
      description:
        "A solar-powered IoT device designed for smart farming. It monitors soil fertility, water levels, and temperature, helping farmers optimize crop yields.",
      features: [
        "Real-time Monitoring",
        "IoT Integration",
        "Renewable Energy Solutions",
      ],
      techStack: [
        { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
      ],
      previewLink: "http://172.104.56.161/",
      githubLink: "https://github.com/Baza-Farm/Bazafarm-frontend-v2.git",
    },
    {
      image: tostImg,
      title: "Tost Group Learning Platform",
      description:
        "A learning platform designed for Tost Group HQ to facilitate access to learning materials, lessons, certifications, and payment integration for users.",
      features: [
  "Course Management",
  "Certification Generation",
  "Payment Integration",
  "Certification Verification",
  "User Authentication",
  "Progress Tracking",
  "Interactive Quizzes and Assessments",
  "Mobile-Friendly Design",
],
      techStack: [
        { Icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
        { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
        { Icon: SiLivewire, name: "Livewire", color: "#4E56A6" },
        { Icon: FaReact, name: "React.js", color: "#61DAFB" },
        { Icon: FaGithub, name: "GitHub", color: "#181717" },
        { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      ],
      
      previewLink: "https://training.tost.rw/",
      githubLink: "https://github.com/niganze/Tost_Group",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white py-12 px-8 md:px-16">
      {/* Title Section */}
      <div className="text-center mb-16 mt-8">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4">
        Below are some of the projects I have worked on, showcasing my skills in web development, IoT, eLearning platforms, and eCommerce solutions using modern technologies. These projects highlight my ability to create innovative solutions for diverse industries, including healthcare, education, and retail
        </p>
      </div>

      {/* Projects Section */}
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-start mb-16 bg-[#1e1e2f] rounded-lg p-8 shadow-lg border border-solid border-[#5B4EFF]"
        >
          {/* Project Image */}
          <div className="lg:w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-6">{project.description}</p>

            {/* Features List */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2">Features:</h4>
              <ul className="list-disc pl-5 text-gray-400">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center mb-6 gap-4">
              {project.techStack.map(({ Icon, name, color }, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Icon className="text-3xl" style={{ color }} />
                  <span style={{ color }} className="text-lg font-medium">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#5B4EFF] text-white rounded-full hover:bg-[#32F6FF] transition duration-300"
              >
                Live Preview
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-[#5B4EFF] text-[#5B4EFF] rounded-full hover:bg-[#5B4EFF] hover:text-white transition duration-300 flex items-center"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
