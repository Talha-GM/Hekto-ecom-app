import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="bg-white shadow flex items-center justify-between px-8 py-4">
        <div className="text-2xl font-bold text-[#7E33E0]">Hekto</div>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-[#FB2E86] cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:text-[#FB2E86] cursor-pointer"><Link to="/">Pages</Link></li>
          <li className="hover:text-[#FB2E86] cursor-pointer"><Link to="/products">Products</Link></li>
          <li className="hover:text-[#FB2E86] cursor-pointer"><Link to="/blog">Blog</Link></li>
          <li className="hover:text-[#FB2E86] cursor-pointer"><Link to="/shop">Shop</Link></li>
          <li className="hover:text-[#FB2E86] cursor-pointer"><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="flex items-center border rounded overflow-hidden">
          <input className="px-2 py-1 outline-none" placeholder="Search..." />
          <button className="bg-[#FB2E86] px-3 py-1 text-white">🔍</button>
        </div>
      </nav>
  )
}

export default Navbar