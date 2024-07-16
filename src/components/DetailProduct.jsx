import React, {  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "./Layout";
import { products } from "../db/db";
import 'animate.css';
import { useDispatch } from "react-redux";
import { addToCard,deleCard } from "../slice/slice";


const DetailProduct = () => {
const { id } = useParams();
  const nav = useNavigate();
  const currentProduct = products.find((pd) => pd.id == id);
  const dispatch = useDispatch()
  const prevProduct = () => {
   
   
nav(`/detail/${id>1 ? id-1 : products.length}`)

  };

  const nextProduct = () => {
nav(`/detail/${id<products.length ? parseInt(id)+1 : 1}`)

  };

  const addCard = () => {
  
 
    dispatch(addToCard(currentProduct))
  }

  return (
    <div isTranslationEnabled={false} className=" flex justify-between h-screen">
      <button onClick={prevProduct} className=" ms-5 text-[#183661]  ">
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
      <Layout>
        <div className=" py-10 grid grid-cols-2">

          <div className=" animate__animated animate__bounceInLeft  p-10 mt-16   grid-cols-1">
            <h1 className=" text-4xl font-semibold mb-10">
              {currentProduct.title}
            </h1>
            <p className=" text-justify leading-loose text-xl">
              
              {currentProduct.description}
            </p>
            <p className=" mt-20 text-6xl font-bold">
              $ {currentProduct.price}
            </p>
            <button onClick={addCard}
              type="button"
              className="  duration-700 hover:bg-[#f2c119] hover:text-[#2a2a2c] text-[18px bg-[#183661] p-[14px] w-44 rounded-full mt-10 text-white"
            >
              Add to Card
            </button>
          </div>

          <div className=" m-24 flex justify-center items-center  ">
            <img className=" animate__animated animate__bounceInRight duration-700 hover:scale-75" src={currentProduct.image} />
          </div>
        </div>
      </Layout>
      <button onClick={nextProduct} className=" me-5 text-[#183661]">
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
    </div>
  );
};

export default DetailProduct;
