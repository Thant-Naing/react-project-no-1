import React from 'react'
import Layout from './Layout'
import CardList from './CardList'
import Footer from './Footer'

const Products = () => {
  return (
    <>
    
    <h1 className=' bg-[#f3a20d] text-white font-bold text-center py-3 text-2xl md:py-6 md:text-4xl '>Featured Products</h1>

     

      
        
        <div className='p-5'>
           <CardList/>
        </div>

         
          
        

    

   
    
    <Footer/>
   </>
  )
}

export default Products