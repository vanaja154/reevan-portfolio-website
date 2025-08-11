"use client";

import { Mail, Phone, MessageSquare } from "lucide-react";
import React from "react";

export default function AppDevContactSection() {
  return (
    <section className="relative z-10 py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-2]"
        style={{
          backgroundImage: "url('/images/office.jpg')",
        }}
      ></div>

      {/* Overlay with #ff5b2e color */}
      <div className="absolute inset-0 bg-[#ff5b2e] opacity-90 z-[-1]"></div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 text-white">
        {/* Left Side Content */}
        <div className="space-y-8">
          <div>
            <p className="text-[#ffb199] uppercase font-semibold mb-1">Inquiry</p>
            <h2 className="text-4xl font-extrabold">
              Let’s Get in <span className="underline decoration-white/60">Touch</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Contact Cards */}
            <div className="bg-white/90 text-[#1e1e1e] p-4 rounded-lg shadow">
              <p className="font-medium text-sm text-gray-600">Sales Department</p>
              <div className="flex items-center gap-2 mt-2 font-semibold text-lg">
                <Phone size={18} /> +91 123 4567 890
              </div>
            </div>
            <div className="bg-white/90 text-[#1e1e1e] p-4 rounded-lg shadow">
              <p className="font-medium text-sm text-gray-600">HR Department</p>
              <div className="flex items-center gap-2 mt-2 font-semibold text-lg">
                <Phone size={18} /> +91 123 4567 890
              </div>
            </div>
            <div className="bg-white/90 text-[#1e1e1e] p-4 rounded-lg shadow">
              <p className="font-medium text-sm text-gray-600">Email</p>
              <div className="flex items-center gap-2 mt-2 font-semibold text-sm">
                <Mail size={18} /> reevan@abc.com
              </div>
            </div>
            <div className="bg-white/90 text-[#1e1e1e] p-4 rounded-lg shadow">
              <p className="font-medium text-sm text-gray-600">Skype</p>
              <div className="flex items-center gap-2 mt-2 font-semibold text-sm">
                <MessageSquare size={18} /> reevan.company
              </div>
            </div>
          </div>

          {/* Feedback Logos */}
          <div>
            <p className="font-medium mb-2">Read Our Customers Feedback</p>
            <div className="flex flex-wrap justify-center items-center gap-4 bg px-2 py-4">
              <img src="/images/google-logo.png" alt="Google" className="h-10 bg-white rounded-2xl" />
              <img src="/images/google-logo.png" alt="HubSpot" className="h-10 bg-white rounded-2xl" />
              <img src="/images/google-logo.png" alt="Trustpilot" className="h-10 bg-white rounded-2xl" />
            </div>

          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-black">
          <h3 className="text-2xl font-bold mb-6">Please fill in the form below.</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="shadow px-4 py-2 rounded w-full" />
              <input type="email" placeholder="Email Address" className="shadow px-4 py-2 rounded w-full" />
              <input type="text" placeholder="Contact Number" className="shadow px-4 py-2 rounded w-full" />
              <input type="text" placeholder="Skype" className="shadow px-4 py-2 rounded w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Subject" className="shadow px-4 py-2 rounded w-full" />
              <select className="shadow px-4 py-2 rounded w-full">
                <option value="">Interested in</option>
                <option>App Development</option>
                <option>UI/UX Design</option>
                <option>Marketing</option>
              </select>
            </div>
            <textarea rows={4} placeholder="Message" className="shadow px-4 py-2 rounded w-full" />
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                I agree to the <a href="#" className="underline">Terms & Conditions</a> of Reevan.
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#ff5722] text-white font-semibold px-6 py-3 rounded-full w-full hover:bg-[#e84e1e] transition"
            >
              Send your inquiry →
            </button>
            <p className="text-xs text-center text-gray-500 mt-2">
              We hate spam, and we respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
