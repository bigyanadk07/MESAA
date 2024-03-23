import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Services from './components/Services';
import Menu from './components/Menu';
import Order from './components/Order';
import Contact from './components/Contact';
import Chefscorner from './components/Chefscorner';
import About from './components/About';
import Book from './components/book';
import Footer from './components/Footer';
import Checkout from './components/checkout';
import CheckoutDemo from './components/demoCheckout';
import CartDemo from './components/demoCart';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/menu" element={<Menu/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/ourchefs" element={<Chefscorner/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/checkout" element={<Checkout/>}/>
        {/* <Route path="/checkoutDemo" element={<CheckoutDemo/>}/>
        <Route path="cartDemo" element={<CartDemo/>}/> */}
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
