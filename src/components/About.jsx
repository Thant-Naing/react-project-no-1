import React from 'react'
import Layout from './Layout'
import Footer from './Footer'
import photo from "../images/black-red.png"

const About = () => {
  return (
      <>
      <h1 className=' bg-[#f3a20d] text-white font-bold text-center py-[30px] text-[35px] '>About</h1>
      
       <Layout>
          <div className=' py-10 grid grid-cols-2'>


              <div className='p-10    grid-cols-1'>
                
                  <h1 className=' text-3xl font-semibold mb-10'>The standard Lorem Ipsum</h1>
                  <p className=' text-justify leading-loose text-xl'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                  <button type='button' onClick={() => nav("/product")}  className='  duration-700 hover:bg-[#f2c119] hover:text-[#2a2a2c] text-[18px bg-[#183661] p-[14px] w-44 rounded-full mt-10 text-white'>Read More</button>
               
               
              </div>
              <div className=''> <img src={photo}/></div>
          </div>


       </Layout>
       <Footer/>
      </>
  )
}

export default About