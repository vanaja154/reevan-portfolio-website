'use client';

import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaSkype, FaEnvelope, FaMapMarkerAlt, FaDirections } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import Image from 'next/image';

export default function ContactForm() {
  const [agreed, setAgreed] = useState(true);

  return (
    <section className="bg-[#FFF3F0] py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left - Form */}
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Please fill in the form below.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="border-b py-2 focus:outline-none" />
            <input type="email" placeholder="Email Address" className="border-b py-2 focus:outline-none" />
            <input type="text" placeholder="Contact Number" className="border-b py-2 focus:outline-none" />
            <input type="text" placeholder="Skype" className="border-b py-2 focus:outline-none" />
            <input type="text" placeholder="Subject" className="border-b py-2 focus:outline-none" />
            <select className="border-b py-2 focus:outline-none text-gray-500">
              <option>interested in</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>Other</option>
            </select>
          </div>

          <textarea placeholder="Message" className="w-full border-b mt-6 py-2 focus:outline-none" rows={3}></textarea>

          <div className="flex items-start mt-4">
            <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} className="accent-orange-500 mt-1" />
            <label className="ml-2 text-sm">
              I agree to the <span className="font-medium text-gray-700 underline">Terms & Conditions</span> of Reevan.
            </label>
          </div>

          <button className="w-full mt-6 bg-[#FF5722] text-white py-3 rounded-full font-semibold hover:bg-[#e64a19] transition-all">
            Send your inquiry →
          </button>

          <p className="mt-3 text-sm text-center text-gray-500 flex items-center justify-center gap-2">
            <FiCheck className="text-gray-400" />
            We hate spam, and we respect your privacy.
          </p>

          {/* Bottom icons */}
          <div className="flex justify-between mt-10 text-center">
            <div>
              <Image src="/best-price.png" width={40} height={40} alt="Best Price" />
              <p className="mt-1 text-sm font-medium text-gray-700">Best Price</p>
            </div>
            <div>
              <Image src="/quality-service.png" width={40} height={40} alt="Quality Service" />
              <p className="mt-1 text-sm font-medium text-gray-700">Quality Service</p>
            </div>
            <div>
              <Image src="/good-support.png" width={40} height={40} alt="Good Support" />
              <p className="mt-1 text-sm font-medium text-gray-700">Good Support</p>
            </div>
            <div>
              <Image src="/satisfaction.png" width={40} height={40} alt="Satisfaction" />
              <p className="mt-1 text-sm font-medium text-gray-700">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right - Contact Info */}
        <div className="text-gray-800 space-y-10">
          {/* Get in Touch */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in touch</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2"><FaPhoneAlt /> +91 123 456 7890</p>
              <p className="flex items-center gap-2"><FaWhatsapp /> +91 112 3345 5688</p>
              <p className="flex items-center gap-2 underline"><FaEnvelope /> reevan@abc.com</p>
              <p className="flex items-center gap-2 underline"><FaSkype /> reevan.skype</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Come meet us</h3>
            <p className="flex items-start gap-2 text-sm">
              <FaMapMarkerAlt className="mt-1" />
              Tom Extension, 1st Block 2nd Cross,<br />
              Yello round circle, Jaipur, Rajasthan 123456
            </p>
            <p className="flex items-center gap-2 underline mt-2 text-sm"><FaDirections /> Get Directions</p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow us</h3>
            <div className="flex items-center gap-4 text-xl text-gray-700">
              <BsInstagram />
              <BsFacebook />
              <BsTwitter />
              <BsYoutube />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
