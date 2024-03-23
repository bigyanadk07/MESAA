import React from 'react'
import Navbar from './internalComponents/Navbar'
import AboutMain from './assets/aboutmain.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faClock, faGlobe, faTags, faTruck, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-3  mx-20 my-10'>
        <div className='col-span-2 text-center  min-h-full'>
            {/* Top Part */}
            <div>
            <h1 className='font3 font-bold text-left mx-10 my-5 text-2xl'>About Us</h1>
            <p className='flex justify-start text-left mx-10 font4'>"MESAA is an innovative online food ordering platform, dedicated to simplifying and enhancing the dining experience for food enthusiasts.
                 With an extensive network of restaurants and culinary delights, MESAA connects hungry customers with a diverse array of delectable cuisines, all at their fingertips.
             Our user-friendly website offers seamless navigation, allowing users to browse menus, place orders, and track deliveries with ease. 
             Whether craving traditional favorites or exploring new culinary adventures, MESAA ensures a convenient and satisfying dining experience for every taste bud. 
             Join us in embracing the future of food ordering, where convenience meets culinary delight, only at MESAA."</p>
            </div>
            {/* Bottom Part */}
            <div className='mx-10 max-w-4xl mb-10'>
            <h1 className='font-bold text-2xl text-left mt-10 mb-5'>Why Customers Prefer Us</h1>
            <div className=' bg-gray-100 px-6 py-8 rounded-lg grid grid-cols-2 gap-8'>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faClock} className='text-blue-500 text-4xl mr-4'/>
                    <p className='text-lg font4'>Unparalleled Convenience</p>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faGlobe} className='text-blue-500 text-4xl mr-4'/>
                    <p className='text-lg font4'>Diverse Culinary Selection</p>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faTags} className='text-blue-500 text-4xl mr-4'/>
                    <p className='text-lg font4'>Exclusive Deals and Discounts</p>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faTruck} className='text-blue-500 text-4xl mr-4'/>
                    <p className='text-lg font4'>Reliable Delivery Service</p>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faUserCircle} className='text-blue-500 text-4xl mr-4'/>
                    <p className='text-lg font4'>Personalized User Experience</p>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faCheckCircle} className='text-blue-500 text-4xl mr-4'/>
                    <p className='text-lg font4'>Commitment To Quality</p>
                </div>
            </div>
        </div>

        </div>
        <div className='col-span-1 text-center'>
            <img src={AboutMain} alt="AboutMain" />
        </div>
      </div>
    </div>
  )
}

export default About
