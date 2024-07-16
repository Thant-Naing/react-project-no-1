import React from 'react'
import { products } from '../db/db'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCard,deleCard } from '../slice/slice'

const CardList = () => {
    const nav=useNavigate()
    const dispatch = useDispatch()
    
    const addCard = (id) => {
       const currentProduct = products.find((pd) => pd.id==id )
      
       dispatch(addToCard(currentProduct))
    }

  return (
    <>

     <div className=' grid grid-cols-5 gap-5'>
    {products.map((p) =>  
        
        <div key={p.id} className=" mt-5 w-52 py-5  max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl ">
    
        <img onClick={() => nav(`/detail/${p.id}`)} className="p-5 w-48 h-48 mx-auto hover:scale-125 duration-300  rounded-t-lg" src={p.image} alt="product image" />
    

    
    <div className="px-3 flex flex-col  ">
        
            <div className="text-sm mb-3 font-semibold  line-clamp-1  text-gray-900 ">{p.title} </div>
        
        
        <div className="flex items-center mt-auto justify-between ">
            <span className="text-sm font-bold text-gray-900 ">{`$ ${p.price}`}</span>
    <button onClick={() => addCard(p.id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
        </div>
    </div>
</div> )}



     </div>




     

    
    
    </>
  )
}

export default CardList