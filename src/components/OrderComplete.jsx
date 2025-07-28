import React from 'react';
import { Link } from 'react-router-dom';

const OrderComplete = () => (
  <div className="bg-white min-h-screen flex flex-col">
    <section className="bg-[#F6F5FF] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800">Order Completed</h1>
        <div className="mb-2 text-sm text-gray-500">Home . Pages . <span className="text-pink-600">Order Completed</span></div>
      </div>
    </section>
    <main className="flex-1 flex flex-col items-center justify-center py-12">
      <div className="bg-white p-8 rounded-lg shadow flex flex-col items-center">
        <div className="text-6xl text-pink-500 mb-4">✔️</div>
        <h2 className="text-2xl font-bold mb-2 text-center">Your Order Is Completed!</h2>
        <p className="text-gray-600 mb-6 text-center max-w-md">Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
        <Link to="/" className="px-8 py-3 bg-pink-600 text-white rounded font-semibold cursor-pointer">Continue Shopping</Link>
      </div>
      <div className="flex justify-center items-center gap-8 mt-12">
        {['fashion LIVE', 'HAND CRAFTED', 'Mestonix', 'Sunshine', 'pure'].map((brand, index) => (
          <div key={index} className="w-32 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-600 font-medium">
            {brand}
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default OrderComplete; 