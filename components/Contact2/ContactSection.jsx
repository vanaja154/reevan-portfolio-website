"use client";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaSkype,
  FaMapMarkerAlt,
  FaDirections,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPiggyBank,
  FaMedal,
  FaHeadset,
  FaThumbsUp,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-[#fdf5f4] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Form */}
        <div className="bg-white rounded-2xl p-10 shadow-sm w-full">
          <h3 className="text-lg font-semibold mb-6 text-center">
            Please fill in the form below or mail us your requirements :)
          </h3>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border-b border-gray-300 focus:outline-none p-2 w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border-b border-gray-300 focus:outline-none p-2 w-full"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="border-b border-gray-300 focus:outline-none p-2 w-full"
              />
              <input
                type="text"
                placeholder="Skype"
                className="border-b border-gray-300 focus:outline-none p-2 w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border-b border-gray-300 focus:outline-none p-2 w-full"
              />
              <select className="border-b border-gray-300 focus:outline-none p-2 w-full">
                <option>Interested in</option>
                <option>Web Design</option>
                <option>Graphic Design</option>
                <option>App Development</option>
                <option>Digital Marketing</option>
                <option>Business Development</option>
                <option>Others</option>
              </select>
            </div>
            <textarea
              placeholder="Message"
              rows="3"
              className="border-b border-gray-300 focus:outline-none p-2 w-full"
            ></textarea>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange-500" />
              <p className="text-sm text-gray-600">
                I agree to the Terms & Conditions of Reevan.
              </p>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white px-10 py-3 rounded-full font-medium hover:bg-orange-600 transition w-full"
            >
              Send your inquiry →
            </button>

            <p className="text-xs text-gray-500 mt-2 text-center">
              We hate spam, and we respect your privacy.
            </p>
          </form>

          {/* We Deliver Icons */}
          <div className="grid grid-cols-4 gap-6 mt-8 text-center">
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

        {/* Right: Contact Info */}
        <div className="space-y-8 bg-white rounded-2xl p-10 shadow-sm w-full">
          {/* Get in touch */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> {" "}
                <span className="border-b border-orange-500">
                  +91 123 456 7890
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp /> {" "}
                <span className="border-b border-orange-500">
                  +91 112 3345 5688
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />{" "}
                <span className="border-b border-orange-500">
                  reevan@abc.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaSkype />{" "}
                <span className="border-b border-orange-500">reevan.skype</span>
              </li>
            </ul>
          </div>

          {/* Come meet us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Come meet us</h3>
            <p className="text-sm flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur,
              Rajasthan 123456
            </p>
            <p className="text-sm flex items-center gap-2 mt-2 w-fit cursor-pointer">
              <FaDirections />
              {" "}
              <span className="border-b border-orange-500">Get Directions</span>

            </p>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow us</h3>
            <div className="flex gap-4 text-gray-700">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-orange-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-orange-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-orange-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-orange-500 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
