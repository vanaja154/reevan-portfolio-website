"use client";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";

export default function BlogSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#fef6f4] py-12 md:py-16 lg:py-20 mt-8 lg:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center text-orange-500 font-medium mb-3 text-sm md:text-base">
              <FaRegNewspaper className="mr-2 text-lg md:text-xl" />
              BLOGS & NEWS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 relative leading-snug">
              Our Blog
              <span className="absolute bottom-1 left-0 w-16 sm:w-20 h-2 bg-orange-300 opacity-60 -z-10"></span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              What would you love to learn how to do?
            </p>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
              Subscribe to get the latest insights in your inbox.
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-row sm:flex-row rounded-lg overflow-hidden border border-gray-200"
            >
              <input
                type="email"
                placeholder="Your email please"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-sm sm:text-base outline-none border-b sm:border-b-0 sm:border-r border-gray-200"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 flex items-center justify-center transition"
              >
                <FiArrowRight className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
