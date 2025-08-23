// components/Herosection.jsx
import Image from "next/image";

export default function Herosection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/portfolio/office.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fff] opacity-60"></div>

      {/* Content */}
      <div className="relative mt-16 lg:mt-16 z-10 py-20 text-center px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Core Values
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
        </p>
      </div>
    </section>
  );
}
