import React from 'react'
import Layout from './Layout'
import CardList from './CardList'
import Footer from './Footer'

const Products = () => {
  return (
    <>
    
    <h1 className=' bg-[#f3a20d] text-white font-bold text-center py-[30px] text-[35px] '>Featured Products</h1>

     <div className="bg-product-bg bg-cover h-[1400px] bg-no-repeat  w-full  ">

      <Layout>
        
         <div className=' flex basis-6 gap-4 justify-center flex-wrap'>

          <CardList/>
          
         </div>

      </Layout>

    </div>
    
    <Footer/>
   </>
  )
}

export default Products