import React from 'react'
import Image from "next/image";

export default function PortfolioLinks() {
      const portfolios = [
    { icon: "/images/dribbble.png", label: "Dribbble Portfolio" },
    { icon: "/images/dribbble.png", label: "Behance Portfolio" },
    { icon: "/images/dribbble.png", label: "Deviantart Portfolio" },
    { icon: "/images/dribbble.png", label: "Instagram Portfolio" },
    { icon: "/icons/artstation.svg", label: "Artstations Portfolio" },
  ];
  return (
    <div>
         <div className="mt-12">
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
        </div>
      
    </div>
  )
}
