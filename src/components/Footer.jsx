import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <>
    <div className=' bg-[#183661]  '>
     <Layout>
        <div className=' grid grid-cols-4 py-20 gap-5 text-white'>

            <div className=' px-7'>
                <h1 className=' mb-5 text-2xl'>INFORMATION</h1>
                <p className=' text-lg   text-start leading-loose '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
            
            <div className=' px-7'>
                <h1 className=' mb-5 text-2xl'>MY ACCOUNT</h1>
                <p className=' text-lg  text-start leading-loose '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>

            <div className=' px-7'>
                <h1 className=' mb-5 text-2xl'>ABOUT</h1>
                <p className=' text-lg  text-start leading-loose '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>

            <div className=' px-7'>
                <h1 className=' mb-5 text-2xl'>CONTACTS</h1>
                <p className='  text-lg text-start leading-loose '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
        </div>
     </Layout>
    </div>
    <div className=' py-5 text-2xl text-center'>© 2024 All Rights Reserved. Develope by Thant Naing</div>
    </>
  )
}

export default Footer