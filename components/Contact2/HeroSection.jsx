"use client";

import Image from "next/image";
import { FaHeadphones } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-[#4b295b]  py-16">
      <div className="max-w-screen-lg mx-auto mt-10 lg:mt-10 flex flex-col md:flex-row items-center md:items-stretch px-6">

        {/* Left Side - Text */}
        <div className="flex-1 text-white flex flex-col justify-center">
          {/* Small Top Label */}
          <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold">
            <FaHeadphones className="text-orange-500" />
            CONTACT US
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            We are a creative digital agency based in India.
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-gray-300 text-lg">
            Please fill in the form below or mail us your requirements.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/images/Contact2/smiling-girl.png"
            alt="Contact Us Hero"
            width={500}
            height={350}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
