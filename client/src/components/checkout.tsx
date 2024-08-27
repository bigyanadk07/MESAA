import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './internalComponents/Navbar';
import Separator from './assets/separator.svg';
import { Link } from 'react-router-dom';


interface Item {
  name: string;
  price: number;
  quantity: number;
}

function Checkout() {
    const location = useLocation();
    const itemList: Item[] = location.state?.itemList || [];

    // Calculate total amount
    const totalAmount = itemList.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="background text-white font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-center">
                    <img src={Separator} alt="Separator" className="w-24 mb-4" />
                </div>
                <h2 className="text-center text-4xl mb-10">Your Items</h2>
                {itemList.length === 0 ? (
                    <div className="text-center text-lg mb-8 text-red-800">Your cart is empty.</div>
                ) : (
                    <div className="flex justify-center">
                        <div className="w-full md:w-3/4">
                            {itemList.map((item, index) => (
                                <div key={index} className="border-b border-gray-600 py-4">
                                    <h3 className="text-lg font-semibold mb-2">{item.name}: <span className="ryc-text">${item.price}</span></h3>
                                    <h3> Quantity: {item.quantity}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {itemList.length > 0 && (
                    <div className="flex justify-center mt-4">
                        <p className="text-lg font-semibold">Total Amount: ${totalAmount.toFixed(2)}</p>
                    </div>
                )}
                <div className="flex justify-center mt-8">
                    {itemList.length === 0 ? (
                        <Link to="/order" className="btn2">
                            <div className="link2">Order Now <span></span><span></span><span></span><span></span> </div>
                        </Link>
                    ) : (
                        <Link to='/payment' className="btn2">
                            <div className="link2">Payment <span></span><span></span><span></span><span></span> </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Checkout;
