import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="bg-[#F4F1ED] flex justify-center w-full">
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className=""
        >
          <p className="font-semibold text-[#FC6423]">OUR FEATURES</p>
          <div className="font-bold text-4xl lg:text-5xl text-slate-900 mt-4">
            <p>Boost your productivity with</p>
            <p> AI-powered assistance</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className=""
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20 w-full px-3 sm:w-[608px] md:w-[736px] lg:w-[992px] xl:w-320">
            <div className="bg-white px-8 py-8 rounded-2xl cursor-pointer hover:[box-shadow:0px_10px_12px_rgba(0,0,0,0.1)] transition duration-300">
              <div className="flex justify-start items-center">
                <div className="bg-[#F4F1ED] rounded-xl p-1.5 text-[#FC6423]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-panel-right-dashed w-5 h-5"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M15 14v1" />
                    <path d="M15 19v2" />
                    <path d="M15 3v2" />
                    <path d="M15 9v1" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg font-semibold ml-2">
                  AI Sidebar
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[#6C6C6C] text-left">
                  Access the best chrome AI sidebar on any web page!
                </p>
              </div>
            </div>
            <div className="bg-white px-8 py-8 rounded-2xl cursor-pointer hover:[box-shadow:0px_10px_12px_rgba(0,0,0,0.1)] transition duration-300">
              <div className="flex justify-start items-center">
                <div className="bg-[#F4F1ED] rounded-xl p-1.5 text-[#FC6423]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail w-5 h-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg font-semibold ml-2">
                  AI Email Assistant
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[#6C6C6C] text-left">
                  Compose professional emails without lifting a finger!
                </p>
              </div>
            </div>
            <div className="bg-white px-8 py-8 rounded-2xl cursor-pointer hover:[box-shadow:0px_10px_12px_rgba(0,0,0,0.1)] transition duration-300">
              <div className="flex justify-start items-center">
                <div className="bg-[#F4F1ED] rounded-xl p-1.5 text-[#FC6423]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail w-5 h-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg font-semibold ml-2">
                  AI Writing Assistant
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[#6C6C6C] text-left">
                  Compose professional emails without lifting a finger!
                </p>
              </div>
            </div>
            <div className="bg-white px-8 py-8 rounded-2xl cursor-pointer hover:[box-shadow:0px_10px_12px_rgba(0,0,0,0.1)] transition duration-300">
              <div className="flex justify-start items-center">
                <div className="bg-[#F4F1ED] rounded-xl p-1.5 text-[#FC6423]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-pen-tool w-5 h-5"
                  >
                    <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
                    <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
                    <path d="m2.3 2.3 7.286 7.286" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg font-semibold ml-2">
                  AI Post Generator
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[#6C6C6C] text-left">
                  Create just the right social media posts with a single tap!
                </p>
              </div>
            </div>
            <div className="bg-white px-8 py-8 rounded-2xl cursor-pointer hover:[box-shadow:0px_10px_12px_rgba(0,0,0,0.1)] transition duration-300">
              <div className="flex justify-start items-center">
                <div className="bg-[#F4F1ED] rounded-xl p-1.5 text-[#FC6423]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-gallery-horizontal-end w-5 h-5"
                  >
                    <path d="M2 7v10" />
                    <path d="M6 5v14" />
                    <rect width="12" height="18" x="10" y="3" rx="2" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg font-semibold ml-2">
                  AI Carousel Generator
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[#6C6C6C] text-left">
                  Create engaging posts with AI post generator!
                </p>
              </div>
            </div>
            <div className="bg-white px-8 py-8 rounded-2xl cursor-pointer hover:[box-shadow:0px_10px_12px_rgba(0,0,0,0.1)] transition duration-300">
              <div className="flex justify-start items-center">
                <div className="bg-[#F4F1ED] rounded-xl p-1.5 text-[#FC6423]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-file-text w-5 h-5"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg font-semibold ml-2">
                  AI PDF Reader
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[#6C6C6C] text-left">
                  Make PDF reading a breeze with Nily AI PDF Summarizer!
                </p>
              </div>
            </div>
            <div className="bg-white px-8 py-8 rounded-2xl cursor-pointer hover:[box-shadow:0px_10px_12px_rgba(0,0,0,0.1)] transition duration-300">
              <div className="flex justify-start items-center">
                <div className="bg-[#F4F1ED] rounded-xl p-1.5 text-[#FC6423]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-image w-5 h-5"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg font-semibold ml-2">
                  AI Image Generator
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[#6C6C6C] text-left">
                  Create any image with a simple prompt!
                </p>
              </div>
            </div>
            <div className="bg-white px-8 py-8 rounded-2xl cursor-pointer hover:[box-shadow:0px_10px_12px_rgba(0,0,0,0.1)] transition duration-300">
              <div className="flex justify-start items-center">
                <div className="bg-[#F4F1ED] rounded-xl p-1.5 text-[#FC6423]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-youtube w-5 h-5"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg font-semibold ml-2">
                  Compare LLMs
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[#6C6C6C] text-left">
                  Extract any information from a YouTube video in seconds!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;
