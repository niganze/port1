import React from 'react';
import { FaHome, FaClipboardList, FaEnvelope, FaBriefcase, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-[#0a0b1e] h-screen w-64 flex flex-col justify-between shadow-lg">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center p-6">
        <div className="w-12 h-12 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-white">AN</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-6">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300 ease-in-out">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300 ease-in-out">
              <FaClipboardList />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300 ease-in-out">
              <FaClipboardList />
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300 ease-in-out">
              <FaEnvelope />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300 ease-in-out">
              <FaBriefcase />
              <span>Job Experience</span>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300 ease-in-out">
              <FaCog />
              <span>Services</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="px-6 py-6">
        <Link
          to="/logout"
          className="flex items-center text-white space-x-4 hover:bg-[#1e1e2f] p-3 rounded-lg transition duration-300 ease-in-out">
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
