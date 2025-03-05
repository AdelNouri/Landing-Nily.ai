const Body = () => {
  return (
    <div className="bg-[#EDF1FB] w-full">
      <div className="relative h-screen w-full flex items-center mt-17 justify-center">
        <div className="absolute bg-opacity-100 inset-0 w-full h-full bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:33px_33px] opacity-50" />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle, rgba(237, 241, 251,0.2) 20%, rgba(237, 241, 251,0.7) 50%, rgba(237, 241, 251,1) 30%)"
          }}
        >
          {/* <div className="relative text-center max-w-2xl p-8 bg-white bg-opacity-70 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900">
            One AI Assistant to Rule Them All!
          </h1>
          <p className="text-2xl text-orange-500 font-semibold">
            Your All-in-one AI Assistant
          </p>
          <p className="mt-2 text-gray-600">Anytime, Anywhere!</p>
          <div className="mt-4 space-x-4">
            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600">
              Get Started
            </button>
            <button className="px-6 py-2 bg-white border border-gray-300 text-gray-900 rounded-lg shadow-md hover:bg-gray-100">
              Download Extension
            </button>
          </div>
        </div> */}
          <div className="flex justify-center">
            <div className="text-gray-900 flex justify-center items-center w-54 cursor-pointer bg-white rounded-full shadow-md h-10 mt-19 hover:shadow-lg transition duration-200">
              <svg
                className="h-4 w-4 text-gray-900 mr-1.75"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}<polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <p className="text-md">View Instruction Video</p>
            </div>
          </div>
          <div className="text-6xl text-gray-800 block mt-13.5">
            <p className="font-bold">One AI Assistant to Rule Them All!</p>
            <p className="text-orange-500 mt-5 font-bold">
              Your All-in-one AI Assistant
            </p>
            <p className="text-xl mt-7.5">Anytime, Anywhere!</p>
          </div>
          <div className="flex justify-center items-center mt-9.5 h-10">
            <div className="text-white bg-orange-500 py-3.5 w-35.5 rounded-full mr-4.25 hover:bg-slate-800 transition ease-out duration-400">
              <button>Get Started</button>
            </div>
            <div className="bg-white flex justify-center items-center border-2 border-gray-200 text-gray-800 py-3 w-60 rounded-full hover:border-orange-500 hover:border-2 transition-colors duration-400">
              <svg
                className="h-5 w-5 mr-2 text-gray-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}<circle cx="12" cy="12" r="10" />{" "}
                <circle cx="12" cy="12" r="4" />{" "}
                <line x1="21.17" y1="8" x2="12" y2="8" />{" "}
                <line x1="3.95" y1="6.06" x2="8.54" y2="14" />{" "}
                <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
              </svg>
              <button>Download Extension</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
