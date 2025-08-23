import React from "react";

export default function CustomHero({ 
  title = " ", 
  description = " ", 
  bgImage = " " 
}) {
  return (
    <section
      className="relative bg-cover bg-center h-screen md:h-[450px] flex items-center"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#fff] opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center py-32 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
