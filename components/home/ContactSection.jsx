"use client";

import HighlightedText from "@/utils/HighlightedText";
import {
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
export default function ContactSection() {
  return (
    <section className="py-16 bg-[#fff1e6] text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <p className="text-orange-500 font-semibold mb-2">INQUIRY</p>
            <h2 className="text-4xl font-bold mb-8">
              Let’s Get in <HighlightedText textColor="#1d1b6b" underlineColor="bg-orange-300">Touch</HighlightedText>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="font-medium mb-1">Mobile Number</p>
                <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-sm gap-2">
                  <Phone className="text-orange-500" size={20} />
                  <span>+91 123 4567 890</span>
                </div>
              </div>

              <div>
                <p className="font-medium mb-1">WhatsApp Number</p>
                <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-sm gap-2">
                  <Phone className="text-orange-500" size={20} />
                  <span>+91 123 4567 890</span>
                </div>
              </div>
              <div>
                <p className="font-medium mb-1">Business Email</p>
                <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-sm gap-2">
                  <Mail className="text-orange-500" size={20} />
                  <span>reevan@abc.com</span>
                </div>
              </div>
              <div>
                <p className="font-medium mb-1">Connect on Skype</p>
                <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-sm gap-2">
                  <MessageCircle className="text-orange-500" size={20} />
                  <span>reevan.company</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-medium mb-2">Our Location</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.672396186447!2d75.78966767547863!3d26.85860426169921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4f25c9ef849%3A0x9b7f8b134e71a48!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">
              Share your idea or <br /> requirement.
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-b border-gray-400 py-2 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border-b border-gray-400 py-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="border-b border-gray-400 py-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Skype"
                  className="border-b border-gray-400 py-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border-b border-gray-400 py-2 focus:outline-none md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Interested in"
                  className="border-b border-gray-400 py-2 focus:outline-none md:col-span-2"
                />
              </div>

              <textarea
                placeholder="Message"
                className="border-b border-gray-400 py-2 focus:outline-none w-full"
                rows="4"
              ></textarea>

              <div className="flex items-center space-x-2 text-sm">
                <input type="checkbox" id="terms" className="accent-orange-500" />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <span className="text-orange-500 font-medium">
                    Terms & Conditions
                  </span>{" "}
                  of Reevan.
                </label>
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
              >
                Send your inquiry →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
