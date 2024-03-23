import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='background text-white'>
      <div className='flex justify-between mx-10 py-3'>
        <Link to='/' className='ryc-text text-2xl uppercase tracking-wider font-extrabold font2 mt-6 '>MESAA</Link>
          <div className='flex gap-10 font3 mt-6'>
            <Link to="/"  className='list-none cursor-pointer'>Home</Link>
            <Link to="/services"  className='list-none cursor-pointer'>Services</Link>
            <Link to="/menu"  className='list-none cursor-pointer'>Menu</Link>
            <Link to="/ourchefs"  className='list-none cursor-pointer'>Our Chefs</Link>
          </div>
        <Link to="/order"><div className='btn text-black'><div className='link'>Order Now<span></span><span></span><span></span><span></span></div></div></Link>
    </div>
    </div>
  )
}

export default Navbar
