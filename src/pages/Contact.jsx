function Contact() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-6a9 9 0 0118 0v6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Binghamton, New York</h4>
                <p className="text-gray-600">4343 Hinkle Deegan Lake Road</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h1l1.152-.385a9.007 9.007 0 0117.696 0L21 10h1m-18 4h1v5m-4-5v5m20 0v-5h-1m4 5v-5h-1m-4 5v-5m-4 5v-5m-4 5v-5M3 10V4a9 9 0 0118 0v6M21 16V4a9 9 0 00-18 0v12m18-12V4a9 9 0 01-18 0v6" />
                </svg>
              </div>
              <div>
                <p className="text-gray-600"><span className="font-semibold">Phone:</span> 00 (958) 9865 562</p>
                <p className="text-gray-500">Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 6.728L3 20.508V16.18a8.18 8.18 0 018.18-8.18h4.328a2 2 0 011.212.444l3.992-1.728z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8.502V4.072a2 2 0 012-2h14a2 2 0 012 2v4.428" />
                </svg>
              </div>
              <div>
                <p className="text-gray-600"><span className="font-semibold">Email:</span> support@colorlib.com</p>
                <p className="text-gray-500">Send us your query anytime!</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {/* Input Fields */}
                <div className="flex-1 space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="Enter your subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Text Area */}
                <div className="flex-1">
                  <textarea
                    placeholder="Message"
                    className="w-full h-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows="7"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-orange-500 text-white py-3 px-8 rounded-md hover:bg-orange-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
