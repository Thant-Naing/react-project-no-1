import React, { useEffect, useState } from "react";
import { logo, shopping, mail, shirt } from "../images";
import { useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet.jsx"
import DropdownNav from "./DropdownNav.jsx";


const NavBar = () => {

  const totalCard = useSelector((state) => state.totalCard.totalCard);
  // const [show, setShow] = useState(true);
 
  // let lastScrollTop = 0;
  // const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // useEffect(() => {
  //     const handleScroll = () => {
  //         const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //         if (scrollTop > lastScrollTop) {
  //             setShow(true); // Scroll down
  //         } else {
  //             setShow(false); // Scroll up
  //         }
  //         lastScrollTop = scrollTop;
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  
//   const test = () => {
// lastScrollTop=document.documentElement.scrollTop

// if(lastScrollTop > scrollTop){
//   setShow(true)
// } else {
//   setShow(false)
// }

//   }


//     console.log(show)
//     window.addEventListener('scroll', test);
    
  
    
  return (
    <>
      <div className={`    max-w-full  mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 py-3 md:py-5 bg-gray-500 items-center`}>



        <div className=" hidden sm:block mx-auto  ">
          <div className=" flex gap-2 items-center ">
          <img
            className=" mix-w-[300px]  md:flex mt-1 h-4  flex justify-center content-center items-center  "
            src={mail}
          />
          <p className=" flex items-center text-xl sm:text-[5px lg:text-xl hover:underline underline-offset-4">
            romofyi@gmail.com
          </p>
          </div>
        </div>

        <div className=" ms-3 sm:hidden">
           <DropdownNav/>
        </div>



        <div  className="  md:block w-full     ">
          <img  className=" w-sm sm:w-md md:w-auto mx-auto" src={logo} />
        </div>

        <div className=" flex items-end mr-5 md:mr-16 mx-auto   ">
         <SheetTrigger>
         <div className="" >
         {totalCard?.length >0 && <p className=" absolute text-white font-bold p-1 w-7 h-7 flex text-center justify-center  items-end content-center   top-1 sm:top-2 z-0 ml-7  rounded-full bg-red-500 ">{totalCard?.length}</p>}
         <img className=" z-1 relative duration-200 active:scale-75 size-9" src={shopping} />
         </div>
          </SheetTrigger> 
        
        </div>



      </div>

     

    </>
  );
};

export default NavBar;
