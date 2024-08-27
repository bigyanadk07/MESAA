import React, { useEffect, useState } from 'react';
import Navbar from './internalComponents/NavbarOrder';
import Footer from '../components/Footer';
import axios from 'axios';
import Separator from './assets/separator.svg';
import { useNavigate } from 'react-router-dom';

interface FoodItem {
    name: string;
    imgsrc: string;
    description: string;
    price: number;
    quantity: number;
}

const Order: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('burger');
    const [food, setFood] = useState<FoodItem[]>([]);
    const [cart, setCart] = useState<FoodItem[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    console.log(total)

    useEffect(() => {
        axios.get(`http://localhost:4000/get${selectedCategory}`)
            .then(response => {
                setFood(response.data);
            })
            .catch(err => {
                console.error('Error fetching food:', err);
            });
    }, [selectedCategory]);

    useEffect(() => {
        const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalPrice);
    }, [cart]);

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    const handleAddToCart = (foodItem: FoodItem) => {
        const existingItem = cart.find(item => item.name === foodItem.name);
        if (existingItem) {
            existingItem.quantity++;
            setCart([...cart]);
        } else {
            setCart(prevCart => [...prevCart, { ...foodItem, quantity: 1 }]);
        }
    };

    const handleRemoveFromCart = (foodItem: FoodItem) => {
        const existingItem = cart.find(item => item.name === foodItem.name);
        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity--;
            setCart([...cart]);
        } else {
            const updatedCart = cart.filter(item => item.name !== foodItem.name);
            setCart(updatedCart);
        }
    };

    const handleCheckout = () => {
        navigate('/cart', { state: { itemList: cart } });
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="min-h-screen background text-white font3">
            <Navbar />
            <div className="py-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className='flex justify-center w-full h-4 mb-5 my-5'>
                            <img src={Separator} className='flex justify-center' />
                        </div>
                        <h1 className="font3 text-3xl font-bold text-white">Order</h1>
                        <p className="font3 mt-2 text-sm text-white">Please select a category</p>

                        <div className="flex justify-between mt-6 space-x-4">
                            <div>
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

                            <div className='flex'>
                                <div className='flex justify-center mx-5'>
                                    <button onClick={handleCheckout} className='checkoutBtn text-black px-6 rounded-xl'>To Payment</button>
                                </div>
                                <div className='relative'>
                                    <span onClick={toggleCart} className='cursor-pointer text-white hover:text-gray-300'>
                                        <svg className="w-8 h-8 text-gray-800 dark:text-white active:bg-sky-300 active:rounded-xl active:p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                        </svg>
                                    </span>
                                    {isCartOpen && (
                                        <div className="ml-10 rounded-b-lg rounded-tr-lg ryc-bg p-8  absolute top-full border-t border-black w-auto shadow-md z-10">
                                            <h2 className="text-center text-gray-800 text-lg font-semibold mb-4">Cart</h2>
                                            {cart.length > 0 ? (
                                                <ul>
                                                    {cart.map((item, index) => (
                                                        <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                                                            <span className="text-gray-800 mr-5 w-full">{item.name}</span>
                                                            <div className="flex items-center">
                                                                <button className="text-gray-500 focus:outline-none" onClick={() => handleRemoveFromCart(item)}>-</button>
                                                                <span className="mx-2 text-gray-800">{item.quantity}</span>
                                                                <button className="text-gray-500 focus:outline-none" onClick={() => handleAddToCart(item)}>+</button>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-gray-600 text-center">Your cart is empty</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {food.map((foodItem, index) => (
                            <div key={index} className="background rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
                                <img src={foodItem.imgsrc} alt={foodItem.name} className="h-48 w-full object-cover" />
                                <div className="px-4 py-4">
                                    <h2 className="text-lg font-semibold text-white">{foodItem.name}</h2>
                                    <p className="text-sm text-white mt-1">{foodItem.description}</p>
                                    <p className="text-sm font-semibold ryc-text mt-2">${foodItem.price}</p>
                                    <button onClick={() => handleAddToCart(foodItem)} className="orderBtn rounded-xl text-white px-4 py-2 mt-4">Order</button>
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

export default Order;
