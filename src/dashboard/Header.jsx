import React from 'react';
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-[#0a0b1e] text-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        

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
          <button className="relative hover:text-[#5B4EFF] transition duration-300 ease-in-out">
            <FaBell size={20} />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
          <button className="hover:text-[#5B4EFF] transition duration-300 ease-in-out">
            <FaUserCircle size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
