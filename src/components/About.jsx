import React from 'react'
import Layout from './Layout'
import Footer from './Footer'
import photo from "../images/black-red.png"

const About = () => {
  return (
      <>
      <h1 className=' bg-[#f3a20d] text-white font-bold text-center py-3 text-2xl md:py-6 md:text-4xl '>About</h1>
      
       <Layout>
          <div className=' gap-2 grid sm:grid-cols-1 md:grid-cols-2 justify-center content-center items-center max-w-full container'>
          <div className=' '> <img  className=' mt-3' src={photo}/></div>

              <div className=' mb-5 '>
                
                  <h1 className=' lg:text-3xl font-semibold mb-5'>The standard Lorem Ipsum</h1>
                  <p className=' text-justify  lg:leading-loose lg:text-xl'> Lorem ipsum dolor sit  adipiscing elit, sed tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                  <button type='button' onClick={() => nav("/product")}  className='  duration-700 hover:bg-[#f2c119] hover:text-[#2a2a2c] text-[18px bg-[#183661] p-[14px] w-44 rounded-full mt-10  text-white'>Read More</button>
               
               
              </div>
            
          </div>


       </Layout>
       <Footer/>
      </>
  )
}

export default About