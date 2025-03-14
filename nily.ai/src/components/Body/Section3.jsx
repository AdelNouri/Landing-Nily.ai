import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cards, buttons } from "../../arrays/Arrays.jsx";


const Section3 = () => {
  const [identificationCode, setIdentificationCode] = useState(0);
  const [executions, setExecutions] = useState(true);
  const [flag, setFlag] = useState(false);

  useEffect(
    () => {
      if (flag) {
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
          { title: Developer },
          { title: Entepreneurs },
          { title: Marketers },
          { title: Researchers },
          { title: Customer },
          { title: ContentCreators },
          { title: Analysts },
          { title: Students },
          { title: SocialMedia },
          { title: ProductManagers },
          { title: SalesProfessionals },
          { title: HRProfessionals }
        ];

        for (let i = 0; i < options.length; i++) {
          if (identificationCode == i) {
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
      }
    },
    [identificationCode]
  );

  const developer = (card, index) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        key={index - 1}
      >
        <div className="flex justify-center mt-8">
          <div className="bg-white w-full mx-4 sm:w-[608px] md:w-[736px] lg:w-[992px] xl:w-[1248px] 2xl:w-[1504px] py-8 px-9 rounded-lg shadow-xl">
            <p className="font-semibold text-2xl text-gray-800 flex justify-start">
              {card.title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-5 mt-8">
              {card.sections.map((section, index) =>
                <div className="flex justify-center" key={index}>
                  <div className="flex justify-center items-center p-3 bg-[#F4F1ED] h-12 rounded-md">
                    {section.icon}
                  </div>
                  <div className="ml-5">
                    <p className="text-gray-800 font-medium text-lg text-left">
                      {section.title}
                    </p>
                    <p className="text-[#6C6C6C] text-left">
                      {section.text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  if (executions) {
    setTimeout(() => {
      setFlag(true);
      setIdentificationCode(0);
      setExecutions(false);
    }, 1);
  }
  const rtnButtons = (button, index) => {
    return (
      <div
        key={index}
        id={button.id}
        className={
          index == 0
            ? "py-2 px-4 bg-[#DE7931] flex justify-center items-center cursor-pointer rounded-md border m-2 border-[#DE7931] transform ease-in-out duration-200"
            : "py-2 px-4 flex justify-center text-gray-700 items-center cursor-pointer rounded-md border m-2 border-[#DE7931] bg-[#F4F1EC] transform ease-in-out duration-200"
        }
        onClick={() => {
          setIdentificationCode(index);
        }}
      >
        {button.icon}
        <p className={index == 0 ? "flex justify-center" : ""}>
          {button.title}
        </p>
      </div>
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
              <div className="flex flex-wrap justify-center w-full mx-4 sm:w-[608px] md:w-[736px] lg:w-[992px] xl:w-[1248px] 2xl:w-[1504px] mt-12">
                {buttons.map((button, index) => rtnButtons(button, index))}
              </div>
            </motion.div>
            {cards.map(
              (card, index) => (index == identificationCode ? developer(card, index) : null)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;