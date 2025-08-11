"use client";

import CompanyLogoes from "@/utils/CompanyLogoes";
import RotatingCard from "@/utils/RotatingCard";
// import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:gap-12 gap-8 items-start mb-12">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 md:mb-0">
            We improve demand for <br />
            efficiency and quality in <br />
            entrepreneurship with creative <br />
            mind.
          </h2>
        </div>

        {/* Right Rotating Card */}
        {/* <div className="md:w-1/2 w-full">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <p className="text-gray-600 text-base md:text-lg mb-6">
              <span className="text-orange-500 text-2xl mr-1">❝</span>
              {testimonials[current].text}
              <span className="text-orange-500 text-2xl ml-1">❞</span>
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-md font-bold text-gray-900">
                  {testimonials[current].name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonials[current].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots 
          <div className="flex justify-end mt-4 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-4 h-4 rounded-full ${
                  idx === current ? "bg-orange-500" : "border border-orange-500"
                }`}
              />
            ))}
          </div>
        </div> */}
        <RotatingCard />

      </div>

      {/* Logos Section */}
      <CompanyLogoes />
    </section>
  );
}
