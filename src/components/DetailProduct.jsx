import React, {  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "./Layout";
import { products } from "../db/db";
import 'animate.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCard,deleCard } from "../slice/slice";



const DetailProduct = () => {
const { id } = useParams();
  const nav = useNavigate();
  const totalCard = useSelector((state) => state.totalCard.totalCard);
  const currentProduct = products.find((pd) => pd.id == id);
  const dispatch = useDispatch()
  const prevProduct = () => {

   
nav(`/home/detail/${id>1 ? id-1 : products.length}`)

  };

  const nextProduct = () => {
nav(`/home/detail/${id<products.length ? parseInt(id)+1 : 1}`)

  };

  const addCard = (id) => {
  
    const inCardItem =  totalCard.find((pd) => pd.payload.id==id )
         
    if(!!inCardItem){
         alert('item already added in your card');

    } else {
       const currentProduct = products.find((pd) => pd.id==id )
    
     dispatch(addToCard(currentProduct))
    }

   
  }

  return (

    <>

    <div className=" - overscroll-x-none w-auto overflow-hidden content-center items-center justify-center my-5   container grid sm:grid-cols-1 md:grid-cols-2 mx-auto">

    <div className=" mt-2 container content-center max-w-[400px] mx-auto  ">
        <img className=" container animate__animated animate__bounceInLeft  duration-700 hover:scale-75" src={currentProduct.image} />
      </div>

      <div className=" items-center content-center container mx-auto animate__animated animate__bounceInRight text-center mt-5   grid-cols-1">
        <h1 className=" text-lg sm:text-xl md:text-xl lg:text-4xl font-semibold ">
          {currentProduct.title}
        </h1>
        <p className=" sm:text-lg md:text-3xl lg:text-4xl text-justify  text-md">
          
          {currentProduct.description}
        </p>

        <div className="mt-10 flex justify-between items-center">
          <p className= "text-lg sm:text-xl md:text-3xl lg:text-6xl font-bold">
          ${currentProduct.price}
        </p>
        <button onClick={() => addCard(currentProduct.id)}
          type="button"
          className={`duration-700 hover:bg-[#f2c119] hover:text-[#2a2a2c] text-[13px] lg:text-[18px bg-[#183661] p-[10px] lg:p-[14px] w-36 lg:w-44 rounded-full  text-white ${totalCard.find((pd) => pd.payload.id==currentProduct.id) && '!bg-yellow-500 hover:text-black '}`}
        >
        {totalCard.find((pd) => pd.payload.id==currentProduct.id) ?  'Added' : 'Add to cart' }
        </button>
        </div>
        
        
       
      
       
      </div>


    </div>

      
      {/* <div className="  flex justify-center gap-7">
      <button onClick={prevProduct} className="  text-[#183661]  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </button> 
       

         <button onClick={() => nav('/')}
          type="button"
          className="  duration-700 hover:bg-[#f2c119] hover:text-[#2a2a2c] text-[18px bg-[#183661] p-[14px] w-44 rounded-full  text-white"
        >
          Back To Products
        </button> 
        
         <button onClick={nextProduct} className="  text-[#183661]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button> 
      </div> */}


    </>
  );
};

export default DetailProduct;
