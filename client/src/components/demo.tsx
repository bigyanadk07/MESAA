import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

interface Item {
    name: string;
    price: number;
    quantity: number;
}

const PaymentPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState<Item[]>(location.state?.itemList || []);
    const [totalAmount, setTotalAmount] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false); // State variable for form submission
    const [validationError, setValidationError] = useState(false); // State variable for validation error

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => {
            const itemPrice = typeof item.price === 'number' ? item.price : 0;
            const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
            return acc + itemPrice * itemQuantity;
        }, 0);
        setTotalAmount(total);
    }, [cartItems]);

    // Function to handle order confirmation
    const confirmOrder = () => {
        const isFormValid = validateForm();
        if (isFormValid) {
            setFormSubmitted(true);
            setTimeout(() => {
                setFormSubmitted(false); // Hide the notification after 3 seconds
                setCartItems([]); // Clear the cart
                navigate('/'); // Redirect to home page
            }, 3000);
        } else {
            setValidationError(true); // Display validation error pop-up
        }
    };

    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [cardno, setCardno] = useState('');
    const [cardname, setCardname] = useState('')
    
    // Function to validate the form
    const validateForm = () => {
        if (!customerName.trim() || !customerEmail.trim() || !phoneNumber.trim() || !address.trim() || !cardno.trim() || !cardname.trim()) {
            return false;
        }
        return true;
    };
    

    return (
        <div className="background2 text-white min-h-screen font3">
            {/* Header */}
            <div className="background p-4  items-center flex">
                <h1 className="text-white text-2xl font-extrabold">HimalayanPAY</h1>
                <nav className="flex justify-center py-2 px-4  text-white">
                    <Link to="/" className="mx-4 hover:text-gray-300">
                        Home
                    </Link>
                    <Link to="/about" className="mx-4 hover:text-gray-300">
                        About Us
                    </Link>
                    <Link to="/order" className="mx-4 hover:text-gray-300">
                        Order
                    </Link>
                </nav>
            </div>
            <div className="flex justify-center mr-20 mt-14">
                {/* Cart Section and Payment Details */}
                <div className="flex justify-between">
                    <div className="">
                        {/* Payment Details */}
                        <div className="w-96 mx-10 px-5">
                            {/*Bread Crumbs Start  */}
                            <nav aria-label="Breadcrumb">
                            <ol className="flex items-center gap-1 text-sm text-white mb-5">
                                <li>
                                <Link to='/' className="block transition hover:text-gray-300">
                                    <span className="sr-only"> Home </span>

                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                    </svg>
                                </Link>
                                </li>

                                <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </li>

                                <li>
                                <Link to='/order' className="block transition hover:text-gray-400"> Order </Link>
                                </li>

                                <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </li>

                                <li>
                                <Link to='/cart' className="block transition hover:text-gray-400"> Payment </Link>
                                </li>
                            </ol>
                            </nav>
                            {/* BreadCrumbs End */}
                            <h2 className="text-2xl paytext font-bold mb-6">Shipping Details</h2>
                            <form className="">
                                {/* Customer Name */}
                                <div className="pt-1 mb-5">
                                    <label htmlFor="nameOnCard" className="block text-white font-semibold mb-2">
                                        Customer Name
                                    </label>
                                    <input
                                        type="text"
                                        id="nameOnCard"
                                        name="nameOnCard"
                                        className="border  p-2 rounded  w-full input-field background2"
                                        placeholder="Full Name"
                                        required
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                    />
                                </div>
                                {/* Customer Email */}
                                <div className=" rounded mb-5">
                                    <label htmlFor="customerEmail" className="block text-white font-semibold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="customerEmail"
                                        name="customerEmail"
                                        className="border  p-2 rounded  w-full input-field background2"
                                        placeholder="Email"
                                        required
                                        value={customerEmail}
                                        onChange={(e) => setCustomerEmail(e.target.value)}
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="  pt-1 mb-5">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block text-white font-semibold mb-2"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="border  p-2 rounded  w-full input-field background2"
                                        placeholder="(+977) 9XXX XXX XXX"
                                        required
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>

                                {/* Customer Address */}
                                <div className="pt-1 pb-4">
                                    <label htmlFor="address" className="block text-white font-semibold mb-2">
                                        Address
                                    </label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        className="border p-2 rounded w-full input-field resize-none background2"
                                        rows={1}
                                        placeholder="Full Address"
                                        required
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="max-w-lg mr-10 px-5">
                        <h2 className="paytext text-2xl font-bold mb-6">Payment Details</h2>
                        <p className="p-5 my-5 border border-dashed rounded-xl border-white text-center text-2xl">
                            Billed Today: ${totalAmount}
                        </p>
                        <div className="pt-1 mb-2">
                            <label htmlFor="nameOnCard" className="block text-white font-semibold mb-2">
                                Name on Card
                            </label>
                            <input
                                type="text"
                                id="nameOnCard"
                                name="nameOnCard"
                                className="border  p-2 rounded  w-full input-field background2"
                                placeholder="Name on Card"
                                required
                                value={cardname}
                                onChange={(e) => setCardname(e.target.value)}
                            />
                        </div>

                        {/* Payment Method Selection */}
                        <div className="flex gap-5 mb-4 mt-5">
                            <div>
                                <label
                                    htmlFor="DeliveryStandard"
                                    className="block cursor-pointer rounded-lg border border-gray-100 background2 p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:payborder has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p className="text-white">eSewa/IMEPay</p>

                                        <p className="mt-1 text-gray-400">Wallet</p>
                                    </div>

                                    <input
                                        type="radio"
                                        name="payment"
                                        value="DeliveryStandard"
                                        id="DeliveryStandard"
                                        className="sr-only"
                                        checked
                                    />
                                </label>
                            </div>

                            <div>
                                <label
                                    htmlFor="DeliveryPriority"
                                    className="block cursor-pointer rounded-lg border border-gray-100 background2 p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:payborder has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p className="text-white">Credit/Debit Card</p>

                                        <p className="mt-1 text-gray-400">Bank</p>
                                    </div>

                                    <input
                                        type="radio"
                                        name="payment"
                                        value="DeliveryPriority"
                                        id="DeliveryPriority"
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Card Info */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="  pt-1 rounded ">
                                <label htmlFor="customerCardNo" className="block text-white font-semibold mb-2">
                                    Card No
                                </label>
                                <input
                                    type="text"
                                    id="customerCardNo"
                                    name="customerCardNo"
                                    className="border  p-2 rounded  w-full input-field background2"
                                    placeholder="Card/Paypal Number"
                                    required
                                    value={cardno}
                                    onChange={(e) => setCardno(e.target.value)}
                                />
                            </div>
                            {/* CVV Number */}
                            <div className="pt-1">
                                <label htmlFor="expiryDate" className="block text-white font-semibold mb-2">
                                    CVV Number
                                </label>
                                <input
                                    type="select"
                                    id="expiryDate"
                                    name="expiryDate"
                                    className="border p-2 rounded w-full input-field background2"
                                    placeholder="CVV"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            {/* Expiry Month */}
                            <div className="pt-1">
                                <label htmlFor="expiryMonth" className="block text-white font-semibold mb-2">
                                    EXP. MONTH
                                </label>
                                <select
                                    id="expiryMonth"
                                    name="expiryMonth"
                                    className="border p-2 rounded w-full input-field background2"
                                    required
                                >
                                    <option value="" disabled selected className="text-gray-500">
                                        Select Month
                                    </option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>

                            {/* Expiry Year */}
                            <div className="pt-1">
                                <label htmlFor="expiryYear" className="block text-white font-semibold mb-2">
                                    EXP. YEAR
                                </label>
                                <select
                                    id="expiryYear"
                                    name="expiryYear"
                                    className="border p-2 rounded w-full input-field background2"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select Year
                                    </option>
                                    {Array.from({ length: 11 }, (_, i) => {
                                        const year = new Date().getFullYear() + i;
                                        return <option key={year} value={year}>{year}</option>;
                                    })}
                                </select>
                            </div>
                        </div>
                        {/* Checkout Button */}
                        <button
                            onClick={confirmOrder}
                            className="block rounded background px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 w-full mb-4 mt-5"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
            {/* Validation Error Message */}
            {validationError && (
                <div className="fixed top-8 right-8">
                    <div role="alert" className="rounded-xl border border-gray-100 bg-red-900 p-4">
                        <div className="flex items-start gap-4">
                            <span className="text-red-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </span>
                            <div className="flex-1">
                                <strong className="block font-medium text-white">Error</strong>
                                <p className="mt-1 text-sm text-white">Please fill in the details.</p>
                            </div>
                            <button
                                onClick={() => setValidationError(false)}
                                className="text-gray-500 transition hover:text-gray-600"
                            >
                                <span className="sr-only">Dismiss popup</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Order Placed Message */}
            {formSubmitted && (
                <div className="fixed top-8 right-8">
                    <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
                        <div className="flex items-start gap-4">
                            <span className="text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                            <div className="flex-1">
                                <strong className="block font-medium text-gray-900">Order Placed</strong>
                                <p className="mt-1 text-sm text-gray-700">Your order has been placed successfully.</p>
                            </div>
                            <button
                                onClick={() => setFormSubmitted(false)}
                                className="text-gray-500 transition hover:text-gray-600"
                            >
                                <span className="sr-only">Dismiss popup</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
