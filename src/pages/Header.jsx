function Header() {
    return (
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center p-4 px-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="border-2 border-red-500 p-2">
              <span className="text-blue-500 text-lg font-extrabold">K</span>
            </div>
          </div>
  
          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6 font-semibold items-center">
              <li>
                <a href="#" className="text-red-500 font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-red-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-red-500">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-red-500">
                  Pages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-red-500">
                  Blog
                </a>
              </li>
              {/* Login Button */}
              <li>
                <button className="ml-4 px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  