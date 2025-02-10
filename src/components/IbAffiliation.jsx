const IBAffilations = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-4 lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-emerald-500">
            IB Affiliations
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed w-full lg:w-11/12 font-semibold">
            Growing your business with IB partnerships is a winning strategy.
            This IB Portal empowers you to efficiently manage client
            interactions and more!
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl text-base transition duration-300 ease-in-out cursor-pointer">
            Book Demo
          </button>
        </div>

        {/* Right Section - Placeholder Image */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <div className="bg-gray-50 bg-opacity-50 rounded-lg p-4 aspect-video flex items-center justify-center">
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IBAffilations;
