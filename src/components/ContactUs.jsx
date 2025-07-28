import React from "react";
import contactImg from "../assets/assets/Group 124.png";

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Page Title Section */}
      <section className="bg-[#F6F5FF] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-2 text-sm text-gray-500">
            Home . Pages . <span className="text-pink-600">Contact us</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        </div>
      </section>
      {/* Info and Contact Way */}
      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 w-full">
          <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-12 w-full">
            {/* Information About us */}
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Information About us</h2>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
              <div className="flex space-x-2 mt-4">
                <span className="w-4 h-4 rounded-full bg-pink-500 inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-blue-500 inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-yellow-400 inline-block"></span>
              </div>
            </div>
            {/* Contact Way */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Contact Way</h2>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Tel:</span> 877-67-88-99
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">E-Mail:</span> shop@store.com
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">20 Margaret st, London</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Great britain, 3NM98-LK</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 text-xs">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-pink-500 inline-block"></span>Support Forum</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>For over 24hr</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>Free standard shipping on all orders.</span>
              </div>
            </div>
          </div>
          {/* Get In Touch and Illustration */}
          <div className="flex flex-col md:flex-row md:items-start gap-8 w-full">
            {/* Get In Touch Form */}
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Get In Touch</h2>
              <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae vitae eget dolor lobortis quis bibendum quam.</p>
              <form className="space-y-4">
                <div className="flex gap-4">
                  <input type="text" placeholder="Your Name*" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm" />
                  <input type="email" placeholder="Your E-mail*" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
                <input type="text" placeholder="Subject*" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                <textarea placeholder="Type Your Message*" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" rows={4} />
                <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-8 rounded transition">Send Mail</button>
              </form>
            </div>
            {/* Illustration */}
            <div className="flex-1 flex justify-center items-center">
              <img src={contactImg} alt="Contact Illustration" className="max-w-md w-full" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;