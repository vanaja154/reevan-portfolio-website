import React from 'react';
export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center lg:mt-10 bg-no-repeat py-20"
      style={{
        backgroundImage: "url('/images/portfolio/office.jpg')", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fff] opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Pricing
        </h2>
        <p className="max-w-2xl text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
      </div>
    </section>
  );
}
