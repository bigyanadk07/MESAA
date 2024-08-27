import React, { useEffect, useState } from 'react';
import Navbar from '../AdminDashboard/dashboardNav';
import axios from 'axios';

const Dashboard: React.FC = () => {

  const [feedback, setFeedback] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/getContact');
                setFeedback(response.data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };

        fetchData();
    }, []);
    
  return (
    <div className="font3 flex min-h-screen">
      {/* Fixed Navbar */}
      <div className="text-white fixed top-0 left-0">
        <Navbar />
      </div>
      {/* Main Content Area */}
      <div className="ml-64 flex-1 p-6 bg-gray-100 overflow-y-auto">
        {/* Welcome Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome</h2>
          <p className="text-gray-600">Here is an overview of your restaurant's performance.</p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-3xl font-bold">150</h3>
            <p>Orders Today</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-3xl font-bold">75</h3>
            <p>New Customers</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-3xl font-bold">20</h3>
            <p>New Reviews</p>
          </div>
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-3xl font-bold">$2,500</h3>
            <p>Revenue Today</p>
          </div>
        </div>

        {/* Popular Dishes Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Dishes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src="https://img.freepik.com/free-photo/close-up-vegetarian-burger-cutting-board_23-2148784533.jpg?w=900&t=st=1710509851~exp=1710510451~hmac=4018023712093e1664e9fb5d8618c55f44566d46e305bb1a72a0b6ee461faf2e" alt="Dish 1" className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h4 className="text-lg font-bold text-gray-700">BBQ Burger</h4>
              <p className="text-gray-600">25 Orders Today</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src="https://img.freepik.com/free-photo/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware_176474-3185.jpg?t=st=1710510600~exp=1710514200~hmac=c321e9bba17c77cda4366ae1cac982afdaf25fbce3784634cb448274bc586cbd&w=826" alt="Dish 2" className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h4 className="text-lg font-bold text-gray-700">Supreme Pizza</h4>
              <p className="text-gray-600">30 Orders Today</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src="https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_1280.jpg" alt="Dish 3" className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h4 className="text-lg font-bold text-gray-700">Mexican Roll Sushi</h4>
              <p className="text-gray-600">20 Orders Today</p>
            </div>
          </div>
        </div>

{/* User Feedback Section */}
<div className="bg-white p-6 rounded-lg shadow-md mb-6">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Customer's Note</h3>
  <div className="space-y-4">
    {feedback.map((contact, index) => (
      <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
        <p className="text-gray-700"><strong>Name:</strong> {contact.name}</p>
        <p className="text-gray-700"><strong>Email:</strong> {contact.email}</p>
        <p className="text-gray-700"><strong>Message:</strong> {contact.message}</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
