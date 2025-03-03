import { useEffect, useState } from "react";
import Panel from "./Panel";
import { useContext } from "react";
import { Context } from "../context/context.js";

const Navbar = () => {
  const { setFlag, flag } = useContext(Context);
  return (
    <>
    <div className=" bg-stone-50  px-8 fixed w-12/12 m-0 shadow-md text-slate-700">
      <div className="flex justify-between py-2 mx-44">
        <div className="flex justify-start items-center">
          <a className="text-orange-500 font-bold text-2xl">Nily AI</a>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="flex mr-4 ml-8 hover:text-orange-500"
            onMouseEnter={() => {
              setFlag(true);
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
        <div className="flex justify-end items-center py-2">
          <h3 className="border border-orange-500 rounded-full py-2 px-10 font-bold mr-4 hover:border-2 transition ease-out duration-400">
            Login
          </h3>

          <h3 className="bg-orange-500 text-orange-50 rounded-full py-2.5 px-6 font-bold hover:bg-slate-800 transition ease-out duration-400">
            Get Strarted
          </h3>
        </div>
      </div>

    </div>
      {flag ? <Panel /> : null}
      </>
  );
};

export default Navbar;
