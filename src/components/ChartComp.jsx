export default function ChartComp() {
  return (
    <div className="w-full min-h-[300px] mx-auto p-6 sm:p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
            <span className="text-gray-800">Support Your IBs, </span>
            <span className="text-emerald-500">Boost Your Clientele</span>
          </h1>
          <p className="text-gray-500 mt-2 font-medium sm:font-semibold">
            Imagine your clientele growing exponentially as you empower your
            IBs.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-12">
          {/* Stats and Progress Bar (to be implemented) */}
        </div>
      </div>
    </div>
  );
}
