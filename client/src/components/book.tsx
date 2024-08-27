import React from 'react';
import Navbar from './internalComponents/Navbar';
import Footer from '../components/Footer';

const BookaTable: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-div text-white flex justify-center font6'>
        <div className='grid grid-cols-3 mt-20 mb-20'>
          <div className='col-span-2 bg-black p-10 shadow-xl'>
            <div className='mt-1 mb-3'>
              <h1 className='text-center text-5xl'>Online Reservation</h1>
              <p className='text-center'>Booking Request <span className='ryc-text'>+977 9765 356 765</span> or fill out the order form</p>
            </div>
            <form>
              {/* Order Form Below */}
              <div className='flex gap-5 px-10 py-5'>
                <input type="text" placeholder='Your Name' className='inputBg border-1 border-white px-5 py-2' />
                <input type="tel" placeholder='Phone Number' className='inputBg border-1 border-white px-5 py-2' />
              </div>
              <div className='flex gap-5 p-10'>
                <select name="select" id="select" className='inputBg px-5 py-2'>
                  <option className='inputBg' value="1">1 Person</option>
                  <option className='inputBg' value="2">2 Person</option>
                  <option className='inputBg' value="3">3 Person</option>
                  <option className='inputBg' value="4">4 Person</option>
                  <option className='inputBg' value="5">5 Person</option>
                  <option className='inputBg' value="6">6 Person</option>
                </select>
                <input type="date" className='inputBg px-3 py-2' />
                <input type="time" className='inputBg px-2 py-2' />
              </div>
              <div className='px-10 py-5 mb-10'>
                <textarea className='inputBg w-full p-5' placeholder='Enter Your Message...' name="textarea" id="txtarea" />
              </div>
              <button type="submit" className='w-full bookBtn px-10 py-2 font6'>Book a Table</button>
            </form>
          </div>

          <div className='col-span-1 inputBg'>
            <h1 className='font6 text-center text-5xl mt-10'>Contact <p>Us</p></h1>
            <p className='text-center font-bold mt-5'>Booking Request</p>
            <p className='text-center text-xl font6 mt-3'><span className='ryc-text'>+977 9765 356 765</span></p>
            <div className='mx-5'>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                viewBox="0 0 97.1 12.7" enableBackground="new 0 0 97.1 12.7" xmlSpace="preserve">
                <rect x="31.6" y="3" transform="matrix(0.7071 0.7071 -0.7071 0.7071 14.7528 -22.8645)" fill="none" stroke="#e4c590" strokeWidth="0.75" strokeMiterlimit="10" width="6.8" height="6.8" />
                <rect x="58.7" y="3" transform="matrix(0.7071 0.7071 -0.7071 0.7071 22.699 -42.0484)" fill="none" stroke="#e4c590" strokeWidth="0.75" strokeMiterlimit="10" width="6.8" height="6.8" />
                <line fill="none" stroke="#e4c590" strokeWidth="0.75" strokeMiterlimit="10" x1="3.2" y1="6.4" x2="30.2" y2="6.4" />
                <circle fill="#e4c590" cx="2.6" cy="6.4" r="2.5" />
                <line fill="none" stroke="#e4c590" strokeWidth="0.75" strokeMiterlimit="10" x1="93.9" y1="6.4" x2="66.9" y2="6.4" />
                <circle fill="#e4c590" cx="94.4" cy="6.4" r="2.5" />
              </svg>
            </div>
            <div>
              <h1 className='text-center mt-10'>Location</h1>
              <p className='text-center text-sm text-gray-500'>Bhaisepati, Marble Street-04 <p>Nepal</p></p>
            </div>
            <div>
              <h1 className='text-center mt-10'>Lunch Time</h1>
              <p className='text-center text-sm text-gray-500'>Monday to Sunday <p>11.00 am - 2.30pm</p></p>
            </div>
            <div>
              <h1 className='text-center mt-10'>Dinner Time</h1>
              <p className='text-center text-sm text-gray-500'>Monday to Sunday <p>05.00 pm - 10.00pm</p></p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BookaTable;
