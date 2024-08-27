import React from 'react'
import Separator from '../assets/separator.svg'

const upcomingEvents:React.FC = () => {
  return (
    <div>
        <div className='background py-16'>
              <div> 
                  <div className='flex justify-center w-full h-4 mb-5'><img src={Separator} className='flex justify-center' /></div>
                  <h1 className='text-white font6 text-5xl text-center'>Our Speciality</h1>
              </div>
              <div className='flex flex-row justify-center mt-10 py-10 gap-10 text-white font6'>
                {/* Cards */}
                <div className='flex flex-col justify-end p-10 serviceCard1 rounded-lg'>
                  <h1 className='text-center text-xl ryc-text uppercase font-extrabold'>FOOD, FLAVOUR</h1>
                  <p className='text-center mx-5'>Flavour so good you’ll try to eat with your eyes.</p>
                </div>
                <div className='flex flex-col justify-end p-10 serviceCard2 rounded-lg'>
                <h1 className='text-center text-xl font-extrabold ryc-text uppercase'>HEALTHY FOOD</h1>
                <p className='text-center mx-5'>Flavour so good you’ll try to eat with your eyes.</p>
                </div>
                <div className='flex flex-col justify-end p-10 serviceCard3 rounded-lg'>
                <h1 className='text-center text-xl font-extrabold ryc-text uppercase '>RECIPIE</h1>
                <p className='text-center mx-5'>Flavour so good you’ll try to eat with your eyes.</p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default upcomingEvents
