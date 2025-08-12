"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SelectedWork() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToBox = (index) => {
    const container = containerRef.current;
    if (!container) return;
    const box = container.children[index];
    if (box) {
      box.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) scrollToBox(currentIndex - 1);
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;
    if (currentIndex < container.children.length - 1) {
      scrollToBox(currentIndex + 1);
    }
  };

  const cards = [
    { img: "/images/Design/book.jpg", title: "Project Alpha", desc: "Creative branding design for startup." },
    { img: "/images/Design/card.jpg", title: "E-Commerce UI", desc: "Modern e-commerce interface design." },
    { img: "/images/Design/book.jpg", title: "Portfolio Website", desc: "Personal portfolio for designer." },
    { img: "/images/Design/card.jpg", title: "Business Dashboard", desc: "Clean dashboard for analytics." },
    { img: "/images/Design/book.jpg", title: "Mobile App UI", desc: "User-friendly mobile UI layout." },
  ];

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-[#F6F3EB]">
      {/* Heading */}
      <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold text-[#151515] mb-8">
        Our Selected Work
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-hidden scroll-smooth"
        >
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="shrink-0 bg-white rounded-lg shadow-md w-[85%] sm:w-[48%] md:w-[32%] lg:w-[30%]"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-t-lg object-cover w-full h-[200px] sm:h-[220px] md:h-[250px]"
              />
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
