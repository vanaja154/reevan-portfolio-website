import React from 'react'
import { useEffect, useState } from "react";

export default function RotatingCard() {
      const testimonials = [
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Lora Myka",
      company: "ABC Business",
      image: "/images/user4.jpg",
    },
    {
      text:
        "Lorem Ipsum is simply dummy text used in typesetting industry. It has been the industry's standard dummy text for over 1500 years.",
      name: "John Doe",
      company: "XYZ Corp",
      image: "/images/user4.jpg",
    },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, [testimonials.length]);
  return (
        <div className="md:w-1/2 w-full">
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

          {/* Navigation Dots */}
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
        </div>
  )
}
