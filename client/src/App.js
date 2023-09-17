import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import AboutUs from './components/AboutUs';
import LoginSignup from './components/LoginSignup';
import ServicePage from './components/ServicePage';
import CartPage from './components/Cart';
import { CartProvider } from './components/CartContext';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/form/:id" element={<FormPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
