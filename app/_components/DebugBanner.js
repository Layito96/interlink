const DebugBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-orange-400 text-white py-2 px-4 flex items-center justify-between z-50 shadow-lg">
      <div className="flex items-center space-x-3">
        {/* Warning Icon */}
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M4.22 4.22a16.07 16.07 0 0115.56 0 16.07 16.07 0 010 15.56 16.07 16.07 0 01-15.56 0 16.07 16.07 0 010-15.56z"
          />
        </svg>
        <span className="font-bold">
          Le site est actuellement en développement.
        </span>
      </div>

      <div className="flex items-center space-x-4">
        {/* <span className="text-sm opacity-90">
          This is a debug banner. Check logs for more info.
        </span> */}
        <button className="text-white bg-transparent border-2 border-white rounded-full p-2 hover:bg-white hover:text-red-500 transition">
          {/* <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg> */}
        </button>
      </div>
    </div>
  );
};

export default DebugBanner;
