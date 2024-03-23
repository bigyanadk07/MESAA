import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import FeaturedD from './internalComponents/featuredDishes';
import NavbarHome from './internalComponents/NavbarHome'
import AboutUsSection from './internalComponents/aboutusSection'
import Events from './internalComponents/upcomingEvents'
import Separator from './assets/separator.svg';
import BigOffer from './internalComponents/BigOffer'
import bgimg1 from './assets/hero-slider-1.jpg';
import bgimg2 from './assets/hero-slider-2.jpg';
import bgimg3 from './assets/hero-slider-3.jpg';
import QuickDelivery from './internalComponents/QuickDelivery';

const Home = () => {



  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgrounds = [bgimg1, bgimg2, bgimg3];
  const intervalDuration = 5000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  // Inline styles to apply transitions
  const sectionStyle = {
    backgroundImage: `url(${backgrounds[currentBgIndex]})`,
    transition: 'background-image 1s ease-in-out' // Set the transition with desired duration and timing function
  };
  return (
<>
<NavbarHome/>
{/* Main Hero Section */}
<div className="relative bg-cover bg-center bg-no-repeat"style={sectionStyle}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white">
    <p className='text-center font-bold ryc-text text-sm font6'>AMAZING & DELICIOUS</p>
    <div className='flex justify-center w-full h-4 mb-5'><img src={Separator} className='flex justify-center' /></div>
    <h1 className="text-5xl font-extrabold tracking-tight mb-4">
      Welcome to <span className="text-yellow-300">MES<span className="text-yellow-100">A</span></span>A
    </h1>
    <p className="text-lg mb-8">Discover the joy of food delivery with us. Order from your favorite restaurants.</p>
    <Link to="/order">
            <div className='btn text-black'>
              <div className='link'>
                Order Now
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            </Link>
    
  </div>
</div>


{/* Featured Dishes */}

<FeaturedD/>



{/* BigOffer */}

<BigOffer/>

{/* Fast Service */}

<QuickDelivery/>

{/* Get Our App */}

<Events/>

{/* About Us Section */}

<AboutUsSection/>
</>
  )
}

export default Home
