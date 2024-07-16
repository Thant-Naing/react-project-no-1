import React from 'react'
import Layout from './Layout'
import new1 from "./../images/news_img1.jpg"
import new2 from "./../images/news_img2.jpg"
import new3 from "./../images/news_img3.jpg"

const LatestNews = () => {
  return (
    <Layout>

    <div className=' flex basis-5 mb-5'>

      <div className=' basis-2/5'>
       <img src={new1} />
      </div>

      <div className=' p-10 basis-3/5'>
      <h1 className=' font-bold text-2xl mb-3 text-gray-700'>Specimen book. It has survived not only five</h1>

      <div className=' flex justify-between mb-5 text-gray-700'>
        <p className=' underline underline-offset-8 '>20 july 2024</p>
        <p  className=' underline underline-offset-8 '>like  Comment</p>
      </div>
      <p className=' text-justify font-semibold text-gray-600'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type aLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.nd scrambled it to make a type specimen book.
      </p>
      </div>

    </div>

    <div className=' flex basis-5 mb-5'>

      <div className=' basis-2/5'>
       <img src={new2} />
      </div>

      <div className=' p-10 basis-3/5'>
      <h1 className=' font-bold text-2xl mb-3 text-gray-700'>Specimen book. It has survived not only five</h1>

      <div className=' flex justify-between mb-5 text-gray-700'>
        <p className=' underline underline-offset-8 '>20 july 2024</p>
        <p  className=' underline underline-offset-8 '>like  Comment</p>
      </div>
      <p className=' text-justify font-semibold text-gray-600'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type aLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.nd scrambled it to make a type specimen book.
      </p>
      </div>

    </div>

    <div className=' flex basis-5 mb-5'>

      <div className=' basis-2/5'>
       <img src={new3} />
      </div>

      <div className=' p-10 basis-3/5'>
      <h1 className=' font-bold text-2xl mb-3 text-gray-700'>Specimen book. It has survived not only five</h1>

      <div className=' flex justify-between mb-5 text-gray-700'>
        <p className=' underline underline-offset-8 '>20 july 2024</p>
        <p  className=' underline underline-offset-8 '>like  Comment</p>
      </div>
      <p className=' text-justify font-semibold text-gray-600'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type aLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.nd scrambled it to make a type specimen book.
      </p>
      </div>

    </div>

    



  </Layout>

  )
}

export default LatestNews