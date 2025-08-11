import React from 'react'

export default function CompanyLogoes() {
    const logos = [
    "/images/customer-logo-1.png",
    "/images/customer-logo-2.png",
    "/images/customer-logo-3.png",
    "/images/customer-logo-6.png",
    "/images/customer-logo-7.png",
    "/images/customer-logo-1.png",
  ];
  return (
   <div className="mx-auto px-4 md:px-12 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-12 mx-auto object-contain"
            />
          ))}
        </div>
      </div>
  )
}
