import React from 'react'
import img1 from '../assets/Flavour Fiesta/snapp.png'
import img2 from '../assets/Flavour Fiesta/snapp3.png'
import img3 from '../assets/Flavour Fiesta/snapp2.png'
import { Link } from 'react-router-dom'
import Separator from '../assets/separator.svg'


const featuredDishes = () => {
  return (
    <div className='background py-10'>
      <div className='flex justify-center w-full h-4 mb-5 p y-5'><img src={Separator} className='flex justify-center' /></div>
      <h1 className='text-white text-center font6 text-5xl'>Our Featured Dishes</h1>
      <div className='flex flex-row mx-28 mb-10'>
        <div className='mt-16 featDiv'>
          <img src={img1} alt="burger" />
          <h1 className='text-white text-center text-2xl font6'>Burger</h1>
          <Link to="/menu"> <p className='cursor-pointer font6 ryc-text text-center text-sm hover:text-yellow-500 transition ease-in-out'>VIEW MENU</p></Link>
        </div>
        <div className='flex flex-col mt-20 mb-10'>
          <p className='text-center text-white font6 text-sm p-4'>Explore our tantalizing Featured Dishes section, <br/>showcasing culinary delights crafted with <br/> care and bursting with irresistible flavors.</p>
        <img src={img2} alt="tacos" />
        <h1 className='text-white text-center text-2xl font6'>Tacos</h1>
        <Link to="/menu"> <p className=' cursor-pointer font6 ryc-text text-center text-sm hover:text-yellow-500 transition ease-in-out'>VIEW MENU</p></Link>
        </div>
        <div className='mt-16'>
        <img src={img3} alt="steak" />
        <h1 className='text-white text-center text-2xl font6'>Steak</h1>
        <Link to="/menu"> <p className=' cursor-pointer font6 ryc-text text-center text-sm hover:text-yellow-500 transition ease-in-out'>VIEW MENU</p></Link>
        </div>
      </div>
    </div>

  )
}

export default featuredDishes
