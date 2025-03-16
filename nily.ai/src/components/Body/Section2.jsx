import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { solutions } from "../../arrays/Arrays.jsx";
import { tags } from "../../arrays/Arrays.jsx";

const Section2 = () => {
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

  const rtnTags = (tag, index) => {
    return (
      <div
        key={index}
        id={tag.id}
        className="py-3 px-6 cursor-pointer text-gray-600 hover:text-[#FC6423] transform ease-in-out duration-200"
        onClick={() => {
          setTitle(tag.id);
          setFlag(index);
        }}
      >
        <div className="flex justify-center mb-2">
          {tag.icon}
        </div>

        <p className="flex justify-center">{tag.title}</p>
      </div>
    );
  };

  const rtnSolutions = () => {
    for (let i = 0; i < solutions.length; i++) {
      if (title == solutions[i].title) {
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
                  {solutions[i].text}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex justify-center border-2 border-[#FC6423] rounded-xl mt-8">
                  <img src={solutions[i].img} className="w-full rounded-xl" />
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
            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-20 px-4 sm:px-0 md:gap-x-0 gap-y-8 md:grid-cols-3 lg:grid-cols-4 pt-11">
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
                <div className="flex flex-wrap justify-center lg:items-center lg:justify-between mt-12 font-semibold text-sm">
                  
                  {tags.map((tag, index) => (rtnTags(tag, index)))}
                </div>
              </motion.div>

              {rtnSolutions()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
