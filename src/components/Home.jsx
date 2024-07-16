import React from 'react'
import { useNavigate } from 'react-router-dom'
 import { banner ,ban,shoe,underwear,pent,shirt,jakit,helbet} from '../images'
import Layout from './Layout'
import CardList from './CardList'
import fashion from "./../images/fashion.jpg"
import News from './News'
import LatestNews from './Latest-news'
import Footer from './Footer'

const Home = () => {
  
  const nav = useNavigate()

 
  
  
  return (
    <>

   
<div className="bg-custom-image bg-cover   min-w-[400px] bg-no-repeat block w-full h-screen ">
      
      <Layout>
      
       <div  className=' flex basis-3 pt-40  '>

        <div className=' basis-2/3'>

         <p className=' text-[#183661] font-logoFont font-bold text-[85px]'>Romofyi</p>
         <p className='text-[#f2c119] font-serif font-semibold text-[116px]'>Trands 2024</p>
         <p className=' text-[#2a2a2c] text-[33px]'>A huge fashion collection for ever</p>
      <a href="#card"> <button  className=' duration-700 hover:bg-[#f2c119] hover:text-[#2a2a2c] text-[18px bg-[#1d37fd] p-[14px] w-44 rounded-full mt-10 text-white'>SHOP NOW</button></a>
 
        </div>
 
        <img className=' basis-1/3' src={ban} />

       </div>
      </Layout>
    </div>

    {/* .............>>>  icon section  <<<<............ */}

    <div  className='   flex justify-center mx-auto   '>
       <img className=' text-[14px] bg-[#f2c119] px-[77px] py-[50px] block' src={shoe}/>
       <img className=' text-[14px]  bg-[#183661] px-[77px] p-[50px] block ' src={underwear}/>
       <img className=' text-[14px]  bg-[#f2c119] px-[77px] p-[50px] block' src={pent}/>
       <img className=' text-[14px]  bg-[#183661] px-[77px] p-[50px] block' src={shirt}/>
       <img className=' text-[14px]  bg-[#f2c119] px-[77px] p-[50px] block' src={jakit}/>
       <img className=' text-[14px]  bg-[#183661] px-[77px] p-[50px] block'  src={helbet}/>

       
    </div>
 
{/* ..................>>> Product list section  <<<.................... */}
    
    <div className="bg-product-bg bg-cover h-[1500px] bg-no-repeat  w-full  ">

      <Layout>
        <div id="card" className=' flex basis-4 justify-center flex-wrap gap-5'>

          <CardList/>
        </div>

       
        <div className=' flex justify-center py-4'>
        <button type='button' onClick={() => nav("/product")}  className='  duration-700 hover:bg-[#f2c119] hover:text-[#2a2a2c] text-[18px bg-[#183661] p-[14px] w-44 rounded-full mt-10 text-white'>See More</button>
        </div>

      </Layout>

      

    </div>

    {/* ............................................ Fashion collection .................................... */}

    <div className=' mb-5 '>

      <img src={fashion}></img>

    </div>
    {/* ............................................latest news ................................. */}

   <Layout>

    <div className=' mb-5'>
      <h1 className=' py-5 border-b-4 border-yellow-600 text-4xl font-bold'>Latest News</h1>
    </div>
   </Layout>

   <div>
     <LatestNews/>
   </div>

   <Footer/>
    
    </>
  )
}

export default Home