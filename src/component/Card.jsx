import React from 'react'
import Carding from './Images/card.jpg';
const Card = () => {
  return (
    <>
    <div className='w-[300px] border border-red-100 rounded-xl overflow-x-hidden'>
        <div className='h-[200px] overflow-hidden'>
            <img src={Carding} className='w-full h-full object-cover' alt=''/>
        </div>
        <div className='p-4'>
            <h2 className='text-2xl font-semibold'>THe Beauty OF Himalayas </h2>
            <p className='text-[14px] pb-3'>Mountains are more than just geological formations; they are a source of inspiration, adventure, and wonder. Their towering beauty, cultural significance</p>
            <div className='flex gap-4'>
                <select>
                   
                    <option value="">Half</option>
                    <option value="">Full</option>

                </select>
                <b>$7</b>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card