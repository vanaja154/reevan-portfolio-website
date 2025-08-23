"use client";

import { Briefcase } from "lucide-react";
import Image from "next/image";
import CustomButton from "@/utils/CustomButton";
import { useEffect, useState } from "react";
import PortfolioLinks from "@/utils/PortfolioLinks";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PortfolioHero() {
  const testimonials = [
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Lora Myka",
      company: "ABC Business, Jaipur, Rajasthan",
      image: "/images/user4.jpg",
    },
    {
      text:
        "Lorem Ipsum is simply dummy text used in typesetting industry. It has been the industry's standard dummy text for over 1500 years.",
      name: "John Doe",
      company: "XYZ Corp, New York",
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

  const headingLines = ["Some of our", "Finest work."];
  const paragraphLines = ["We Have Built High Impact Solutions Across Industries."];

  return (
    <section className="bg-[#fff6f3] py-12 md:py-20 mt-10 lg:mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content with Animation */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Small Title */}
            <motion.div
              className="flex items-center text-[#ff5b2e] font-semibold uppercase tracking-wide gap-2"
              variants={item}
            >
              <Briefcase className="w-5 h-5" />
              Quality Work
            </motion.div>

            {/* Heading Lines */}
            <div className="mt-3">
              {headingLines.map((line, idx) => (
                <motion.h2
                  key={idx}
                  variants={item}
                  className="text-3xl md:text-4xl font-bold"
                >
                  {line} <span className="text-orange-500">{line.includes("Finest") ? "" : ""}</span>
                </motion.h2>
              ))}
            </div>

            {/* Paragraph Lines */}
            <div className="mt-3 text-gray-500">
              {paragraphLines.map((line, idx) => (
                <motion.p key={idx} variants={item} className="text-base md:text-lg mb-4">
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Button */}
            <motion.div variants={item} className="mt-6">
              <CustomButton
                title="Get Quote"
                containerStyles="bg-[#ff5b2e] text-white px-6 py-3 rounded-full hover:bg-[#e14c23] transition flex items-center gap-2 cursor-pointer"
                textStyles="font-medium"
                href="/contact"
              />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="w-full">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                <span className="text-orange-500 text-2xl mr-1">❝</span>
                {testimonials[current].text}
                <span className="text-orange-500 text-2xl ml-1">❞</span>
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-md font-bold text-gray-900">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonials[current].company}</p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-end mt-4 gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-200 focus:outline-none ${
                    idx === current
                      ? "bg-orange-500 scale-110"
                      : "border border-orange-500 hover:bg-orange-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Links */}
        <PortfolioLinks />
      </div>
    </section>
  );
}
