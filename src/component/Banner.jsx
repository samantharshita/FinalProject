import React from 'react';
import BGIMG from './Images/download.jpg'

const Banner = () => {
  return (
    <>
    <section className='md:py-[100px] bg-no-repeat bg-cover relative' style ={{backgroundImage :`url(${BGIMG})`}}>
    <div className='absolute top-0 left-0 w-full h-full bg-[#0000009c]'></div>
    <div className="container mx-auto z-30 relative">
    <div className="text-center md:w-[50%] mx-auto text-white">
        <h2 className='text-4xl pb-2 font-semibold'>“If you truly love nature, you will find beauty everywhere.”</h2>
        <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, doloribus vitae ea ducimus nam eos laudantium, explicabo eaque possimus quas ad. Amet voluptates aperiam accusantium odit ducimus animi vero delectus.</p>
    </div>
    </div>
    </section>
    </>
  )
}

export default Banner