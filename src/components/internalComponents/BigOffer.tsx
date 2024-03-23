import React from 'react'
import backgroundImage from '../assets/hero-bg.jpg'
import { Link } from 'react-router-dom';
import Burger from '../assets/hero-banner.png'
import OfferTop from '../assets/sale-shape.png'
import Top from '../assets/shape-black.png';

const BigOffer = () => {
  return (
    <div>
       <div className="card text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='grid grid-cols-3 p-10'>
        <div className='col-span-2'>
            <div>
                <h1 className='text-center mt-20 text-5xl font-extrabold'><span className="text-yellow-300">MES<span className="text-yellow-100">A</span></span>A Has Excellent<br/><span className='ryc-text'>Quality Burgers!</span></h1>
            </div>
            <div className='text-center mt-5'>The Restaurant in Marble Street as a Prime destination for Tasty <br/> and Juicy Burgers that has been running from the past decade.</div>
            <div className='flex justify-center mt-5'>      <Link to="/order">
            <div className='btn text-black'>
              <div className='link'>
                Order Now
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            </Link></div>
        </div>
        <div className='col-span-1 relative'>
      <img src={Burger} alt="Burger" className="w-full h-auto" />
      <img src={OfferTop} alt="OfferTop" className="absolute top-0 left-0 w-44 h-44" />
    </div>
      </div>
      <div><img src={Top} className='w-full transform scale-y(-1)' /></div>
    </div>
    </div>
  )
}

export default BigOffer
