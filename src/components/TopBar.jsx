import React from 'react'

const TopBar = () => {
  return (
    <div className="bg-[#7E33E0] text-white text-xs py-2 px-4 flex justify-between items-center">
        <div>
          <span>Free shipping, 30-day return or refund guarantee</span>
        </div>
        <div className="space-x-4">
          <span>Contact: +001 234 567 890</span>
          <span>|</span>
          <span>Login</span>
          <span>|</span>
          <span>Wishlist</span>
          <span>|</span>
          <span>Cart</span>
        </div>
      </div>
  )
}

export default TopBar