function Header() {
  return (
    <header className="bg-[#0a0b1e] fixed top-0 left-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center ">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] rounded-full animate-spin">
            <span className="text-white text-lg font-extrabold ">AN</span>
          </div>
          <span className="ml-2 text-xl text-white font-semibold">NIGANZE</span>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 font-semibold items-center">
            <li>
              <a href="#" className="text-white hover:text-[#32F6FF] transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#32F6FF] transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#32F6FF] transition duration-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#32F6FF] transition duration-300">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#32F6FF] transition duration-300">
                Blog
              </a>
            </li>
            {/* Login Button */}
            <li>
              <button className="ml-4 px-5 py-2 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] text-white rounded-full hover:opacity-90 transition-opacity duration-300">
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
