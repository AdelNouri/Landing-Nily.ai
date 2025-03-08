import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../context/context.js";
import Panel from "./Panel";
import Menu from "./Menu.jsx";

const Navbar = () => {
  const { panel, setPanel, menu, setMenu } = useContext(Context);
  return (
    <>
    <div className=" bg-white pl-3 pr-3 md:pl-0 md:pr-0 lg:pl-7 lg:pr-5 fixed w-12/12 shadow-md text-slate-700">

      <div className="flex justify-between py-5 sm:ml-10 sm:mr-10 md:py-4 md:mr-0 md:ml-0 xl:mr-10 xl:ml-10 2xl:ml-44 2xl:mr-24">
        
        <div className="flex md:justify-start items-center">
          <img src="../../public/assets/icon.png" alt="icon" className="w-11"/>
          <a className="text-[#FC6423] font-bold ml-1 text-2xl">Nily AI</a>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center md:ml-0 lg:ml-2.5">
          <div
            className="flex lg:mr-4 lg:ml-11 hover:text-[#FC6423]"
            onMouseEnter={() => {
              setPanel(true);
            }}
          >
            <a href="#" className="mr-1 hover:text-[#FC6423]">
              Products
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 mt-1.5 mr-1 lg:mr-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <a href="#" className="mx-2 lg:ml-4 hover:text-[#FC6423]">
            Pricing
          </a>
          <a href="#" className="mx-2 lg:ml-4 hover:text-[#FC6423]">
            Wall Of Love
          </a>
          <a href="#" className="ml-2 lg:ml-4 hover:text-[#FC6423]">
            Blog
          </a>
        </div>
        <div className="hidden md:flex md:justify-end md:items-center">
          <h3 className="flex justify-center items-center border border-[#FC6423] rounded-full h-11 w-32 font-bold mr-2 lg:mr-4 hover:border-2 transition duration-400">
            Login
          </h3>

          <h3 className="flex items-center bg-[#FC6423] text-white rounded-full py-2.5 px-6 font-bold hover:bg-slate-800 transition ease-out duration-400">
            Get Strarted
          </h3>
        </div>
        {menu? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.10" stroke="currentColor" onClick={() => {setMenu(false)}} className="size-7 mt-1.5 mr-1 cursor-pointer md:hidden ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg> : 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-1 1 19 15" strokeWidth="1.18" stroke="currentColor" onClick={() => {setMenu(true)}} className="size-6 text-black md:hidden cursor-pointer mr-2 mt-0.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> 
          </svg> 
        }
      </div>
    </div>
      {panel ? <Panel/> : null}
      {menu? <Menu/> : null}
      </>
  );
};

export default Navbar;
