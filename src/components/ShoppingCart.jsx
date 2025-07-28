import React from 'react';
import { useData } from '../context/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Import images from assets (assuming they are in the same location)
import image1 from "../assets/assets/image 1.png";
import image3 from "../assets/assets/image 3.png";
import image23 from "../assets/assets/image 23.png";
import image32 from "../assets/assets/image 32.png";
import image116 from "../assets/assets/image 116.png";

const ShoppingCart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useData();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate(); // Add this line

  // Ensure price is always a number for calculation
  const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price.toString().replace('$', '')) * item.quantity), 0);
  const shipping = cart.length > 0 ? 10 : 0; // Example shipping cost
  const total = subtotal + shipping;

  const onSubmit = (data) => {
    alert(`Shipping calculated for ${data.country}, ${data.city}, ${data.postalCode}`);
    reset();
  };

  if (cart.length === 0) {
    return (
      <div className="bg-white min-h-screen">
        <section className="bg-[#F6F5FF] py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 text-center">Your Cart is Empty</h1>
            <div className="text-center mt-4">
              <Link to="/products" className="px-6 py-2 bg-pink-600 text-white rounded font-semibold cursor-pointer">
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Page Title */}
      <section className="bg-[#F6F5FF] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-2 text-sm text-gray-500">
            Home . Pages . <span className="text-pink-600">Shopping Cart</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-4 font-semibold text-gray-800 mb-4 px-4">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
            <div className="border-t border-gray-200">
              {cart.map(item => (
                <div key={item.id} className="grid grid-cols-4 gap-4 items-center border-b border-gray-200 py-4 px-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded"/>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      {item.color && <p className="text-sm text-gray-500">Color: {item.color}</p>}
                      {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-auto cursor-pointer">X</button>
                  </div>
                  <div>${parseFloat(item.price.toString().replace('$', '')).toFixed(2)}</div>
                  <div className="flex items-center border border-gray-300 rounded w-fit">
                    <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 cursor-pointer">-</button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 cursor-pointer">+</button>
                  </div>
                  <div>${(parseFloat(item.price.toString().replace('$', '')) * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button className="px-6 py-2 bg-pink-600 text-white rounded font-semibold cursor-pointer">Update Cart</button>
              <button onClick={clearCart} className="px-6 py-2 bg-pink-600 text-white rounded font-semibold cursor-pointer">Clear Cart</button>
            </div>
          </div>

          {/* Cart Totals and Shipping */}
          <div className="w-full md:w-80">
            <div className="bg-[#F6F5FF] p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-lg mb-4 text-center">Cart Totals</h3>
              <div className="flex justify-between py-2 border-b border-gray-300">
                <span>Subtotals:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-300">
                <span>Totals:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" id="shipping" className="mr-2 cursor-pointer" />
                <label htmlFor="shipping" className="text-xs text-gray-500 cursor-pointer">Shipping & taxes calculated at checkout</label>
              </div>
              <button
                className="w-full mt-4 py-2 bg-green-500 text-white rounded font-semibold cursor-pointer"
                onClick={() => navigate('/checkout')}
              >
                Proceed To Checkout
              </button>
            </div>

            <div className="bg-[#F6F5FF] p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-center">Calculate Shipping</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                  type="text" 
                  placeholder="Country" 
                  className="w-full p-2 border border-gray-300 rounded mb-2" 
                  {...register('country', { required: 'Country is required' })}
                />
                {errors.country && <p className="text-red-500 text-xs mb-2">{errors.country.message}</p>}
                <input 
                  type="text" 
                  placeholder="City" 
                  className="w-full p-2 border border-gray-300 rounded mb-2" 
                  {...register('city', { required: 'City is required' })}
                />
                {errors.city && <p className="text-red-500 text-xs mb-2">{errors.city.message}</p>}
                <input 
                  type="text" 
                  placeholder="Postal Code" 
                  className="w-full p-2 border border-gray-300 rounded mb-2" 
                  {...register('postalCode', {
                    required: 'Postal Code is required',
                    pattern: {
                      value: /^[0-9]{4,10}$/,
                      message: 'Postal Code must be 4-10 digits'
                    }
                  })}
                />
                {errors.postalCode && <p className="text-red-500 text-xs mb-2">{errors.postalCode.message}</p>}
                <button type="submit" className="w-full py-2 bg-pink-600 text-white rounded font-semibold cursor-pointer mt-2">Calculate Shipping</button>
              </form>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default ShoppingCart;