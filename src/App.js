import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import OrderForm from './components/OrderForm';
import NewsFeed from './components/NewsFeed';
import ContactInfo from './components/ContactInfo';
import './App.css';

function App() {
  return (
    <Router basename="/Innovatech-VR-Pro">
      <div className="App main">
        <nav className="navbar">
          <div className="logo">Innovatech</div>
          <div className="nav-links">
            <Link to="/" className="nav-btn">Product</Link>
            <Link to="/order" className="nav-btn">Order</Link>
            <Link to="/news" className="nav-btn">News</Link>
            <Link to="/contact" className="nav-btn">Contact</Link>
          </div>
          <button className="toggler">☰</button>
        </nav>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/contact" element={<ContactInfo />} />
        </Routes>
        <footer className="footer">
          <div className="footer-header">Innovatech VR Pro</div>
          <div className="footer-links">
            <div className="link">
              <h5>About Us</h5>
              <p>Learn more about Innovatech</p>
            </div>
            <div className="link">
              <h5>Support</h5>
              <p>Contact our support team</p>
            </div>
          </div>
        </footer>
        <div className="copyright">
          <p>© 2024 Innovatech. All rights reserved.</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
