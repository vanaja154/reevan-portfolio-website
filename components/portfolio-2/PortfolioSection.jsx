import PortfolioLinks from "@/utils/PortfolioLinks";
import React from "react";

export default function PortfolioSection() {
  return (
    <section className="bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Quality is more <br /> important than quantity
          </h2>
          <p className="mt-2 text-gray-600">
            Take a look of our latest work.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:ml-auto">
          <PortfolioLinks />
        </div>
      </div>
    </section>
  );
}
