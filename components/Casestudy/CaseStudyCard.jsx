// components/CaseStudyCard.jsx
"use client";
import Image from "next/image";
import { useState } from "react";

export default function CaseStudyCard() {
  const [service, setService] = useState("Service");
  const [category, setCategory] = useState("Fashion");

  return (
    <div className="w-full p-6">
      {/* Filter Bar */}
      <div className="flex items-center gap-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 13.414V20a1 1 0 01-1.447.894l-4-2A1 1 0 018 18v-4.586L3.293 6.707A1 1 0 013 6V4z" />
          </svg>
          <span className="text-gray-700 font-medium">Filter By</span>
        </div>

        {/* Service Dropdown */}
        <select
          className="border-none outline-none bg-transparent text-gray-800 font-medium"
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
          className="border-none outline-none bg-transparent text-gray-800 font-medium"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Industry</option>
          <option>Fashion</option>
          <option>eCommerce</option>
          <option>Health</option>
          <option>Education</option>
          <option>Finance</option>
          <option>Rael Estate</option>
        </select>

        {/* Clear Filter */}
        <button
          onClick={() => {
            setService("Service");
            setCategory("Fashion");
          }}
          className="flex items-center gap-1 text-gray-800 font-medium"
        >
          Clear Filter
          <span className="text-lg">✕</span>
        </button>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-center">
        {/* Image */}
        <div>
          <Image
            src="/images/Casestudy/facewash.jpg" // replace with your perfume image path
            alt="Product"
            width={500}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
            Customer Highlight Story
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 leading-snug">
            How Binolax Facewash Generated 220% More Digital Marketing Revenue
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <Image
              src="/images/Casestudy/mycarto.png" // replace with your store logo
              alt="Brand Logo"
              width={40}
              height={40}
            />
            <div>
              <p className="font-medium text-gray-900">Luxora Perfume</p>
              <a
                href="#"
                className="text-red-500 hover:underline font-medium text-sm"
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
