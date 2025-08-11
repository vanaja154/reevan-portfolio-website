// components/OurTeamSection.jsx
"use client";

import Image from "next/image";
import { FaUsers } from "react-icons/fa";

export default function OurTeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:mt-10 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaUsers className="text-orange-500 text-xl" />
            <span className="text-orange-500 font-medium uppercase tracking-wide">
              Our Team
            </span>
          </div>
          
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-6">
            Teamwork is the ability to work together toward a common vision
          </h2>
          
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis.
          </p>
          
          <a
            href="#"
            className="inline-flex items-center text-gray-800 font-medium hover:underline"
          >
            Join Our Team →
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Ourteam/team.jpg" // replace with your actual image path
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
