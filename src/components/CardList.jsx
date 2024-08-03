import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCard,deleCard } from '../slice/slice'
import { useSelector } from 'react-redux'
import { filterProducts, getAllProducts } from '../slice/products.slice'
import Swal from 'sweetalert2'


const CardList = () => {
  let [filterProduct,setFilterProduct] = useState([]);
    const nav=useNavigate()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products);
    const totalCard = useSelector((state) => state.totalCard.totalCard);
   
    useEffect(() => {
      setFilterProduct(products.map((pd) => pd ))
    },[])
     

     const filter = (type) => {

              switch (type) {
                case "men's clothing" :
               filterProduct = products.filter((pd) => pd.category == "men's clothing" );
               setFilterProduct(filterProduct)
                break;
                case "jewelery" :
               filterProduct = products.filter((pd) => pd.category == "jewelery" );
               setFilterProduct(filterProduct)
                break;
                case "electronics" :
               filterProduct = products.filter((pd) => pd.category == "electronics" );
               setFilterProduct(filterProduct)
               
                break;
                case "women's clothing" :
               filterProduct = products.filter((pd) => pd.category == "women's clothing" );
               setFilterProduct(filterProduct)
                break;
                case "all" :
                  setFilterProduct(products.map((pd) => pd ))
                break;
                }

            
             
     }
      
      

    const addCard = (id) => {
  const inCardItem =  totalCard.find((pd) => pd.payload.id==id )
         
      if(!!inCardItem){
        Swal.fire({
          title: 'info',
          text: 'Already added item in your card',
          icon: 'info',
          confirmButtonText: 'ok'
        })

      } else {
         const currentProduct = products.find((pd) => pd.id==id )
      
       dispatch(addToCard(currentProduct))
      }

      
    }

  return (
    <>
         <div className=' text-sm sm:text-lg w-auto text-nowrap mt-2 overflow-hidden overflow-x-auto sm:overflow-x-hidden    flex mb-2 lg:mb-4 gap-0 md:gap-5 lg:py-2 font-semibold'>
         <button className=' px-2 focus:text-gray-400  ' onClick={() => filter("all")}>All</button>
         <button className=' px-2 focus:text-gray-400 ' onClick={() => filter("men's clothing")}>Men's Clothing</button>
         <button className=' px-2 focus:text-gray-400 ' onClick={() => filter("jewelery")}>Jewelery</button>
         <button className=' px-2 focus:text-gray-400 ' onClick={() => filter("electronics")}>Electronics</button>
         <button className=' px-2 focus:text-gray-400 ' onClick={() => filter("women's clothing")}>Women's clothing</button>

         


         </div>
     <div  className=' justify-center  max-w-[100%] gap-5   grid grid-cols-2 sm:grid-cols-3   lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
    {filterProduct?.map((p) =>  
        
        <div key={p.id} className=" flex flex-col  mt-1 w-46 py-1   bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl ">
    
       <div className=' h-48 lg:h-56 mx-auto content-center items-center  '>
       <img onClick={() => nav(`/home/detail/${p.id}`)} className=" p-5 sm:p-6 w-36 lg:w-48 lg:p-5  lg:max-w-48 lg:max-h-56 min-w-28 min-h-36   mx-auto hover:scale-125 duration-300  rounded-t-lg" src={p.image} alt="product image" />
       </div>
    

    
    <div className="px-3 flex flex-col  ">
        
            <div className="text-sm mb-3 font-semibold  line-clamp-1  text-gray-900 ">{p.title} </div>
        
        
        <div className=" h-auto flex flex-col gap-1 sm:flex-row content-center items-center mt-auto justify-between ">
            <span className="text-sm font-bold text-gray-900 ">{`$ ${p.price}`}</span>
    <button onClick={() => addCard(p.id)} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${ totalCard.find((pd) => pd.payload.id==p.id) && '!bg-[#f2c119] px-5 !ring-red-50' }` }  >{totalCard.find((pd) => pd.payload.id==p.id) ?  'Added' : 'Add to cart' }</button>
        </div>
    </div>
</div> )}



     </div>




     

    
    
    </>
  )
}

export default CardList
