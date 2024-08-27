// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Chefscorner from './components/Chefscorner';
import About from './components/About';
import Book from './components/book';
import Checkout from './components/checkout';
import Dashboard from './AdminDashboard/dashboard';
import TotalOrders from './AdminDashboard/OrdersComponent';
import TotalCustomers from './AdminDashboard/CustomersComponent';
import TotalProducts from './AdminDashboard/ProductComponent';
import SignIn from './AdminDashboard/signinPage';
import SignUp from './AdminDashboard/signupPage';
import Payment from './components/PaymentPage';
import Order from './components/Order';
import Menu from './components/Menu';
import CartTotal from './components/CartTotal';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { UserProvider } from './context/UserContext';
import Review from './components/Review'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/ourchefs" element={<Chefscorner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Review />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/order" element={<Order />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartTotal />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/dashboard/totalorders" element={<ProtectedRoute element={<TotalOrders />} />} />
          <Route path="/dashboard/totalcustomers" element={<ProtectedRoute element={<TotalCustomers />} />} />
          <Route path="/dashboard/totalproducts" element={<ProtectedRoute element={<TotalProducts />} />} />

        </Routes>
      </Router>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
