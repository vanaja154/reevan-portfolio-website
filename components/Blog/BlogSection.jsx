// components/BlogSection.jsx
"use client";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";

export default function BlogSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#fef6f4] py-16 lg:mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        {/* Left Content */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-center text-orange-500 font-medium mb-3">
            <FaRegNewspaper className="mr-2 text-lg" />
            BLOGS & NEWS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3 relative">
            Our Blog
            <span className="absolute bottom-1 left-0 w-20 h-2 bg-orange-300 opacity-60 -z-10"></span>
          </h2>
          <p className="text-gray-600">
            What would you love to learn how to do?
          </p>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Subscribe to get the latest insights in your inbox.
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex rounded-lg overflow-hidden border border-gray-200"
          >
            <input
              type="email"
              placeholder="Your email please"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 flex items-center justify-center"
            >
              <FiArrowRight className="text-lg" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
