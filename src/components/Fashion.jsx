import React from 'react'
import fashion from "./../images/fashion.jpg"
import Footer from './Footer'

const Fashion = () => {
  return (
    <>
     <h1 className=' bg-[#f3a20d] text-white font-bold text-center py-[30px] text-[35px] '>Fashion</h1>
    
    <div className=' py-20'> <img  src={fashion} /></div>

     <Footer/>
    
    </>
  )
}

export default Fashion