import React, { useState } from 'react';
import Navbar from './internalComponents/Navbar';
import Footer from './Footer';
import axios from 'axios'; // Import axios for making HTTP requests
import Separator from '../components/assets/separator.svg'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Make a POST request to submit the form data
            await axios.post('http://localhost:4000/submitReview', formData);
            alert('Review submitted successfully');
            // Clear the form fields after submission
            setFormData({
                name: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('An error occurred while submitting the review');
        }
    };

    return (
        <div className="flex flex-col min-h-screen background">
            <Navbar />
            <main className="flex-grow">
                <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-white text-center font6 text-5xl mb-10">Please Leave Us A Review!!</h2>
                    <div className='flex justify-center w-full h-4 mb-5'><img src={Separator} className='flex justify-center' /></div>
                    <div className="max-w-lg w-full background p-8 rounded-lg shadow-xl">
                        <form className="space-y-6 background p-10" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm background text-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm background text-white"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
