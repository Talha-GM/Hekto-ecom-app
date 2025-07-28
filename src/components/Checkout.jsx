import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Checkout = () => {
  const { cart } = useData();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price.toString().replace('$', '')) * item.quantity), 0);
  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const onSubmit = (data) => {
    // In a real app, you would process the order here
    navigate('/order-complete');
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#F6F5FF] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">Hekto Demo</h1>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Checkout Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 bg-[#F6F5FF] p-8 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <div className="mb-4">
            <input type="text" placeholder="Email or mobile phone number" className="w-full p-2 border-b border-gray-300 bg-transparent mb-1" {...register('email', { required: 'Email or phone is required' })} />
            {errors.email && <p className="text-red-500 text-xs mb-2">{errors.email.message}</p>}
            <div className="flex items-center mt-2">
              <input type="checkbox" id="offers" className="mr-2" {...register('offers')} />
              <label htmlFor="offers" className="text-xs text-gray-600">Keep me up to date on news and exclusive offers</label>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4 mt-8">Shipping address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First name (optional)" className="p-2 border-b border-gray-300 bg-transparent" {...register('firstName')} />
            <input type="text" placeholder="Last name" className="p-2 border-b border-gray-300 bg-transparent" {...register('lastName', { required: 'Last name is required' })} />
          </div>
          {errors.lastName && <p className="text-red-500 text-xs mb-2">{errors.lastName.message}</p>}
          <input type="text" placeholder="Address" className="w-full p-2 border-b border-gray-300 bg-transparent mb-4" {...register('address', { required: 'Address is required' })} />
          {errors.address && <p className="text-red-500 text-xs mb-2">{errors.address.message}</p>}
          <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full p-2 border-b border-gray-300 bg-transparent mb-4" {...register('apartment')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="City" className="p-2 border-b border-gray-300 bg-transparent" {...register('city', { required: 'City is required' })} />
            <input type="text" placeholder="Country" className="p-2 border-b border-gray-300 bg-transparent" {...register('country', { required: 'Country is required' })} />
          </div>
          {errors.city && <p className="text-red-500 text-xs mb-2">{errors.city.message}</p>}
          {errors.country && <p className="text-red-500 text-xs mb-2">{errors.country.message}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Postal Code" className="p-2 border-b border-gray-300 bg-transparent" {...register('postalCode', { required: 'Postal Code is required', pattern: { value: /^[0-9]{4,10}$/, message: 'Postal Code must be 4-10 digits' } })} />
            <input type="text" placeholder="Bangladesh" className="p-2 border-b border-gray-300 bg-transparent" disabled />
          </div>
          {errors.postalCode && <p className="text-red-500 text-xs mb-2">{errors.postalCode.message}</p>}
          <button type="submit" className="mt-6 px-8 py-3 bg-pink-600 text-white rounded font-semibold cursor-pointer">Continue Shipping</button>
          {/* Show a general error if there are validation errors */}
          {Object.keys(errors).length > 0 && (
            <p className="text-red-500 text-xs mt-2">Please fill in all required fields correctly before continuing.</p>
          )}
        </form>
        {/* Cart Summary */}
        <div className="w-full md:w-96">
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-4 mb-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  {item.color && <p className="text-xs text-gray-500">Color: {item.color}</p>}
                  {item.size && <p className="text-xs text-gray-500">Size: {item.size}</p>}
                </div>
                <span className="font-semibold">${parseFloat(item.price.toString().replace('$', '')).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#F6F5FF] p-6 rounded-lg">
            <div className="flex justify-between py-2 border-b border-gray-300">
              <span>Subtotals:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-300">
              <span>Totals:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="shipping" className="mr-2 cursor-pointer" disabled checked />
              <label htmlFor="shipping" className="text-xs text-gray-500 cursor-pointer">Shipping & taxes calculated at checkout</label>
            </div>
            <button onClick={() => navigate('/order-complete')} className="w-full mt-4 py-2 bg-green-500 text-white rounded font-semibold cursor-pointer">Proceed To Checkout</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;