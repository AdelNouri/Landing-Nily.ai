import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Body = () => {
  const [title, setTitle] = useState("aiSdebar");
  const [flag, setFlag] = useState(0);

  useEffect(
    () => {
      let aiSdebar = document.getElementById("aiSdebar");
      let llmComparison = document.getElementById("llmComparison");
      let aiEmailWriter = document.getElementById("aiEmailWriter");
      let aiPdfReader = document.getElementById("aiPdfReader");
      let aiWritingAssistant = document.getElementById("aiWritingAssistant");
      let aiImageGenerator = document.getElementById("aiImageGenerator");

      let titles = [
        aiSdebar,
        llmComparison,
        aiEmailWriter,
        aiPdfReader,
        aiWritingAssistant,
        aiImageGenerator
      ];

      for (let i = 0; i < titles.length; i++) {
        if (flag == i) {
          titles[i].classList.add("bg-[#F4F1ED]", "rounded-lg");
          titles[i].children[0].classList.add("text-orange-500");
          titles[i].children[1].classList.add("text-orange-500");
        } else {
          titles[i].classList.remove("bg-[#F4F1ED]", "rounded-lg");
          titles[i].children[0].classList.remove("text-orange-500");
          titles[i].children[1].classList.remove("text-orange-500");
        }
      }
    },
    [flag]
  );

  const aiSdebar = () => {
    return (
      <div className="w-260">
        <p className="text-gray-500">
          Access 20+ advanced AI assistants in one convenient platform, allowing
          you to chat, code, write, read, summarize, perform OCR, and translate
          web pages!
        </p>
        <div className="flex justify-center border-2 border-[#FC6423] rounded-xl">

        <img src="../../public/assets/gif/main-page/ai-sidebar.gif" className="w-full rounded-xl" alt="ai-sidebar.gif" />
        </div>
      </div>
    );
  };

  const llmComparison = () => {
    return (
      <div className="bg-blue-300 w-100 h-30">
        <p>llm</p>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="bg-[#EDF1FB] w-full">
        <div className="relative h-screen w-full flex items-center mt-17 justify-center">
          <div className="absolute bg-opacity-100 inset-0 w-full h-full bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:33px_33px] opacity-50" />
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "radial-gradient(circle, rgba(237, 241, 251,0.2) 20%, rgba(237, 241, 251,0.7) 60%, rgba(237, 241, 251,1) 8%)"
            }}
          >
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
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
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
            {/* section 2 */}
            <div className="bg-white">
              <div className="flex justify-center">
                <div className="w-280 pt-17">
                  <p className="font-semibold text-gray-500 text-sm">
                    TRUSTED BY TEAMS AT
                  </p>
                  <div className="grid grid-cols-4 gap-24 pt-11">
                    <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition ease-in-out duration-300">
                      <img
                        className="w-43 hover:scale-107 transform ease-in-out duration-500"
                        src="https://cdn.prod.website-files.com/66578accf5b1c25b4bfc4490/6658ca2c6977c6f6e685cc43_google.d5aed1ce.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition ease-in-out duration-300">
                      <img
                        className="w-43 hover:scale-107 transform ease-in-out duration-500"
                        src="https://cdn.prod.website-files.com/66578accf5b1c25b4bfc4490/6658ca2d86a34fbbb05558a3_meta.aad74758.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition ease-in-out duration-300">
                      <img
                        className="w-43 hover:scale-107 transform ease-in-out duration-500"
                        src="https://cdn.prod.website-files.com/66578accf5b1c25b4bfc4490/6658ca2d676b411337d6dae1_netflix.e1e4db1c.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition ease-in-out duration-300">
                      <img
                        className="w-43 hover:scale-107 transform ease-in-out duration-500"
                        src="https://cdn.prod.website-files.com/66578accf5b1c25b4bfc4490/6658ca41b7478baa0887a30d_lime.a60e1359.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-30">
                  <p className="font-bold text-5xl text-slate-900">
                    Comprehensive Solutions Unified with Nily AI
                  </p>
                  <div className="w-260">
                    <div className="flex justify-between mt-12 font-semibold text-sm">
                      <div
                        id="aiSdebar"
                        className="py-3 px-6 cursor-pointer text-gray-600 hover:text-orange-500"
                        onClick={() => {
                          setTitle("aiSdebar");
                          setFlag(0);
                        }}
                      >
                        <svg
                          className="h-7 w-7 ml-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 3V21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="flex justify-center mt-1.25">
                          AI Sidebar
                        </p>
                      </div>
                      <div
                        id="llmComparison"
                        className="py-3 px-6 cursor-pointer text-gray-600 hover:text-[#FC6423]"
                        onClick={() => {
                          setTitle("llmComparison");
                          setFlag(1);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.75}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brain h-7 w-7 ml-10"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
                          <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
                          <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
                          <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
                          <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
                          <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
                        </svg>
                        <p className="mt-1.5 flex justify-center">
                          LLM Comparison
                        </p>
                      </div>
                      <div
                        id="aiEmailWriter"
                        className="py-3 px-6 cursor-pointer text-gray-600 hover:text-[#FC6423]"
                        onClick={() => {
                          setTitle("aiEmailWriter");
                          setFlag(2);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.75"
                          stroke="currentColor"
                          className="size-6 h-7 w-7 ml-8.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>

                        <p className="flex justify-center mt-1.5">
                          AI Email Writer
                        </p>
                      </div>
                      <div
                        id="aiPdfReader"
                        className="py-3 px-6 cursor-pointer text-gray-600 hover:text-[#FC6423]"
                        onClick={() => {
                          setTitle("aiPdfReader");
                          setFlag(3);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-7 w-7 ml-7.5"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                          <path d="M9 9l1 0" />
                          <path d="M9 13l6 0" />
                          <path d="M9 17l6 0" />
                        </svg>

                        <p className="flex justify-center mt-1.5">
                          AI PDF Reader
                        </p>
                      </div>
                      <div
                        id="aiWritingAssistant"
                        className="py-3 px-6 cursor-pointer text-gray-600 hover:text-[#FC6423]"
                        onClick={() => {
                          setTitle("aiWritingAssistant");
                          setFlag(4);
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 ml-13"
                        >
                          <path
                            d="M2.87601 18.1156C2.92195 17.7021 2.94493 17.4954 3.00748 17.3022C3.06298 17.1307 3.1414 16.9676 3.24061 16.8171C3.35242 16.6475 3.49952 16.5005 3.7937 16.2063L17 3C18.1046 1.89543 19.8954 1.89543 21 3C22.1046 4.10457 22.1046 5.89543 21 7L7.7937 20.2063C7.49951 20.5005 7.35242 20.6475 7.18286 20.7594C7.03242 20.8586 6.86926 20.937 6.69782 20.9925C6.50457 21.055 6.29783 21.078 5.88434 21.124L2.49997 21.5L2.87601 18.1156Z"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <p className="flex justify-center mt-1.5">
                          AI Writing Assistant
                        </p>
                      </div>
                      <div
                        id="aiImageGenerator"
                        className="py-3 px-6 cursor-pointer text-gray-600 hover:text-[#FC6423]"
                        onClick={() => {
                          setTitle("aiImageGenerator");
                          setFlag(5);
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 ml-12"
                        >
                          <path
                            d="M16.2 21H6.93137C6.32555 21 6.02265 21 5.88238 20.8802C5.76068 20.7763 5.69609 20.6203 5.70865 20.4608C5.72312 20.2769 5.93731 20.0627 6.36569 19.6343L14.8686 11.1314C15.2646 10.7354 15.4627 10.5373 15.691 10.4632C15.8918 10.3979 16.1082 10.3979 16.309 10.4632C16.5373 10.5373 16.7354 10.7354 17.1314 11.1314L21 15V16.2M16.2 21C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2M16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5Z"
                            stroke="currentColor"
                            stroke-width="1.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <p className="flex justify-center mt-1.5">
                          AI Image Generator
                        </p>
                      </div>
                    </div>
                    {title == "aiSdebar" ? aiSdebar() : null}
                    {title == "llmComparison" ? llmComparison() : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
