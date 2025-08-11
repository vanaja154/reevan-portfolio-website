"use client";

import { Briefcase } from "lucide-react";
import Image from "next/image";
import CustomButton from "@/utils/CustomButton";
import { useEffect, useState } from "react";
import PortfolioLinks from "@/utils/PortfolioLinks";

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

  return (
    <section className="bg-[#fff6f3] py-12 md:py-20 lg:mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center text-[#ff5b2e] font-semibold uppercase tracking-wide gap-2">
              <Briefcase className="w-5 h-5" />
              Quality Work
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Some of our{" "}
              <span>
                Finest
              </span>{" "}
              work.
            </h2>

            <p className="text-gray-500 mt-3">
              We Have Built High Impact Solutions Across Industries.
            </p>

            <div className="mt-6">
              <CustomButton
                title="Get Quote"
                containerStyles="bg-[#ff5b2e] text-white px-6 py-3 rounded-full hover:bg-[#e14c23] transition flex items-center gap-2"
                textStyles="font-medium"
                href="/"
              />
            </div>
          </div>
          <div className=" w-full">
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
        {/* <div className="mt-12">
          <h3 className="font-semibold text-lg">
            Check our portfolio on other websites as well.
          </h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {portfolios.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <p className="mt-2 text-gray-700 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div> */}
        <PortfolioLinks />
      </div>
    </section>
  );
}

