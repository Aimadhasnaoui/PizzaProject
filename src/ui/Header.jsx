import React from 'react'
import Logo from '../assets/logo.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from'react';


export default function Header() {
  const data = useSelector(state=> state.cart.Data)
//   useEffect(() => {
//     console.log(data.length);
// }, [data]);
  return (
    <div className='bg-red-500 z-20 py-3 px-4  flex justify-between items-center shadow-xl fixed top-0 left-0 w-full'>
      <Link to='/'>
        <img src={Logo} alt="logo pour le sit web" className='w-11' />
      </Link>
        <div className='relative'>
        <input type="text" name="" id=""  className='outline-none px-8 py-2 rounded-md w-[450px] focus:outline-yellow-400' placeholder='Search...'/>
        <SearchIcon className='absolute left-1 top-2'></SearchIcon>
        </div>
        <div className='relative'>
          <Link to='/cart'>
        <ShoppingBasketIcon fontSize='large' className='text-white cursor-pointer text-[20px]'></ShoppingBasketIcon>
          </Link>
        <div className='absolute flex justify-center items-center h-5 w-5 bg-black top-[-3px] right-[-9px] rounded-full text-white'>
            {data.length}
        </div>
        </div>
    </div>
  )
}

