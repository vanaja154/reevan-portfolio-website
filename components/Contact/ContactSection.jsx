"use client";

import { FaHeadphonesAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-[#fff5f3] py-16 mt-10 lg:mt-18">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        
        {/* Left Side - Heading & Text */}
        <div className="lg:w-1/2">
          <div className="flex items-center text-orange-500 font-semibold uppercase text-sm mb-3">
            <FaHeadphonesAlt className="mr-2" />
            Let’s Connect
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            Good conversations build great collaborations
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg">
            We’d love to hear from you! Please fill in the form below or send us
            an email with your requirements.
          </p>
        </div>

        {/* Right Side - Contact Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Partnership Team - Phone */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-gray-700 mr-3" />
              <h3 className="text-gray-700 font-medium">Partnership Team</h3>
            </div>
            <p className="text-gray-800">+91 9876543210</p>
            <p className="text-gray-800">+91 9876543211</p>
          </div>

          {/* Client Support - Phone */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-gray-700 mr-3" />
              <h3 className="text-gray-700 font-medium">Client Support</h3>
            </div>
            <p className="text-gray-800">+91 9123456780</p>
            <p className="text-gray-800">+91 9123456781</p>
          </div>

          {/* Partnership Team - Email */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-gray-700 mr-3" />
              <h3 className="text-gray-700 font-medium">Partnership Team</h3>
            </div>
            <p className="text-gray-800">partners@yourcompany.com</p>
          </div>

          {/* Client Support - Email */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-gray-700 mr-3" />
              <h3 className="text-gray-700 font-medium">Client Support</h3>
            </div>
            <p className="text-gray-800">support@yourcompany.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
