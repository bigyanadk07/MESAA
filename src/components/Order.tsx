import React, { useState } from 'react';
import Burger from './internalComponents/orderItems/burger';
import Pizza from './internalComponents/orderItems/pizza';
import Navbar from './internalComponents/Navbar';
import Burritos from './internalComponents/orderItems/burritos';
import Fries from './internalComponents/orderItems/fries';
import Drinks from './internalComponents/orderItems/drinks';
import Sushi from './internalComponents/orderItems/sushi';
import Sandwich from './internalComponents/orderItems/sandwich';
import { Link } from 'react-router-dom'; 
import Separator from './assets/separator.svg';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [selectedCategory, setSelectedCategory] = useState('burger');
    const [itemList, setItemList] = useState([]);
    const navigate = useNavigate();

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const addItemToList = (itemName, itemPrice) => {
        const existingItemIndex = itemList.findIndex(item => item.name === itemName);
        if (existingItemIndex !== -1) {
            // If item already exists, increase its quantity
            const updatedItemList = [...itemList];
            updatedItemList[existingItemIndex].quantity++;
            setItemList(updatedItemList);
        } else {
            // Otherwise, add the item to the list
            setItemList(prevItemList => [...prevItemList, { name: itemName, price: itemPrice, quantity: 1 }]);
        }
    };

    const removeItemFromList = (index) => {
        setItemList(prevItemList => prevItemList.filter((_, i) => i !== index));
    };

    const categoryComponents = {
        burger: Burger,
        pizza: Pizza,
        sandwich: Sandwich,
        sushi: Sushi,
        drinks: Drinks,
        fries: Fries,
        burritos: Burritos
    };

    const SelectedCategoryComponent = categoryComponents[selectedCategory];

    const handleCheckout = () => {
        console.log("Checkout items:", itemList); // Log checkout items
        // Navigate to checkout page with itemList as state
        navigate('/checkout', { state: { itemList: itemList } });
    };

    return (
        <div className='background text-white'>
            <Navbar />
            <div className='flex justify-center w-full h-4 mb-5'><img src={Separator} className='flex justify-center' /></div>
            <p className=' font3 text-center text-4xl md:text-5xl  mb-9 sm:mb-10'>Order</p>

            <div className='grid grid-cols-3 gap-4 lg:grid-cols-3 lg:gap-8'>
                <div className='px-20 py-10 col-span-2 w-full border-r-2 border-white'>
                    <div className='font3 mb-3 '>
                    <select
                        className='font3 mt-1.5 w-full rounded-lg border-white background  sm:text-sm'
                        name="categories"
                        id="categories"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >

                        <option value="burger">Burger</option>
                        <option value="pizza">Pizza</option>
                        <option value="sandwich">Sandwich</option>
                        <option value="sushi">Sushi</option>
                        <option value="burritos">Burritos</option>
                        <option value="fries">Fries</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    </div>
                    
                    <hr className='border-t-1 mt-5 border-white mb-10' />
                    <div className="text-center mt-4">
                        {selectedCategory === "" ? (
                            <p className="text-red-500">Please select a category to view items.</p>
                        ) : (
                            <SelectedCategoryComponent onAddItem={addItemToList} />
                        )}
                    </div>
                </div>
                <div className='mx-5'>
                    <div className='flex justify-between '>
                            <div className='text-2xl font3 mt-10'>Food Cart </div>
                            <div>
                            <button onClick={handleCheckout}>
            <div className='btn text-black'>
              <div className='link'>
                Checkout
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            </button></div>
                    </div>
                    <hr className='border-t-1 mt-5 border-white' />
                    <div className="text-center mt-4"></div>
                    <div>
                        {itemList.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <p className='font3 mb-5'>{item.name}: <span className='text-green-500 font-bold'>${item.price}</span></p>
                                <p className='font3 mb-5'>Quantity: {item.quantity}</p>
                                <button className='text-right rounded-full px-1 hover:bg-red-600 hover:text-white text-right' onClick={() => removeItemFromList(index)}>
                                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
