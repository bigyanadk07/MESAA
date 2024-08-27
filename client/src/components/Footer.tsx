import React from 'react'
import Separator from './assets/separator.svg';
import { Link } from 'react-router-dom';


const Footer:React.FC = () => {
  return (
    <div className='text-white font6 footerBg'>
      <div className=' flex font6 gap-10 px-10 py-20 justify-center pb-'>
        <div className='py-20 mr-20'>
          <Link to="/"><div className='text-center mb-3'>HOME</div></Link>
          <Link to="/menu"><div className='text-center mb-3'>MENU</div></Link>
          <Link to="/about"><div className='text-center mb-3'>ABOUT US</div></Link>
          <Link to="/ourchefs"><div className='text-center mb-3'>OUR CHEFS</div></Link>
          <Link to="/contact"><div className='text-center mb-3'>CONTACT</div></Link>

        </div>
        <div className='footerForm mb-10'>
          <div> 
            <h1 className="text-5xl font-extrabold tracking-tight text-center my-10"><span className="text-yellow-300">MES<span className="text-yellow-100">A</span></span>A</h1>
          </div>
          <div className='mx-10 mb-10'>
            <h1 className='text-center'>Restaurant St, Marble Street, Bhaisepati, Nepal</h1>
            <h1 className='text-center'>booking@mesaa.com</h1>
            <h1 className='text-center'>Booking Request: +977 975 567 4675</h1>
            <h1 className='text-center'>Open: 09:00 am - 01:00 pm</h1>
          </div>
          <div className='flex justify-center w-full h-4 mb-5'><img src={Separator} className='flex justify-center' /></div>
          <div className='flex justify-center mb-5 mx-10'><input type="text" placeholder='Your Email' className=' rounded background w-90 px-10 max-h-16 mt-3' /><div className='btn text-black'>
              <div className='link'>
                SUBSCRIBE
                <span></span><span></span><span></span><span></span>
              </div>
            </div></div>
        </div>
        <div className='py-20 ml-20'>
        <div className='text-center cursor-pointer mb-3'>FACEBOOK</div>
          <div className='text-center cursor-pointer mb-3'>INSTAGRAM</div>
          <div className='text-center cursor-pointer mb-3'>TWITTER</div>
          <div className='text-center cursor-pointer mb-3'>YOUTUBE</div>
          <div className='text-center cursor-pointer mb-3'>GOOGLE MAP</div>
        </div>
      </div>
      <div>
      <p className='text-white text-center pb-10'>© 2024 MESAA. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
