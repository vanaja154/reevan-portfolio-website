"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaSkype } from "react-icons/fa";

export default function OfficeLocations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">Find Us</p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our <span className="">Office Locations</span>
          </h2>
        </div>

        {/* 3-column office locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* India */}
          <div>
            <img src="/images/Contact/india.svg" alt="India" className="mx-auto h-12 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">India</h3>
            <p className="text-gray-600 mb-4">
              Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur, Rajasthan 123456
            </p>
            <div className="flex justify-center gap-4 text-gray-800 text-lg">
              <FaMapMarkerAlt />
              <FaPhoneAlt />
              <FaEnvelope />
              <FaSkype />
            </div>
          </div>

          {/* Dubai */}
          <div>
            <img src="/images/Contact/dubai.svg" alt="Dubai" className="mx-auto h-12 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dubai</h3>
            <p className="text-gray-600 mb-4">
              Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur, Rajasthan 123456
            </p>
            <div className="flex justify-center gap-4 text-gray-800 text-lg">
              <FaMapMarkerAlt />
              <FaPhoneAlt />
              <FaEnvelope />
              <FaSkype />
            </div>
          </div>

          {/* UK */}
          <div>
            <img src="/images/Contact/uk.svg" alt="UK" className="mx-auto h-12 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">UK</h3>
            <p className="text-gray-600 mb-4">
              Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur, Rajasthan 123456
            </p>
            <div className="flex justify-center gap-4 text-gray-800 text-lg">
              <FaMapMarkerAlt />
              <FaPhoneAlt />
              <FaEnvelope />
              <FaSkype />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
