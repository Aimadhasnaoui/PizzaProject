import OrderItem from './OrderItem'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react';
import { formatCurrency,formatDate,calcMinutesLeft } from '../../utilis/helpers'
export default function Order() {
  const [total, settotal] = useState(0)
  const cart = useSelector(state => state.cart.Data)
  // const data = new Date()
  useEffect(() => {
    console.log(cart);
    const total = cart.reduce((accumulator, element) => {
      return accumulator + (element.count * element.list.unitPrice);
    }, 0);
    settotal(total)
    // console.log(data)
    console.log()
    // console.log(total); 
  }, [cart]);
  return (
    <div className='w-[50%] flex flex-col  mx-auto my-8  mt-24'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[18px] font-semibold'>Order #BW1H06 status</h1>
        <p className='bg-green-600  text-white px-5 py-2 rounded-full'>preparing order</p>
      </div>
      <div className='bg-gray-200 px-7 py-7 flex justify-between my-7'>
        <p className='text-base'>
          Only 57 minutes left 😃
        </p>
        <p className='text-xs text-gray-500'>
          (Estimated delivery: {formatDate(new Date())})
        </p>

      </div>
      {
        cart.map((cart)=>(
          <OrderItem item={cart} ></OrderItem>
        ))
      }
      <div className='bg-gray-200 px-7 py-4 flex flex-col gap-2 my-7'>
        <p className='text-gray-500'>
          Price pizza :  {formatCurrency(total)}
        </p>
        <p>
          To pay on delivery : {formatCurrency(total)}
        </p>
      </div>
    </div>
  )
}