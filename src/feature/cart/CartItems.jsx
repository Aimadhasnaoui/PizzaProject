import React, { useEffect } from 'react'
import Button from '../../ui/Button'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import {formatCurrency } from '../../utilis/helpers'
import { useSelector } from 'react-redux';
import {Remove,AddItemExiste,RemovItemExiste} from './CartSlice'
import { useDispatch } from 'react-redux';
export default function CartItems({item}) {
  const dispatch = useDispatch();
  // const cart = useSelector(state => state.cart.Data);
  const [count, setCount] = useState(0); 
  const price = item.list.unitPrice * item.count
  useEffect(()=>{
        setCount(item.count)
  },[count])

  return (
    <div className='flex justify-between border-b items-center py-4'>
      <div> {item.count} × {item.list.name}</div>
      <div className='flex gap-4 justify-center items-center'>
        <p>{formatCurrency(price)}</p>
        <d iv className='flex items-center gap-2'> 
          <button onClick={()=>{
            count >= 0 ? setCount((e)=> e + 1 ) : ""
            dispatch(AddItemExiste(item))
          }} className='rounded-full bg-red-500 h-8 flex justify-center items-center w-8'>
          <AddIcon></AddIcon>
          </button>
          <div>{count}</div>
          <button onClick={()=>{
            count > 0 ? setCount((e)=> e - 1 ) : ""
            dispatch(RemovItemExiste(item))
            }} className='rounded-full bg-red-500 h-8 flex justify-center items-center w-8'>
          <RemoveIcon></RemoveIcon>
          </button>
        </d>
        <Button onClick={()=>{
          dispatch(Remove(item.id))
        }
          }>Delete</Button>
      </div>
    </div>
  )
}