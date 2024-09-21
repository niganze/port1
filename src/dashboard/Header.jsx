import React from 'react';
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-[#0a0b1e] text-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] rounded-full flex items-center justify-center">
            <span className="text-xl font-bold">AN</span>
          </div>
          <h1 className="text-xl font-bold">Niganze Dashboard</h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#1e1e2f] p-2 rounded-lg w-1/3">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-white w-full"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <button className="relative hover:text-[#5B4EFF] transition duration-300">
            <FaBell size={20} />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
          <button className="hover:text-[#5B4EFF] transition duration-300">
            <FaUserCircle size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
