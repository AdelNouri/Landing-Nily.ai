import { useState } from "react";
import { motion } from "framer-motion";

const Card1 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const circleSize = 200;

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
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full lg:h-full lg:w-[35%] mr-6 mt-8 md:mt-0 mb-6 md:mb-0"
    >
    <div
      className="relative bg-white p-6  w-full h-full rounded-lg border-l-8 border-[rgb(222,121,50)] overflow-hidden hover:shadow-lg transition duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isVisible &&
        <div
          className="absolute pointer-events-none transition duration-300"
          style={{
            top: position.y - circleSize / 2,
            left: position.x - circleSize / 2,
            width: circleSize,
            height: circleSize,
            background:
              "radial-gradient(circle, rgba(255, 165, 0, 0.09) 0%, rgba(255, 165, 0, 0.00) 70%)",
            borderRadius: "50%",
            clipPath: "circle(50%)",
            backdropFilter: "blur(10px)"
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
   </motion.div>
  );
};

const Card2 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const circleSize = 200;
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
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className=""
    >
      <div
        className="relative bg-white p-6 h-full rounded-lg border-l-8 border-[rgb(244,111,113)] overflow-hidden hover:shadow-lg transition duration-300"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {isVisible &&
          <div
            className="absolute pointer-events-none transition duration-300"
            style={{
              top: position.y - circleSize / 2,
              left: position.x - circleSize / 2,
              width: circleSize,
              height: circleSize,
              background:
                "radial-gradient(circle, rgba(255, 165, 0, 0.09) 0%, rgba(255, 165, 0, 0.00) 70%)",
              borderRadius: "50%",
              clipPath: "circle(50%)",
              backdropFilter: "blur(10px)"
            }}
          />}
        <div className="flex justify-between relative">
          <div>
            <p className="text-xl text-[#213B41] font-semibold text-left">
              AI WhatsApp Integration (Coming soon)
            </p>
            <p className="text-left text-[#6C6C6C] text-lg mt-2">
              Nily AI Assistant WhatsApp Integration brings intelligent,
              real-time assistance directly to your chats for seamless
              communication.
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
    </motion.div>
  );
};

const Card3 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const circleSize = 200;

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
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className=""
    >
      <div
        className="relative bg-white p-6 h-full rounded-lg border-l-8 border-[rgb(33,58,64)] overflow-hidden hover:shadow-lg transition duration-300"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {isVisible &&
          <div
            className="absolute pointer-events-none transition duration-300"
            style={{
              top: position.y - circleSize / 2,
              left: position.x - circleSize / 2,
              width: circleSize,
              height: circleSize,
              background:
                "radial-gradient(circle, rgba(255, 165, 0, 0.09) 0%, rgba(255, 165, 0, 0.00) 70%)",
              borderRadius: "50%",
              clipPath: "circle(50%)",
              backdropFilter: "blur(10px)"
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
    </motion.div>
  );
};

const Card4 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const circleSize = 200;

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
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}
      className=""
    >
      <div
        className="relative bg-white h-full p-6 rounded-lg border-l-8  border-[rgb(53,94,108))] overflow-hidden hover:shadow-lg transition duration-300"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {isVisible &&
          <div
            className="absolute pointer-events-none transition duration-300"
            style={{
              top: position.y - circleSize / 2,
              left: position.x - circleSize / 2,
              width: circleSize,
              height: circleSize,
              background:
                "radial-gradient(circle, rgba(255, 165, 0, 0.09) 0%, rgba(255, 165, 0, 0.00) 70%)",
              borderRadius: "50%",
              clipPath: "circle(50%)",
              backdropFilter: "blur(10px)"
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
    </motion.div>
  );
};
const Section6 = () => {
  return (
    <div className="relative md:px-0 min-h-[764px] h-auto sm:h-[1079px] md:h-[984px] lg:h-[876px] xl:h-[764px] w-full flex items-center justify-center bg-[#f4f1ed]">
      <div
        className="absolute inset-0 w-full h-full opacity-4"
        style={{
          backgroundImage:
            "linear-gradient(to right, #213B41 1px, transparent 1px), linear-gradient(to bottom, #213B41 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      <div className="w-full py-16">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-16 w-[608px] md:h-[792px] md:w-[736px] lg:h-[684px] lg:w-[992px] xl:h-[600px] 2xl:h-[572px] xl:w-[1280px] ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="font-bold text-4xl px-4 md:px-0 md:text-5xl lg:text-6xl lg:w-[30%] text-[#213B41] text-left lg:sticky lg:mt-24 relative"
            >
                <p>Exciting Features on the Horizon!</p>
            </motion.div>
            <div className="md:flex px-4 md:px-0 lg:w-[70%]">
              <Card1 />
              <div className="lg:w-[65%] grid grid-cols-1 gap-6">
                <Card2 />
                <Card3 />
                <Card4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
