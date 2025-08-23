"use client";

import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#30303c] text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Info */}
          <div>
            <img src="/images/footer-logo.png" alt="Logo" className="h-8 mb-4" />
            <p className="text-[15px] mb-1">
              Overall client rating is 4.9 out of 5
            </p>
            <p className="text-[15px] mb-4">8,500 Clients for Reevan</p>

            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-orange-500">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#"
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Our Brochure →
            </a>
          </div>

          {/* Inquiry */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Work Inquiry</h3>
            <ul className="space-y-2 text-[15px]">
              <li className="flex items-center">
                <span className="mr-2">📞</span> +91 123 4567 890
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span> +91 123 4567 890
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span> career@reevan.com
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span> info@reevan.com
              </li>
              <li className="flex items-center">
                <span className="mr-2">💬</span> reevan-skype
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-[15px]">
              <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
              <li><a href="/portfolio-2" className="hover:text-orange-500">Portfolio</a></li>
              <li><a href="/blog" className="hover:text-orange-500">Blog</a></li>
              <li><a href="/contact" className="hover:text-orange-500">Contact Us</a></li>
              <li><a href="/portfolio-details-2" className="hover:text-orange-500">Faqs</a></li>
              {/* <li><a href="#" className="hover:text-orange-500">Privacy & Policy</a></li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-[15px]">
              {/* <li><a href="#" className="hover:text-orange-500">Hire Dedicated Developers</a></li> */}
              <li><a href="/app-development" className="hover:text-orange-500">Web App Development</a></li>
              <li><a href="/web-design" className="hover:text-orange-500">Web Desing</a></li>
              <li><a href="/lead-generation" className="hover:text-orange-500">Lead Generation</a></li>
              <li><a href="/servicesdetails2" className="hover:text-orange-500">Mobile App Development</a></li>
              {/* <li><a href="#" className="hover:text-orange-500">Social Media Marketing</a></li> */}
            </ul>
          </div>

          {/* Industries */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-[15px]">
              <li><a href="#" className="hover:text-orange-500">Healthcare</a></li>
              <li><a href="#" className="hover:text-orange-500">Education</a></li>
              <li><a href="#" className="hover:text-orange-500">Retail</a></li>
              <li><a href="#" className="hover:text-orange-500">Logistics</a></li>
              <li><a href="#" className="hover:text-orange-500">Oil & Gas</a></li>
              <li><a href="#" className="hover:text-orange-500">Music & Video</a></li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-sm text-gray-400 text-center space-y-2">
          <p>We are tracking any intention of piracy.</p>
          <p>Copyright © 2025 Reevan. All rights reserved. Template By Rajesh Doot</p>
        </div>
      </div>
    </footer>
  );
}
