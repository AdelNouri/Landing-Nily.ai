import { useState, useEffect, use} from "react";
import { motion } from "framer-motion";


const Section9 = () => {
  const [key, setKey] = useState(0);
  const [changeStyle, setChangeStyle] = useState()
  const [flag, setFlag] = useState(true)
  

  useEffect(() => {
    
    let one = document.getElementById(1);
      let two = document.getElementById(2);
      let three = document.getElementById(3);
      let four = document.getElementById(4);
      let five = document.getElementById(5);
      let six = document.getElementById(6);
      let nums = [
        one, two, three, four, five, six
      ] 
      console.log(changeStyle)
      for (let i = 1; i < 7; i++) {
        if (changeStyle == i) {
          !(nums[(i-1)].classList.contains("hidden"))? 
          nums[(i-1)].classList.add("hidden") : nums[(i-1)].classList.remove("hidden")
        } else {
          nums[(i-1)].classList.add("hidden");
        }
      }
  }, [changeStyle,flag])
  
  const handleClick = () => {
    setKey(prevKey => prevKey + 1); 
  };

  return (
    <div className="w-full bg-[#F4F1ED] py-20 flex justify-center">
      <div className="px-4 sm:px-0 w-[608px] md:w-[736px] lg:w-[768px]">
        <p className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#213B41]">
          Frequently Asked Questions
        </p>
        <div>
          <div className="flex justify-between items-center cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-200"
            onClick={() => {
              setFlag(!flag)
              setChangeStyle(1)
              handleClick();
            }}>
            <p className="text-lg font-semibold text-[#213B41]">
            What is Nily AI?
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
          <div id='1' className='' >
            <motion.div
              key={key}
              initial={{ opacity: 0, y: -1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#6C6C6C] text-left bg-white px-4 pb-4 rounded-b-lg">
                <p>
                Nily AI is a comprehensive suite of AI-powered tools designed to boost productivity across various tasks, from writing and research to content creation and project management.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-between items-center cursor-pointer mt-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-200"
            onClick={() => {
              setFlag(!flag)
              setChangeStyle(2)
              handleClick();
            }}>
            <p className="text-lg font-semibold text-[#213B41]">
            What are the core features of Nily AI?
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
          <div id='2' className=''>
            <motion.div
              key={key}
              initial={{ opacity: 0, y: -1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#6C6C6C] text-left bg-white px-4 pb-4 rounded-b-lg">
                <p>
                Nily AI offers a variety of tools, including:- Mind Map Generator: Visually organize ideas and brainstorm concepts.- Image Generator: Create images from text prompts.- Post Generator: Generate social media posts for platforms like LinkedIn and X (formerly Twitter).- YouTube Summarizer: Summarize, translate, and chat with YouTube videos.- PDF Reader/Summarizer: Extract key points, translate, and answer questions from PDFs.- AI Sidebar: Access various AI assistants within a convenient browser sidebar.- Writing Assistant: Improve writing through content generation, grammar correction, and optimization.- Email Writer: Compose professional emails effortlessly.- Carousel Generator: Create engaging LinkedIn carousel posts.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-between items-center cursor-pointer mt-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-200"
            onClick={() => {
              setFlag(!flag)
              setChangeStyle(3)
              handleClick();
            }}>
            <p className="text-lg font-semibold text-[#213B41]">
            How can Nily AI benefit different professionals?
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
          <div id='3' className=''>
            <motion.div
              key={key}
              initial={{ opacity: 0, y: -1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#6C6C6C] text-left bg-white px-4 pb-4 rounded-b-lg">
                <p>
                Nily AI benefits various professionals in unique ways:- Content Creators: Streamline content creation, automate repetitive tasks, and generate fresh ideas.- Analysts: Automate routine reporting, enhance decision-making with data-driven insights, and forecast outcomes.- HR Professionals: Analyze employee feedback, identify top talent, and improve hiring processes.- Customer Service Representatives: Gain insights from customer interactions and provide more personalized support.- Educators: Develop lesson plans, create engaging learning materials, and simplify complex topics.- Students: Organize study plans, brainstorm project ideas, and get help with assignments.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-between items-center cursor-pointer mt-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-200"
            onClick={() => {
              setFlag(!flag)
              setChangeStyle(4)
              handleClick();
            }}>
            <p className="text-lg font-semibold text-[#213B41]">
            How many AI assistants are available through Nily AI?
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
          <div id='4' className=''>
            <motion.div
              key={key}
              initial={{ opacity: 0, y: -1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#6C6C6C] text-left bg-white px-4 pb-4 rounded-b-lg">
                <p>
                Nily AI provides access to over 20 AI assistants, including models like ChatGPT-4, Gemini 1.5 Pro, Llama 3.1, Claude 3.5 Sonnet, and more.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-between items-center cursor-pointer mt-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-200"
            onClick={() => {
              setFlag(!flag)
              setChangeStyle(5)
              handleClick();
            }}>
            <p className="text-lg font-semibold text-[#213B41]">
            Where can I learn more or access Nily AI?
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
          <div id='5' className=''>
            <motion.div
              key={key}
              initial={{ opacity: 0, y: -1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#6C6C6C] text-left bg-white px-4 pb-4 rounded-b-lg">
                <p>
                Visit the official Nily AI website to learn more, download the tools, and explore pricing options.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-between items-center cursor-pointer mt-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-200"
            onClick={() => {
              setChangeStyle(6)
              setFlag(!flag)
              handleClick();
            }}>
            <p className="text-lg font-semibold text-[#213B41]">
            Does Nily AI Assistant have any trials available?
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
          <div id='6' className=''>
            <motion.div
              key={key}
              initial={{ opacity: 0, y: -1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#6C6C6C] text-left bg-white px-4 pb-4 rounded-b-lg">
                <p>
                Yes, you can try Nily AI for 7 days before making a purchase.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section9;
