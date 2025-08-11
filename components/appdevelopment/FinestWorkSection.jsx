"use client";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const sampleData = [
  {
    title: "Furniture Ios app kit design development",
    desc: "UX, UI, Graphic Design",
    img: "/images/portfolio-1.jpg",
  },
  {
    title: "Creative and minimal clothing label design",
    desc: "UX, UI, Graphic Design",
    img: "/images/portfolio-1.jpg",
  },
  {
    title: "Creative business card design service",
    desc: "UX, UI, Graphic Design",
    img: "/images/portfolio-1.jpg",
  },
  {
    title: "Furniture Ios app kit design development",
    desc: "UX, UI, Graphic Design",
    img: "/images/portfolio-1.jpg",
  },
  {
    title: "Another creative card",
    desc: "UX, UI, Graphic Design",
    img: "/images/portfolio-1.jpg",
  },
  {
    title: "Another creative card",
    desc: "UX, UI, Graphic Design",
    img: "/images/portfolio-1.jpg",
  },
  {
    title: "Another creative card",
    desc: "UX, UI, Graphic Design",
    img: "/images/portfolio-1.jpg",
  },
  {
    title: "Another creative card",
    desc: "UX, UI, Graphic Design",
    img: "/images/portfolio-1.jpg",
  },
  {
    title: "Another creative card",
    desc: "UX, UI, Graphic Design",
    img: "/images/portfolio-1.jpg",
  },
];

export default function FinestWorkSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#452650] text-white py-16 relative">
      <div className="text-center mb-10">
        <p className="text-sm text-[#ff5b2e] font-medium">QUALITY WORK</p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Some of our <span className="font-bold">Finest</span> Work
        </h2>
      </div>

      {/* Arrow buttons */}
      <button
        className="absolute left-4 top-[60%] transform -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow"
        onClick={scrollLeft}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-4 top-[60%] transform -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow"
        onClick={scrollRight}
      >
        <FaArrowRight />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap px-4 flex gap-6 scroll-smooth no-scrollbar"
      >
        {sampleData.map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-[280px] bg-white text-black rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={300}
              height={200}
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
              <h3 className="text-base font-semibold line-clamp-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
