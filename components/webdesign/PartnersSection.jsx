"use client";
import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { logo: "/images/brand1.png", name: "Shutter, USA" },
    { logo: "/images/brand2.png", name: "Hipster, USA" },
    { logo: "/images/brand3.png", name: "Happy, USA" },
    { logo: "/images/brand4.png", name: "Opera Tours, USA" },
    { logo: "/images/brand5.png", name: "Shutter, USA" },
    { logo: "/images/brand6.png", name: "Hipster, USA" },
    { logo: "/images/brand7.png", name: "Happy, USA" },
    { logo: "/images/brand8.png", name: "Opera Tours, USA" },
    { logo: "/images/brand9.png", name: "Opera Tours, USA" },
    { logo: "/images/brand10.png", name: "Opera Tours, USA" },
    { logo: "/images/brand11.png", name: "Opera Tours, USA" },
    { logo: "/images/brand12.png", name: "Opera Tours, USA" },
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold">
          We Are Partner With <span className="">Top Ventures</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. 
          Aenean massa. Cum sociis natoque penatibus et magnis.
        </p>

        {/* Logos grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                className="object-contain"
              />
              <p className="mt-2 text-sm text-gray-600">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
