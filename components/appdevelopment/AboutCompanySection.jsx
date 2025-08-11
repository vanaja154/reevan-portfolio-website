"use client";
import CustomButton from "@/utils/CustomButton";
import Image from "next/image";
import { useEffect, useRef } from "react";
import BadgesSection from "./BadgesSection";

export default function AboutCompanySection() {
  const rotateTextRef = useRef(null);
  return (
    <section className="relative bg-[#fff7f5]">
      {/* Background Image */}
      <div className="relative">
        <Image
          src="/images/office-view.jpg"
          alt="Team"
          width={1500}
          height={600}
          className="w-full h-auto object-cover"
        />
        {/* Stats Card */}
        {/* <div className="absolute inset-0 flex justify-center items-center px-4">
          <div className="bg-[#ff5b2e] text-white px-6 py-8 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 max-w-5xl w-full">
            {/* Left Grid - Stats 2x2 
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold">7500 +</h3>
                <p className="text-sm mt-1">Project Delivered</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">3500 +</h3>
                <p className="text-sm mt-1">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">540 +</h3>
                <p className="text-sm mt-1">Experts Team</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">20 %</h3>
                <p className="text-sm mt-1">Success Years</p>
              </div>
            </div>
          </div>
        </div> */}
        <BadgesSection />
      </div>
    </section>
  );
}
