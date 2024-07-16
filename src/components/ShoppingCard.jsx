import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet.jsx";
import { HiOutlinePlus } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCard, deleCard } from "../slice/slice.js";

const ShoppingCard = () => {
  const pto = "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg";
  const [quantity, setQuantity] = useState({ id: null, quantity: 1 });

  const dispatch = useDispatch();
  const totalCard = useSelector((state) => state.card.totalCard);
  

  const increaseQuantity = () => {
    console.log("increase");
    setQuantity((pre) => {
      return { ...pre, quantity: quantity.quantity + 1 };
    });
  };

  const decreaseQuantity = () => {
    console.log("decrease");
    if (quantity.quantity > 1)
      setQuantity((pre) => {
        return { ...pre, quantity: quantity.quantity - 1 };
      });
  };

  return (
    <>
      <SheetContent className=" overflow-y-scroll !py-0 ">
        <SheetHeader>
          <SheetTitle className='  text-start mb-3'>Your Card</SheetTitle>
        </SheetHeader>
        <SheetDescription>

       

        {totalCard.map((card, index) => (
          <div
            key={index}
            id="shoppingCard"
            className="  flex basis-3 rounded-lg mb-5 border border-gray-100 bg-white shadow-lg  gap-3"
          >
            <div className=" basis-1/3">
              <img className=" size-20 m-2" src={card.payload.image} />{" "}
            </div>

            <div className=" basis-2/3">
              <h3 className=" text-justify line-clamp-1">
                {card.payload.title}
              </h3>
              <p className=" text-justify text-gray-400">
                {card.payload.category}
              </p>

              <div className=" flex mt-2 p-2 justify-between">
                <p className="  font-bold text-gray-500">
                  $ {card.payload.price}
                </p>
                <p className=" flex gap-3  content-center items-center">
                  <span
                    onClick={() => quantity.quantity > 1 && decreaseQuantity()}
                  >
                    <FiMinus />
                  </span>
                  <span className=" ">{quantity.quantity}</span>
                  <span onClick={() => increaseQuantity()}>
                    <HiOutlinePlus />
                  </span>
                </p>
              </div>
            </div>



          </div>

        ))}
 </SheetDescription>
      
<div className=" sticky  pb-5 bottom-0 overscroll-x-none bg-white z-1 pt-5  border-gray-500  h-auto   w-full   ">
       <div className="  flex justify-between ">
         <p className=" text-gray-800 font-semibold text-xl "> Total Price</p>
         <p className=" text-gray-800 text-xl font-semibold mr-3"> $ 500</p>
       </div>

       <div className="  flex justify-between ">
         <p className=" text-gray-600 font-semibold "> Total Item</p>
         <p className=" text-xl mr-3"> {totalCard?.length}</p>
       </div>
         
         
         <button className="text-white w-full mt-3  text-lg  grid-cols-1   bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-2 py-1  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Order Now
          </button>
         </div>
         
        
        
       
        
      </SheetContent>
    </>
  );
};

export default ShoppingCard;
