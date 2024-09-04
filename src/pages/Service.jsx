function Service() {
  return (
    <div className="p-12 bg-[#0a0b1e] text-white">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
          Service Offers
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-6 animate-width-grow"></div>
        <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
          If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.
        </p>
      </div>

      {/* Service Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service Card 1 */}
        <div className="bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up delay-4">
          <div className="mb-6 text-center">
            <i className="fas fa-laptop-code text-5xl text-white animate-pulse"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">Web Design</h3>
          <p className="text-gray-200 text-center">
            If you’re looking at blank cassettes on the web, you may confuse.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up delay-6">
          <div className="mb-6 text-center">
            <i className="fas fa-mobile-alt text-5xl text-[#5B4EFF] animate-bounce"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">Application Development</h3>
          <p className="text-gray-300 text-center">
            If you’re looking at blank cassettes on the web, you may confuse.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-[#4a4a6a] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up delay-8">
          <div className="mb-6 text-center">
            <i className="fas fa-database text-5xl text-[#32F6FF] animate-spin-slow"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">Web Development</h3>
          <p className="text-gray-300 text-center">
            If you’re looking at blank cassettes on the web, you may confuse.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-[#1c1c2d] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up delay-10">
          <div className="mb-6 text-center">
            <i className="fas fa-chart-line text-5xl text-[#ff4a4a] animate-bounce"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">SEO & Marketing</h3>
          <p className="text-gray-300 text-center">
            If you’re looking at blank cassettes on the web, you may confuse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
