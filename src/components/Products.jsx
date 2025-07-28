import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images from assets
import image1 from "../assets/assets/image 1.png";
import image3 from "../assets/assets/image 3.png";
import image23 from "../assets/assets/image 23.png";
import image32 from "../assets/assets/image 32.png";
import image116 from "../assets/assets/image 116.png";
import image322 from "../assets/assets/image 322.png";
import image1166 from "../assets/assets/image 1166.png";
import image1168 from "../assets/assets/image 1168.png";
import image1169 from "../assets/assets/image 1169.png";

const products = [
  {
    id: 1,
    name: 'Vel elit euismod',
    image: image1,
    price: '$42.00',
    sale: '$26.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['purple', 'pink', 'blue']
  },
  {
    id: 2,
    name: 'Ultrices condimentum imperdiet',
    image: image3,
    price: '$50.00',
    sale: '$30.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['blue', 'green', 'red']
  },
  {
    id: 3,
    name: 'Viverra suspendisse',
    image: image23,
    price: '$52.00',
    sale: '$50.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['brown', 'black', 'white']
  },
  {
    id: 4,
    name: 'Sed at fermentum',
    image: image32,
    price: '$65.00',
    sale: '$60.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['gray', 'white', 'black']
  },
  {
    id: 5,
    name: 'Faucibus pellentesque',
    image: image116,
    price: '$66.00',
    sale: '$40.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['red', 'blue', 'green']
  },
  {
    id: 6,
    name: 'Vestibulum magna laoreet',
    image: image322,
    price: '$96.00',
    sale: '$80.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['purple', 'pink', 'blue']
  },
  {
    id: 7,
    name: 'Sollicitudin amet erat',
    image: image1166,
    price: '$36.00',
    sale: '$20.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['orange', 'yellow', 'brown']
  },
  {
    id: 8,
    name: 'Ultrices mauris sit',
    image: image1168,
    price: '$86.00',
    sale: '$60.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['green', 'blue', 'purple']
  },
  {
    id: 9,
    name: 'Pellentesque condimentum',
    image: image1169,
    price: '$26.00',
    sale: '$21.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['black', 'white', 'gray']
  },
  {
    id: 10,
    name: 'Cras scelerisque velit',
    image: image1,
    price: '$56.00',
    sale: '$30.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['pink', 'red', 'purple']
  },
  {
    id: 11,
    name: 'Lectus vulputate faucibus',
    image: image3,
    price: '$76.00',
    sale: '$50.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['blue', 'cyan', 'teal']
  },
  {
    id: 12,
    name: 'Purus rhoncus',
    image: image23,
    price: '$86.00',
    sale: '$60.00',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    colors: ['brown', 'tan', 'beige']
  },
];

const Products = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'sidebar'
  const [showSidebar, setShowSidebar] = useState(false);

  const renderColorDots = (colors) => (
    <div className="flex space-x-1 mt-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            color === 'purple' ? 'bg-purple-500' :
            color === 'pink' ? 'bg-pink-500' :
            color === 'blue' ? 'bg-blue-500' :
            color === 'green' ? 'bg-green-500' :
            color === 'red' ? 'bg-red-500' :
            color === 'brown' ? 'bg-yellow-700' :
            color === 'black' ? 'bg-black' :
            color === 'white' ? 'bg-gray-300' :
            color === 'gray' ? 'bg-gray-500' :
            color === 'orange' ? 'bg-orange-500' :
            color === 'yellow' ? 'bg-yellow-500' :
            color === 'cyan' ? 'bg-cyan-500' :
            color === 'teal' ? 'bg-teal-500' :
            color === 'tan' ? 'bg-yellow-600' :
            color === 'beige' ? 'bg-yellow-200' :
            'bg-gray-400'
          }`}
        />
      ))}
    </div>
  );

  const renderProductCard = (product, isList = false) => (
    <div key={product.id} className={`bg-white rounded-lg shadow hover:shadow-lg transition ${isList ? 'flex items-center space-x-6 p-6 border-b border-gray-200' : 'p-6 flex flex-col items-center'}`}>
      <Link to={`/products/${product.id}`} className={`${isList ? 'w-32 h-32' : 'w-full'} relative`}>
        <img src={product.image} alt={product.name} className={`${isList ? 'w-32 h-32' : 'w-full h-48'} object-cover rounded`} />
        {!isList && (
          <div className="absolute top-2 left-2 space-y-2 opacity-0 hover:opacity-100 transition">
            <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">🛒</button>
            <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">❤️</button>
            <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">👁️</button>
            <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">🔍</button>
          </div>
        )}
      </Link>
      
      <div className={`${isList ? 'flex-1' : 'text-center mt-4'}`}>
        <h3 className="text-base font-medium text-gray-800 mb-2">{product.name}</h3>
        {!isList && renderColorDots(product.colors)}
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-gray-400 line-through">{product.price}</span>
          <span className="text-pink-600 font-semibold">{product.sale}</span>
        </div>
        {isList && (
          <>
            <div className="flex items-center mb-2">
              {[...Array(product.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex space-x-2">
               <Link to={`/products/${product.id}`} className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">🛒</Link>
               <Link to={`/products/${product.id}`} className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">❤️</Link>
               <Link to={`/products/${product.id}`} className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">👁️</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );

  const renderSidebar = () => (
    <div className="w-64 bg-white p-6 border-r border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      {/* Product Brand */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Product Brand</h4>
        {['Coaster Furniture', 'Fusion Dot High Fashion', 'Unique Furniture Restor', 'Dream Furniture Flipping', 'Young Repurposed', 'Green DIY furniture'].map((brand, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" defaultChecked />
            <span className="text-sm">{brand}</span>
          </label>
        ))}
      </div>

      {/* Discount Offer */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Discount Offer</h4>
        {['20% Cashback', '5% Cashback Offer', '25% Discount Offer'].map((offer, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" defaultChecked />
            <span className="text-sm">{offer}</span>
          </label>
        ))}
      </div>

      {/* Rating Item */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Rating Item</h4>
        {[
          { stars: 5, count: 2341 },
          { stars: 4, count: 1726 },
          { stars: 3, count: 258 },
          { stars: 2, count: 25 }
        ].map((rating, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" defaultChecked />
            <div className="flex items-center">
              {[...Array(rating.stars)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
              <span className="text-sm ml-1">({rating.count})</span>
            </div>
          </label>
        ))}
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Categories</h4>
        {['Prestashop', 'Magento', 'Bigcommerce', 'osCommerce', '3dcart', 'Bags', 'Accessories', 'Jewellery', 'Watches'].map((category, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" defaultChecked />
            <span className="text-sm">{category}</span>
          </label>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price Filter</h4>
        {['$0.00 - $150.00', '$150.00 - $350.00', '$150.00 - $504.00', '$450.00+'].map((range, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" defaultChecked />
            <span className="text-sm">{range}</span>
          </label>
        ))}
        <div className="flex items-center mt-2">
          <input type="text" placeholder="Search" className="border border-gray-300 rounded px-2 py-1 text-sm w-full" />
          <button className="ml-2 text-gray-500">🔍</button>
        </div>
      </div>

      {/* Filter By Color */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Filter By Color</h4>
        <div className="grid grid-cols-2 gap-2">
          {['Blue', 'Orange', 'Brown', 'Green', 'Purple', 'Sky'].map((color, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">{color}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
     

      {/* Page Title */}
      <section className="bg-[#F6F5FF] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-2 text-sm text-gray-500">
            Home . Pages . <span className="text-pink-600">
              {viewMode === 'grid' ? 'Shop Grid Default' : 
               viewMode === 'list' ? 'Shop List' : 'Shop Left Sidebar'}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            {viewMode === 'grid' ? 'Shop Grid Default' : 
             viewMode === 'list' ? 'Shop List' : 'Shop Left Sidebar'}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Section Title and Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Ecommerce Accessories & Fashion item</h2>
              <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>Per Page</option>
                <option>12</option>
                <option>24</option>
                <option>48</option>
              </select>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>Sort By: Best Match</option>
                <option>Price</option>
                <option>Name</option>
              </select>
              <div className="flex border border-gray-300 rounded">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 text-sm ${viewMode === 'grid' ? 'bg-[#FB2E86] text-white' : 'bg-white text-gray-700'}`}
                >
                  ⬜
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 text-sm ${viewMode === 'list' ? 'bg-[#FB2E86] text-white' : 'bg-white text-gray-700'}`}
                >
                  ☰
                </button>
                <button 
                  onClick={() => setViewMode('sidebar')}
                  className={`px-3 py-1 text-sm ${viewMode === 'sidebar' ? 'bg-[#FB2E86] text-white' : 'bg-white text-gray-700'}`}
                >
                  ⬛
                </button>
              </div>
            </div>
          </div>

          {/* Product Display */}
          <div className={viewMode === 'sidebar' ? 'flex' : ''}>
            {viewMode === 'sidebar' && renderSidebar()}
            <div className={viewMode === 'sidebar' ? 'flex-1 ml-6' : ''}>
              {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {products.map(product => renderProductCard(product))}
                </div>
              )}
              {viewMode === 'list' && (
                <div className="space-y-4">
                  {products.map(product => renderProductCard(product, true))}
                </div>
              )}
              {viewMode === 'sidebar' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {products.map(product => renderProductCard(product))}
                </div>
              )}
              </div>
          </div>
        </div>
      </main>

      {/* Brand Logos */}
      <section className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-8">
          {['fashion LIVE', 'HAND CRAFTED', 'Mestonix', 'Sunshine', 'pure'].map((brand, index) => (
            <div key={index} className="w-32 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-600 font-medium">
              {brand}
          </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Products; 