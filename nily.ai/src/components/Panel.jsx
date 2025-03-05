import { useContext } from "react";
import { Context } from "../context/context.js";

const Panel = () => {
  const { setFlag, flag } = useContext(Context);

  return (
    <div
      className="grid grid-cols-4 bg-slate-200 fixed mt-13 w-9/12 h-64 text-slate-500 pt-5 shadow-2xl rounded-lg"
      onMouseLeave={() => setFlag(false)}
    >
      <div className="pl-8 pr-8">
        <div className="flex justify-start">
          <p className="text-2xl text-slate-900">Apps</p>
        </div>
        <div className="flex bg-slate-100 mb-3 mt-4 rounded-lg px-5 py-3 hover:scale-106 transition duration-350">
          <div className="flex items-center">
            <svg
              class="h-6 w-6 text-gray-900"
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
          </div>
          <div className="ml-4">
            <div className="flex justify-start text-slate-900">
              <p>Browser Extension</p>
            </div>
            <div className="flex justify-start">
              <p>Supports Chrome</p>
            </div>
          </div>
          <div className="flex items-center ml-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="size-4 text-gray-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex bg-slate-100 mb-3 rounded-lg px-5 py-3 hover:scale-106 transition duration-350">
        <div className="flex items-center">
            
          <svg
            class="h-6 w-6 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          </div>
          <div className="ml-4">
            <div className="flex justify-start text-slate-900">
              <p>Web App</p>
            </div>
            <div className="flex justify-start">
              <p>Open in Browser</p>
            </div>
          </div>
          <div className="flex items-center ml-18">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            className="size-4 text-gray-900"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
            
          </div>
        </div>
      </div>
      <div className="">
        <p className="flex justify-start mb-3 text-slate-900 text-md">
          AI Chat
        </p>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            Compare LLMs
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            Chat with Websites
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            Chat with Image
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            Chat with PDFs
          </a>
        </div>
      </div>
      <div>
        <p className="flex justify-start mb-3 text-slate-900 text-md">
          Productivity Tools
        </p>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            AI Email Assistant
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            AI Sidebar
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            AI Writing Assistant
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            AI Carousel Generator
          </a>
        </div>
      </div>
      <div>
        <p className="flex justify-start mb-3 text-slate-900 text-lg">
          Content Creation
        </p>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            Image Generation
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            Post Generation
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            Mind Map Maker
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="hover:text-orange-500" href="#">
            AI Translator
          </a>
        </div>
      </div>
    </div>
  );
};

export default Panel;
