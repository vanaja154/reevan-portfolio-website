
"use client";
import React, { useState } from "react";
import Image from "next/image";
import CompanyLogoes from "@/utils/CompanyLogoes";

const testimonials = [
  {
    name: "Anne Fibbiyon",
    location: "Jaipur, Rajasthan",
    image: "/images/user1.jpg",
    quote: `"Reevan build my startup business a great website that really helps current and potential customers get a good feel for my company."`,
    detail:
      "I am delighted with our new website. A1 service and design by Reevan. You can go with the Web Design Company, and I 100% recommend them to anyone. The perfect company to go to for your ideal website and digital marketing.",
  },
  {
    name: "John Doe",
    location: "Mumbai, India",
    image: "/images/user5.jpg",
    quote: `"They understood our needs clearly and executed the design flawlessly."`,
    detail:
      "Working with Reevan was a breeze. Their professionalism and output exceeded our expectations. We now have a website that truly reflects our brand.",
  },
  {
    name: "Emily Watson",
    location: "New York, USA",
    image: "/images/user3.jpg",
    quote: `"Highly recommended! They went above and beyond to deliver results."`,
    detail:
      "We hired them for a full-stack app. Their development team is skilled and communicative. Very happy with the end result.",
  },
  {
    name: "Amit Sharma",
    location: "Bangalore, India",
    image: "/images/user4.jpg",
    quote: `"Their UI/UX design transformed our user experience."`,
    detail:
      "Our old design was clunky. Reevan gave us a clean, modern look and feel. Customers love the new interface.",
  },
  {
    name: "Priya Kaur",
    location: "Chandigarh, India",
    image: "/images/user4.jpg",
    quote: `"From consultation to delivery, they were incredibly professional."`,
    detail:
      "They communicated clearly throughout the project and met every deadline. We now have a fully responsive and stunning site.",
  },
];

export default function AppDevTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  return (
    <section className="bg-[#f7f7f7] text-center px-4 py-16 md:py-12">
       <CompanyLogoes />
      <h2 className="text-2xl md:text-4xl font-bold  md:py-12 text-gray-900">
        Our <span>clients praise</span> us
        for our great results
      </h2>

      <blockquote className="text-lg md:text-xl font-semibold text-gray-800 max-w-3xl mx-auto mb-4">
        {testimonial.quote}
      </blockquote>

      <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base mb-4">
        {testimonial.detail}
      </p>

      <div className="mb-6">
        <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.location}</p>
      </div>

      <div className="flex justify-center items-center gap-3 flex-wrap mt-8">
        {testimonials.map((person, index) => (
          <button
            key={index}
            className={`rounded-2xl border-4 ${
              index === activeIndex
                ? "border-[#ff5b2e]"
                : "border-transparent"
            } transition duration-300`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={person.image}
              alt={person.name}
              width={60}
              height={60}
              className="rounded-2xl"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
