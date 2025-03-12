import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Section2 = () => {
  const [title, setTitle] = useState("aiSdebar");
  const [flag, setFlag] = useState(0);

  let text =
    "Access 20+ advanced AI assistants in one convenient platform,allowing you to chat, code, write, read, summarize, perform OCR,and translate web pages!";
  useEffect(
    () => {
      let aiSdebar = document.getElementById("aiSdebar");
      let llmComparison = document.getElementById("llmComparison");
      let aiEmailWriter = document.getElementById("aiEmailWriter");
      let aiPdfReader = document.getElementById("aiPdfReader");
      let aiWritingAssistant = document.getElementById("aiWritingAssistant");
      let aiImageGenerator = document.getElementById("aiImageGenerator");

      let options = [
        { title: aiSdebar, text: "" },
        { title: llmComparison, text: "" },
        { title: aiEmailWriter, text: "" },
        { title: aiPdfReader, text: "" },
        { title: aiWritingAssistant, text: "" },
        { title: aiImageGenerator, text: "" }
      ];

      for (let i = 0; i < options.length; i++) {
        if (flag == i) {
          options[i].title.classList.add("bg-[#F4F1ED]", "rounded-lg");
          options[i].title.children[0].classList.add("text-orange-500");
          options[i].title.children[1].classList.add("text-orange-500");
        } else {
          options[i].title.classList.remove("bg-[#F4F1ED]", "rounded-lg");
          options[i].title.children[0].classList.remove("text-orange-500");
          options[i].title.children[1].classList.remove("text-orange-500");
        }
      }
    },
    [flag]
  );

  const returnELM2 = () => {
    let options = [
      {
        title: "aiSdebar",
        img: "../../public/assets/gif/main-page/ai-sidebar.gif",
        text:
          "Access 20+ advanced AI assistants in one convenient platform,allowing you to chat, code, write, read, summarize, perform OCR,and translate web pages!"
      },
      {
        title: "llmComparison",
        img: "../../public/assets/gif/main-page/llm-compare.gif",
        text:
          " Access and compare LLMs like DeepSeek R1, Chat GPT 4o, Perplexity,Gemini 1.5 Pro, Claude 3.5, Sonnet, Mistral Large, Llama 3.1, and 20+ more AI Assistant models all in one place!"
      },
      {
        title: "aiEmailWriter",
        img: "../../public/assets/gif/AI-email-assistant/2.png",
        text:
          "Write and reply to emails 10x faster in any language using your personalized knowledge base!"
      },
      {
        title: "aiPdfReader",
        img: "../../public/assets/gif/main-page/pdf-reader.gif",
        text: "With AI PDF Summarizer. easily analyze, summarize, and interact with any PDF!"
      },
      {
        title: "aiWritingAssistant",
        img: "../../public/assets/gif/main-page/writing-assisstant.gif",
        text: "Generate content and ideas, write, research, optimize, correct grammar, tone, and much more 10x faster!"
      },
      {
        title: "aiImageGenerator",
        img: "../../public/assets/gif/main-page/image-generator.gif",
        text: "Create unique and captivating images, illustrations, and designs with ease!"
      }
    ];

    for (let i = 0; i < options.length; i++) {
      if (title == options[i].title) {
        return (
          <div className="flex justify-center mt-11">
            <div className="w-11/12 sm:w-150 md:w-175 lg:w-225" key={title}>
              <motion.div
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.0 }}
                className="text-gray-500 px-3"
              >
                <p>
                  {options[i].text}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex justify-center border-2 border-[#FC6423] rounded-xl mt-8">
                  <img
                    src={options[i].img}
                    className="w-full rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className=""
        >
          <div className="md:w-210 lg:w-250 xl:w-290 2xl:w-300 pt-17">
            <p className="font-semibold text-gray-500 text-sm">
              TRUSTED BY TEAMS AT
            </p>
            <div className="grid grid-cols-2 gap-x-30 md:gap-x-0 gap-y-8 md:grid-cols-3 lg:grid-cols-4 pt-11">
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
        </motion.div>
      </div>
      <div className="flex justify-center ">
        <div className="mt-30">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className=""
          >
            <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900">
              Comprehensive Solutions Unified with Nily AI
            </p>
          </motion.div>
          <div className="flex justify-center">
            <div className="w-full md:w-170 lg:w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className=""
              >
                <div className="flex flex-wrap justify-center lg:justify-between mt-12 font-semibold text-sm">
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
                    <p className="flex justify-center mt-1.25">AI Sidebar</p>
                  </div>
                  <div
                    id="llmComparison"
                    className="py-3 px-6 cursor-pointer text-gray-600 hover:text-[#FC6423]"
                    onClick={() => {
                      setTitle("llmComparison");
                      setFlag(1);
                    }}
                  >
                    {/* <div className="flex justify-center"> */}

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
                    {/* </div> */}
                    <p className="flex justify-center mt-1.75">
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

                    <p className="flex justify-center mt-1.75">
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

                    <p className="flex justify-center mt-2">AI PDF Reader</p>
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

                    <p className="flex justify-center mt-2">
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
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p className="flex justify-center mt-2.25">
                      AI Image Generator
                    </p>
                  </div>
                </div>
              </motion.div>

              {returnELM2()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
