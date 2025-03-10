import { useContext } from "react";
import { Context } from "../context/context.js";

const Panel = () => {
  const { setPanel } = useContext(Context);

  return (
    <div
      className="hidden md:grid md:grid-cols-5 2xl:grid-cols-4 bg-[#EEF2FC] fixed mt-13 md:w-full lg:w-9/12 xl:w-7/12 2xl:w-10/12 h-60 text-gray-500 pt-5 shadow-2xl rounded-lg "
      onMouseLeave={() => setPanel(false)}
    >
      <div className="pl-6 pr-6 2xl:pl-8 2xl:pr-8  grid col-span-2 2xl:col-span-1">
        <div className="flex justify-start">
          <p className="text-2xl text-slate-900 font-semibold">Apps</p>
        </div>
        <div className="grid grid-cols-8 bg-[#F7F9FE] mb-3 rounded-lg px-5 hover:scale-106 transition duration-350">
          <div className="grid col-span-1">
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-gray-900"
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
            </div>
          </div>
          <div className="grid col-span-6">
            <div className="flex justify-start items-start">
              <div className="ml-1 2xl:ml-2 mt-3">
                <div className="flex justify-start text-slate-900 font-semibold">
                  <p>Browser Extension</p>
                </div>
                <div className="flex justify-start text-sm">
                  <p>Supports Chrome</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid col-span-1">
            <div className="flex justify-end items-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-4 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8 bg-[#F7F9FE] mb-6 rounded-lg px-5 hover:scale-106 transition duration-350">
          <div className="grid col-span-1">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-6 text-gray-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
                />
              </svg>
            </div>
          </div>
          <div className="grid col-span-6">
            <div className="flex justify-start items-start">
              <div className="ml-1 2xl:ml-2 mt-3">
                <div className="flex justify-start text-slate-900 font-semibold">
                  <p>Web App</p>
                </div>
                <div className="flex justify-start text-sm">
                  <p>Open in Browser</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid col-span-1">
            <div className="flex justify-end items-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-4 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-md">
        <p className="flex justify-start mb-3 text-slate-900 font-medium">
          AI Chat
        </p>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            Compare LLMs
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            Chat with Websites
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            Chat with Image
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            Chat with PDFs
          </a>
        </div>
      </div>
      <div className="">
        <p className="flex justify-start mb-3 text-slate-900 font-medium">
          Productivity Tools
        </p>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            AI Email Assistant
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            AI Sidebar
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            AI Writing Assistant
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a
            className="hover:text-[#FC6423] md:text-sm lg:text-base xl:text-sm 2xl:text-base"
            href="#"
          >
            AI Carousel Generator
          </a>
        </div>
      </div>
      <div className="">
        <p className="flex justify-start mb-3 text-slate-900 font-medium">
          Content Creation
        </p>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            Image Generation
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            Post Generation
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            Mind Map Maker
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-[#FC6423]" href="#">
            AI Translator
          </a>
        </div>
      </div>
    </div>
  );
};

export default Panel;
