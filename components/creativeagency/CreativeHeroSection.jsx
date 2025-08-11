"use client";

import Image from "next/image";
import CustomButton from "@/utils/CustomButton";

export default function CreativeHeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen md:h-[600px] flex items-center"
      style={{
        backgroundImage: "url('/images/office-team.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container (Aligned to Left) */}
      <div className="z-10 ml-8 sm:ml-16 md:ml-24 lg:ml-32 max-w-lg lg:max-w-xl text-white">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Creativity Can Light <br /> Your Brand
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-100">
          Reevan solves the world's biggest problems with expertise. Reevan helps global brands with digital products on web, mobile, and connected platforms.
        </p>

        {/* Call-to-Action Button */}
        <div>
          <CustomButton
            text="View Portfolio →"
            href="/portfolio" // Optional: if it's a link
            bgColor="bg-orange-500"
            hoverColor="hover:bg-orange-600"
            borderColor="border-orange-500"
            textColor="text-white"
            className="px-6 py-3 font-semibold shadow-lg hover:shadow-orange-200 transition-shadow"
          />
        </div>
      </div>
    </section>
  );
}