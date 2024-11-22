import React from 'react'
import {formatCurrency } from '../../utilis/helpers'

export default function OrderItem({item}) {
  const total = item.list.unitPrice * item.count
  return (
    <div className='flex flex-col gap-2 border-y-[1px] py-4'>
        <div className='flex justify-between '>
          <p>{item.count} × {item.list.name}</p>
          <p>{formatCurrency(total)}</p>
        </div>
        <p className='text-gray-500 flex gap-2'>
        {item.list.ingredients.map((item,id) =>(
          <p key={id}>{item}</p>
        ))}
        </p>
    </div>
  )
}