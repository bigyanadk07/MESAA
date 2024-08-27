import React, { useEffect, useState } from 'react';
import Navbar from '../AdminDashboard/dashboardNav';
import axios from 'axios';

interface DataType {
  name: string;
  imgsrc: string;
  price: number;
  description: string;
}

const ProductComponent: React.FC = () => {
  const [category, setCategory] = useState<string>('burger'); // Default category
  const [products, setProducts] = useState<DataType[]>([]);

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  const fetchProducts = (selectedCategory: string) => {
    axios.get(`http://localhost:4000/get${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching ${selectedCategory} data:`, error);
      });
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className='font3 flex min-h-screen'>
      {/* Sidebar */}
      <div className='bg-gray-900 text-white fixed h-full'>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className='flex flex-col justify-center mx-auto max-w-6xl px-8 py-10 overflow-y-auto ml-64'>
        <select
          value={category}
          onChange={handleCategoryChange}
          className='p-2 border rounded-md focus:outline-none focus:border-blue-500 text-black mb-10'
        >
          <option value='burger'>Burgers</option>
          <option value='pizza'>Pizza</option>
          <option value='burritos'>Burritos</option>
          <option value='sandwich'>Sandwiches</option>
          <option value='fries'>Fries</option>
          <option value='sushi'>Sushi</option>
          <option value='drinks'>Drinks</option>
        </select>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {products.map((item, index) => (
            <div key={index} className='bg-white rounded-md shadow-md overflow-hidden'>
              <img src={item.imgsrc} alt={item.name} className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h2 className='text-lg font-semibold text-gray-800 mb-2'>{item.name}</h2>
                <p className='text-gray-600 mb-2'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
