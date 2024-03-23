import React, { useState } from 'react';
import Separator from './assets/separator.svg';

const OrderCard = ({ menuItems, onAddItem }) => {

const [item, setItem] = useState([]);

const onAddItem = (menuItem) =>{
  setItem()
}

  const handleAddItem = (menuItem) => {
    onAddItem(menuItem);
    console.log(menuItem);
  };

  return (
    <div className='background text-white'>
      <div className='font6 grid grid-cols-2 border-white mx-10 py-10'>
        {menuItems.map((menuItem, index) => (
          <div key={index} className='grid grid-cols-5 p-10'>
            <div className='col-span-1'><img src={menuItem.imgsrc} className="rounded-xl w-28 h-24" alt="" /></div>
            <div className='col-span-4 flex justify-center'>
              <div className='mt-5'>
                <div className='ryc-text'>{menuItem.name} - <span className='ryc-text'>$ {menuItem.price}</span></div>
                <div>{menuItem.description}</div>
                <button className="btn-add" onClick={() => handleAddItem(menuItem)}> <div className='font6 border border-black py-1 px-5 rounded ryc-bg text-black transition-300s ease-in-out hover:bg-black hover:text-white hover:border-white'>Add</div> </button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default OrderCard;
