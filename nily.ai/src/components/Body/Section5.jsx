import { motion } from "framer-motion";
import {sectionsInfo} from "../../arrays/Arrays.jsx"


const ReturnELM = ({ title, order, text, btnText, gif }) => {
  return (
    <>
    {order == 0 ?  <div className="flex justify-center bg-white py-20">
    <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className=""
        >
      <div className="grid md:grid-cols-2 items-center px-5 sm:px-0 gap-12 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1504px]">
        <div className="text-left">
          <p className="text-4xl lg:text-5xl font-bold text-[#213B41] mb-8">
            {title}
          </p>
          <p className="text-xl text-[#6C6C6C] mb-8">
            {text}
          </p>
          <div>
            <div className="inline-flex items-center justify-center px-5 py-3 rounded-md cursor-pointer bg-[#FC6423] text-white hover:bg-[#213B41] transition ease-in-out duration-300">
              <a href="#">
                {btnText}
              </a>
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
                class="lucide lucide-arrow-right ml-2 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full shadow-2xl rounded-3xl">
          <img src={gif} className="rounded-2xl" alt="" />
        </div>
      </div>
      </motion.div>
    </div>: 
        <div className="flex justify-center bg-[#eef2fc] py-20">
            <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className=""
        > 
      <div className="grid md:grid-cols-2 items-center px-4 sm:px-0 gap-12 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1504px]">
        <div className="text-left md:order-1">
          <p className="text-4xl lg:text-5xl font-bold text-[#213B41] mb-8">
            {title}
          </p>
          <p className="text-xl text-[#6C6C6C] mb-8">
            {text}
          </p>
          <div>
            <div className="inline-flex items-center justify-center px-5 py-3 rounded-md cursor-pointer bg-[#FC6423] text-white hover:bg-[#213B41] transition ease-in-out duration-300">
              <a href="#">
                {btnText}
              </a>
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
                class="lucide lucide-arrow-right ml-2 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full shadow-2xl rounded-3xl md:order-0">
          <img src={gif} className="rounded-2xl" alt="" />
        </div>
      </div>
    </motion.div>
    </div>
    }
    </>
  );
};

const Section5 = () => {
  return (
    <>
      {sectionsInfo.map(section =>
        <ReturnELM
          key={section.id}
          title={section.title}
          order={section.order}
          text={section.text}
          btnText={section.btnText}
          gif={section.gif}
        />
      )}

    </>
  );
};

export default Section5;
