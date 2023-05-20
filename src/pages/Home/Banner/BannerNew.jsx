import React from 'react'
import bg2 from "../../../assets/bg2.jpg";

const BannerNew = () => {
  return (
    <div className=' container mx-auto'>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-20">
            <div className="md:space-y-4 w-full md:mr-8 space-y-6 p-6">
                <h2 className=' text-gray-700'>Hey, I am shaft</h2>
                <h1 className='text max-w-md md:text-5xl text-3xl'>I create <span className='gradient bg-clip-text text-transparent'>product design</span> and brand experience</h1>
                <p className=' text-gray-700 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div><a className=' max-w-lg px-6 py-2 gradient text-white rounded-md' href="#contact">Get in Touch</a></div>
            </div>
            <div className="image w-full">
                <img src= {bg2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default BannerNew