import React, { useState } from 'react';
import Separator from './assets/separator.svg';
import MenuCard from './internalComponents/menuCard';
import burgerData from './internalComponents/MenuCards/burger.json';
import pizzaData from './internalComponents/MenuCards/pizza.json';
import sandwichData from './internalComponents/MenuCards/sandwich.json';
import sushiData from './internalComponents/MenuCards/sushi.json';
import burritosData from './internalComponents/MenuCards/burritos.json';
import friesData from './internalComponents/MenuCards/fries.json';
import drinksData from './internalComponents/MenuCards/drinks.json';
import Navbar from './internalComponents/Navbar';
const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Burger');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  let menuItemsData = [];
  switch (selectedCategory) {
    case 'Burger':
      menuItemsData = burgerData;
      break;
    case 'Pizza':
      menuItemsData = pizzaData;
      break;
    case 'Sandwich':
      menuItemsData = sandwichData;
      break;
    case 'Sushi':
      menuItemsData = sushiData;
      break;
    case 'Burritos':
      menuItemsData = burritosData;
      break;
    case 'Fries':
      menuItemsData = friesData;
      break;
    case 'Drinks':
      menuItemsData = drinksData;
      break;
    default:
      break;
  }

  return (
    <div>
      <Navbar/>
    <div className='background text-white'>
    <div className='flex justify-center w-full h-4 mb-5'>
        <img src={Separator} className='flex justify-center' />
      </div>
      <h1 className='text-center font6 text-5xl mb-5 py-5'>Menu</h1>
      <p className='font6 text-center mt-2'>Please Select a Category</p>
      <div className='flex justify-center mt-5 mb-10'>
        <span className="inline-flex -space-x-px overflow-hidden rounded-md background shadow-sm">
          <button className="font6 backgroundinline-block px-4 py-2 text-sm font-medium text-white hover:text-gray-200 focus:relative" onClick={() => handleCategorySelect('Burger')}>Burger</button>
          <button className="font6 inline-block px-4 py-2 text-sm font-medium text-white hover:text-gray-200 focus:relative" onClick={() => handleCategorySelect('Pizza')}>Pizza</button>
          <button className="font6 inline-block px-4 py-2 text-sm font-medium text-white hover:text-gray-200 focus:relative" onClick={() => handleCategorySelect('Sandwich')}>Sandwich</button>
          <button className="font6 inline-block px-4 py-2 text-sm font-medium text-white hover:text-gray-200 focus:relative" onClick={() => handleCategorySelect('Sushi')}>Sushi</button>
          <button className="font6 inline-block px-4 py-2 text-sm font-medium text-white hover:text-gray-200 focus:relative" onClick={() => handleCategorySelect('Burritos')}>Burritos</button>
          <button className="font6 inline-block px-4 py-2 text-sm font-medium text-white hover:text-gray-200 focus:relative" onClick={() => handleCategorySelect('Fries')}>Fries</button>
          <button className="font6 inline-block px-4 py-2 text-sm font-medium text-white hover:text-gray-200 focus:relative" onClick={() => handleCategorySelect('Drinks')}>Drinks</button>
        </span>
      </div>
      <MenuCard menuItems={menuItemsData} />
    </div>







    
    </div>
  );
};

export default Menu;
