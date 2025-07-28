import React from "react";
import blog1 from "../assets/assets/blog1.png";
import blog2 from "../assets/assets/blog2.png";
import blog3 from "../assets/assets/blog3.png";
import image1 from "../assets/assets/image 1.png";
import image3 from "../assets/assets/image 3.png";
import image23 from "../assets/assets/image 23.png";

const SingleBlog = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Page Title Section */}
      <section className="bg-[#F6F5FF] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-2 text-sm text-gray-500">
            Home . Pages . <span className="text-pink-600">Single Blog</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Single Blog</h1>
        </div>
      </section>
      {/* Blog Content Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Blog Post */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <img src={blog1} alt="Main Blog" className="w-full h-64 object-cover rounded mb-4" />
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-xs text-pink-600">Surf Aaslam</span>
              <span className="text-xs text-gray-400">Aug 09 2020</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Mauris at orci non vulputate diam tincidunt nec.</h2>
            <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
            <p className="text-gray-600 text-sm mb-4">More blog content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus eu, nunc, montes, lacus accumsan volutpat egestas. Sit amet dictum quam. Vitae in ante platea amet vitae ante posuere malesuada lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus eu, nunc, montes, lacus accumsan volutpat egestas. Sit amet dictum quam. Vitae in ante platea amet vitae ante posuere malesuada.</p>
            {/* Video and images row */}
            <div className="flex gap-4 mb-4">
              <img src={blog2} alt="Video" className="w-32 h-24 object-cover rounded" />
              <img src={blog3} alt="Image 1" className="w-32 h-24 object-cover rounded" />
              <img src={image1} alt="Image 2" className="w-32 h-24 object-cover rounded" />
            </div>
            <p className="text-gray-600 text-sm mb-4">More text content for the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus eu, nunc, montes, lacus accumsan volutpat egestas. Sit amet dictum quam. Vitae in ante platea amet vitae ante posuere malesuada.</p>
            {/* Related Products */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-100 rounded p-4 flex flex-col items-center">
                <img src={image1} alt="Product 1" className="w-20 h-20 object-cover rounded mb-2" />
                <span className="text-xs font-semibold">Quam sed</span>
                <span className="text-xs text-pink-600">$20.00</span>
              </div>
              <div className="bg-gray-100 rounded p-4 flex flex-col items-center">
                <img src={image3} alt="Product 2" className="w-20 h-20 object-cover rounded mb-2" />
                <span className="text-xs font-semibold">Tristique sed</span>
                <span className="text-xs text-pink-600">$20.00</span>
              </div>
              <div className="bg-gray-100 rounded p-4 flex flex-col items-center">
                <img src={image23} alt="Product 3" className="w-20 h-20 object-cover rounded mb-2" />
                <span className="text-xs font-semibold">A etiam</span>
                <span className="text-xs text-pink-600">$20.00</span>
              </div>
              <div className="bg-gray-100 rounded p-4 flex flex-col items-center">
                <img src={image1} alt="Product 4" className="w-20 h-20 object-cover rounded mb-2" />
                <span className="text-xs font-semibold">Mi nisi</span>
                <span className="text-xs text-pink-600">$20.00</span>
              </div>
            </div>
            {/* Comments */}
            <div className="mt-8">
              <div className="flex flex-col gap-4">
                {[1, 2].map((idx) => (
                  <div key={idx} className="bg-gray-100 rounded p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gray-300 rounded-full" />
                      <span className="font-semibold text-sm">User {idx}</span>
                      <span className="text-xs text-gray-400 ml-2">Aug 09 2020</span>
                    </div>
                    <p className="text-gray-600 text-sm">Comment content for user {idx}.</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Comment Form */}
            <form className="mt-8 space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="Your Name*" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm" />
                <input type="email" placeholder="Write Your Email*" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm" />
              </div>
              <textarea placeholder="Write your comment*" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" rows={4} />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="saveInfo" className="mr-2" />
                <label htmlFor="saveInfo" className="text-xs text-gray-600">Save my name, email, and website in this browser for the next time I comment.</label>
              </div>
              <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded transition">Continue Shipping</button>
            </form>
          </div>
        </div>
        {/* Sidebar (same as BlogPage) */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          {/* Search */}
          <div className="mb-8">
            <input type="text" placeholder="Search" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
          </div>
          {/* Categories */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="space-y-1 text-sm">
              <li><span className="text-pink-600">Fashion (10)</span></li>
              <li>Women (10)</li>
              <li>Men (10)</li>
              <li>Watches (10)</li>
            </ul>
          </div>
          {/* Recent Post */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Recent Post</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <img src={blog1} alt="Recent 1" className="w-10 h-10 object-cover rounded" />
                <span>In a long established fact</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={blog2} alt="Recent 2" className="w-10 h-10 object-cover rounded" />
                <span>In a long established fact</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={blog3} alt="Recent 3" className="w-10 h-10 object-cover rounded" />
                <span>In a long established fact</span>
              </li>
            </ul>
          </div>
          {/* Sale Product */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Sale Product</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <img src={image1} alt="Sale 1" className="w-10 h-10 object-cover rounded" />
                <span>Quis lectus est.</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={image3} alt="Sale 2" className="w-10 h-10 object-cover rounded" />
                <span>Sol adipisci.</span>
              </li>
            </ul>
          </div>
          {/* Offer Product */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Offer product</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <img src={image23} alt="Offer 1" className="w-10 h-10 object-cover rounded" />
                <span>Nota prom.</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={image1} alt="Offer 2" className="w-10 h-10 object-cover rounded" />
                <span>Platea in.</span>
              </li>
            </ul>
          </div>
          {/* Follow */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Follow</h3>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">F</div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">T</div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">I</div>
            </div>
          </div>
          {/* Tags */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['General', 'Animal', 'Insus', 'Bibhasa', 'Nulla'].map((tag, idx) => (
                <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default SingleBlog; 