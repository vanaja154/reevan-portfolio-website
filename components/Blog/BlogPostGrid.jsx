"use client";

import Image from "next/image";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function BlogPostGrid() {
  const blogPosts = [
    { id: 1, img: "/images/Blog/blog1.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 2, img: "/images/Blog/blog2.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 3, img: "/images/Blog/blog3.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 4, img: "/images/Blog/blog4.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 5, img: "/images/Blog/blog5.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 6, img: "/images/Blog/blog6.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 7, img: "/images/Blog/blog7.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 8, img: "/images/Blog/blog8.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 9, img: "/images/Blog/blog9.png", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 10, img: "/images/Blog/blog10.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 11, img: "/images/Blog/blog11.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
    { id: 12, img: "/images/Blog/blog12.jpg", date: "12 March 21", readTime: "5 Min Read", title: "Finding the best social media platform for your audience and business" },
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Get current page posts
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-60">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-sm space-x-4 mb-2">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-gray-400" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegClock className="text-gray-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-snug hover:text-orange-500 cursor-pointer">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="bg-orange-100 rounded-full px-6 py-3 flex items-center space-x-4">
            {/* Prev Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`text-orange-500 font-medium hover:underline ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <Link href={`?page=${page}`} key={page}>
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-full text-sm font-semibold transition ${
                      currentPage === page
                        ? "bg-orange-500 text-white"
                        : "text-orange-500 hover:bg-orange-200"
                    }`}
                  >
                    {page}
                  </button>
                </Link>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`text-orange-500 font-medium hover:underline ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
