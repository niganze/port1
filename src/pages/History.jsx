function History() {
  return (
    <div className="bg-[#0a0b1e] py-16 text-white">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
          Job History
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-6 animate-width-grow"></div>
        <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
          Reviewing my career history will give you insight into the roles I’ve excelled in. I’ve had the opportunity to work on some fantastic projects, each one contributing to my growth and expertise in the field.
        </p>
      </div>

      {/* Job Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 lg:px-16">
        {/* Job Card 1 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-4">
          <h3 className="text-2xl font-bold mb-2">
            Senior Creative Design
          </h3>
          <p className="text-gray-400 mb-4">
            Old Bird IT, New York
          </p>
          <p className="text-gray-400 mb-6">
            At Old Bird IT, I spearheaded numerous creative projects that redefined the visual branding of our clients. My role involved managing design teams and ensuring the delivery of high-quality outputs that surpassed client expectations.
          </p>
          <div className="flex items-center">
            <span className="px-4 py-2 bg-[#292b45] text-gray-400 rounded-full">
              Jul '15 to Present
            </span>
          </div>
        </div>

        {/* Job Card 2 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-6">
          <h3 className="text-2xl font-bold mb-2">
            Senior Visualiser
          </h3>
          <p className="text-gray-400 mb-4">
            Old Bird IT, New York
          </p>
          <p className="text-gray-400 mb-6">
            As a Senior Visualiser, I was responsible for transforming complex data and ideas into visually appealing graphics that were both functional and aesthetically pleasing. My contributions significantly enhanced the user experience across various platforms.
          </p>
          <div className="flex items-center">
            <span className="px-4 py-2 bg-[#292b45] text-gray-400 rounded-full">
              Jul '15 to Present
            </span>
          </div>
        </div>

        {/* Job Card 3 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-8">
          <h3 className="text-2xl font-bold mb-2">
            Senior Visualiser
          </h3>
          <p className="text-gray-400 mb-4">
            Old Bird IT, New York
          </p>
          <p className="text-gray-400 mb-6">
            In this role, I was deeply involved in creating visual concepts that aligned with our client's brand identities. My work helped to shape the public perception of our clients, contributing to their overall success.
          </p>
          <div className="flex items-center">
            <span className="px-4 py-2 bg-[#292b45] text-gray-400 rounded-full">
              Jul '15 to Present
            </span>
          </div>
        </div>

        {/* Job Card 4 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-10">
          <h3 className="text-2xl font-bold mb-2">
            Senior Visualiser
          </h3>
          <p className="text-gray-400 mb-4">
            Old Bird IT, New York
          </p>
          <p className="text-gray-400 mb-6">
            My tenure as a Senior Visualiser was marked by numerous successes in creating compelling visual narratives that resonated with target audiences. I consistently delivered top-tier visual content that met the strategic goals of our clients.
          </p>
          <div className="flex items-center">
            <span className="px-4 py-2 bg-[#292b45] text-gray-400 rounded-full">
              Jul '15 to Present
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
