import { useRef } from "react";
import { motion } from "framer-motion";

let questions = [
  {
    id: 1,
    questionTitle: "What is Nily AI?",
    answer:
      "Nily AI is a comprehensive suite of AI-powered tools designed to boost productivity across various tasks, from writing and research to content creation and project management."
  },
  {
    id: 2,
    questionTitle: "What are the core features of Nily AI?",
    answer:
      "Nily AI offers a variety of tools, including:- Mind Map Generator: Visually organize ideas and brainstorm concepts.- Image Generator: Create images from text prompts.- Post Generator: Generate social media posts for platforms like LinkedIn and X (formerly Twitter).- YouTube Summarizer: Summarize, translate, and chat with YouTube videos.- PDF Reader/Summarizer: Extract key points, translate, and answer questions from PDFs.- AI Sidebar: Access various AI assistants within a convenient browser sidebar.- Writing Assistant: Improve writing through content generation, grammar correction, and optimization.- Email Writer: Compose professional emails effortlessly.- Carousel Generator: Create engaging LinkedIn carousel posts."
  },
  {
    id: 3,
    questionTitle: "How can Nily AI benefit different professionals?",
    answer:
      "Nily AI benefits various professionals in unique ways:- Content Creators: Streamline content creation, automate repetitive tasks, and generate fresh ideas.- Analysts: Automate routine reporting, enhance decision-making with data-driven insights, and forecast outcomes.- HR Professionals: Analyze employee feedback, identify top talent, and improve hiring processes.- Customer Service Representatives: Gain insights from customer interactions and provide more personalized support.- Educators: Develop lesson plans, create engaging learning materials, and simplify complex topics.- Students: Organize study plans, brainstorm project ideas, and get help with assignments."
  },
  {
    id: 4,
    questionTitle: "How many AI assistants are available through Nily AI?",
    answer:
      "Nily AI provides access to over 20 AI assistants, including models like ChatGPT-4, Gemini 1.5 Pro, Llama 3.1, Claude 3.5 Sonnet, and more."
  },
  {
    id: 5,
    questionTitle: "Where can I learn more or access Nily AI?",
    answer:
      "Visit the official Nily AI website to learn more, download the tools, and explore pricing options."
  },
  {
    id: 6,
    questionTitle: "Does Nily AI Assistant have any trials available?",
    answer: "Yes, you can try Nily AI for 7 days before making a purchase."
  }
];

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
                className="text-[#6C6C6C] text-left bg-white px-4 pb-4 rounded-b-lg toggle-box hidden opacity-0 -translate-y-5 transition-all duration-500 ease-out overflow-hidden "
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
