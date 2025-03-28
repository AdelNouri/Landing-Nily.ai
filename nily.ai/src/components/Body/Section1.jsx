import { motion } from "framer-motion";

const Section1 = () => {
    return (
      <>
        <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="text-gray-900 flex justify-center items-center w-54 cursor-pointer bg-white rounded-full shadow-md h-10 mt-19 hover:shadow-lg transition duration-200">
                  <svg
                    className="h-4 w-4 text-gray-900 mr-1.75"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}<polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <p className="text-md">View Instruction Video</p>
                </div>
              </motion.div>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl text-gray-800 block mt-13.5">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="font-bold">One AI Assistant to Rule Them All!</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-[#FC6423] mt-5 font-bold">
                  Your All-in-one AI Assistant
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-base md:text-lg lg:text-xl mt-7.5">
                  Anytime, Anywhere!
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-center"
            >
              <div className="sm:flex justify-center items-center pb-44 sm:pb-21 mt-8 sm:mt-14.5 h-10">
                <div className="inline-block text-white bg-[#FC6423] py-3.5 w-35.5 rounded-full sm:mr-4.25 hover:bg-slate-800 transition ease-out duration-400">
                  <button>Get Started</button>
                </div>
                <div className="mt-3 sm:mt-0 bg-white flex justify-center items-center border-2 border-gray-100 text-gray-800 py-3 w-60 rounded-full hover:border-orange-500 hover:border-2 transition-colors duration-400">
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
            </motion.div>
            <div className="bg-[#EDF1FB]">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex justify-center rounded-lg"
              >
                <video
                  autoPlay
                  loop
                  muted
                  className="w-11/12 md:w-170 lg:w-230 xl:w-288 shadow-2xl mt-2 rounded-lg hover:mt-0 hover:mb-2 transform ease-in-out duration-300"
                >
                  <source
                    src="../../public/assets/video/landing-desktop.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="hidden md:block absolute rounded-lg shadow-2xl w-60 h-[385px] ml-125 mt-8.5 lg:w-80 lg:h-[520px] lg:ml-170 lg:mt-10 xl:w-96 xl:h-[647px] xl:ml-212 xl:mt-9.5 hover:mt-7 overflow-hidden transform ease-in-out duration-300">
                  <video
                    className="w-full h-full object-cover object-[100%_0%]"
                    autoPlay
                    loop
                    muted
                  >
                    <source
                      src="../../public/assets/video/landing-sidebar.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </motion.div>
            </div>
            <div className="pt-30 pb-20 bg-[#EDF1FB]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 md:flex md:justify-center md:items-center"
              >
                <div className="mx-5 pt-3 lg:mx-11">
                  <div className="flex justify-center">
                    <img
                      src="../../public/assets/icons/pngwing.com.png"
                      alt="soc-logo"
                      className="w-21"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="font-bold text-black text-3xl">4.5</p>
                    <i className="fas fa-star text-lg text-[#FC6423] ml-1.75" />
                  </div>
                  <p className="text-gray-600 text-md mt-2">On G2</p>
                </div>
                <div className="mx-5 lg:mt-0 lg:mx-11">
                  <div className="flex justify-center">
                    <img
                      src="../../public/assets/icons/Trustpilot.png"
                      alt="soc-logo"
                      className="w-20"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="font-bold text-black text-3xl">3.9</p>
                    <i className="fas fa-star text-lg text-[#FC6423] ml-1.75" />
                  </div>
                  <p className="text-gray-600 text-md mt-2">On Trustpilot</p>
                </div>
                <div className="mx-4 mt-8 lg:mt-0 lg:mx-10">
                  <div className="flex justify-center">
                    <img
                      src="../../public/assets/icons/soc.webp"
                      alt="soc-logo"
                      className="w-12"
                    />
                  </div>
                  <p className="text-xl font-semibold text-slate-900">
                    Trusted by<br />Experts
                  </p>
                  <p className="text-gray-600 text-sm">
                    Industry standard<br />security
                  </p>
                </div>
                <div className="mx-2.5 mt-5 lg:mt-0 lg:mx-7.5">
                  <div className="flex justify-center">
                    <img
                      src="../../public/assets/icons/google-store.png"
                      alt="soc-logo"
                      className="w-12"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="font-bold text-black text-3xl">4.9</p>
                    <i className="fas fa-star text-lg text-[#FC6423] ml-1.75" />
                  </div>
                  <p className="text-gray-600 text-md mt-2">On Chrome Store</p>
                </div>
                <div className="mx-5 mt-6 lg:mt-0 lg:mx-11">
                  <div className="flex justify-center">
                    <img
                      src="../../public/assets/icons/capterra.png"
                      alt="soc-logo"
                      className="w-12"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="font-bold text-black text-3xl">4.0</p>
                    <i className="fas fa-star text-lg text-[#FC6423] ml-1.75" />
                  </div>
                  <p className="text-gray-600 text-md mt-2">On Capterra</p>
                </div>
              </motion.div>
            </div>
        </>
    )
}

export default Section1