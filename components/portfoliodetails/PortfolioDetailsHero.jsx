import React from "react";
import { Briefcase } from "lucide-react";

export default function PortfolioDetailsHero() {
  return (
    <section className="py-12 px-4 md:px-8 lg:mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-2 text-orange-500 font-medium uppercase tracking-wide text-sm mb-3">
            <Briefcase size={18} />
            <span>Portfolio Details</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Furniture ios app kit developed
          </h2>

          {/* Underline effect */}
          {/* <div className="w-24 h-1 bg-orange-400 mt-1 mb-4"></div> */}

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis.
          </p>

          <a
            href="#"
            className="text-gray-900 font-medium flex items-center gap-2 hover:text-orange-500 transition"
          >
            Go to App Store →
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/Portfolio/port-details.png" 
            alt="Furniture iOS App Kit"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
