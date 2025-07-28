import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#F6F5FF] border-t border-gray-200 mt-8">
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
      </footer>
  )
}

export default Footer