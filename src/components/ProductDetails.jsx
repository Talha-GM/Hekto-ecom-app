import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

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
    name: 'Playwood arm chair',
    image: image1,
    gallery: [image116, image32, image23, image322],
    price: '$42.00',
    sale: '$32.00',
    rating: 4,
    reviews: 22,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.',
    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit. Varius, finibus bonorum et malorum. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    colors: ['purple', 'pink', 'blue'],
    categories: ['Chairs', 'Furniture'],
    tags: ['Modern', 'Stylish']
  },
  {
    id: 2,
    name: 'Another Great Chair',
    image: image3,
    gallery: [image1166, image1168, image1169, image1],
    price: '$50.00',
    sale: '$35.00',
    rating: 5,
    reviews: 10,
    description: 'Another great chair for your home. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    longDescription: 'This is another great chair for your home. Made with the finest materials. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit. Varius, finibus bonorum et malorum. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    colors: ['blue', 'green', 'red'],
    categories: ['Chairs', 'Living Room'],
    tags: ['Comfortable', 'Modern']
  },
  // Add more products if needed
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useData();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  
  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Title */}
      <section className="bg-[#F6F5FF] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-2 text-sm text-gray-500">
            Home . Pages . <span className="text-pink-600">Product Details</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Product Details</h1>
        </div>
      </section>

      {/* Main Product Info */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex gap-4">
            <div className="flex flex-col gap-4">
              {product.gallery.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`thumbnail ${index + 1}`} 
                  className="w-24 h-24 object-cover rounded cursor-pointer border-2 border-transparent hover:border-pink-500"
                  onMouseEnter={() => setActiveImage(img)}
                />
              ))}
            </div>
            <div className="flex-1 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <img src={activeImage} alt={product.name} className="w-full max-w-md h-auto object-contain" />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <div className="flex items-center my-2">
              <div className="flex text-yellow-400">
                {[...Array(product.rating)].map((_, i) => <span key={i}>★</span>)}
                {[...Array(5 - product.rating)].map((_, i) => <span key={i} className="text-gray-300">★</span>)}
              </div>
              <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
            </div>
            <div className="flex items-baseline space-x-2 my-2">
              <span className="text-xl text-gray-800 font-semibold">{product.sale}</span>
              <span className="text-gray-500 line-through">{product.price}</span>
            </div>
            <p className="text-gray-600 my-4">{product.description}</p>
            <div className="flex items-center space-x-4 my-4">
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value))} 
                min="1"
                className="w-20 p-2 border border-gray-300 rounded"
              />
              <button onClick={handleAddToCart} className="px-6 py-2 bg-pink-600 text-white rounded font-semibold">Add To Cart</button>
              <button className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">❤️</button>
            </div>
            <div>
              <p className="text-gray-800"><span className="font-semibold">Categories:</span> {product.categories.join(', ')}</p>
              <p className="text-gray-800"><span className="font-semibold">Tags:</span> {product.tags.join(', ')}</p>
              <div className="flex items-center mt-2">
                <span className="font-semibold">Share:</span>
                <div className="flex space-x-2 ml-2">
                  <a href="#" className="w-6 h-6 bg-blue-600 rounded-full text-white flex items-center justify-center">f</a>
                  <a href="#" className="w-6 h-6 bg-blue-400 rounded-full text-white flex items-center justify-center">t</a>
                  <a href="#" className="w-6 h-6 bg-red-600 rounded-full text-white flex items-center justify-center">p</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description, Reviews, etc. */}
        <div className="bg-[#F6F5FF] p-8 mt-12 rounded-lg">
          <div className="flex space-x-8 border-b-2 border-gray-200 mb-6">
            <button 
              onClick={() => setActiveTab('description')} 
              className={`pb-2 font-semibold ${activeTab === 'description' ? 'text-gray-800 border-b-2 border-pink-600' : 'text-gray-500'}`}
            >
              Description
            </button>
            <button 
              onClick={() => setActiveTab('additional')} 
              className={`pb-2 font-semibold ${activeTab === 'additional' ? 'text-gray-800 border-b-2 border-pink-600' : 'text-gray-500'}`}
            >
              Additional Info
            </button>
            <button 
              onClick={() => setActiveTab('reviews')} 
              className={`pb-2 font-semibold ${activeTab === 'reviews' ? 'text-gray-800 border-b-2 border-pink-600' : 'text-gray-500'}`}
            >
              Reviews
            </button>
             <button 
              onClick={() => setActiveTab('video')} 
              className={`pb-2 font-semibold ${activeTab === 'video' ? 'text-gray-800 border-b-2 border-pink-600' : 'text-gray-500'}`}
            >
              Video
            </button>
          </div>

          <div>
            {activeTab === 'description' && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Varius tempor.</h3>
                <p className="text-gray-600 text-sm">{product.longDescription}</p>
                <h3 className="font-semibold text-lg mt-4 mb-2">More details</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Aliquam dis vulputate vulputate integer sagittis.</li>
                  <li>Faucibus ds diam arcu, nulla lobortis justo netus dis.</li>
                  <li>Eu in fringilla bein et sed morbi.</li>
                  <li>Faucibus ds diam arcu, nulla lobortis justo netus dis.</li>
                </ul>
              </div>
            )}
            {activeTab === 'additional' && <p>Additional information goes here.</p>}
            {activeTab === 'reviews' && <p>Reviews go here.</p>}
            {activeTab === 'video' && <p>Video goes here.</p>}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {relatedProducts.map(prod => (
              <div key={prod.id} className="bg-white rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                <img src={prod.image} alt={prod.name} className="w-48 h-48 object-contain mb-4" />
                <h3 className="text-base font-medium text-gray-800 mb-2">{prod.name}</h3>
                <div className="flex text-yellow-400">
                  {[...Array(prod.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <span className="text-pink-600 font-semibold mt-2">{prod.sale}</span>
              </div>
            ))}
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
        <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-200">©Webecy - All Rights Reserved</div>
      </footer>
    </div>
  );
};

export default ProductDetails; 