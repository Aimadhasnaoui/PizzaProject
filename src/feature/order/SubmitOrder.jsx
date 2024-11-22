import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import { useEffect } from 'react'
// import Button from '../../ui/Button'
import { formatCurrency } from '../../utilis/helpers'
import { useSelector } from 'react-redux'
import Button from '../../ui/Button'
// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];
export default function SubmitOrder() {
  const cart = useSelector(state => state.cart.Data)
  const [total, settotal] = useState(0)
  useEffect(() => {
    console.log(cart);
    const total = cart.reduce((accumulator, element) => {
      return accumulator + (element.count * element.list.unitPrice);
    }, 0);
    settotal(total)
    // console.log(total); 
  }, [cart]);

  return (
    <div className='flex w-[50%]  gap-4 my-24 flex-col mx-auto'>
      <h1 className='text-[25px] font-medium'>Ready to order? Let's go!</h1>
      <Form method='post' >
        <div className='my-4 flex flex-col gap-6'>
          <div className='flex w-full gap-4 items-center justify-between'>
            <label htmlFor='name' className='text-[20px] font-light'>Full Name</label>
            <input type='text' id='name' name='name' className='outline-none px-3 py-2 rounded-md w-[75%] border-red-500 border  focus:outline-red-500' placeholder='Full Name...' required />
          </div>
          <div className='flex w-full gap-4 items-center justify-between'>
            <label htmlFor='phone' className='text-[20px] font-light'>Phone number</label>
            <input type='number' accept='number' id='phone' name='phone' className='outline-none px-3 py-2 rounded-md w-[75%] border-red-500 border  focus:outline-red-500' placeholder='Phone number...' required />
          </div>
          <div className='flex w-full gap-4 items-center justify-between'>
            <label htmlFor='Address' className='text-[20px] font-light'>Address</label>
            <input type='text' id='Address' name='Address' className='outline-none px-3 py-2 rounded-md w-[75%] border-red-500 border  focus:outline-red-500' placeholder='Address...' required />
          </div>
        </div>
        <Link to='/order'>
          <Button type='submit' className='text-[16px]'>ORDER NOW FOR {formatCurrency(total)}</Button>
        </Link>
      </Form>
    </div>
  )
}
export async function Action({ request }) {
  const formdata = await request.formData()
  const data = Object.fromEntries(formdata)
  // const order = {
  //   ...data,
  //   cart: JSON.parse(data.cart),
  //   priority: data.priority === 'on',
  // };

  // const newOrder = await createOrder(order);

  // console.log(order);
  console.log(data)
  // return redirect(`/order/${newOrder.id}`);
  return null
}