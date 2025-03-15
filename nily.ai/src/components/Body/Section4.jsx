import { motion } from "framer-motion";
import { cards } from "../../arrays/Arrays";

const Section4 = () => {
  const rtnCards = (card, index) => {
    return (
      <div key={index} className="bg-white px-8 py-8 rounded-2xl cursor-pointer hover:[box-shadow:0px_10px_12px_rgba(0,0,0,0.1)] transition duration-300">
        <div className="flex justify-start items-center">
          <div className="bg-[#F4F1ED] rounded-xl p-1.5 text-[#FC6423]">
            {card.icon}
          </div>
          <p className="text-gray-700 text-lg font-semibold ml-2">
            {card.title}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-[#6C6C6C] text-left">
            {card.text}
          </p>
        </div>
      </div>
    );
  };

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
            {cards.map((card, index) => rtnCards(card, index))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;
