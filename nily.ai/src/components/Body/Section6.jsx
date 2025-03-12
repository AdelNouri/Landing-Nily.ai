import { useState } from "react";

const Card = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const circleSize = 170; // مقدار موردنظر برای اندازه دایره

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="relative bg-white p-6 h-full w-[35%] mr-6 rounded-lg border-l-8 border-[rgb(222,121,50)] overflow-hidden hover:shadow-lg transition duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* افکت دایره‌ای */}
      {isVisible &&
        <div
          className="absolute pointer-events-none transition duration-300"
          style={{
            top: position.y - circleSize / 2,
            left: position.x - circleSize / 2,
            width: circleSize,
            height: circleSize,
            background:
              "radial-gradient(circle, rgba(255, 165, 0, 0.1) 0%, rgba(255, 165, 0, 0.00) 70%)", // گرادیانت شعاعی برای مرکز پر رنگ‌تر و حاشیه‌ها کم رنگ‌تر
            borderRadius: "50%",
            clipPath: "circle(50%)",
            backdropFilter: "blur(10px)" // محو کردن با بلور
          }}
        />}
      <div className="relative">
        <div className="flex justify-center">
          <div>
            <p className="text-xl text-[#213B41] font-semibold text-left">
              AI Video Generator (Coming soon)
            </p>
            <p className="text-left text-[#6C6C6C] text-lg mt-2">
              Nily AI Video Generator creates captivating videos by transforming
              text, images, and audio into dynamic visual content.
            </p>
          </div>
          <div className="flex items-start p-2 h-9 bg-[rgba(222,121,50,0.063)] rounded-md text-[#DE7932]">
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
              class="lucide lucide-file-video2 w-5 h-5"
            >
              <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <rect width="8" height="6" x="2" y="12" rx="1" />
              <path d="m10 15.5 4 2.5v-6l-4 2.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card2 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const circleSize = 170; // مقدار موردنظر برای اندازه دایره

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="relative bg-white p-6 rounded-lg border-l-8 border-[rgb(244,111,113)] overflow-hidden hover:shadow-lg transition duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* افکت دایره‌ای */}
      {isVisible &&
        <div
          className="absolute pointer-events-none transition duration-300"
          style={{
            top: position.y - circleSize / 2,
            left: position.x - circleSize / 2,
            width: circleSize,
            height: circleSize,
            background:
              "radial-gradient(circle, rgba(255, 165, 0, 0.1) 0%, rgba(255, 165, 0, 0.00) 70%)", // گرادیانت شعاعی برای مرکز پر رنگ‌تر و حاشیه‌ها کم رنگ‌تر
            borderRadius: "50%",
            clipPath: "circle(50%)",
            backdropFilter: "blur(10px)" // محو کردن با بلور
          }}
        />}
      <div className="flex justify-between relative">
        <div>
          <p className="text-xl text-[#213B41] font-semibold text-left">
            AI WhatsApp Integration (Coming soon)
          </p>
          <p className="text-left text-[#6C6C6C] text-lg mt-2">
            Nily AI Assistant WhatsApp Integration brings intelligent, real-time
            assistance directly to your chats for seamless communication.
          </p>
        </div>
        <div className="flex items-start p-2 h-9 bg-[rgba(244,111,113,0.063)] rounded-md text-[#F46F71]">
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
            class="lucide lucide-message-square-more w-5 h-5"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h.01" />
            <path d="M12 10h.01" />
            <path d="M16 10h.01" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Card3 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const circleSize = 170; // مقدار موردنظر برای اندازه دایره

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="relative bg-white p-6 rounded-lg border-l-8 border-[rgb(33,58,64)] overflow-hidden hover:shadow-lg transition duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* افکت دایره‌ای */}
      {isVisible &&
        <div
          className="absolute pointer-events-none transition duration-300"
          style={{
            top: position.y - circleSize / 2,
            left: position.x - circleSize / 2,
            width: circleSize,
            height: circleSize,
            background:
              "radial-gradient(circle, rgba(255, 165, 0, 0.1) 0%, rgba(255, 165, 0, 0.00) 70%)", // گرادیانت شعاعی برای مرکز پر رنگ‌تر و حاشیه‌ها کم رنگ‌تر
            borderRadius: "50%",
            clipPath: "circle(50%)",
            backdropFilter: "blur(10px)" // محو کردن با بلور
          }}
        />}
      <div className="flex justify-between relative">
        <div>
          <p className="text-xl text-[#213B41] font-semibold text-left">
            AI bot
          </p>

          <p className="text-left text-[#6C6C6C] text-lg mt-2">
            Personal AI Bot delivers tailored assistance, automating tasks and
            providing insights customized to your needs
          </p>
        </div>
        <div className="flex items-start p-2 h-9 bg-[rgba(33,58,64,0.063)] rounded-md text-[rgb(33,58,64)]">
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
            class="lucide lucide-bot w-5 h-5"
          >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Card4 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const circleSize = 170; // مقدار موردنظر برای اندازه دایره

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="relative bg-white p-6 rounded-lg border-l-8  border-[rgb(53,94,108))] overflow-hidden hover:shadow-lg transition duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* افکت دایره‌ای */}
      {isVisible &&
        <div
          className="absolute pointer-events-none transition duration-300"
          style={{
            top: position.y - circleSize / 2,
            left: position.x - circleSize / 2,
            width: circleSize,
            height: circleSize,
            background:
              "radial-gradient(circle, rgba(255, 165, 0, 0.1) 0%, rgba(255, 165, 0, 0.00) 70%)", // گرادیانت شعاعی برای مرکز پر رنگ‌تر و حاشیه‌ها کم رنگ‌تر
            borderRadius: "50%",
            clipPath: "circle(50%)",
            backdropFilter: "blur(10px)" // محو کردن با بلور
          }}
        />}
      <div className="flex justify-between relative">
        <div>
          <p className="text-xl text-[#213B41] font-semibold text-left">
            Humanizer (Coming soon)
          </p>
          <p className="text-left text-[#6C6C6C] text-lg mt-2">
            AI Content Humanizer refines written text, making it more natural,
            engaging, and relatable for human audiences.
          </p>
        </div>
        <div className="flex items-start p-2 h-9 bg-[rgba(53,94,108,0.063)] rounded-md text-[rgb(53,94,108)]">
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
            class="lucide lucide-person-standing w-5 h-5"
          >
            <circle cx="12" cy="5" r="1" />
            <path d="m9 20 3-6 3 6" />
            <path d="m6 8 6 2 6-2" />
            <path d="M12 10v4" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default function App() {
  return (
    <div className="relative h-200 w-full flex items-center justify-center bg-[#ffe2bc]">
      <div
        className="absolute inset-0 w-full h-full opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, #213B41 1px, transparent 1px), linear-gradient(to bottom, #213B41 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div
        className="absolute inset-0 w-full h-full py-25"
        style={{
          background:
            "radial-gradient(circle, rgba(237, 241, 251,0.7) 100%, rgba(237, 241, 251,0.7) 100%, rgba(237, 241, 251,1) 100%)"
        }}
      >
        <div className="flex justify-center">
          <div className="flex justify-between w-[1280px] h-[572px]">
            <div className="font-bold text-6xl w-[33%] text-[#213B41] text-left mt-23">
              <p>Exciting</p>
              <p>Features on</p>
              <p>the Horizon!</p>
            </div>
            <div className="flex w-[67%] ml-2">
              <Card />
              <div className="w-[65%] grid grid-cols-1 gap-y-6">
                {<Card2 />}
                {<Card3 />}
                {<Card4 />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
