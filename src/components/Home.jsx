import React, { useEffect } from 'react'
import { Await, useNavigate } from 'react-router-dom'
 import { banner ,ban,shoe,underwear,pent,shirt,jakit,helbet} from '../images'
import Layout from './Layout'
import CardList from './CardList'
import fashion from "./../images/fashion.jpg"
import News from './News'
import LatestNews from './Latest-news'
import Footer from './Footer'

const Home =  () => {
  
  const nav = useNavigate()

  
  
  
  return (
    <>

   
<div className=" max-w-full  ">
      
      
      
       <div  className=' py-7 sm:py-0  grid grid-cols-2 lg:max-w-[85%] mx-auto lg:gap-10 mb-3   '>

        <div className='  container space-y-3 lg:space-y-8 content-center lg:ms-20 z-1 '>

         <p className='  text-[#183661] font-logoFont sm:text-4xl font-semibold md:font-bold text-3xl lg:text-[85px]'>Romofyi</p>
         <p className='text-[#f2c119] font-serif font-semibold sm:text-6xl text-6xl lg:text-[116px]'>Trands 2024</p>
         <p className=' text-[#2a2a2c] text-xl  xl:text-[30px] '>A huge fashion collection for ever</p>
      <a href="#card"> <button  className=' duration-700 hover:bg-[#f2c119] hover:text-[#2a2a2c] text-[18px bg-[#1d37fd] p-[10px] sm:p-[14px] w-40 sm:w-44 rounded-full mt-10 text-white'>SHOP NOW</button></a>
 
        </div>
 
        <div className='  mt-24 sm:mt-15 z-1 '>
        <img className=' w-[250px] sm:w-auto  ' src={ban} />
        </div>

       </div>
      
    </div>

    {/* .............>>>  icon section  <<<<............ */}

    <div  className=' justify-items-stretch grid  max-w-[100%]  mx-auto grid-cols-3 sm:grid-cols-3 md:grid-cols-6  '>
       <img className='   bg-[#f2c119] p-5  lg:p-10  ' src={shoe}/>
       <img className='   bg-[#183661] p-5  lg:p-10 ' src={underwear}/>
       <img className='   bg-[#f2c119] p-5  lg:p-10' src={pent}/>
       <img className='  bg-[#183661] p-5  lg:p-10' src={shirt}/>
       <img className='   bg-[#f2c119] p-5  lg:p-10 ' src={jakit}/>
       <img className='  bg-[#183661] p-5  lg:p-10 '  src={helbet}/>

       
    </div>
 
{/* ..................>>> Product list section  <<<.................... */}
    
   
      <Layout>
        
         
          <CardList/>
       

       
        <div className=' flex justify-center py-4'>
        <button type='button' onClick={() => nav("/product")}  className='  duration-700 hover:bg-[#f2c119] hover:text-[#2a2a2c] text-[18px bg-[#183661] p-[14px] w-44 rounded-full mt-10 text-white'>See More</button>
        </div>

      </Layout>

      

    

    {/* ............................................ Fashion collection .................................... */}

    <div className=' mb-5 justify-center items-center content-center contents max-w-full '>

      <img src={fashion}></img>

    </div>
    {/* ............................................latest news ................................. */}

   <Layout>

    <div className=' mb-5'>
      <h1 className='py-2 md:py-4 lg:py-5 border-b-4 border-yellow-600 text-2xl lg:text-4xl font-bold'>Latest News</h1>
    </div>
   </Layout>

   
     <LatestNews/>
   

   <Footer/>
    
    </>
  )
}

export default Home