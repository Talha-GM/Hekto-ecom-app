import React from "react";
import blog1 from "../assets/assets/blog1.png";
import blog2 from "../assets/assets/blog2.png";
import blog3 from "../assets/assets/blog3.png";
import image1 from "../assets/assets/image 1.png";
import image3 from "../assets/assets/image 3.png";
import image23 from "../assets/assets/image 23.png";

const blogPosts = [
  {
    id: 1,
    image: blog1,
    author: "Surf Aaslam",
    date: "Aug 09 2020",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: 2,
    image: blog2,
    author: "Surf Aaslam",
    date: "Aug 09 2020",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: 3,
    image: blog3,
    author: "Surf Aaslam",
    date: "Aug 09 2020",
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Page Title Section */}
      <section className="bg-[#F6F5FF] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-2 text-sm text-gray-500">
            Home . Pages . <span className="text-pink-600">Blog Page</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Blog Page</h1>
        </div>
      </section>
      {/* Blog List Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Blog Posts */}
        <div className="flex-1 space-y-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow p-6">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded mb-4" />
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-xs text-pink-600">{post.author}</span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
              <a href="#" className="text-pink-600 text-sm hover:underline">Read More</a>
            </div>
          ))}
          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`w-8 h-8 rounded-full flex items-center justify-center border ${n === 1 ? "bg-pink-500 text-white" : "bg-white text-gray-700"}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
        {/* Sidebar */}
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

export default BlogPage; 