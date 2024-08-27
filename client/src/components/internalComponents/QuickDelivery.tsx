import React from 'react'
import Boy from '../assets/delivery-boy.svg'
import { Link } from 'react-router-dom'
import Separator from '../assets/separator.svg'

const QuickDelivery:React.FC = () => {
  return (
    <div className='background text-white py-10'>
      <div className='flex justify-center w-full h-4 mb-5'><img src={Separator} className='flex justify-center' /></div>
      <h1 className='text-white font6 text-5xl text-center'>We Deliver The Quickest</h1>
      <div className='grid grid-cols-2 p-10 py-20'>
        <div className='col-span-1'>
          <h1 className='text-center font-extrabold font7 text-4xl mt-16'>The Moment Of Delivery<br/> On <span className='ryc-text'>Right Time</span> & Place</h1>
          <p className='text-center font7 mt-5'>Get to taste your amazing food hot and delicious within <br/> minutes of order without any delay.</p>
          <div className='flex justify-center mt-5'>      <Link to="/order">
            <div className='btn text-black'>
              <div className='link'>
                Order Now
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            </Link></div>
        </div>
        <div className='col-span-1'>
          <img src={Boy} className='w-full h-80 transition-transform duration-500 ease-in-out hover:translate-x-6 ' />
          </div>
      </div>
    </div>
  )
}

export default QuickDelivery
