import { useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import Logo from '../assets/mesaaLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage overlay navbar visibility

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  return (
    <div className="relative">
      {/* Hamburger button for small screens */}
      <div className="absolute top-0 right-0 z-50 bg-transparent lg:hidden">
        <button
          onClick={toggleNavbar}
          className="text-white p-3 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Overlay navbar for small screens */}
      <div className={`lg:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col justify-center h-full mx-10">
          <Link to="/" className='text-white text-xl mb-5' onClick={toggleNavbar}>Home</Link>
          <Link to="/services" className='text-white text-xl mb-5' onClick={toggleNavbar}>Services</Link>
          <Link to="/menu" className='text-white text-xl mb-5' onClick={toggleNavbar}>Menu</Link>
          <Link to="/ourchefs" className='text-white text-xl mb-5' onClick={toggleNavbar}>Chef's Corner</Link>
          <Link to="/login">
            <div className='btn text-black'>
              <div className='link'>
                Login
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            </Link>
        </div>
      </div>
      {/* End Overlay navbar */}

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className='flex justify-between mx-10 my-3 ml-18'>
          <Link to='/' className='ryc-text text-2xl uppercase tracking-wider font-extrabold font2 mt-6 '>
            <img src={Logo} alt="" className='h-10 mr-20' />
          </Link>
          {/* Desktop navbar */}
          <div className='hidden lg:flex gap-10 font3 text-white mt-6'>
            <Link to="/" className='list-none cursor-pointer'>Home</Link>
            <Link to="/services" className='list-none cursor-pointer'>Services</Link>
            <Link to="/menu" className='list-none cursor-pointer'>Menu</Link>
            <Link to="/ourchefs" className='list-none cursor-pointer'>Our Chefs</Link>
            <Link to="/review" className='list-none cursor-pointer'>Review</Link>
            <Link to="/contact" className='list-none cursor-pointer'>Contact</Link>
          </div>
          <div className='hidden lg:flex gap-5 font3'>
          <Link to="/login">
            <div className='btn-login text-black'>
              <div className='link-login'>
                Login
              </div>
            </div>
            </Link>
          </div>
          {/* End Desktop navbar */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
