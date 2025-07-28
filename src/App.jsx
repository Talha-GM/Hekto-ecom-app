import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { DataProvider, useData } from "./context/DataContext";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import OrderComplete from './components/OrderComplete';
import { Link } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const Header = () => {
  const { cart } = useData();
  return (
    <header>
      <div className="bg-[#7E33E0] text-white text-xs py-2 px-4 flex justify-between items-center">
        <div>
          <span>mhhasanul@gmail.com</span>
          <span className="ml-4">(12345)67890</span>
        </div>
        <div className="space-x-4">
          <span>English</span>
          <span>USD</span>
          <Link to="/login" className="hover:text-white relative">
          <span>Login</span> </Link>
          <span>Wishlist</span>
          <Link to="/cart" className="hover:text-white relative">
            <span>🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
      <nav className="bg-white shadow flex items-center justify-between px-8 py-4">
        <div className="text-2xl font-bold text-[#0D0E43]">Hekto</div>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-[#FB2E86]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#FB2E86]">About Us</Link></li>
          <li><Link to="/products" className="hover:text-[#FB2E86]">Products</Link></li>
          <li><Link to="/blog" className="hover:text-[#FB2E86]">Blog</Link></li>
          {/* <li><Link to="/" className="hover:text-[#FB2E86]">Shop</Link></li> */}
          <li><Link to="/contact" className="hover:text-[#FB2E86]">Contact</Link></li>
        </ul>
        <div className="flex items-center border rounded overflow-hidden">
          <input className="px-2 py-1 outline-none" placeholder="Search..." />
          <button className="bg-[#FB2E86] px-3 py-1 text-white">🔍</button>
        </div>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-[#F6F5FF] border-t border-gray-200 mt-8">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hekto</h2>
        <form className="flex mb-4">
          <input type="email" placeholder="Enter Email Address" className="px-3 py-2 rounded-l border border-gray-300 focus:outline-none w-full" />
          <button className="bg-pink-600 text-white px-4 py-2 rounded-r cursor-pointer">Sign Up</button>
        </form>
        <div className="text-sm text-gray-500">Contact Info<br />17 Princess Road, London, Greater London NW1 8JR, UK</div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Categories</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Care</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>My Account</li>
          <li>Discount</li>
          <li>Returns</li>
          <li>Orders History</li>
          <li>Order Tracking</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Pages</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>Blog</li>
          <li>Browse the Shop</li>
          <li>Category</li>
          <li>Pre-Built Pages</li>
          <li>Visual Composer Elements</li>
          <li>WooCommerce Pages</li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-200">©Webecy - All Rights Reserved</div>
  </footer>
);

const Layout = ({ children }) => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith('/products');
  return (
    <>
      <Header />
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-complete" element={<OrderComplete />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
