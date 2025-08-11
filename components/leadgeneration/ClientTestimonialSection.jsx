import React from "react";
import Image from "next/image";

const ClientTestimonialSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Small Title */}
        <p className="text-orange-500 uppercase tracking-widest font-medium mb-2">
          TESTIMONIALS
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Our <span className="text-black relative">
            <span className="relative z-10">clients praise</span>
            <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-200 -z-10"></span>
          </span>{" "}
          us for our great results
        </h2>

        {/* Quote */}
        <blockquote className="mt-6 text-lg font-semibold text-gray-900 leading-relaxed">
          "Reevan build my startup business a great website that really helps
          current and potential customers get a good feel for my company."
        </blockquote>

        {/* Subtext */}
        <p className="mt-4 text-gray-600">
          I am delighted with our new website. A1 service and design by Reevan.
          You can go with the Web Design Company, and I 100% recommend them to
          anyone. The perfect company to go to for your ideal website and
          digital marketing.
        </p>

        {/* Image & Name */}
        <div className="mt-8 flex flex-col items-center">
          <div className="relative">
            <Image
              src="/images/moana-happy.png"
              alt="Moana Happy"
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
            <button className="absolute top-0 right-0 bg-white rounded-full shadow-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                />
              </svg>
            </button>
          </div>
          <h3 className="mt-4 text-lg font-bold text-gray-900">Moana Happy</h3>
          <p className="text-gray-500">Jaipur, Rajasthan</p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialSection;
