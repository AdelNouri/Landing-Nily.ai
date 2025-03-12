import { motion } from "framer-motion";

let sectionsInfo = [
  {
    id: 1,
    title: "Work Smarter, Not Harder!",
    btnText: "Explore Nily AI Sidebar",
    gif: "../../public/assets/gif/main-page/ai-sidebar.gif",
    order: 0,
    text:
      "Access the best chrome AI sidebar on any web page. Nily AI Sidebar empowers you to access advanced AI assistants in one place to chat, code, write, read, summarize, OCR, and translate any web page with ease."
  },
  {
    id: 2,
    title: "Access All AI Models Under One Roof!",
    btnText: " Explore Nily AI LLM Comparison",
    gif: "../../public/assets/gif/main-page/llm-compare.gif",
    order: 1,
    text:
      "Access and compare LLMs like DeepSeek R1, Chat GPT 4o, Perplexity, Gemini 1.5 Pro, Claude 3.5, Sonnet, Mistral Large, and Llama 3.1 and 20+ more AI Assistant models all in one place with reasonable pricing."
  },
  {
    id: 3,
    title: "AI Email Writer for Smart and Busy People!",
    btnText: "Explore Nily AI Email Writer",
    gif: "../../public/assets/gif/main-page/email-writer.gif",
    order: 0,
    text:
      "Compose professional emails effortlessly with Nily AI Email Writer. Respond in seconds in 14+ languages, customize your message, set meetings and adjust the tone to suit any situation."
  },
  {
    id: 4,
    title: "Make PDF Reading a Breeze!",
    btnText: "Explore Nily AI PDF Reader",
    gif: "../../public/assets/gif/main-page/pdf-reader.gif",
    order: 1,
    text:
      "Say goodbye to wasted hours sifting through lengthy PDFs. Allow the Nily pdf ai summarizer to extract key points, translate the content, and answer any questions from any PDF lightning fast!"
  },
  {
    id: 5,
    title: "Level up Your Writing Game!",
    btnText: "Explore Nily AI Writing Assistant",
    gif: "../../public/assets/gif/main-page/writing-assisstant.gif",
    order: 0,
    text:
      "Generate content and ideas, write, research, optimize, correct grammar, tone and much more with Nily AI Writing Assistant."
  },
  {
    id: 6,
    title: "Create Engaging Posts in Seconds!",
    btnText: "Explore Nily AI Post Generator",
    gif: "../../public/assets/gif/main-page/post-generator.gif",
    order: 1,
    text:
      "Craft engaging LinkedIn and X posts with Nily AI Post Generator. Effortlessly communicate with your audience and expand your reach."
  },
  {
    id: 7,
    title: "LinkedIn Carousel Generation is Now Effortless!",
    btnText: "Explore Nily AI Carousel Generator",
    gif: "../../public/assets/gif/main-page/caousel-generator.gif",
    order: 0,
    text:
      "Easily create eye-catching carousel posts for LinkedIn with Nily AI Carousel Generator, and engage with your audience by communicating through customized and branded carousels on LinkedIn."
  },
  {
    id: 8,
    title: "Visualize Your Ideas With a Click!",
    btnText: "Explore Nily AI Mind Map Maker",
    gif: "../../public/assets/gif/main-page/mandmap-generator.gif",
    order: 1,
    text:
      "Effortlessly generate new ideas, summarize complex information, and organize your thoughts visually in seconds with Nily AI Mind Map Generator."
  },
  {
    id: 9,
    title: "Bring Your Imagination to Life!",
    btnText: "Explore Nily AI Image Generator",
    gif: "../../public/assets/gif/main-page/image-generator.gif",
    order: 0,
    text:
      "Effortlessly create unique and captivating images with Nily AI Image Generator. Create art, illustrations, and designs in seconds."
  }
];

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
      <div className="grid md:grid-cols-2 items-center px-4 sm:px-0 gap-12 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1504px]">
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
        <div className="text-left order-1">
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
        <div className="w-full shadow-2xl rounded-3xl order-0">
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
