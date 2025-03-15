let solutions = [
  {
    title: "aiSdebar",
    img: "../../public/assets/gif/main-page/ai-sidebar.gif",
    text:
      "Access 20+ advanced AI assistants in one convenient platform,allowing you to chat, code, write, read, summarize, perform OCR,and translate web pages!"
  },
  {
    title: "llmComparison",
    img: "../../public/assets/gif/main-page/llm-compare.gif",
    text:
      " Access and compare LLMs like DeepSeek R1, Chat GPT 4o, Perplexity,Gemini 1.5 Pro, Claude 3.5, Sonnet, Mistral Large, Llama 3.1, and 20+ more AI Assistant models all in one place!"
  },
  {
    title: "aiEmailWriter",
    img: "../../public/assets/gif/AI-email-assistant/2.png",
    text:
      "Write and reply to emails 10x faster in any language using your personalized knowledge base!"
  },
  {
    title: "aiPdfReader",
    img: "../../public/assets/gif/main-page/pdf-reader.gif",
    text:
      "With AI PDF Summarizer. easily analyze, summarize, and interact with any PDF!"
  },
  {
    title: "aiWritingAssistant",
    img: "../../public/assets/gif/main-page/writing-assisstant.gif",
    text:
      "Generate content and ideas, write, research, optimize, correct grammar, tone, and much more 10x faster!"
  },
  {
    title: "aiImageGenerator",
    img: "../../public/assets/gif/main-page/image-generator.gif",
    text:
      "Create unique and captivating images, illustrations, and designs with ease!"
  }
];

let infoBoxes = [
  {
    title: "Developer",
    sections: [
      {
        title: "Write and Debug Code Faster",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-[#DE7931]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        ),
        text:
          "Nily AI assistant can help you generate code snippets, fix bugs, and refactor your code for better readability and performance. Whether you're stuck on a tricky error or need help implementing a specific feature, Nily AI Assistant acts as your coding partner, offering real-time suggestions and solutions."
      },
      {
        title: "Automate Repetitive Tasks",
        icon: (
          <svg
            class="h-6 w-6 text-[#DE7931]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}<polyline points="16 18 22 12 16 6" />{" "}
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
        text:
          "Save time by letting Nily AI Assistant handle tedious tasks like writing boilerplate code, generating unit tests, or formatting your code. This frees you up to focus on solving complex problems and building innovative features."
      },
      {
        title: "Get Instant Technical Insights",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M9 9l1 0" />
            <path d="M9 13l6 0" />
            <path d="M9 17l6 0" />
          </svg>
        ),
        text:
          "Need to quickly understand a new framework, library, or language? Nily AI Assistant can break down concepts, suggest best practices, or recommend relevant tools, ensuring you stay productive while learning on the go."
      },
      {
        title: "Get Instant Technical Insights",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
        ),
        text:
          "Need to quickly understand a new framework, library, or language? Nily AI Assistant can break down concepts, suggest best practices, or recommend relevant tools, ensuring you stay productive while learning on the go."
      }
    ]
  },
  {
    title: "Entrepreneurs",
    sections: [
      {
        title: "Streamline Administrative Tasks",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        text:
          "Nily AI Assistant can handle tedious tasks like scheduling meetings, writing emails, and managing your content creation. By automating these processes, you’ll have more time to focus on growing your business instead of getting bogged down in day-to-day logistics."
      },
      {
        title: "Accelerate Market Research",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        ),
        text:
          "Nily AI Assistant can analyze industry trends, competitor strategies, and customer preferences, giving you actionable insights faster. This helps you make smarter decisions, identify new opportunities, and stay ahead of the competition."
      },
      {
        title: "Optimize Planning",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        text:
          "Nily AI Assistant can help you with creating business plan, strategy, brainstorming ideas efficiently. With better insights, you can allocate resources wisely and reduce risks while scaling your business."
      }
    ]
  },
  {
    title: "Marketers",
    sections: [
      {
        title: "Generate High-Quality Content Faster",
        icon: (
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
            class="lucide lucide-clock w-6 h-6 text-[#DE7931]"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
        text:
          "Nily AI Assistant can help you create engaging copy for blogs, social media posts, email campaigns, and ads in minutes. Whether you need creative headlines or SEO-optimized articles, AI can assist in crafting content that resonates with your audience."
      },
      {
        title: "Analyze Data for Smarter Campaigns",
        icon: (
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
            class="lucide lucide-pencil w-6 h-6 text-[#DE7931]"
          >
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            <path d="m15 5 4 4" />
          </svg>
        ),
        text:
          "Nily AI Assistant excels at processing data quickly, turning raw metrics into actionable insights. Use it to analyze customer behavior, predict trends, or optimize ad performance, so you can make data-driven decisions to maximize ROI."
      },
      {
        title: "Personalize Customer Experiences",
        icon: (
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
            class="lucide lucide-lightbulb w-6 h-6 text-[#DE7931]"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        ),
        text:
          "Nily AI Assistant can help you create hyper-personalized marketing strategies by segmenting audiences, tailoring messaging, and automating outreach. Delivering the right message to the right person at the right time has never been easier."
      },
      {
        title: "Automate Time-Consuming Tasks",
        icon: (
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
            class="lucide lucide-chart-bar w-6 h-6 text-[#DE7931]"
          >
            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
            <path d="M7 16h8" />
            <path d="M7 11h12" />
            <path d="M7 6h3" />
          </svg>
        ),
        text:
          "From scheduling social media posts to drafting EDMs, Nily AI Assistant can automate repetitive tasks, saving you valuable time. This allows you to focus on strategy, creativity, and building deeper customer relationships."
      }
    ]
  },
  {
    title: "Analyze Data for Smarter Campaigns",
    sections: [
      {
        title: "Streamline Administrative Tasks",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        text:
          "Nily AI Assistant can handle tedious tasks like scheduling meetings, writing emails, and managing your content creation. By automating these processes, you’ll have more time to focus on growing your business instead of getting bogged down in day-to-day logistics."
      },
      {
        title: "Accelerate Market Research",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        ),
        text:
          "Nily AI Assistant can analyze industry trends, competitor strategies, and customer preferences, giving you actionable insights faster. This helps you make smarter decisions, identify new opportunities, and stay ahead of the competition."
      },
      {
        title: "Optimize Planning",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        text:
          "Nily AI Assistant can help you with creating business plan, strategy, brainstorming ideas efficiently. With better insights, you can allocate resources wisely and reduce risks while scaling your business."
      },
      {
        title: "Optimize Planning",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        text:
          "Nily AI Assistant can help you with creating business plan, strategy, brainstorming ideas efficiently. With better insights, you can allocate resources wisely and reduce risks while scaling your business."
      }
    ]
  },
  {
    title: "Entrepreneurs",
    sections: [
      {
        title: "Streamline Administrative Tasks",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        text:
          "Nily AI Assistant can handle tedious tasks like scheduling meetings, writing emails, and managing your content creation. By automating these processes, you’ll have more time to focus on growing your business instead of getting bogged down in day-to-day logistics."
      },
      {
        title: "Accelerate Market Research",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        ),
        text:
          "Nily AI Assistant can analyze industry trends, competitor strategies, and customer preferences, giving you actionable insights faster. This helps you make smarter decisions, identify new opportunities, and stay ahead of the competition."
      },
      {
        title: "Optimize Planning",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        text:
          "Nily AI Assistant can help you with creating business plan, strategy, brainstorming ideas efficiently. With better insights, you can allocate resources wisely and reduce risks while scaling your business."
      }
    ]
  },
  {
    title: "Entrepreneurs",
    sections: [
      {
        title: "Streamline Administrative Tasks",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        text:
          "Nily AI Assistant can handle tedious tasks like scheduling meetings, writing emails, and managing your content creation. By automating these processes, you’ll have more time to focus on growing your business instead of getting bogged down in day-to-day logistics."
      },
      {
        title: "Accelerate Market Research",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        ),
        text:
          "Nily AI Assistant can analyze industry trends, competitor strategies, and customer preferences, giving you actionable insights faster. This helps you make smarter decisions, identify new opportunities, and stay ahead of the competition."
      },
      {
        title: "Optimize Planning",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        text:
          "Nily AI Assistant can help you with creating business plan, strategy, brainstorming ideas efficiently. With better insights, you can allocate resources wisely and reduce risks while scaling your business."
      }
    ]
  },
  {
    title: "Entrepreneurs",
    sections: [
      {
        title: "Streamline Administrative Tasks",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        text:
          "Nily AI Assistant can handle tedious tasks like scheduling meetings, writing emails, and managing your content creation. By automating these processes, you’ll have more time to focus on growing your business instead of getting bogged down in day-to-day logistics."
      },
      {
        title: "Accelerate Market Research",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        ),
        text:
          "Nily AI Assistant can analyze industry trends, competitor strategies, and customer preferences, giving you actionable insights faster. This helps you make smarter decisions, identify new opportunities, and stay ahead of the competition."
      }
    ]
  },
  {
    title: "Entrepreneurs",
    sections: [
      {
        title: "Streamline Administrative Tasks",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        text:
          "Nily AI Assistant can handle tedious tasks like scheduling meetings, writing emails, and managing your content creation. By automating these processes, you’ll have more time to focus on growing your business instead of getting bogged down in day-to-day logistics."
      },
      {
        title: "Accelerate Market Research",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        ),
        text:
          "Nily AI Assistant can analyze industry trends, competitor strategies, and customer preferences, giving you actionable insights faster. This helps you make smarter decisions, identify new opportunities, and stay ahead of the competition."
      },
      {
        title: "Optimize Planning",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        text:
          "Nily AI Assistant can help you with creating business plan, strategy, brainstorming ideas efficiently. With better insights, you can allocate resources wisely and reduce risks while scaling your business."
      },
      {
        title: "Optimize Planning",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        text:
          "Nily AI Assistant can help you with creating business plan, strategy, brainstorming ideas efficiently. With better insights, you can allocate resources wisely and reduce risks while scaling your business."
      }
    ]
  },
  {
    title: "Entrepreneurs",
    sections: [
      {
        title: "Streamline Administrative Tasks",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        text:
          "Nily AI Assistant can handle tedious tasks like scheduling meetings, writing emails, and managing your content creation. By automating these processes, you’ll have more time to focus on growing your business instead of getting bogged down in day-to-day logistics."
      },
      {
        title: "Accelerate Market Research",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        ),
        text:
          "Nily AI Assistant can analyze industry trends, competitor strategies, and customer preferences, giving you actionable insights faster. This helps you make smarter decisions, identify new opportunities, and stay ahead of the competition."
      }
    ]
  },
  {
    title: "Entrepreneurs",
    sections: [
      {
        title: "Streamline Administrative Tasks",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        text:
          "Nily AI Assistant can handle tedious tasks like scheduling meetings, writing emails, and managing your content creation. By automating these processes, you’ll have more time to focus on growing your business instead of getting bogged down in day-to-day logistics."
      },
      {
        title: "Accelerate Market Research",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        ),
        text:
          "Nily AI Assistant can analyze industry trends, competitor strategies, and customer preferences, giving you actionable insights faster. This helps you make smarter decisions, identify new opportunities, and stay ahead of the competition."
      },
      {
        title: "Streamline Administrative Tasks",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        text:
          "Nily AI Assistant can handle tedious tasks like scheduling meetings, writing emails, and managing your content creation. By automating these processes, you’ll have more time to focus on growing your business instead of getting bogged down in day-to-day logistics."
      }
    ]
  },
  {
    title: "Entrepreneurs",
    sections: [
      {
        title: "Accelerate Market Research",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        ),
        text:
          "Nily AI Assistant can analyze industry trends, competitor strategies, and customer preferences, giving you actionable insights faster. This helps you make smarter decisions, identify new opportunities, and stay ahead of the competition."
      }
    ]
  },
  {
    title: "Entrepreneurs",
    sections: [
      {
        title: "Streamline Administrative Tasks",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        text:
          "Nily AI Assistant can handle tedious tasks like scheduling meetings, writing emails, and managing your content creation. By automating these processes, you’ll have more time to focus on growing your business instead of getting bogged down in day-to-day logistics."
      },
      {
        title: "Accelerate Market Research",
        icon: (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-6 w-6 text-[#DE7931]"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        ),
        text:
          "Nily AI Assistant can analyze industry trends, competitor strategies, and customer preferences, giving you actionable insights faster. This helps you make smarter decisions, identify new opportunities, and stay ahead of the competition."
      }
    ]
  }
];

let buttons = [
  {
    id: "Developer",
    title: "Developer",
    icon: (
      <svg
        className="h-6 w-6 mr-2 "
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}<polyline points="16 18 22 12 16 6" />{" "}
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    id: "Entepreneurs",
    title: "Entepreneurs",
    icon: (
      <svg
        class="h-6 w-6 mr-2 "
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />{" "}
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  },
  {
    id: "Marketers",
    title: "Marketers",
    icon: (
      <svg
        class="h-6 w-6 mr-2 "
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />{" "}
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  },
  {
    id: "Researchers",
    title: "Researchers",
    icon: (
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
        class="lucide lucide-graduation-cap w-6 h-6 mr-2"
      >
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    )
  },
  {
    id: "Customer",
    title: "Customer Services Reps",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-headphones w-6 h-6 mr-2"
      >
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    )
  },
  {
    id: "ContentCreators",
    title: "Content Creators",
    icon: (
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
        class="lucide lucide-pencil w-6 h-6 mr-2"
      >
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  },
  {
    id: "Analysts",
    title: "Analysts",
    icon: (
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
        class="lucide lucide-chart-no-axes-column-increasing w-6 h-6 mr-2"
      >
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    )
  },
  {
    id: "Students",
    title: "Students and Academics",
    icon: (
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
        class="lucide lucide-book-open w-6 h-6 mr-2"
      >
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </svg>
    )
  },
  {
    id: "SocialMedia",
    title: "Social Media Managers",
    icon: (
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
        class="lucide lucide-instagram w-6 h-6 mr-2"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  },
  {
    id: "ProductManagers",
    title: "Product Managers",
    icon: (
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
        class="lucide lucide-package-search w-6 h-6 mr-2"
      >
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
        <path d="m7.5 4.27 9 5.15" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" x2="12" y1="22" y2="12" />
        <circle cx="18.5" cy="15.5" r="2.5" />
        <path d="M20.27 17.27 22 19" />
      </svg>
    )
  },
  {
    id: "SalesProfessionals",
    title: "Sales Professionals",
    icon: (
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
        class="lucide lucide-weight w-6 h-6 mr-2"
      >
        <circle cx="12" cy="5" r="3" />
        <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
      </svg>
    )
  },
  {
    id: "HRProfessionals",
    title: "HR Professionals",
    icon: (
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
        class="lucide lucide-speech w-6 h-6 mr-2"
      >
        <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
        <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
        <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
      </svg>
    )
  }
];

let cards = [
  {
    title: "AI Sidebar",
    text: "Access the best chrome AI sidebar on any web page!",
    icon: (
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
        class="lucide lucide-panel-right-dashed w-5 h-5"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M15 14v1" />
        <path d="M15 19v2" />
        <path d="M15 3v2" />
        <path d="M15 9v1" />
      </svg>
    )
  },
  {
    title: "AI Email Assistant",
    text: "Compose professional emails without lifting a finger!",
    icon: (
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
        class="lucide lucide-mail w-5 h-5"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    title: "AI Writing Assistant",
    text: "Compose professional emails without lifting a finger!",
    icon: (
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
        class="lucide lucide-mail w-5 h-5"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    title: "AI Post Generator",
    text: "Create just the right social media posts with a single tap!",
    icon: (
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
        class="lucide lucide-pen-tool w-5 h-5"
      >
        <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
        <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
        <path d="m2.3 2.3 7.286 7.286" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    )
  },
  {
    title: "AI Carousel Generator",
    text: "Create engaging posts with AI post generator!",
    icon: (
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
        class="lucide lucide-gallery-horizontal-end w-5 h-5"
      >
        <path d="M2 7v10" />
        <path d="M6 5v14" />
        <rect width="12" height="18" x="10" y="3" rx="2" />
      </svg>
    )
  },
  {
    title: "AI PDF Reader",
    text: "Make PDF reading a breeze with Nily AI PDF Summarizer!",
    icon: (
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
        class="lucide lucide-file-text w-5 h-5"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    )
  },
  {
    title: "AI Image Generator",
    text: "Create any image with a simple prompt!",
    icon: (
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
        class="lucide lucide-image w-5 h-5"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    )
  },
  {
    title: "Compare LLMs",
    text: "Extract any information from a YouTube video in seconds!",
    icon: (
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
        class="lucide lucide-youtube w-5 h-5"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    )
  }
];

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

let comments = [
  {
    name: "marcelon costello",
    commentText: "Easy to use and very effective.",
    profile:
      "https://lh3.googleusercontent.com/a/ACg8ocL5-b-fO-kGcoDt2WlBNVZpe0JX6HkpOcwpJi1K5RayXl5-ig=s48-w48-h48"
  },
  {
    name: "Md Monirul Islam",
    commentText: "Perfect",
    profile:
      "https://lh3.googleusercontent.com/a-/ALV-UjWCgUl_XqIHcXVqwTL5k76vM9EqO5SAIZ2J5mWyWC83LZ-dffDA=s48-w48-h48"
  },
  {
    name: "Natascha",
    commentText: "Works great!",
    profile:
      "https://lh3.googleusercontent.com/a/ACg8ocKVLRQ6FNOEkWAn3p9-F-FvpSN7DbNoWlOr-yqUIbMm27Axrg=s48-w48-h48"
  },
  {
    name: "Shahrzad Ramtinfard",
    commentText: "very good",
    profile:
      "https://lh3.googleusercontent.com/a-/ALV-UjUbNUFpoo4JRUO0_tMZXphY7b39mSx1fJ-xsHAXcquA_BGi6Cv1=s48-w48-h48"
  },
  {
    name: "shelrai boltem",
    commentText:
      "The AI suggestions are usually spot-on. Makes my job much easier.",
    profile:
      "https://lh3.googleusercontent.com/a-/ALV-UjX6F8AceyGIzra0M-wXH1umjQcRgn-xdsYGJsRgha7xj7IzFqc=s48-w48-h48"
  },
  {
    name: "Bernadette Cobb",
    commentText: "Excellent extension. Saves me a lot of time daily.",
    profile:
      "https://lh3.googleusercontent.com/a-/ALV-UjXPIFuxYWRiIE9VYpX78uWHzU_33S8jYHCymtxpfEuYEc6WDuk=s48-w48-h48"
  }
];

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

export {
  solutions,
  infoBoxes,
  buttons,
  cards,
  sectionsInfo,
  comments,
  questions
};
