// components/Pricing2/HeroSection.jsx
import React from 'react';
export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: "url('/images/team-bg.png')", // Place your image in public/images/
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Us
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
