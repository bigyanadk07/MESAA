import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage1 from '../assets/aboutimage.jpg';
import Separator from '../assets/separator.svg'

const AboutUsSection:React.FC = () => {
  return (
    <section className="background text-white">
            <div className='flex justify-center w-full h-4 mb-5 p y-5'><img src={Separator} className='flex justify-center' /></div>
      <h1 className='text-white font6 text-5xl text-center mb-5'>About Us</h1>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="About Us"
              src={AboutImage1}
              className="absolute inset-0 h-full w-full object-cover rounded-xl shadow-md transform hover:scale-105 transition duration-300"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white mb-4">
              At MESAA, we're passionate about delivering exceptional dining experiences to our customers. Our team of chefs meticulously crafts each dish to perfection, using only the freshest ingredients sourced from local farmers and producers. With a focus on quality, innovation, and customer satisfaction, we strive to exceed your expectations every time you order from us.
            </p>
            <p className="text-white mb-4">
              Whether you're craving a hearty meal, a quick snack, or a gourmet treat, MESAA has something for everyone. Join us on a culinary journey and discover the flavors that make us unique.
            </p>
            <Link to="/about">
            <div className='btn mt-8 text-black'>
              <div className='link'>
                Learn More
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
