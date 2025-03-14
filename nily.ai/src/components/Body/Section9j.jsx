import { motion } from "framer-motion";
import { questions } from "../../arrays/Arrays";

const AnimatedComponent = () => {
  const toggleElement = event => {
    const allElements = document.querySelectorAll(".toggle-box"); 
    const element = event.currentTarget.nextElementSibling;

    allElements.forEach(el => {
      if (el !== element) {
        el.classList.remove("opacity-100", "translate-y-0");
        el.style.maxHeight = el.scrollHeight + "px";
        setTimeout(() => {
          el.style.maxHeight = "0px";
        }, 10);
        setTimeout(() => {
          el.classList.add("hidden");
        }, 500);
      }
    });

    if (element) {
      if (element.classList.contains("opacity-100")) {
        element.classList.remove("opacity-100", "translate-y-0");
        element.style.maxHeight = element.scrollHeight + "px";
        setTimeout(() => {
          element.style.maxHeight = "0px";
        }, 10);
        setTimeout(() => {
          element.classList.add("hidden");
        }, 500);
      } else {
        element.classList.remove("hidden");
        element.style.maxHeight = "0px";
        setTimeout(() => {
          element.classList.add("opacity-100", "translate-y-0");
          element.style.maxHeight = element.scrollHeight + "px";
        }, 1);
      }
    }
  };

  return (
    <div className="w-full bg-[#F4F1ED] py-20 flex justify-center">
      <div className="px-4 sm:px-0 w-[608px] md:w-[736px] lg:w-[768px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className=""
      >
        <p className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#213B41]">
          Frequently Asked Questions
        </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className=""
      >
        <div>
          {questions.map(question =>
            <div key={question.id}>
              <div
                className="flex justify-between items-center mt-4 cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-200"
                onClick={toggleElement}
              >
                <p className="text-lg font-semibold text-[#213B41]">
                  {question.questionTitle}
                </p>
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
                  class="lucide lucide-plus w-5 h-5 text-[#DE7932]"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>

              <div
                className="text-[#6C6C6C] text-left bg-white px-4 pb-4 rounded-b-lg toggle-box hidden opacity-0 -translate-y-5 transition-all duration-400 ease-out overflow-hidden "
                style={{ maxHeight: "0px" }}
              >
                <p>
                  {question.answer}
                </p>
              </div>
            </div>
          )}
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedComponent;
