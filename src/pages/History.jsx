import alx from "../assets/alx.jpg";
import fablab from "../assets/fablab.jpg";
import klab from "../assets/klab.png";
import data from "../assets/data.png";
import cmu from "../assets/cmu.png";

function History() {
  return (
    <div className="bg-[#0a0b1e] py-16 text-white">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
          Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-6 animate-width-grow"></div>
        <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
          Reviewing my career history will give you insight into the roles I’ve
          excelled in. I’ve had the opportunity to work on some fantastic
          projects, each one contributing to my growth and expertise in the
          field.
        </p>
      </div>

      {/* Job Cards Section */}
      <div className="flex flex-col space-y-8 px-6 md:px-10 lg:px-16">
        {/* Job Card 1 */}
        <a
          href="https://www.alxafrica.com/rwanda/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <img src={alx} alt="ALX Logo" className="h-10 w-10 mr-3" />
              <h3 className="text-2xl font-bold text-white">ALX</h3>
              <span className="ml-2 text-gray-500 text-lg">🔗</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
  Backend Engineer - [Deco Center, KG 9 Ave, Kigali - Remote]
</h4>
<p className="text-gray-400 text-sm mb-4">June 2021 - July 2023</p>
<ul className="text-gray-400 text-lg list-disc pl-5 space-y-1 mb-4">
  <li>
    Designed, developed, and maintained server-side logic, APIs, and database architecture to support core business functions.
  </li>
  <li>
    Collaborated with front-end developers and stakeholders to integrate user-facing elements with server-side functionality.
  </li>
  <li>
    Ensured optimal performance, scalability, and security of backend systems, adhering to industry best practices.
  </li>
  <li>
    Wrote clean, modular, and well-documented code using languages such as Node.js, Python, or PHP (adapt based on actual tools used).
  </li>
  <li>
    Monitored, tested, and debugged backend systems to ensure high availability and reliability.
  </li>
  <li>
    Implemented RESTful APIs and integrated third-party services to enhance functionality.
  </li>
  <li>
    Conducted database design, optimization, and management using tools such as PostgreSQL, MySQL, or MongoDB.
  </li>
  <li>
    Developed automated tests and deployment pipelines to ensure continuous integration and delivery (CI/CD).
  </li>
  <li>
    Resolved technical issues, conducted root cause analysis, and implemented solutions to improve system performance.
  </li>
  <li>
    Stayed up-to-date with emerging backend technologies, tools, and frameworks to enhance development processes.
  </li>
</ul>

            
          </div>
        </a>
         {/* Job Card 1 */}
         <a
          href="https://www.africa.engineering.cmu.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <img src={cmu} alt="Cmu" className="h-10 w-10 mr-3" />
              <h3 className="text-2xl font-bold text-white">CMU-Africa bridge program</h3>
              <span className="ml-2 text-gray-500 text-lg">🔗</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
            Software Developer for IoT Solutions - [Kigali-Rwanda  Onsite]
            </h4>
            <p className="text-gray-400 text-sm mb-4">June 2021 - July 2023</p>
            <ul className="text-gray-400 text-lg list-disc pl-5 space-y-1 mb-4">
              <li>
              Academic Skills: Enhanced my critical thinking, problem-solving, and research capabilities.
              </li>
              <li>
              Designed and developed an IoT solution to monitor air quality in real-time.              </li>
              <li>
              Implemented sensors to capture air quality metrics and built a dashboard for live data visualization and analysis.              </li>
              <li>
              The project aimed at creating impactful, data-driven solutions for environmental sustainability.
              </li>
            </ul>
            
          </div>
        </a>

        {/* Job Card 2 */}
        <a
          href="https://klab.rw/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <img src={klab} alt="KLab Logo" className="h-10 w-10 mr-3" />
              <h3 className="text-2xl font-bold text-white">KLab</h3>
              <span className="ml-2 text-gray-500 text-lg">🔗</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
  Frontend Developer - [44 KG 548 St, Kigali - Remote/Onsite]
</h4>
<p className="text-gray-400 text-sm mb-4">May 2023 - Sept 2023</p>
<ul className="text-gray-400 text-lg list-disc pl-5 space-y-1 mb-4">
  <li>
    Designed and implemented visually appealing user interfaces using modern frameworks like React and Tailwind CSS to ensure seamless user experiences.
  </li>
  <li>
    Developed responsive web applications optimized for mobile, tablet, and desktop platforms, ensuring cross-platform compatibility.
  </li>
  <li>
    Collaborated closely with backend engineers to integrate APIs and deliver dynamic, data-driven web applications.
  </li>
  <li>
    Conducted usability testing and implemented feedback to enhance the overall user experience (UX).
  </li>
  <li>
    Optimized application performance by minimizing load times and ensuring efficient rendering techniques.
  </li>
  <li>
    Debugged and resolved front-end issues to maintain the functionality and reliability of the user interface.
  </li>
  <li>
    Utilized version control systems like Git to manage and collaborate on code repositories effectively.
  </li>
  <li>
    Stayed current with emerging front-end technologies and trends, implementing best practices in UI/UX design and development.
  </li>
  <li>
    Delivered pixel-perfect designs aligned with the business and client requirements.
  </li>
  <li>
    Ensured compliance with web standards, accessibility guidelines, and security best practices in front-end development.
  </li>
</ul>

           
          </div>
        </a>

        {/* Job Card 3 */}
        <a
          href="https://www.fablabs.io/labs/FabLabRwanda"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <img src={fablab} alt="FabLab Logo" className="h-10 w-10 mr-3" />
              <h3 className="text-2xl font-bold text-white">FabLab</h3>
              <span className="ml-2 text-gray-500 text-lg">🔗</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
  Embedded System Developer - [Kigali, Rwanda - Onsite]
</h4>
<p className="text-gray-400 text-sm mb-4">Feb 2024 - May 2024</p>
<ul className="text-gray-400 text-lg list-disc pl-5 space-y-1 mb-4">
  <li>
    Designed, developed, and deployed embedded systems tailored for specific hardware platforms, ensuring optimal performance and reliability.
  </li>
  <li>
    Integrated hardware components, including sensors and microcontrollers, with software systems to achieve seamless communication and functionality.
  </li>
  <li>
    Conducted testing and debugging of embedded firmware to identify and resolve hardware-software integration issues.
  </li>
  <li>
    Developed and optimized real-time applications for IoT devices, ensuring efficient processing and resource utilization.
  </li>
  <li>
    Collaborated with hardware engineers to design circuit layouts and schematics, ensuring compatibility with embedded software requirements.
  </li>
  <li>
    Implemented power management techniques to extend device battery life and enhance energy efficiency.
  </li>
  <li>
    Utilized tools like JTAG, oscilloscopes, and logic analyzers for hardware debugging and performance monitoring.
  </li>
  <li>
    Documented system architecture, firmware designs, and testing procedures to facilitate future development and maintenance.
  </li>
  <li>
    Stayed updated with advancements in embedded systems and IoT technologies to incorporate industry best practices into projects.
  </li>
  <li>
    Delivered robust and scalable solutions for real-time monitoring, including IoT-based air pollution monitoring systems.
  </li>
</ul>

          </div>
        </a>

        {/* Job Card 4 */}
        <a
          href="https://www.datasystems.rw/#/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <img
                src={data}
                alt="Data Systems Logo"
                className="h-10 w-10 mr-3"
              />
              <h3 className="text-2xl font-bold text-white">Data Systems</h3>
              <span className="ml-2 text-gray-500 text-lg">🔗</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
  Full Stack Developer - [Makuza Plaza, Kigali - Onsite]
</h4>
<p className="text-gray-400 text-sm mb-4">May 2024 - November 2024</p>
<ul className="text-gray-400 text-lg list-disc pl-5 space-y-1 mb-4">
  <li>
    Spearheaded the development of an e-commerce platform for GiraICT, enabling online marketing and trading of electronic devices such as smartphones, tablets, and accessories using Next.js and Node.js.
  </li>
  <li>
    Built and optimized scalable, secure server-side logic, including API integrations and database interactions, ensuring robust performance and seamless data flow.
  </li>
  <li>
    Designed responsive user interfaces with an emphasis on user experience (UX), implementing features like product browsing, search functionality, and secure payment integration.
  </li>
  <li>
    Developed a skills competition application for SWISS CONTACT, facilitating online submissions of TVET schools' projects for evaluation and selection, streamlining the organization's workflows.
  </li>
  <li>
    Collaborated with stakeholders to gather requirements, define project scope, and deliver tailored solutions that meet client needs and expectations.
  </li>
  <li>
    Implemented user authentication, authorization, and role-based access control to ensure data security and system integrity.
  </li>
  <li>
    Conducted end-to-end testing and debugging to ensure all features function seamlessly across multiple devices and platforms.
  </li>
  <li>
    Leveraged modern development practices, including CI/CD pipelines, to streamline deployment and maintain application reliability.
  </li>
  <li>
    Regularly maintained and updated codebases to improve performance, scalability, and adherence to industry standards.
  </li>
</ul>

            
          </div>
        </a>
      </div>
    </div>
  );
}

export default History;
