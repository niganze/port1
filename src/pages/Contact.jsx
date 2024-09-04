function Contact() {
  return (
    <div className="bg-[#0a0b1e] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5B4EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-6a9 9 0 0118 0v6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Kigali, Rwanda</h4>
                <p className="text-gray-400">KN 7 Ave, Kigali</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5B4EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h1l1.152-.385a9.007 9.007 0 0117.696 0L21 10h1m-18 4h1v5m-4-5v5m20 0v-5h-1m4 5v-5h-1m-4 5v-5m-4 5v-5m-4 5v-5M3 10V4a9 9 0 0118 0v6M21 16V4a9 9 0 00-18 0v12m18-12V4a9 9 0 01-18 0v6" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400"><span className="font-semibold">Phone:</span> +250783943932</p>
                <p className="text-gray-500">Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5B4EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 6.728L3 20.508V16.18a8.18 8.18 0 018.18-8.18h4.328a2 2 0 011.212.444l3.992-1.728z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8.502V4.072a2 2 0 012-2h14a2 2 0 012 2v4.428" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400"><span className="font-semibold">Email:</span> niganzealain@gmail.com</p>
                <p className="text-gray-500">Send us your query anytime!</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Input Fields */}
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 bg-[#1e1e2f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]"
                />
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full p-4 bg-[#1e1e2f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]"
                />
              </div>
              <input
                type="text"
                placeholder="Enter your subject"
                className="w-full p-4 bg-[#1e1e2f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]"
              />
              <textarea
                placeholder="Message"
                className="w-full p-4 bg-[#1e1e2f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]"
                rows="6"
              ></textarea>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] text-white py-3 px-8 rounded-md hover:bg-gradient-to-r hover:from-[#4a3dd1] hover:to-[#27c8db] transition duration-300 animate-bounce"
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
