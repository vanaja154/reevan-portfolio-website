"use client";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaPiggyBank, FaMedal, FaHeadset, FaThumbsUp } from "react-icons/fa";

export default function InquirySection() {
  return (
    <section className="bg-[#ffd2b8] py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="mb-10">
          <p className="text-orange-600 font-semibold uppercase text-sm">Inquiry</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Trusted by The Thousands</h2>
          <p className="text-gray-700 mt-2">
            We would be happy to hear from you, Please fill in the form below or mail us your requirements
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            
            {/* Logos */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-wrap justify-center items-center gap-8">
              <img src="/images/Contact/logo1.svg" alt="logo" className="h-18" />
              <img src="/images/Contact/logo2.svg" alt="logo" className="h-18" />
              <img src="/images/Contact/logo3.svg" alt="logo" className="h-18" />
              <img src="/images/Contact/logo4.svg" alt="logo" className="h-18" />
              <img src="/images/Contact/logo5.svg" alt="logo" className="h-18" />
              <img src="/images/Contact/logo6.svg" alt="logo" className="h-18" />
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-600 mb-4">
                <FaQuoteLeft className="inline-block text-orange-500 mr-1" />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type.
                <FaQuoteRight className="inline-block text-orange-500 ml-1" />
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src="/images/Contact/user.jpg"
                  alt="Lora Myka"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Lora Myka</h4>
                  <p className="text-gray-500 text-sm">ABC Business, Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">
              Please fill in the form below or mail us your requirements :)
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="border-b border-gray-300 focus:outline-none p-2" />
                <input type="email" placeholder="Email Address" className="border-b border-gray-300 focus:outline-none p-2" />
                <input type="text" placeholder="Contact Number" className="border-b border-gray-300 focus:outline-none p-2" />
                <input type="text" placeholder="Skype" className="border-b border-gray-300 focus:outline-none p-2" />
                <input type="text" placeholder="Subject" className="border-b border-gray-300 focus:outline-none p-2" />
                <select className="border-b border-gray-300 focus:outline-none p-2">
                  <option>interested in</option>
                  <option>Web Design</option>
                  <option>Graphic Design</option>
                  <option>App Development</option>
                  <option>Digital Marketing</option>
                  <option>Business Development</option>
                  <option>Others</option>
                </select>
              </div>
              <textarea placeholder="Message" rows="3" className="border-b border-gray-300 focus:outline-none p-2 w-full"></textarea>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500" />
                <p className="text-sm text-gray-600">
                  I agree to the Terms & Conditions of Reevan.
                </p>
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition"
              >
                Send your inquiry →
              </button>

              <p className="text-xs text-gray-500 mt-2">
                We hate spam, and we respect your privacy.
              </p>
            </form>

            {/* We Deliver Icons */}
            <div className="grid grid-cols-4 gap-4 mt-8 text-center">
              <div>
                <FaPiggyBank className="mx-auto text-pink-500 text-xl" />
                <p className="text-sm font-medium mt-1">Best Price</p>
              </div>
              <div>
                <FaMedal className="mx-auto text-yellow-500 text-xl" />
                <p className="text-sm font-medium mt-1">Quality Service</p>
              </div>
              <div>
                <FaHeadset className="mx-auto text-orange-500 text-xl" />
                <p className="text-sm font-medium mt-1">Good Support</p>
              </div>
              <div>
                <FaThumbsUp className="mx-auto text-green-500 text-xl" />
                <p className="text-sm font-medium mt-1">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
