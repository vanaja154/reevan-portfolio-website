"use client";

import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const teamMembers = [
  { name: "Marion Gaze", role: "Web Developer", image: "/images/user1.jpg" },
  { name: "Gene Jacket", role: "Graphic Designer", image: "/images/user5.jpg" },
  { name: "Eric Shun", role: "Android Developer", image: "/images/user3.jpg" },
  { name: "Mayank Jhalana", role: "iOS Developer", image: "/images/user4.jpg" },
  { name: "Anne Fibbiyon", role: "Web Developer", image: "/images/user3.jpg" },
  { name: "Frank Senbeans", role: "Shopify Developer", image: "/images/user1.jpg" },
  { name: "Forrest Heller", role: "WordPress Developer", image: "/images/user2.jpg" },
  { name: "Sue Shae", role: "UI/UX Designer", image: "/images/user3.jpg" },
  { name: "Doug Lee Duckling", role: "App Developer", image: "/images/user2.jpg" },
  { name: "Sara Bellum", role: "App Developer", image: "/images/user1.jpg" },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-[#fff6f5]">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Meet the Team</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 
        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Image with zoom hover */}
            <div className="overflow-hidden relative">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-64 sm:h-72 object-cover transform transition-transform duration-500 
                group-hover:scale-110"
              />

              {/* Social Icons (show on hover for ALL devices) */}
              <div
                className="absolute top-4 left-4 flex flex-col gap-3
                opacity-0 -left-12
                group-hover:left-4 group-hover:opacity-100
                transition-all duration-500"
              >
                <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition delay-100">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition delay-200">
                  <Twitter size={18} />
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition delay-300">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition delay-400">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Text Content */}
            <div className="p-4 text-center">
              <h4 className="font-bold text-lg text-gray-800">{member.name}</h4>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
