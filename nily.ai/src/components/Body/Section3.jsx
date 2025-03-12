import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Section3 = () => {
  const [title, setTitle] = useState("developer");
  const [flag, setFlag] = useState(0);

  let text =
    "Access 20+ advanced AI assistants in one convenient platform,allowing you to chat, code, write, read, summarize, perform OCR,and translate web pages!";
  useEffect(
    () => {
      let Developer = document.getElementById("Developer");
      let Entepreneurs = document.getElementById("Entepreneurs");
      let Marketers = document.getElementById("Marketers");
      let Researchers = document.getElementById("Researchers");
      let Customer = document.getElementById("Customer");
      let ContentCreators = document.getElementById("ContentCreators");
      let Analysts = document.getElementById("Analysts");
      let Students = document.getElementById("Students");
      let SocialMedia = document.getElementById("SocialMedia");
      let ProductManagers = document.getElementById("ProductManagers");
      let SalesProfessionals = document.getElementById("SalesProfessionals");
      let HRProfessionals = document.getElementById("HRProfessionals");

      let options = [
        { title: Developer, text: "" },
        { title: Entepreneurs, text: "" },
        { title: Marketers, text: "" },
        { title: Researchers, text: "" },
        { title: Customer, text: "" },
        { title: ContentCreators, text: "" },
        { title: Analysts, text: "" },
        { title: Students, text: "" },
        { title: SocialMedia, text: "" },
        { title: ProductManagers, text: "" },
        { title: SalesProfessionals, text: "" },
        { title: HRProfessionals, text: "" }
      ];

      for (let i = 0; i < options.length; i++) {
        if (flag == i) {
          options[i].title.classList.remove("bg-[#F4F1EC]");
          options[i].title.children[0].classList.remove("text-gray-800");
          options[i].title.children[1].classList.remove("text-gray-700");

          options[i].title.classList.add("bg-[#DE7931]");
          options[i].title.children[0].classList.add("text-white");
          options[i].title.children[1].classList.add("text-white");
        } else {
          options[i].title.classList.remove("bg-[#DE7931]");
          options[i].title.children[0].classList.remove("text-white");
          options[i].title.children[1].classList.remove("text-white");

          options[i].title.classList.add("bg-[#F4F1EC]");
          options[i].title.children[0].classList.add("text-gray-800");
          options[i].title.children[1].classList.add("text-gray-700");
        }
      }
    },
    [flag]
  );

  //   const returnELM2 = () => {
  //     let options = [
  //       {
  //         title: "aiSdebar",
  //         img: "../../public/assets/gif/main-page/ai-sidebar.gif",
  //         text:
  //           "Access 20+ advanced AI assistants in one convenient platform,allowing you to chat, code, write, read, summarize, perform OCR,and translate web pages!"
  //       },
  //       {
  //         title: "llmComparison",
  //         img: "../../public/assets/gif/main-page/llm-compare.gif",
  //         text:
  //           " Access and compare LLMs like DeepSeek R1, Chat GPT 4o, Perplexity,Gemini 1.5 Pro, Claude 3.5, Sonnet, Mistral Large, Llama 3.1, and 20+ more AI Assistant models all in one place!"
  //       },
  //       {
  //         title: "aiEmailWriter",
  //         img: "../../public/assets/gif/AI-email-assistant/2.png",
  //         text:
  //           "Write and reply to emails 10x faster in any language using your personalized knowledge base!"
  //       },
  //       {
  //         title: "aiPdfReader",
  //         img: "../../public/assets/gif/main-page/pdf-reader.gif",
  //         text:
  //           "With AI PDF Summarizer. easily analyze, summarize, and interact with any PDF!"
  //       },
  //       {
  //         title: "aiWritingAssistant",
  //         img: "../../public/assets/gif/main-page/writing-assisstant.gif",
  //         text:
  //           "Generate content and ideas, write, research, optimize, correct grammar, tone, and much more 10x faster!"
  //       },
  //       {
  //         title: "aiImageGenerator",
  //         img: "../../public/assets/gif/main-page/image-generator.gif",
  //         text:
  //           "Create unique and captivating images, illustrations, and designs with ease!"
  //       }
  //     ];

  //     for (let i = 0; i < options.length; i++) {
  //       if (title == options[i].title) {
  //         return (
  //           <div className="flex justify-center mt-11">
  //             <div className="w-11/12 sm:w-150 md:w-175 lg:w-225" key={title}>
  //               <motion.div
  //                 initial={{ opacity: 0, y: 2 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 transition={{ duration: 0.5, delay: 0.4 }}
  //                 viewport={{ once: true, amount: 0.0 }}
  //                 className="text-gray-500 px-3"
  //               >
  //                 <p>
  //                   {options[i].text}
  //                 </p>
  //               </motion.div>
  //               <motion.div
  //                 initial={{ opacity: 0, y: 25 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 transition={{ duration: 0.6, delay: 0.2 }}
  //                 viewport={{ once: true, amount: 0.2 }}
  //               >
  //                 <div className="flex justify-center border-2 border-[#FC6423] rounded-xl mt-8">
  //                   <img src={options[i].img} className="w-full rounded-xl" />
  //                 </div>
  //               </motion.div>
  //             </div>
  //           </div>
  //         );
  //       }
  //     }
  //   };

  const developer = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className=""
      >
        <div className="flex justify-center mt-10">
          <div className="bg-white w-315 2xl:w-350 py-8 px-9 rounded-lg shadow-xl">
            <p className="font-semibold text-2xl text-gray-800 flex justify-start">
              Developer
            </p>
            <div className="grid grid-cols-2 gap-y-6 gap-x-5 mt-8">
              <div className="flex justify-center">
                <div className="flex justify-center items-center p-3 bg-[#F4F1ED] h-12 rounded-md">
                  <svg
                    class="h-6 w-6 text-[#DE7931]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}<circle cx="11" cy="11" r="8" />{" "}
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <div className="ml-5">
                  <p className="text-gray-800 font-medium text-lg text-left">
                    Write and Debug Code Faster
                  </p>
                  <p className="text-[#6C6C6C] text-left">
                    Nily AI assistant can help you generate code snippets, fix
                    bugs, and refactor your code for better readability and
                    performance. Whether you're stuck on a tricky error or need
                    help implementing a specific feature, Nily AI Assistant acts
                    as your coding partner, offering real-time suggestions and
                    solutions.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center p-3 bg-[#F4F1ED] h-12 rounded-md">
                  <svg
                    class="h-6 w-6 text-[#DE7931]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}<polyline points="16 18 22 12 16 6" />{" "}
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="ml-5">
                  <p className="text-gray-800 font-medium text-lg text-left">
                    Automate Repetitive Tasks
                  </p>
                  <p className="text-[#6C6C6C] text-left">
                    Save time by letting Nily AI Assistant handle tedious tasks
                    like writing boilerplate code, generating unit tests, or
                    formatting your code. This frees you up to focus on solving
                    complex problems and building innovative features.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center p-3 bg-[#F4F1ED] h-12 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M9 9l1 0" />
                    <path d="M9 13l6 0" />
                    <path d="M9 17l6 0" />
                  </svg>
                </div>
                <div className="ml-5">
                  <p className="text-gray-800 font-medium text-lg text-left">
                    Get Instant Technical Insights
                  </p>
                  <p className="text-[#6C6C6C] text-left">
                    Need to quickly understand a new framework, library, or
                    language? Nily AI Assistant can break down concepts, suggest
                    best practices, or recommend relevant tools, ensuring you
                    stay productive while learning on the go.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center p-3 bg-[#F4F1ED] h-12 rounded-md">
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
                    class="lucide lucide-bot w-6 h-6 text-[#DE7931]"
                  >
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                  </svg>
                </div>
                <div className="ml-5">
                  <p className="text-gray-800 font-medium text-lg text-left">
                    Streamline Debugging and Testing
                  </p>
                  <p className="text-[#6C6C6C] text-left">
                    Nily AI Assistant can help with generating test cases,
                    analyzing logs, and even debugging tricky issues. It acts as
                    a second set of eyes, helping you pinpoint performance
                    bottlenecks or edge cases you might have missed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-[#eef2fd] flex justify-center mt-20">
      <div className="mt-15 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className=""
        >
          <p className="font-semibold text-[#DE7931] text-sm">OUR AUDIENCE</p>
          <p className="font-bold text-3xl md:text-4xl lg:text-4xl text-slate-900 mt-4">
            Who is Nily AI for?
          </p>
        </motion.div>
        <div className="flex justify-center">
          <div className="w-full md:w-170 lg:w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-center"
            >
              <div className="flex flex-wrap justify-center gap-y-4 w-315 2xl:w-350 mt-12">
                <div
                  id="Developer"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border border-[#DE7931] bg-[#F4F1EC] transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("Developer");
                    setFlag(0);
                  }}
                >
                  <svg
                    class="h-6 w-6 mr-2  text-[#333333]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}<polyline points="16 18 22 12 16 6" />{" "}
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <p className="flex justify-center text-gray-700">Developer</p>
                </div>
                <div
                  id="Entepreneurs"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("Entepreneurs");
                    setFlag(1);
                  }}
                >
                  <svg
                    class="h-6 w-6 mr-2 text-[#333333]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />{" "}
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  <p className="flex justify-center text-gray-700">
                    Entepreneurs
                  </p>
                </div>
                <div
                  id="Marketers"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("Marketers");
                    setFlag(2);
                  }}
                >
                  <svg
                    class="h-6 w-6 mr-2 text-[#333333]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />{" "}
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  <p className="flex justify-center text-gray-700">Marketers</p>
                </div>
                <div
                  id="Researchers"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("Researchers");
                    setFlag(3);
                  }}
                >
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
                    class="lucide lucide-graduation-cap w-6 h-6 mr-2 text-[#333333]"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                  <p className="flex justify-center text-gray-700">
                    Researchers
                  </p>
                </div>
                <div
                  id="Customer"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("Customer");
                    setFlag(4);
                  }}
                >
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
                    class="lucide lucide-headphones w-6 h-6 mr-2 text-[#333333]"
                  >
                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                  <p className="flex justify-center text-gray-700">
                    Customer Services Reps
                  </p>
                </div>
                <div
                  id="ContentCreators"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("ContentCreators");
                    setFlag(5);
                  }}
                >
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
                    class="lucide lucide-pencil w-6 h-6 mr-2 text-[#333333]"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                    <path d="m15 5 4 4" />
                  </svg>
                  <p className="flex justify-center text-gray-700">
                    Content Creators
                  </p>
                </div>
                <div
                  id="Analysts"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("Analysts");
                    setFlag(6);
                  }}
                >
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
                    class="lucide lucide-chart-no-axes-column-increasing w-6 h-6 mr-2 text-[#333333]"
                  >
                    <line x1="12" x2="12" y1="20" y2="10" />
                    <line x1="18" x2="18" y1="20" y2="4" />
                    <line x1="6" x2="6" y1="20" y2="16" />
                  </svg>
                  <p className="flex justify-center text-gray-700">Analysts</p>
                </div>
                <div
                  id="Students"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("Students");
                    setFlag(7);
                  }}
                >
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
                    class="lucide lucide-book-open w-6 h-6 mr-2 text-[#333333]"
                  >
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                  <p className="flex justify-center text-gray-700">Students</p>
                </div>
                <div
                  id="SocialMedia"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("SocialMedia");
                    setFlag(8);
                  }}
                >
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
                    class="lucide lucide-instagram w-6 h-6 mr-2 text-[#333333]"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <p className="flex justify-center text-gray-700">
                    Social Media Managers
                  </p>
                </div>
                <div
                  id="ProductManagers"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("ProductManagers");
                    setFlag(9);
                  }}
                >
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
                    class="lucide lucide-package-search w-6 h-6 mr-2 text-[#333333]"
                  >
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="m7.5 4.27 9 5.15" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                    <circle cx="18.5" cy="15.5" r="2.5" />
                    <path d="M20.27 17.27 22 19" />
                  </svg>
                  <p className="flex justify-center text-gray-700">
                    Product Managers
                  </p>
                </div>
                <div
                  id="SalesProfessionals"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("SalesProfessionals");
                    setFlag(10);
                  }}
                >
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
                    class="lucide lucide-weight w-6 h-6 mr-2 text-[#333333]"
                  >
                    <circle cx="12" cy="5" r="3" />
                    <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
                  </svg>
                  <p className="flex justify-center text-gray-700">
                    Sales Professionals
                  </p>
                </div>
                <div
                  id="HRProfessionals"
                  className="py-2 px-4.5 flex justify-center items-center cursor-pointer rounded-md border ml-4 border-[#DE7931] bg-[#F4F1EC] text-gray-800 transform ease-in-out duration-200"
                  onClick={() => {
                    setTitle("HRProfessionals");
                    setFlag(11);
                  }}
                >
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
                    class="lucide lucide-speech w-6 h-6 mr-2 text-[#333333]"
                  >
                    <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
                    <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
                    <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
                  </svg>
                  <p className="flex justify-center text-gray-700">
                    HR Professionals
                  </p>
                </div>
              </div>
            </motion.div>
            {developer()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
