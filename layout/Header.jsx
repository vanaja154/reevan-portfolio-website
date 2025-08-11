"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    title: "HOME",
    dropdown: [
      {
        title: "Multi-Page Demo",
        links: [
          { title: "App Development", url: "/app-development" },
          { title: "Creative Agency", url: "/creative-agency" },
          { title: "Digital Agency", url: "/digital-agency" },
          { title: "Graphic Design", url: "/graphic-design" },
          { title: "Lead Generation", url: "/lead-generation" },
          { title: "Personal Portfolio", url: "/personal-portfolio" },
          { title: "Web Design", url: "/web-design" },
        ],
      },
      {
        title: "One-Page Demo",
        links: [
          { title: "App Development", url: "/app-development-one" },
          { title: "Creative Agency", url: "/creative-agency-one" },
          { title: "Digital Agency", url: "/digital-agency-one" },
          { title: "Graphic Design", url: "/graphic-design-one" },
          { title: "Lead Generation", url: "/lead-generation-one" },
          { title: "Personal Portfolio", url: "/personal-portfolio-one" },
          { title: "Web Design", url: "/web-design-one" },
        ],
      },
      {
        title: "Coming Soon Demo",
        links: [
          { title: "Corporate Business", url: "/corporate-business" },
          { title: "Product Landing Page", url: "/product-landing" },
          { title: "Photography", url: "/photography" },
          { title: "Domain & Hosting", url: "/domain-hosting" },
          { title: "E-commerce", url: "/e-commerce" },
          { title: "Business Development", url: "/business-development" },
        ],
      },
    ],
  },
  {
    title: "PAGES",
    dropdown: [
      {
        title: "",
        links: [
          { title: "About Us", url: "/about-us" },
          { title: "About Us - 2", url: "/about-us-2" },
          { title: "Career", url: "/career" },
          { title: "Career - 2", url: "/career-2" },
          { title: "Case Study", url: "/case-study" },
        ],
      },
      {
        title: "",
        links: [
          { title: "Case Study Details", url: "/case-study-details" },
          { title: "Our Core Values", url: "/core-values" },
          { title: "Contact Us", url: "/contact-us" },
          { title: "Contact Us - 2", url: "/contact-us-2" },
          { title: "Our Team", url: "/our-team" },
        ],
      },
      {
        title: "",
        links: [
          { title: "Our Team - 2", url: "/our-team-2" },
          { title: "Pricing", url: "/pricing" },
          { title: "Pricing - 2", url: "/pricing-2" },
          { title: "Service", url: "/service" },
          { title: "Service - 2", url: "/service-2" },
          { title: "Service Details", url: "/service-details" },
          { title: "Service Details - 2", url: "/service-details-2" },
          { title: "Why Choose Us", url: "/why-choose-us" },
        ],
      },
    ],
  },
  {
    title: "PORTFOLIO",
    dropdown: [
      {
        title: "",
        links: [
          { title: "Portfolio Modern", url: "/portfolio-modern" },
          { title: "Portfolio 3 Grid", url: "/portfolio-3-grid" },
          { title: "Portfolio 4 Grid", url: "/portfolio-4-grid" },
          { title: "Portfolio Details", url: "/portfolio-details" },
          { title: "Portfolio Details - 2", url: "/portfolio-details-2" },
        ],
      },
    ],
  },
  {
    title: "BLOGS",
    dropdown: [
      {
        title: "",
        links: [
          { title: "Blog Page", url: "/blog-page" },
          { title: "Blog Details", url: "/blog-details" },
        ],
      },
    ],
  },
  {
    title: "CONTACT US",
    dropdown: [
      {
        title: "",
        links: [
          { title: "Contact Us", url: "/contact-us" },
          { title: "Contact Us - 2", url: "/contact-us-2" },
        ],
      },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDesktopClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="bg-[#ffffff99] shadow-sm fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative cursor-pointer">
              {/* Main link */}
              <div
                onClick={() => handleDesktopClick(index)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-orange-500"
              >
                <span>{item.title}</span>
                <span className="text-orange-500 text-[20px] leading-none">•</span>
              </div>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded p-6 flex space-x-8 z-50">
                  {item.dropdown.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {section.title && (
                        <h4 className="text-orange-500 text-base font-bold mb-2">
                          {section.title}
                        </h4>
                      )}
                      {section.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="block text-sm text-gray-700 hover:text-orange-500 transition py-1"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Request Quote Button */}
        <div className="hidden md:block">
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
            Request Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <div key={index} className="space-y-2">
              <div
                className="flex items-center justify-between text-sm font-medium text-gray-900 cursor-pointer"
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
              >
                <div className="flex items-center space-x-1">
                  <span>{item.title}</span>
                  <span className="text-orange-500 text-[10px] leading-none">•</span>
                </div>
              </div>

              {item.dropdown && activeDropdown === index && (
                <div className="pl-4 space-y-3">
                  {item.dropdown.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {section.title && (
                        <h4 className="text-orange-500 text-base font-bold mb-2">
                          {section.title}
                        </h4>
                      )}
                      {section.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="block text-sm text-gray-700 hover:text-orange-500 transition py-1"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button className="w-full border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
            Request Quote
          </button>
        </div>
      )}
    </header>
  );
}
