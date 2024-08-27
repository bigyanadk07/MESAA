import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Restaurant {
  name: string;
  location: string;
}

const RestaurantChains: React.FC = () => {
  const [names, setNames] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<Restaurant[]>('http://localhost:4000/getRestaurant')
      .then((response) => {
        setNames(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className='text-white'>
      <div className="background2 text-white mt-10 p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
        <h3 className="text-lg font-semibold mb-2">Restaurant Chains</h3>
        {loading ? (
          <p className="text-gray-200">Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {names.map((restaurant, index) => (
              <li key={index} className="py-4 flex items-center space-x-4">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 text-black">
                  <span className="text-lg">{restaurant.name.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium">{restaurant.name}</p>
                  <p className="text-sm text-gray-400">{restaurant.location}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RestaurantChains;
