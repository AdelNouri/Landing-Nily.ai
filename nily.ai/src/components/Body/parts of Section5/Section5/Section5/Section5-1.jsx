let sections = [
  {
    title: "Work Smarter, Not Harder!",
    btnText: "Explore Nily AI Sidebar",
    gif: "../../public/assets/gif/main-page/ai-sidebar.gif",
    order:0,
    text:
      "Access the best chrome AI sidebar on any web page. Nily AI Sidebar empowers you to access advanced AI assistants in one place to chat, code, write, read, summarize, OCR, and translate any web page with ease."
  },
  {
    title: "Access All AI Models Under One Roof!",
    btnText: " Explore Nily AI LLM Comparison",
    gif: "../../public/assets/gif/main-page/llm-compare.gif",
    order:1,
    text:
      "Access and compare LLMs like DeepSeek R1, Chat GPT 4o, Perplexity, Gemini 1.5 Pro, Claude 3.5, Sonnet, Mistral Large, and Llama 3.1 and 20+ more AI Assistant models all in one place with reasonable pricing."
  }
];

const SectionFive1 = () => {
  return (
    <div className="flex justify-center bg-white py-20">
      <div className="grid md:grid-cols-2 items-center px-4 sm:px-0 gap-12 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1504px]">
        <div className="text-left">
          <p className="text-4xl lg:text-5xl font-bold text-[#213B41] mb-8">
            Work Smarter, Not Harder!
          </p>
          <p className="text-xl text-[#6C6C6C] mb-8">
            Access the best chrome AI sidebar on any web page. Nily AI Sidebar
            empowers you to access advanced AI assistants in one place to chat,
            code, write, read, summarize, OCR, and translate any web page with
            ease.
          </p>
          <div>
            <div className="inline-flex items-center justify-center px-5 py-3 rounded-md cursor-pointer bg-[#FC6423] text-white hover:bg-[#213B41] transition ease-in-out duration-300">
              <a href="#">Explore Nily AI Sidebar</a>
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
          <img
            src="../../public/assets/gif/main-page/ai-sidebar.gif"
            className="rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFive1;
