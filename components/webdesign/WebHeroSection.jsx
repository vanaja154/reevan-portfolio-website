"use client";
import CompanyLogoes from "@/utils/CompanyLogoes";
import Image from "next/image";

export default function WebHeroSection() {
  return (
    <section className="bg-white py-20 md:py-20 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="">Award winning</span>{" "}
            Digital marketing agency
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Reevan solve the world's biggest problems with Expertise.
            Reevan helps global brand with digital products on web, mobile and
            connected platforms.
          </p>
          
          {/* Custom Button */}
          <div>
            <button className="bg-[#ff5b2e] hover:bg-[#e84e1e] text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md">
              Let’s Talk →
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/girl-bro.png" 
            alt="Digital Marketing Illustration"
            width={500}
            height={400}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
      <CompanyLogoes />
    </section>
  );
}
