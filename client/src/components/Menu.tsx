import React, { useEffect, useState } from 'react';
import Navbar from './internalComponents/Navbar';
import Footer from './Footer';
import axios from 'axios';
import Separator from './assets/separator.svg';
import Loader from './Loader';

interface MenuItem {
  name: string;
  description: string;
  imgsrc: string;
  price: number;
}

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Burger');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // New state for loading indicator

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setIsLoading(true); // Set loading state to true when fetching data
    axios.get(`http://localhost:4000/get${selectedCategory}`)
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(err => {
        console.error("Error occurred", err.message);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false when data fetching is complete
      });
  }, [selectedCategory]);

  return (
    <div className="min-h-screen background text-white font3">
      <Navbar />
      <div className="py-10">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className='flex justify-center w-full h-4 mb-5'>
              <img src={Separator} className='flex justify-center' />
            </div>
            <h1 className="font3 text-3xl font-bold text-white">Menu</h1>
            <p className="font3 mt-2 text-sm text-white">Please select a category</p>
            <div className="flex justify-center mt-6 space-x-4">
              {['Burger', 'Pizza', 'Sandwich', 'Sushi', 'Burritos', 'Fries', 'Drinks'].map(category => (
                <button
                  key={category}
                  className={`text-sm font-medium py-2 px-4 rounded-lg transition duration-300 ${selectedCategory === category ? 'ryc-bg text-black hover:ryc-bg focus:outline-none focus:ryc-bg' : 'ryc-text hover:bg-amber-600 focus:ryc-bg focus:outline-none'}`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
                <div className='mt-5'>
                {isLoading && <Loader text="Loading data..." />}
                </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((menuItem: MenuItem, index: number) => (
              <div key={index} className="background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img src={menuItem.imgsrc} alt={menuItem.name} className="h-48 w-full object-cover" />
                <div className="px-4 py-4">
                  <h2 className="text-lg font-semibold text-white">{menuItem.name}</h2>
                  <p className="text-sm text-white mt-1">{menuItem.description}</p>
                  <p className="text-sm font-semibold ryc-text mt-2">${menuItem.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
