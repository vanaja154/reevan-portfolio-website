"use client";
import { useState } from "react";
import { Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    title: "HOME",
    type: "mega",
    ctaTitle: "We Will Shape Your Brand With Our Digital Solutions",
    sections: [
      {
        title: "Multi-Page Demo",
        links: [
          { title: "App Development", url: "/app-development" },
          { title: "Creative Agency", url: "/creative-agency" },
          { title: "Digital Agency", url: "/digital-agency" },
          { title: "Graphic Design", url: "/graphic-design" },
          { title: "Lead Generation", url: "/lead-generation" },
          { title: "Personal Portfolio", url: "/" },
          { title: "Web Design", url: "/web-design" }
        ]
      },
      {
        title: "One-Page Demo",
        links: [
          { title: "App Development", url: "/app-development" },
          { title: "Creative Agency", url: "/creative-agency" },
          { title: "Digital Agency", url: "/digital-agency" },
          { title: "Graphic Design", url: "/graphic-design" },
          { title: "Lead Generation", url: "/lead-generation" },
          { title: "Personal Portfolio", url: "/" },
          { title: "Web Design", url: "/web-design" }
        ]
      },
      {
        title: "Coming Soon Demo",
        links: [
          { title: "Corporate Business", url: "/" },
          { title: "Product Landing Page", url: "/" },
          { title: "Photography", url: "/" },
          { title: "Domain & Hosting", url: "/" },
          { title: "E-commerce", url: "/" },
          { title: "Business Development", url: "/" }
        ]
      }
    ]
  },
  {
    title: "PAGES",
    type: "pages",
    ctaTitle: "Creative, Premium & Scalable Solutions For App and Web Development",
    links: [
      { title: "About Us", url: "/about" },
      { title: "Career", url: "/career" },
      { title: "Case Study", url: "/casestudy" },
      { title: "Case Study Details", url: "/casestudydetails" },
      { title: "Our Core Values", url: "/ourcore" },
      { title: "Contact Us", url: "/contact" },
      { title: "Contact Us-2", url: "/contact2" },
      { title: "Our Team", url: "/ourteam" },
      { title: "Our Team-2", url: "/ourteam2" },
      { title: "Pricing", url: "/pricing" },
      { title: "Pricing-2", url: "/pricing2" },
      { title: "Service", url: "/services" },
      { title: "Service-2", url: "/service2" },
      { title: "Service Details", url: "/servicedetails" },
      { title: "Service Details-2", url: "/servicedetails2" },
      { title: "Why Choose Us", url: "/why-choose-us" }
    ]
  },
  {
    title: "PORTFOLIO",
    type: "list",
    links: [
      { title: "Portfolio Modern", url: "/portfolio-modern" },
      { title: "Portfolio 3 Grid", url: "/portfolio-2" },
      { title: "Portfolio 4 Grid", url: "/portfolio-2" },
      { title: "Portfolio Details", url: "/portfolio-details" },
      { title: "Portfolio Details - 2", url: "/portfolio-details-2" }
    ]
  },
  {
    title: "BLOGS",
    type: "list",
    links: [
      { title: "Blog Page", url: "/blog" },
      { title: "Blog Details", url: "/blogdetails" }
    ]
  },
  {
    title: "CONTACT US",
    type: "list",
    links: [
      { title: "Contact Us", url: "/contact" },
      { title: "Contact Us - 2", url: "/contact2" }
    ]
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuStack, setMenuStack] = useState([]); // For nested mobile menu

  const getCurrentMenu = () => {
    if (menuStack.length === 0) return navItems;
    return menuStack[menuStack.length - 1];
  };

  const goDeeper = (submenu) => {
    setMenuStack((prev) => [...prev, submenu]);
  };

  const goBack = () => {
    setMenuStack((prev) => prev.slice(0, -1));
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                className={`uppercase flex items-center cursor-pointer ${hoveredIndex === index ? "text-orange-600" : "text-black"}`}
              >
                {item.title}
                <span className="ml-1 text-orange-600 text-xl leading-none">·</span>
              </span>

              {/* Dropdown */}
              {hoveredIndex === index && (
                <div
                  className={`absolute top-full ${item.title === "HOME"
                    ? "left-[-500px] w-[1200px]"
                    : item.title === "PAGES"
                      ? "left-[-600px] w-[1200px]"
                      : "left-0"
                    }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <DropdownMenu item={item} />
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Request Quote */}
        <div className="hidden md:block">
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-50">
            Request Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex items-center bg-orange-600 justify-between">
          {menuStack.length > 0 ? (
            <button onClick={goBack} className="text-white">
              <ChevronLeft size={24} />
            </button>
          ) : (
            <span className="font-bold text-white text-2xl">Reevan Menu</span>
          )}
          <button onClick={() => { setMobileMenuOpen(false); setMenuStack([]); }} className="text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
          {/* Main or Sub Menu Items */}
          {Array.isArray(getCurrentMenu()) ? (
            // Top-level menu
            getCurrentMenu().map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2 border-b cursor-pointer"
                onClick={() => {
                  if (item.type === "mega") {
                    goDeeper(item.sections);
                  } else if (item.links && !item.url) {
                    goDeeper(item.links);
                  } else if (item.url) {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                {item.url ? (
                  <Link href={item.url} className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    {item.title}
                  </Link>
                ) : (
                  <span>{item.title}</span>
                )}
                {!item.url && <ChevronRight size={18} />}
              </div>
            ))
          ) : Array.isArray(getCurrentMenu()[0]?.links) ? (
            // Sections of mega menu
            getCurrentMenu().map((sec, si) => (
              <div
                key={si}
                className="flex items-center justify-between py-2 border-b cursor-pointer"
                onClick={() => {
                  if (sec.links && sec.links.length > 0) {
                    goDeeper(sec.links);
                  }
                }}
              >
                <span>{sec.title}</span>
                <ChevronRight size={18} />
              </div>
            ))
          ) : (
            // Final list of links
            getCurrentMenu().map((link, li) => (
              <Link
                key={li}
                href={link.url}
                className="block py-2 border-b text-gray-700 hover:text-orange-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))
          )}
        </div>
      </div>
    </header>
  );
}

function DropdownMenu({ item }) {
  if (item.type === "mega") {
    return (
      <div className="bg-white lg:pl-0 shadow-lg border-t border-orange-600 lg:mt-7" style={{ minWidth: "110vw" }}>
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-8 gap-8 border-b border-gray-100">
          <div className="col-span-2">
            <p className="text-sm text-gray-500">Need a Website?</p>
            <h3 className="text-2xl font-extrabold">{item.ctaTitle}</h3>
            <button className="mt-6 px-6 py-2 border border-orange-600 text-orange-600 rounded-full hover:bg-orange-50">
              Request Quote →
            </button>
          </div>
          <div className="col-span-6 flex gap-20">
            {item.sections.map((sec, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-orange-600 border-b-2 border-orange-600 mb-4">
                  {sec.title}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {sec.links.map((link, li) => (
                    <li key={li}>
                      <Link href={link.url} className="hover:text-orange-600">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <BottomBar />
      </div>
    );
  }

  if (item.type === "pages") {
    const chunkSize = Math.ceil(item.links.length / 4);
    const cols = [];
    for (let i = 0; i < item.links.length; i += chunkSize) {
      cols.push(item.links.slice(i, i + chunkSize));
    }

    return (
      <div className="bg-white shadow-lg border-t border-orange-600 lg:mt-7" style={{ minWidth: "110vw" }}>
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-8 gap-8 border-b border-gray-100">
          <div className="col-span-2">
            <p className="text-sm text-gray-500">Need a Website?</p>
            <h3 className="text-2xl font-extrabold">{item.ctaTitle}</h3>
            <button className="mt-6 px-6 py-2 border border-orange-600 text-orange-600 rounded-full hover:bg-orange-50">
              Request Quote →
            </button>
          </div>
          <div className="col-span-6 grid grid-cols-4 gap-6">
            {cols.map((col, ci) => (
              <ul key={ci} className="space-y-2 text-gray-700">
                {col.map((link, li) => (
                  <li key={li}>
                    <Link href={link.url} className="hover:text-orange-600">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <BottomBar />
      </div>
    );
  }

  if (item.type === "list") {
    return (
      <div className="lg:mt-7 bg-white shadow-lg border-t border-orange-600 rounded-lg min-w-[200px]">
        <ul className="py-2 text-gray-700">
          {item.links.map((link, li) => (
            <li key={li}>
              <Link href={link.url} className="block px-4 py-2 hover:bg-orange-50 cursor-pointer">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function BottomBar() {
  const contacts = [
    { text: "reevan@abcd.com" },
    { text: "+91 123 456 7890" },
    { text: "+91 123 456 7890" },
    { text: "Reevan.Skype" },
    { text: "Why Choose Us" }
  ];
  return (
    <div className="w-full bg-orange-50 px-8 py-4 flex max-w-7xl mx-auto justify-between text-gray-900">
      {contacts.map((c, i) => (
        <div key={i} className="flex items-center space-x-2">
          <div className="rounded-full bg-white p-2 shadow-md"></div>
          <span>{c.text}</span>
        </div>
      ))}
    </div>
  );
}
