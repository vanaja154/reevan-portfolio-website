"use client";

import HighlightedText from "@/utils/HighlightedText";

export default function PartnersSection() {
  const partners = [
    { logo: "/images/brand-logo-11.png", name: "Shutter, USA" },
    { logo: "/images/brand-logo-2.png", name: "Hipster, USA" },
    { logo: "/images/brand-logo-3.png", name: "Happy, USA" },
    { logo: "/images/brand-logo-4.png", name: "Opera Tours, USA" },
    { logo: "/images/brand-logo-5.png", name: "Shutter, USA" },
    { logo: "/images/brand-logo-6.png", name: "Hipster, USA" },
    { logo: "/images/brand-logo-7.png", name: "Happy, USA" },
    { logo: "/images/brand-logo-8.png", name: "Opera Tours, USA" },
    { logo: "/images/brand-logo-9.png", name: "Opera Tours, USA" },
    { logo: "/images/brand-logo-10.png", name: "Opera Tours, USA" },
    { logo: "/images/brand-logo-11.png", name: "Opera Tours, USA" },
    { logo: "/images/brand-logo-12.png", name: "Opera Tours, USA" },
  ];

  return (
    <section className="py-16 bg-white text-center px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        We Are Partner With <HighlightedText>Top Ventures</HighlightedText>
      </h2>

      {/* Sub text */}
      <p className="text-gray-500 mb-12 max-w-xl mx-auto text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis.
      </p>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 object-contain mb-2"
            />
            <p className="text-gray-600 text-sm">{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
