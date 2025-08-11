"use client";
import Image from "next/image";
import { Play } from "lucide-react"; // For the watch video icon
import CustomButton from "@/utils/CustomButton";


export default function WebAboutSection() {
  return (
    <section className="bg-[#fff6f4] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <p className="text-[#ff5b2e] font-semibold tracking-wide uppercase">
            We are Reevan
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            Top-rated Web And Mobile App Development Company
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Reevan started its operation in the year 1990. We are Worldwide, 
            based Web, App and Digital Marketing Company. Our main Domain is 
            Web Design, App Development, Digital marketing, Product Design 
            and Cloud Solutions. Customer Satisfaction and the Highest rate of 
            Customer Repeatability make us one of the pioneers in the field. 
            Our primary goal is to meet the client's needs and requirements in 
            order to improve and elevate their business.
          </p>

          {/* Awards Row */}
          <div className="flex flex-wrap lg:pl-2 items-center gap-6">
            <Image src="/images/badge-a.png" alt="Award" width={100} height={100} />
            <Image src="/images/badge-a.png" alt="Award" width={100} height={100} />
            <Image src="/images/badge-a.png" alt="Award" width={100} height={100} />
          </div>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <CustomButton
              title="About Us"
              href="#"
              containerStyles="bg-[#ff5b2e] hover:bg-[#e84e1e] text-white px-6 py-3 rounded-full font-semibold transition duration-300"
            />
            <button className="flex items-center gap-2 text-gray-800 hover:text-[#ff5b2e] transition duration-300">
              <Play size={20} /> Watch Video
            </button>
          </div>
        </div>

        {/* Right Stats Boxes */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[
            { title: "Projects", value: "7500+", desc: "Reevan Delivered the Thousands of successful projects around the world." },
            { title: "Clients", value: "3500+", desc: "Reevan Delivered the Thousands of successful projects around the world." },
            { title: "Team", value: "540+", desc: "Our team consists of highly qualified, experienced and knowledgeable." },
            { title: "Years", value: "20+", desc: "Clients across the globe access our services for the past 20 years." }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-10 shadow-sm hover:shadow-md transition">
              <p className="text-[#ff5b2e] text-2xl  uppercase">{stat.title}</p>
              <h3 className="text-3xl font-extrabold mt-4">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-4">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
