// components/Herosection.jsx
import Image from "next/image";

export default function Herosection() {
  return (
    <section className="relative bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/office-bg.jpg" // change to your background image path
          alt="Office Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 text-center px-4 md:px-8">
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
