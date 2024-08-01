import React from 'react'
import Layout from './Layout'
import new1 from "./../images/news_img1.jpg"
import new2 from "./../images/news_img2.jpg"
import new3 from "./../images/news_img3.jpg"
import LatestNews from './Latest-news'
import Footer from './Footer'

const News = () => {
  return (
    <>
    <h1 className=' bg-[#f3a20d] text-white font-bold text-center py-3 text-2xl md:py-6 md:text-4xl '>Latest News</h1>
    <div className=' mt-5'>
      <LatestNews/>
    </div>
    
     <Footer/>
    </>
  )
}

export default News