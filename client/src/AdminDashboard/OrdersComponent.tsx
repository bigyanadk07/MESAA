import React, { useEffect, useState } from 'react';
import Navbar from '../AdminDashboard/dashboardNav';
import axios from 'axios';

interface Order {
  id: number;
  customerName: string;
  quantity: number;
  totalAmount: number;
  customerId: number;
  _id: string;
  itemList: {
    name: string;
    price: number;
    quantity: number;
  }[]
}

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/getOrders')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  }); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div className="flex min-h-screen bg-gray-100 font3">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white fixed h-full shadow-lg">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 overflow-y-auto">
        {/* Page Content */}
        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Orders</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Items
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Id
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {order.customerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      ${order.totalAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <ul>
                        {order.itemList.map((item, i) => (
                          <li key={i} className="text-gray-600">
                            {item.name} ({item.quantity})
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {order._id.toString().substr(-4)}
                    </td>
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

export default OrdersPage;
