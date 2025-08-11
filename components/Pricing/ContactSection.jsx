// components/ContactSection.jsx
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 h-full">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-orange-500 font-semibold uppercase tracking-wide mb-3">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Have a <span className="bg-orange-200 px-1">project</span> in mind? Let's get to chat.
          </h2>

          {/* Buttons */}
          <div className="flex gap-5 mt-8">
            <a
              href="#"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-200"
            >
              <FaPhoneAlt /> Contact
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-200"
            >
              <FaWhatsapp /> Whatsapp
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-12 md:mt-0">
          <img
            src="/images/Pricing/team-support.svg"
            alt="Contact Illustration"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
}
