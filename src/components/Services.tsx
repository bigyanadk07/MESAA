import React, { useState } from 'react';
import Navbar from './internalComponents/Navbar';
import Separator from './assets/separator.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalendarAlt, faChalkboardTeacher, faEdit, faGlassCheers, faMotorcycle, faScroll, faUtensils } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null); // State to track the hovered icon

  return (
    <div className='servicesBg text-white pb-5 font6'>
      <Navbar />
      <div className='text-white pt-10'>
        <div className='flex justify-center w-full h-4'><img src={Separator} className='flex justify-center' /></div>
        <h1 className='font6 text-5xl text-center pt-10'><span className="text-yellow-300">MES<span className="text-yellow-100">A</span></span>A FOR ANY EVENT YOU'RE PLANNING</h1>
        <p className='text-sm font6 text-center mt-5 tracking-tighter'>Explore our range of premium services designed to cater to your every need. From catering and event planning to culinary workshops and private dining, we're here to elevate your dining experience.</p>
      </div>

      <div>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid place-content-center rounded background p-6 sm:p-8">
        <div className="mx-auto max-w-md text-center lg:text-left">
          <header>
            <h2 className="text-xl text-center font-bold text-white sm:text-3xl">Our Service Packages</h2>

            <p className="mt-4 text-white text-center">
              View all of our premium ranged packages for any type of event you have coming up.
            </p>
          </header>

         
            <div className='btn flex justify-center text-black'>
              <div className='link'>
                Contact
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://imgs.search.brave.com/-AW9QND4E3vUWZh21BJnfYFAw8AeseghjraU9QCrVQc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/NjI5ODI2OTI5MDUt/YzEzMDk2MjVmYTQ5/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRaOGZH/TmhkR1Z5YVc1bkpU/SXdjMlZ5ZG1salpY/TjhaVzU4TUh4OE1I/eDhmREE9  "
                alt=""
                className="aspect-square w-full rounded object-cover transform hover:scale-105 transition duration-300"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-white group-hover:underline-offset-4"
                >
                  Catering Service
                </h3>
                <span className='flex ryc-text font6 tracking-widest'>35% Off</span>
            
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://imgs.search.brave.com/DaQEXegydP4ehDNv0_mqBlz0AZRub9zjklJpUe0Bdp8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hZ2VuZGEtYWN0/aXZpdHktaW5mb3Jt/YXRpb24tY2FsZW5k/YXItZXZlbnRzLW1l/ZXRpbmctYXBwb2lu/dG1lbnRfMzYzMjUt/MzI3Ny5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                alt=""
                className="aspect-square w-full rounded object-cover transform hover:scale-105 transition duration-300"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-white  group-hover:underline-offset-4"
                >
                  Event Planning
                 
                </h3>
                <span className='flex ryc-text font6 tracking-widest'>35% Off</span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://imgs.search.brave.com/YkRU3cuC3FVI7IvxD1q5UUmSEztUfvsUhUOwW1ayhhg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTQ2Nzk2NjUtZjU1/MzdmMTg3MjY4P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRsOGZISmxj/M1JoZFhKaGJuUjha/VzU4TUh4OE1IeDhm/REE9"
                alt=""
                className="aspect-square w-full rounded object-cover transform hover:scale-105 transition duration-300"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-white group-hover:underline-offset-4"
                >
                  Private Dining
                  
                </h3>
                <span className='flex ryc-text font6 tracking-widest'>35% Off</span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://imgs.search.brave.com/f6sITsForqhx2CqUpBHpmoIOd8TJsvw3Ir_QE8uaqFk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzYyMzYzOTcyNDAt/OWIyMjlhMzdhMjg2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRWOGZH/MWxiblY4Wlc1OE1I/eDhNSHg4ZkRBPQ"
                alt=""
                className="aspect-square w-full rounded object-cover transform hover:scale-105 transition duration-300"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-white  group-hover:underline-offset-4"
                >
                  Customized Menu
                  
                </h3>
                <span className='flex ryc-text font6 tracking-widest'>35% Off</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
      </div>
    </div>
    
  );
};

const ServiceCard = ({ icon, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='px-5 py-3 flex flex-col'>
      <div
        className={`border rounded-full flex justify-center py-8 ${isHovered ? 'bg-white' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FontAwesomeIcon icon={icon} className={isHovered ? 'text-black' : 'text-white'} />
      </div>
      <p className='font6 text-center'>{title}</p>
    </div>
  );
};

export default Services;
