import React from 'react'
// import icon from '../../assets/iconEmpty.gif'
import icon from '../../assets/iconEmpty.gif';

export default function cartNavBar() {
  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <h1 className='text-[25px] font-medium text-center mb-4'>Your Cart is empty now </h1>
      <img src={icon} alt="" className='w-[150px]' />
    </div>
  )
}