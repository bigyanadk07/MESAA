import React from 'react';


const MenuCard = ({ menuItems }) => {
  return (
    <div className=''>
      <div className='font6 grid grid-cols-2 border-white mx-10 py-10'>
        {menuItems.map((menuItem, index) => (
          <div key={index} className='grid grid-cols-5 p-10'>
            <div className='col-span-1'><img src={menuItem.imgsrc} className="rounded-xl w-28 h-24" alt="" /></div>
            <div className='col-span-4 flex justify-center'>
              <div className='mt-5'>
                <div>{menuItem.name} - <span className='ryc-text'>$ {menuItem.price}</span></div>
                <div>{menuItem.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
