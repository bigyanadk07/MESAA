// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link} from 'react-router-dom';
import Navbar from './internalComponents/NavbarOrder';
import { useNavigate } from 'react-router-dom';

// Define the interface for cart items
interface Item {
  name: string;
  price: number;
  quantity: number;
  imgsrc: string;
}

// Define the PaymentPage component
const PaymentPage: React.FC = () => {
    // Get the current location
    const location = useLocation();

    // Initialize state variables for cart items, order placement status, and total amount
    const [cartItems, setCartItems] = useState<Item[]>(location.state?.itemList || []);

    const [totalAmount, setTotalAmount] = useState(0);

    // Calculate the total amount when cart items change    
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => {
            const itemPrice = typeof item.price === 'number' ? item.price : 0;
            const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
            return acc + (itemPrice * itemQuantity);
        }, 0);
        setTotalAmount(total);
    }, [cartItems]);

    // Function to remove item from the cart
    const removeItem = (index: number) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };
    const navigate = useNavigate();
    const handlePayment = () => {
        navigate('/payment', { state: { itemList: cartItems } });
    };

    return (
        <div className="background2 min-h-screen pb-1">
            <Navbar/>
            {/* Cart Section and Payment Details */}
            <div className='flex justify-center my-8'>
                <div className='w-full md:w-3/4'>
                    {/* Cart Section */}
                    <div className='w-full text-white font3 rounded-xl'>
                    <div className=' border-b border-white'>
                        <div className=''>
                            <div className='flex justify-center'>
                            <h2 className="text-white text-center font-bold text-4xl py-6 font3 px-5">Your Cart</h2>
                            </div>
                            {cartItems.length === 0 ? (
                                <div className=" flex justify-center items-center h-20">
                                    <p className='text-red-800 font-bold font3 text-lg ml-4'>You haven't added anything to your cart!!!</p>
                                </div>
                            ) : (
                                <div className="px-6 py-4">
                                    {cartItems.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center mb-5 pb-2">
                                            <div className='flex ml-5'>
                                                <div className='mr-10'>
                                                <img src={item.imgsrc} alt="" className='w-14 h-14 rounded-xl'/>
                                                </div>
                                                <div>
                                                <h3 className="text-lg mb-1 mr-5">{item.name}
                                                        {/* <span className="text-green-600">${item.price}</span> */}
                                                        </h3>
                                                        <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700">
                                            <svg className="w-6 h-6 hover:bg-red-600 hover:rounded-xl hover:p-1 hover:transition hover:ease-in-out text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                            </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Cart Section End */}
                    {/* Payment Details */}
                        <div className='flex justify-between'>
                            <div></div>
                        <div className='p-5 '>
                            <div className='p-6'>
                                <div className="flex justify-between mb-4 text-sm">
                                    <p>Sub-Total:</p>
                                    <p>${totalAmount.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between mb-4 text-sm">
                                    <p>VAR(Pre-Added):</p>
                                    <p>11%</p>
                                </div>
                                <div className="flex justify-between mb-4 text-sm">
                                    <p>Discount:</p>
                                    <p>$0</p>
                                </div>
                                <div className="flex justify-between text-lg">
                                    <p className=''>Grand Total:</p>
                                    <p className=''>${totalAmount.toFixed(2)}</p>
                                </div>
                                {/* Order Button */}
                                <div className="flex justify-center">
                                    {cartItems.length === 0 ? (
                                        <Link to="/order" className="btn3 mt-5">
                                            <div className="link3">Order Now <span></span><span></span><span></span><span></span> </div>
                                        </Link>
                                    ) : (
                                        <button onClick={handlePayment} className="btn3 mt-5">
                                            <div className="link3">To Payment <span></span><span></span><span></span><span></span> </div>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    {/* Payment Details End */}
                </div>
            </div>
        </div>
    );
}

// Export the PaymentPage component
export default PaymentPage;
