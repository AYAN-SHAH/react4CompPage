export default function IBFeatures() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      {/* Centered heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12 text-center">
        Everything An IB Needs,{" "}
        <span className="text-emerald-500">All In One Place</span>
      </h2>

      {/* Content container */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left side content */}
        <div className="w-full lg:w-1/2">
          <ul className="space-y-4 sm:space-y-5">
            {[
              "IBs can overview their leads lifecycle",
              "Trading Summary Charts will help them to deal better",
              "Manage and customize their referral links",
              "A report will display their commissions for each client",
              "Manage their Wallet & track their earning",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-gray-600 text-base sm:text-lg font-semibold">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="bg-gray-50 bg-opacity-50 rounded-lg p-4 aspect-square w-full max-w-md flex items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}
