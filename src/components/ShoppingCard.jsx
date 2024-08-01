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
import empty_card from "../../undraw_empty_cart_co35.svg"
import { increase } from "../slice/slice.js";
import Swal from 'sweetalert2'



const ShoppingCard = () => {
  const [cardList, setCardList] = useState(0);
  const totalCard = useSelector((state) => state.totalCard.totalCard);
  const dispatch = useDispatch();

  let totalCardPrice = [];
  
  totalCard?.map((pd) => totalCardPrice.push(pd.payload.price*pd.payload.quantity) )
  const sum = totalCardPrice.reduce(add, 0); 
  function add(accumulator, a) {
  return accumulator + a;
}


  
 

  
  
   
   
  const increaseQuantity = (id) => {
       
      dispatch(increase({id,type:"increase"}))
     
  };

  const decreaseQuantity = (id) => {
    dispatch(increase({id,type:"decrease"}))
  };

  const order = () => {
    let timerInterval;
    Swal.fire({
      title: "Order...",
      html: "Order will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });

  }

  const removeCard = (id) => {


   dispatch(deleCard(id))
   
   
  }

  return (
    <>
      <SheetContent className=" overflow-y-scroll !py-0 ">
        <SheetHeader>
          <SheetTitle className='  text-start mb-3'>Your Card</SheetTitle>
        </SheetHeader>
        <SheetDescription>

       

        {totalCard?.map((card, index) => (
          <div
            key={index}
            id={card.payload.id}
            className="  select-none flex basis-3 rounded-lg mb-5 border border-gray-100 bg-white shadow-lg  gap-3"
          >
            <div className=" basis-1/3">
              <img className=" size-20 m-2" src={card.payload.image} />
            </div>

            <div className=" basis-2/3">
              <h3 className=" text-justify line-clamp-1">
                {card.payload.title}
              </h3>
              <div className=" flex justify-between">
              <p className=" text-justify text-gray-400">
                {card.payload.category}
              </p> 
              <button onClick={() => removeCard(card.payload.id)}  className=" px-2 active:scale-75 duration-200 text-red-500 ">remove</button>
              </div>

              <div className=" flex mt-2 p-2 justify-between">
                <p className="  font-bold text-gray-500">
                  $ {card.payload.price}
                </p>
                <p className=" flex gap-2 md:gap-3  content-center items-center">
                  <span
                    onClick={() =>  decreaseQuantity(card.payload.id)}
                  >
                    <FiMinus size={15} />
                  </span>

                  <span  className=" ">{card.payload.quantity}</span>
                  <span onClick={() => increaseQuantity(card.payload.id)}>
                    <HiOutlinePlus size={15} />
                  </span>
                </p>
              </div>
            </div>



          </div>

        ))}
 </SheetDescription>

 {totalCard.length > 0 ?
  <div className=" sticky  pb-5 bottom-0 overscroll-x-none bg-white z-1 pt-5  border-gray-500  h-auto   w-full   ">
       <div className="  flex justify-between ">
         <p className=" text-gray-800 font-semibold text-xl "> Total Price</p>
         <p className=" text-gray-800 text-xl font-semibold mr-3"> $ {sum.toFixed(2)}</p>
       </div>

       <div className="  flex justify-between ">
         <p className=" text-gray-600 font-semibold "> Total Item</p>
         <p className=" text-xl mr-3"> {totalCard?.length}</p>
       </div>
         
         
         <button onClick={() => order()} className="text-white w-full mt-3  text-lg  grid-cols-1   bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-2 py-1  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Order Now
          </button>
         </div> : 

         <div className=" container mt-32 ">
          <img src={empty_card}/>
          <p className=" text-center text-sm md:text-lg lg:text-xl font-bold text-indigo-400  mt-5">Your card is empty </p>
         </div>
         
         }
      

         
        
        
       
        
      </SheetContent>
    </>
  );
};

export default ShoppingCard;
