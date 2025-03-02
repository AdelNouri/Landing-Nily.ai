import { useContext } from "react";
import { Context } from "../context/context.js";

const Panel = () => {
  const { setFlag, flag } = useContext(Context);

  return (
    <div
      className="grid grid-cols-4 bg-slate-200 ml-24 mt-14 fixed w-full h-60 text-slate-600"
      onMouseLeave={() => setFlag(false)}
    >
      <div className="">
        <p>Apps</p>
      </div>
      <div className="">
        <p className="flex justify-start mb-3 text-slate-900 text-md">AI Chat</p>
        <div className="flex justify-start mb-3">
          <a className="" href="#">
            Compare LLMs
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="" href="#">
            Chat with Websites
          </a>
        </div>
        <div className="flex justify-start mb-3">
          <a className="" href="#">
            Chat with Image
          </a>
        </div >
        <div className="flex justify-start mb-3">
          <a className="" href="#">
            Chat with PDFs
          </a>
        </div>
      </div>
      <div>
        <p>Productivity Tools</p>
        <a href="#">AI Email Assistant</a>
        <a href="#">AI Sidebar</a>
        <a href="#">AI Writing Assistant</a>
        <a href="#">AI Carousel Generator</a>
      </div>
      <div>
        <p>Content Creation</p>
        <a href="#">Image Generation</a>
        <a href="#">Post Generation</a>
        <a href="#">Mind Map Maker</a>
        <a href="#">AI Translator</a>
      </div>
    </div>
  );
};

export default Panel;
