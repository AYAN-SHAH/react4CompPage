export default function IbPath() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center">
        {/* Left side image */}
        <div className="w-full lg:w-1/2 aspect-square flex justify-center items-center">
          <svg
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 text-gray-400"
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

        {/* Right side content */}
        <div className="w-full lg:w-1/2 font-semibold">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font- mb-2">
            Ready, Set & <span className="text-emerald-500">Go IBs!</span>
          </h2>
          <p className="text-gray-600 mb-8 font-semibold w-full sm:w-4/5">
            Configure your IBs in 3 simple steps and rapidly grow your client
            base
          </p>

          <div className="space-y-12 sm:space-y-16">
            {[
              "Create a community of your partners through our special marketing tools",
              "Set multiple commissions profiles for IBs to gain from Commissions & Rebates",
              "An automatic monthly report will show the commission earned by each IB",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4 relative">
                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 z-10 relative flex items-center justify-center text-white text-sm">
                    {index + 1}
                  </div>
                  {index < 2 && (
                    <div className="absolute top-6 bottom-0 left-3 w-[0.1px] h-24 sm:h-28 bg-gray-300 -translate-x-1/2" />
                  )}
                </div>
                <p className="text-gray-600 w-full sm:w-2/3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
