function Service() {
    return (
      <div className="p-8 bg-white">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Service Offers</h2>
          <div className="w-12 h-1 bg-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600">
            If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.
          </p>
        </div>
  
        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Card 1 */}
          <div className="bg-red-200 p-6 rounded-lg shadow-lg">
            <div className="text-white mb-4">
              <i className="fas fa-laptop-code text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Web Design</h3>
            <p className="text-white">
              If you’re looking at blank cassettes on the web, you may confuse.
            </p>
          </div>
  
          {/* Service Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-white mb-4">
              <i className="fas fa-mobile-alt text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Application Development</h3>
            <p className="text-white">
              If you’re looking at blank cassettes on the web, you may confuse.
            </p>
          </div>
  
          {/* Service Card 3 */}
          <div className="bg-red-500 p-6 rounded-lg shadow-lg">
            <div className="text-white mb-4">
              <i className="fas fa-database text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
            <p className="text-white">
              If you’re looking at blank cassettes on the web, you may confuse.
            </p>
          </div>
  
          {/* Service Card 4 */}
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg">
            <div className="text-white mb-4">
              <i className="fas fa-chart-line text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
            <p className="text-white">
              If you’re looking at blank cassettes on the web, you may confuse.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Service;
  