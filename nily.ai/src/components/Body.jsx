import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Body = () => {
  return (
    <div className="bg-[#EDF1FB] w-full">
      <div className="relative h-screen w-full flex items-center mt-17 justify-center">
        <div className="absolute bg-opacity-100 inset-0 w-full h-full bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:33px_33px] opacity-50" />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle, rgba(237, 241, 251,0.2) 20%, rgba(237, 241, 251,0.7) 60%, rgba(237, 241, 251,1) 8%)"
          }}
        >
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </div>
    </div>
  );
};

export default Body;
