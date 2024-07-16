import React from "react";
import { logo, shopping, mail } from "../images";
import { useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet.jsx"


const NavBar = () => {

  const totalCard = useSelector((state) => state.card.totalCard);
 
  
  return (
    <>
      <div className=" min-w-[400px] max-w-f bg-transparent w-full flex-wrap   grid lg:grid-cols-3 sm:grid-cols-2 justify-around  mb-5 container ">

        <div className=" min-w-[300px] lg:max-sm w-full sm:hidden xl:flex  gap-2 items-center content-center   ">
          <img
            className=" mix-w-[300px] sm:hidden md:flex mt-1 h-4  flex justify-center content-center items-center  "
            src={mail}
          />
          <p className=" flex items-center text-xl sm:text-[5px lg:text-xl hover:underline underline-offset-4">
            romofyi@gmail.com
          </p>
        </div>

        <div  className="grid-cols-1 w-full   justify-center   ">

          
          <img  src={logo} />

        </div>

        <div className=" sm:ms-20 grid-cols-1 w-full flex sm:items-end sm:content-end  items-center content-center gap-5">
         <SheetTrigger>
         <div >

         <p className=" absolute text-white font-bold p-1 w-8 h-8 flex text-center justify-center  items-end content-center   top-2 z-0 ml-7 rounded-full bg-red-500 ">{totalCard?.length}</p>
         <img className=" z-1 relative duration-200 active:scale-75 size-9" src={shopping} />
         </div>
          
          </SheetTrigger> 
          <button className="hover:bg-[#f2c119] ml-5 px-4 rounded-full bg-[#183661]   ">
            <p id="btn1" className="  text-xl">
              Order Now
            </p>
          </button>
        </div>



      </div>

     

    </>
  );
};

export default NavBar;
