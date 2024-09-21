import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaChartLine, FaEnvelope, FaBriefcase, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-[#0a0b1e] h-screen w-64 flex flex-col justify-between shadow-lg">
      {/* Navigation Links */}
      <nav className="px-6">
        <ul className="space-y-0">
          <li>
            <Link to="/" className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/pro" className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300">
              <FaClipboardList />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            < Link to ="/blogs" className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300">
              <FaClipboardList />
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link to="/messages" className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300">
              <FaEnvelope />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link to="/experience" className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300">
              <FaBriefcase />
              <span>Job Experience</span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300">
              <FaCog />
              <span>Services</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="px-6 py-6">
        <Link to="/logout" className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300">
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
