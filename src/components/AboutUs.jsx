import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Page Title Section */}
      <section className="bg-[#F6F5FF] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-2 text-sm text-gray-500 ">
            Home . Pages . <span className="text-pink-600">About Us</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 ">About Us</h1>
        </div>
      </section>
      {/* About Content Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 w-full">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="h-80 w-full max-w-md bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400">About Image</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Know About Our Ecommerce Business, History</h2>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded transition">Contact us</button>
          </div>
        </div>
        {/* Features Section */}
        <div className="mb-16 w-full flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center mb-8">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-4xl">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">🚚</div>
              <h4 className="font-semibold mb-2">Free Delivery</h4>
              <p className="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center border-2 border-yellow-400">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">💰</div>
              <h4 className="font-semibold mb-2">100% Cash Back</h4>
              <p className="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">🏆</div>
              <h4 className="font-semibold mb-2">Quality Product</h4>
              <p className="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">⏰</div>
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
        </div>
        {/* Testimonial Section */}
        <div className="mb-16 w-full flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center mb-8">Our Client Say!</h3>
          <div className="flex flex-col items-center">
            <div className="flex gap-4 mb-4 justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full" />
              <div className="w-12 h-12 bg-gray-300 rounded-full" />
              <div className="w-12 h-12 bg-gray-300 rounded-full" />
            </div>
            <div className="bg-white rounded-lg shadow p-6 max-w-xl text-center">
              <h4 className="font-semibold mb-1">Selina Gomez</h4>
              <span className="text-xs text-gray-400 mb-2 block">Ceo At Webecy Digital</span>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs; 