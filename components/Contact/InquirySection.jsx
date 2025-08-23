"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaPiggyBank, FaMedal, FaHeadset, FaThumbsUp } from "react-icons/fa";

export default function InquirySection() {
  const testimonials = [
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Lora Myka",
      company: "ABC Business, Jaipur, Rajasthan",
      image: "/images/Contact/user.jpg",
    },
    {
      text:
        "Lorem Ipsum is simply dummy text used in typesetting industry. It has been the industry's standard dummy text for over 1500 years.",
      name: "John Doe",
      company: "XYZ Corp, Bangalore, India",
      image: "/images/Contact/user2.jpg",
    },
    {
      text:
        "Working with this team has been amazing. They deliver quality on time and provide excellent support.",
      name: "Ananya Sharma",
      company: "Tech Solutions, Hyderabad",
      image: "/images/Contact/user3.jpg",
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
    <section className="bg-[#ffd2b8] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <p className="text-orange-600 font-semibold uppercase text-xs sm:text-sm">
            Inquiry
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Trusted by The Thousands
          </h2>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            We would be happy to hear from you, Please fill in the form below
            or mail us your requirements
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {/* Logos */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
              <img src="/images/Contact/logo1.svg" alt="logo" className="h-10 sm:h-12 md:h-16" />
              <img src="/images/Contact/logo2.svg" alt="logo" className="h-10 sm:h-12 md:h-16" />
              <img src="/images/Contact/logo3.svg" alt="logo" className="h-10 sm:h-12 md:h-16" />
              <img src="/images/Contact/logo4.svg" alt="logo" className="h-10 sm:h-12 md:h-16" />
              <img src="/images/Contact/logo5.svg" alt="logo" className="h-10 sm:h-12 md:h-16" />
              <img src="/images/Contact/logo6.svg" alt="logo" className="h-10 sm:h-12 md:h-16" />
            </div>

            {/* Rotating Testimonial with Animation */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm relative min-h-[220px] sm:min-h-[240px] lg:min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 p-4 sm:p-6"
                >
                  <p className="text-gray-600 mb-4 text-base sm:text-lg leading-relaxed">
                    <FaQuoteLeft className="inline-block text-orange-500 mr-1" />
                    {testimonials[current].text}
                    <FaQuoteRight className="inline-block text-orange-500 ml-1" />
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center sm:justify-end mt-32 sm:mt-36 lg:mt-40 gap-2 relative z-10">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
                      idx === current
                        ? "bg-orange-500"
                        : "border border-orange-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-6 text-center lg:text-left">
              Please fill in the form below or mail us your requirements :)
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-b border-gray-300 focus:outline-none p-2 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border-b border-gray-300 focus:outline-none p-2 text-sm sm:text-base"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="border-b border-gray-300 focus:outline-none p-2 text-sm sm:text-base"
                />
                <input
                  type="text"
                  placeholder="Skype"
                  className="border-b border-gray-300 focus:outline-none p-2 text-sm sm:text-base"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border-b border-gray-300 focus:outline-none p-2 text-sm sm:text-base"
                />
                <select className="border-b border-gray-300 focus:outline-none p-2 text-sm sm:text-base">
                  <option>interested in</option>
                  <option>Web Design</option>
                  <option>Graphic Design</option>
                  <option>App Development</option>
                  <option>Digital Marketing</option>
                  <option>Business Development</option>
                  <option>Others</option>
                </select>
              </div>
              <textarea
                placeholder="Message"
                rows="3"
                className="border-b border-gray-300 focus:outline-none p-2 w-full text-sm sm:text-base"
              ></textarea>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="accent-orange-500 mt-1" />
                <p className="text-xs sm:text-sm text-gray-600">
                  I agree to the Terms & Conditions of Reevan.
                </p>
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-orange-600 transition text-sm sm:text-base"
              >
                Send your inquiry →
              </button>

              <p className="text-xs text-gray-500 mt-2 text-center lg:text-left">
                We hate spam, and we respect your privacy.
              </p>
            </form>

            {/* We Deliver Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 text-center">
              <div>
                <FaPiggyBank className="mx-auto text-pink-500 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm font-medium mt-1">Best Price</p>
              </div>
              <div>
                <FaMedal className="mx-auto text-yellow-500 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm font-medium mt-1">Quality Service</p>
              </div>
              <div>
                <FaHeadset className="mx-auto text-orange-500 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm font-medium mt-1">Good Support</p>
              </div>
              <div>
                <FaThumbsUp className="mx-auto text-green-500 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm font-medium mt-1">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
