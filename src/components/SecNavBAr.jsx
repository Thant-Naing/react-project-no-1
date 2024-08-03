import React from "react";
import Layout from "./Layout";
import { NavLink, useLocation } from "react-router-dom";

const SecNavBAr = () => {
     const cr = useLocation().pathname;
     
  return (
    <div className=" hidden sm:block max-w-full container    mx-auto  bg-[#183661]">
      <Layout>
        <div className="  grid sm:grid-cols-1 md:grid-cols-2 ">

          <div className="   max-w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 text-center font-semibold text-lg md:text-md  text-white">
            <NavLink to={"/"} className={`p-4 rounded-3xl hover:bg-[#f2c119] duration-200 ${cr == "/" && "bg-[#f2c119]" }  `}>
              HOME
            </NavLink>
            <NavLink to={"/home/about"} className={`p-4 rounded-3xl hover:bg-[#f2c119] duration-200 ${cr == "/home/about" && "bg-[#f2c119]" }  `}>
              ABOUT
            </NavLink>
            <NavLink to={"/home/product"} className={` rounded-3xl py-4 px-1 hover:bg-[#f2c119] duration-200 ${cr == "/home/product" && "bg-[#f2c119]" }  `}>
              PRODUCT
            </NavLink>
            <NavLink to={"/home/fashion"} className={`p-4 rounded-3xl hover:bg-[#f2c119] duration-200 ${cr == "/home/fashion" && "bg-[#f2c119]" }  `}>
              FASHION
            </NavLink>
            <NavLink to={"/home/new"} className={`p-4 rounded-3xl hover:bg-[#f2c119] duration-200 ${cr == "/home/new" && "bg-[#f2c119]" }  `}>
              NEWS
            </NavLink>
            <NavLink to={"/home/contact"} className={`p-4 rounded-3xl hover:bg-[#f2c119] duration-200 ${cr == "/home/contact" && "bg-[#f2c119]" }  `}>
              CONTACT 
            </NavLink>
          </div>

          {/* ............................ >> search Bar << .................. */}
          <div className=" hidden md:block container content-center items-center mx-auto">
            <form className="flex items-center max-w-sm mx-auto">
              
              <div className="relative z-0 w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-white text-gray-900 text-sm rounded-lg  w-full block  ps-10 p-1.5 outline-none "
                  placeholder="Search brand name..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#183661] p-2.5 ms-2 text-sm font-medium text-white   focus:outline-none focus:ring-blue-300  "
              >
                <svg
                  className="w-4 h-4 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SecNavBAr;
