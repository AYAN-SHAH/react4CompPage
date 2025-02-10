const MutualGrowth = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12 text-center">
        Mutual Growth Through{" "}
        <span className="text-emerald-500">IB Partnerships</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 mb-12 md:mb-16 justify-center items-center">
        {/* Left Section - Image Placeholder */}
        <div className="w-full md:w-2/5 aspect-video md:aspect-square">
          <div className="bg-gray-50 bg-opacity-50 rounded-lg w-full h-full flex items-center justify-center overflow-hidden">
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
              />
            </svg>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-2/4 space-y-4 sm:space-y-6 md:space-y-7 px-0 sm:px-4 md:px-8">
          <p className="text-base sm:text-lg text-gray-700 font-semibold">
            IB partnerships operate on a give-and-take model—IBs promote your
            business by bringing in more clients for trading, and in return, you
            reward them with commissions.
          </p>

          <p className="text-base sm:text-lg text-gray-700 font-semibold">
            We provide an easy solution for your IBs as they can freely manage
            their clients & dealings, manage their referral links, can see &
            report on trading insights of clients & the list goes on.
          </p>

          <p className="text-base sm:text-lg text-gray-700 font-semibold">
            The innovation doesn't stop here – we continuously add features to
            make our product more scalable and valuable.
          </p>
        </div>
      </div>

      {/* Bottom Green Paragraph - Centered and Full Width */}
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-emerald-500 text-base sm:text-lg font-medium px-4">
          Not only this, but we also offer a unified portal where IBs can be
          both your clients and partners, giving them everything they need under
          one roof!
        </p>
      </div>
    </div>
  );
};

export default MutualGrowth;
