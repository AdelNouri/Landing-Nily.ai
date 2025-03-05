const Body = () => {
  return (
    <div className="bg-[#eef2ff] w-full">
      <div className="relative h-screen w-full flex items-center mt-17 justify-center">
        <div className="absolute bg-opacity-100 inset-0 w-full h-full bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:33px_33px] opacity-50" />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle, rgba(238, 242, 255,0.2) 20%, rgba(238, 242, 255,0.7) 50%, rgba(238, 242, 255,1) 30%)"
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

          <div className="text-gray-900 flex justify-center items-center w-54 cursor-pointer bg-white rounded-full shadow-md h-10 mt-17 hover:shadow-lg transition duration-200">
            <svg
              className="h-4 w-4 text-gray-900 mr-1.5"
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
          <div className="text-6xl font-bold text-gray-800 block mt-16"> 
          <p >One AI Assistant to Rule Them All!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
