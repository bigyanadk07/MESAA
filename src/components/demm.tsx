import React, { useState } from 'react';
import Burger from './internalComponents/orderItems/burger'; // Import the Burger component
import Pizza from './internalComponents/orderItems/pizza'; // Import the Pizza component

const Order = () => {
  // State variable to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <p className='text-center font-bold text-3xl font3 mb-10'>Place Your Order</p>
      {/* Select a Category */}
      <div className='grid grid-cols-2 border border-black'>
        {/* Food Category and Selection Section */}
        <div className='px-20 py-10 border border-black w-full'>
          <div className='font3 mb-3'>Please Select a Category</div>
          <select
            className='font3'
            name="categories"
            id="categories"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            <option value="burger">Burger</option>
            <option value="pizza">Pizza</option>
            {/* Add other categories as needed */}
          </select>
          <hr className='border-t-1 mt-5 border-black mb-10' />
          {/* Display selected category component */}
          {selectedCategory === 'burger' && (
            <div className="text-center mt-4">
              <Burger />
            </div>
          )}
          {selectedCategory === 'pizza' && (
            <div className="text-center mt-4">
              <Pizza />
            </div>
          )}
        </div>
        {/* Items and Bill Section */}
        <div className='border border-black px-20'>
          <p className='text-center text-2xl font3 mt-10'>Your Items</p>
          <hr className='border-t-1 mt-5 border-black' />
          <div className="text-center mt-4">No items selected</div>
          <hr className='border-t-1 mt-5 border-black' />
          <div className="text-center mt-4">Total: $0.00</div>
        </div>
      </div>
    </div>
  );
}

export default Order;
