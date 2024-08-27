import React, { useEffect, useState } from 'react';
import Navbar from '../AdminDashboard/dashboardNav';
import axios from 'axios';

interface Customer {
  name: string;
  address: string;
  contact: number;
  email: string;
  _id: string;
}

const CustomersPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/getCustomers')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  }, []);

  return (
    <div className="flex h-screen font3">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Page Content */}
        <main className="p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Customer List</h2>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase">Address</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase">Contact</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase">Customer ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {customers.map((customer, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.contact}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer._id.toString().substr(-4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomersPage;
