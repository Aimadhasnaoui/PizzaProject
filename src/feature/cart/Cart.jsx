import React from 'react'
import { Link } from 'react-router-dom'
import CartItems from './CartItems'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '../../ui/Button'
import EmptyCart from './EmptyCart'
import { useSelector } from 'react-redux';
import {RemoveAll} from './CartSlice'
import { useEffect } from'react';
import { useDispatch } from 'react-redux';


export default function Cart() {
  const cart = useSelector(state => state.cart.Data);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(cart);
    // setCount(cart.length)
   },[cart]);

  return (
    <div className='w-[50%] mx-auto my-24'>
      <Link to="/" className='my-5 text-blue-400'>
        <ArrowBackIosIcon fontSize='small'></ArrowBackIosIcon>
        Back to menu
      </Link>
      <div className='w-full mt-4 flex flex-col gap-4'>
        {
          cart.length >  0 &&
        <div>
          <h1 className='text-[20px] font-semibold'>Your cart</h1>
          {
            cart.map((items)=>(
              <CartItems item={items} />
            ))
          }
          <div className='my-3'>
            <Link to="/Addneworder">
               <Button className="font-normal text-[16px]">Confirme Order</Button>
            </Link>
            <Button onClick={()=>{dispatch(RemoveAll())}} className='font-normal text-[16px] bg-white border-[1px] text-gray-500 border-gray-500 hover:bg-gray-300 hover:text-black'>Clear Order</Button>
          </div>
        </div>
        }
        {
          cart.length === 0 &&
          <EmptyCart /> 
        }
      </div>
    </div>
  )
}