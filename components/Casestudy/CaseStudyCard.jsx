// components/CaseStudyCard.jsx
"use client";
import Image from "next/image";
import { useState } from "react";

export default function CaseStudyCard() {
  const [service, setService] = useState("Service");
  const [category, setCategory] = useState("Fashion");

  return (
    <div className="w-full p-4 sm:p-6 lg:p-10">
      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 13.414V20a1 1 0 01-1.447.894l-4-2A1 1 0 018 18v-4.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          <span className="text-gray-700 font-medium text-sm sm:text-base">
            Filter By
          </span>
        </div>

        {/* Service Dropdown */}
        <select
          className="border-none outline-none bg-transparent text-gray-800 font-medium text-sm sm:text-base"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>Service</option>
          <option>PPC</option>
          <option>Social Media</option>
          <option>Digital Marketing</option>
          <option>eCommerce Development</option>
        </select>

        {/* Category Dropdown */}
        <select
          className="border-none outline-none bg-transparent text-gray-800 font-medium text-sm sm:text-base"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Industry</option>
          <option>Fashion</option>
          <option>eCommerce</option>
          <option>Health</option>
          <option>Education</option>
          <option>Finance</option>
          <option>Real Estate</option>
        </select>

        {/* Clear Filter */}
        <button
          onClick={() => {
            setService("Service");
            setCategory("Fashion");
          }}
          className="flex items-center gap-1 text-gray-800 font-medium text-sm sm:text-base"
        >
          Clear Filter
          <span className="text-lg">✕</span>
        </button>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-8 items-center">
        {/* Image */}
        <div className="w-full">
          <Image
            src="/images/Casestudy/facewash.jpg"
            alt="Product"
            width={500}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="mt-6 lg:mt-0">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            Customer Highlight Story
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
            How Binolax Facewash Generated 220% More Digital Marketing Revenue
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <Image
              src="/images/Casestudy/mycarto.png"
              alt="Brand Logo"
              width={100}
              height={100}
              className="w-8 h-8 sm:w-40 sm:h-20"
            />
            <div>
              <p className="font-medium text-gray-900 text-sm sm:text-base">
                Luxora Perfume
              </p>
              <a
                href="#"
                className="text-red-500 hover:underline font-medium text-xs sm:text-sm"
              >
                View Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
