function Service() {
  return (
    <div className="p-12 bg-[#0a0b1e] text-white">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Service Offers</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.
        </p>
      </div>

      {/* Service Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service Card 1 */}
        <div className="bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <div className="mb-6">
            <i className="fas fa-laptop-code text-4xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3">Web Design</h3>
          <p className="text-gray-300">
            If you’re looking at blank cassettes on the web, you may confuse.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <div className="mb-6">
            <i className="fas fa-mobile-alt text-4xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3">Application Development</h3>
          <p className="text-gray-300">
            If you’re looking at blank cassettes on the web, you may confuse.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-[#4a4a6a] p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <div className="mb-6">
            <i className="fas fa-database text-4xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3">Web Development</h3>
          <p className="text-gray-300">
            If you’re looking at blank cassettes on the web, you may confuse.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-[#1c1c2d] p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <div className="mb-6">
            <i className="fas fa-chart-line text-4xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3">SEO & Marketing</h3>
          <p className="text-gray-300">
            If you’re looking at blank cassettes on the web, you may confuse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
