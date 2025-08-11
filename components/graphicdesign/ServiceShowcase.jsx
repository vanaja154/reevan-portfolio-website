'use client';

import Image from 'next/image';
import React from 'react';

const ServiceShowcase = () => {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        See what we can do for you
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* App Development */}
        <div className="bg-orange-100 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">App Development</h3>
          <p className="text-gray-700 mb-6">
            We don't just build websites, we build websites that SELLS
          </p>
          <Image
            src="/images/Graphics/App.svg"
            alt="App Development Illustration"
            width={300}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* Web Design */}
        <div className="bg-pink-100 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Design</h3>
          <p className="text-gray-700 mb-6">
            We don't just build websites, we build websites that SELLS
          </p>
          <Image
            src="/images/Graphics/Web.svg"
            alt="Web Design Illustration"
            width={300}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* UI/UX Design */}
        <div className="bg-blue-100 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Design</h3>
          <p className="text-gray-700 mb-6">
            We don't just build websites, we build websites that SELLS
          </p>
          <Image
            src="/images/Graphics/Ux.svg"
            alt="UI/UX Design Illustration"
            width={300}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
