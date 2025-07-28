import React from "react";
import ShopGridPage from "./Products";
import { Link } from 'react-router-dom';

// Import images
import lamp from "../assets/assets/lamp.png";
import mainSofa from "../assets/assets/main-page sofa.png";
import blog1 from "../assets/assets/blog1.png";
import blog2 from "../assets/assets/blog2.png";
import blog3 from "../assets/assets/blog3.png";
import group153 from "../assets/assets/Group 153.png";
import group154 from "../assets/assets/Group 154.png";
import cashback from "../assets/assets/cashback 1.png";
import freeDelivery from "../assets/assets/free-delivery 1.png";
import image1 from "../assets/assets/image 1.png";
import image3 from "../assets/assets/image 3.png";
import image23 from "../assets/assets/image 23.png";
import image32 from "../assets/assets/image 32.png";
import image116 from "../assets/assets/image 116.png";
import image322 from "../assets/assets/image 322.png";
import image1166 from "../assets/assets/image 1166.png";
import image1168 from "../assets/assets/image 1168.png";
import image1169 from "../assets/assets/image 1169.png";

const HomePage = () => {
  return (
    <div className="bg-[#F6F5FF] w-full">
    
     

      {/* Hero Section */}
      <section className="bg-[#F2F0FF] flex flex-col md:flex-row items-center justify-between px-8 py-12 relative">
        {/* <img src={lamp} alt="lamp" className="absolute left-8 top-0 w-20 h-20 object-contain hidden md:block" style={{zIndex:1}} /> */}
        <div className="flex-1 z-10">
          <p className="text-[#FB2E86] font-semibold mb-2">Best Furniture For Your Castle....</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">New Furniture Collection Trends in 2020</h1>
          <p className="mb-6 text-gray-600 max-w-md">Get the latest furniture trends for your home with stylish and modern designs. Shop now and enjoy exclusive discounts!</p>
          <button className="bg-[#FB2E86] text-white px-8 py-3 rounded-lg font-semibold"><Link to="/products">Shop Now</Link></button>
        </div>
        <div className="flex-1 flex justify-center z-10">
          <img src={mainSofa} alt="chair" className="w-72 h-72 object-contain rounded-xl" />
        </div>
        <div className="absolute right-16 top-8 bg-[#08D15F] text-white font-bold rounded-full w-20 h-20 flex items-center justify-center text-xl shadow-lg" style={{zIndex:2}}>50% Off</div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
          {/*======================== <ShopGridPage /> */}
        </div>
      </section>

      {/* Latest Products */}
      <section className="bg-[#F6F5FF] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Latest Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[image1, image3, image23, image32].map((img, i) => (
              <div key={i} className="bg-white rounded-lg p-6 flex flex-col items-center shadow">
                <img src={img} alt="product" className="w-32 h-32 object-contain mb-4" />
                <h3 className="text-base font-medium text-gray-800 mb-2 text-center">Product {i + 1}</h3>
                <span className="text-pink-600 font-semibold">$99.00</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Shopex Offer */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">What Shopex Offer!</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: cashback, title: "24/7 Support", desc: "24/7 customer support available" },
              { icon: freeDelivery, title: "Free Delivery", desc: "Free delivery on all orders" },
              { icon: cashback, title: "Easy Returns", desc: "Easy return policy" },
              { icon: freeDelivery, title: "Secure Payment", desc: "Secure payment methods" }
            ].map((offer, i) => (
              <div key={i} className="bg-[#F6F5FF] rounded-lg p-6 flex flex-col items-center shadow">
                <img src={offer.icon} alt={offer.title} className="w-12 h-12 mb-4" />
                <h3 className="text-base font-medium text-gray-800 mb-2 text-center">{offer.title}</h3>
                <span className="text-gray-500 text-sm text-center">{offer.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="bg-[#F6F5FF] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Trending Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[image116, image322, image1166, image1168].map((img, i) => (
              <div key={i} className="bg-white rounded-lg p-6 flex flex-col items-center shadow">
                <img src={img} alt="product" className="w-32 h-32 object-contain mb-4" />
                <h3 className="text-base font-medium text-gray-800 mb-2 text-center">Trending {i + 1}</h3>
                <span className="text-pink-600 font-semibold">$89.00</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Item */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">20% Discount Of All Products</h2>
            <p className="mb-6 text-gray-600">Get a special discount on all products for a limited time. Shop now and save big on your favorite items!</p>
            <button className="bg-[#FB2E86] text-white px-8 py-3 rounded-lg font-semibold"><Link to="/products">Shop Now</Link></button>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={image1169} alt="discount" className="w-64 h-64 object-contain rounded-xl" />
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="bg-[#F6F5FF] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Top Categories</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { img: group153, name: "Minimalist Chair", price: "$99.00" },
              { img: group154, name: "Modern Chair", price: "$89.00" },
              { img: group153, name: "Classic Chair", price: "$79.00" },
              { img: group154, name: "Luxury Chair", price: "$129.00" }
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-full w-40 h-40 flex flex-col items-center justify-center shadow">
                <img src={cat.img} alt={cat.name} className="w-20 h-20 object-contain mb-2" />
                <span className="font-semibold text-gray-700">{cat.name}</span>
                <span className="text-pink-600 font-semibold">{cat.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Latest Update By Subscribe Our Newsletter</h2>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input type="email" placeholder="Enter your email address" className="px-4 py-2 border border-gray-300 rounded w-full sm:w-auto" />
            <button className="bg-[#FB2E86] text-white px-8 py-2 rounded font-semibold"><Link to="/products">Shop Now</Link></button>
          </form>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="bg-[#F6F5FF] py-8">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-8">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="w-32 h-12 bg-white rounded shadow flex items-center justify-center">
              <span className="text-gray-400">Logo</span>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Latest Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { img: blog1, title: "Top essential Trends in 2020", desc: "Morem ipsum dolor sit amet, consectetur adipiscing elit." },
              { img: blog2, title: "Top essential Trends in 2020", desc: "Morem ipsum dolor sit amet, consectetur adipiscing elit." },
              { img: blog3, title: "Top essential Trends in 2020", desc: "Morem ipsum dolor sit amet, consectetur adipiscing elit." }
            ].map((blog, i) => (
              <div key={i} className="bg-[#F6F5FF] rounded-lg p-6 shadow flex flex-col">
                <img src={blog.img} alt="blog" className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-2">{blog.desc}</p>
                <span className="text-xs text-gray-400">12 Jan 2024</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#F6F5FF] border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Hekto</h2>
            <form className="flex mb-4">
              <input type="email" placeholder="Enter Email Address" className="px-3 py-2 rounded-l border border-gray-300 focus:outline-none w-full" />
              <button className="bg-pink-600 text-white px-4 py-2 rounded-r">Sign Up</button>
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
        <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-200">©Webecy. All Rights Reserved.</div>
      </footer> */}
    </div>
  );
};

export default HomePage; 