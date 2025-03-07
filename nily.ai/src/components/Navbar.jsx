import { useEffect, useState } from "react";
import Panel from "./Panel";
import { useContext } from "react";
import { Context } from "../context/context.js";

const Navbar = () => {
  const { panel, setPanel } = useContext(Context);
  return (
    <>
    <div className=" bg-white pl-3 pr-4 md:pl-7 md:pr-5 fixed w-12/12 shadow-md text-slate-700">
      <div className="flex justify-between py-5 md:py-4 sm:ml-10 sm:mr-10 2xl:ml-44 2xl:mr-24">
        <div className="flex md:justify-start items-center">
          <img src="../../public/assets/icon.png" alt="icon" className="w-11"/>
          <a className="text-orange-500 font-bold ml-1 text-2xl">Nily AI</a>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center md:ml-2.5 ">
          <div
            className="flex mr-4 ml-11 hover:text-orange-500"
            onMouseEnter={() => {
              setPanel(true);
            }}
          >
            <a href="#" className="mr-1 hover:text-orange-500">
              Products
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 mt-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <a href="#" className="mx-4 hover:text-orange-500">
            Pricing
          </a>
          <a href="#" className="mx-4 hover:text-orange-500">
            Wall Of Love
          </a>
          <a href="#" className="ml-4 hover:text-orange-500">
            Blog
          </a>
        </div>
        <div className="hidden md:flex md:justify-end md:items-center">
          <h3 className="flex justify-center items-center border border-orange-500 rounded-full h-11 w-32 font-bold mr-4 hover:border-2 transition duration-400">
            Login
          </h3>

          <h3 className="flex items-center bg-orange-500 text-white rounded-full py-2.5 px-6 font-bold hover:bg-slate-800 transition ease-out duration-400">
            Get Strarted
          </h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 2 19 15" strokeWidth="1.18" stroke="currentColor" className="size-6 text-black md:hidden cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


      </div>
    </div>
      {panel ? <Panel /> : null}
      </>
  );
};

export default Navbar;
