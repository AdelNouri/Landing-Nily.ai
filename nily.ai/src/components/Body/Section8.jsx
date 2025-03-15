const Section8 = () => {
  return (
    <div className="relative flex items-center justify-center py-18 z-0">
      <div
        className="absolute inset-0"
        style={{
          background: "#053133",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)", 
          backgroundSize: "32px 32px", 
          width: "100%",
          height: "100%",
        }}
      />
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle, rgba(5, 49, 51,0.3) 20%, rgba(5, 49, 51,0.8) 60%, rgba(5, 49, 51,1) 68%)"
        }}
      />
      <div
        className="relative z-10" 
        style={{
          padding: "30px 0 50px 0", 
          borderRadius: "8px",
          width: "auto", 
          height: "auto", 
        }}
      >
        <div className="text-white font-bold text-4xl" style={{fontSize: '48px'}}>
          <p>Get Started with</p>
          <p>Nily AI Now!</p>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-4 h-10">
          <div className="mt-3 text-white font-bold bg-[#FC6423] py-3.5 w-35.5 rounded-full sm:mr-4.25 hover:scale-112 transition ease-out duration-300">
            <button>Get Started</button>
          </div>
          <div className="mt-3 bg-white font-bold flex justify-center items-center border-2 border-gray-100 text-gray-800 py-3 w-60 rounded-full hover:border-orange-500 hover:scale-112 transition ease-out duration-300">
            <svg
              className="h-5 w-5 mr-2 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
  );
};

export default Section8;
