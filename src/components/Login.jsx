import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Page Title Section */}
      <section className="bg-[#F6F5FF] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-2 text-sm text-gray-500">
            Home . Pages . <span className="text-pink-600">My Account</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">My Account</h1>
        </div>
      </section>
      {/* Login Form Section */}
      <main className="flex-1 flex flex-col items-center justify-center py-12">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
          <p className="text-center text-gray-500 text-sm mb-6">Please login using account detail bellow.</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <div className="flex justify-end">
              <button type="button" className="text-pink-600 text-xs hover:underline">Forgot your password?</button>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded transition"
            >
              Sign In
            </button>
          </form>
          <div className="text-center text-sm text-gray-500 mt-4">
            Don’t have an Account?
            <button className="text-pink-600 ml-1 hover:underline">Create account</button>
          </div>
        </div>
        {/* Brand logos row */}
        <div className="flex justify-center items-center gap-8 mt-10 opacity-60">
          {['fashion LIVE', 'HAND CRAFTED', 'Mestonix', 'Sunshine', 'pure'].map((brand, idx) => (
            <div key={idx} className="w-32 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-400 font-medium text-xs">
              {brand}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Login; 