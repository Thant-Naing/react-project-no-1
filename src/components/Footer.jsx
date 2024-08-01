import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <>
    <div className=' bg-[#183661] container max-w-[100%] pt-2 '>
     
        <div className=' max-w-full grid grid-cols-2   md:grid-cols-2 lg:grid-cols-4 gap-2  text-white'>

            <div className=' py-2 sm:py-4 md:py-6 lg:px-5  '>
                <h1 className=' text-lg mb-3 md:mb-5 md:text-2xl  '>INFORMATION</h1>
                <p className='text-sm md:text-md lg:text-lg  text-balance'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
            
            <div className=' py-2 sm:py-4 md:py-6 lg:px-5 '>
                <h1 className=' text-lg mb-3 md:mb-5 md:text-2xl '>MY ACCOUNT</h1>
                <p className=' text-sm md:text-md lg:text-lg text-balance  '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>

            <div className='py-2 sm:py-4 md:py-6 lg:px-5 '>
                <h1 className=' text-lg mb-3 md:mb-5 md:text-2xl '>ABOUT</h1>
                <p className=' text-sm md:text-md lg:text-lg text-balance '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>

            <div className='py-2 sm:py-4 md:py-6 lg:px-5 '>
                <h1 className=' text-lg mb-3 md:mb-5 md:text-2xl '>CONTACTS</h1>
                <p className='  text-sm md:text-md lg:text-lg text-balance '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
        </div>
    
    </div>
    <div className=' py-5 sm:text-xl lg:text-2xl max-w-full text-center'>© 2024 All Rights Reserved. Develope by Thant Naing</div>
    </>
  )
}

export default Footer