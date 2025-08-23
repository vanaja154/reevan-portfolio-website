'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const resultsData = [
  {
    value: 220,
    suffix: "%",
    bg: "bg-[#e8e9ff]",
    textColor: "text-[#5555a5]",
    icon: "/images/casestudydetails/sales-funnel.svg",
    title: "Organic search drives 51% of all web traffic and 40% of revenue",
  },
  {
    value: 150,
    suffix: "%",
    bg: "bg-[#ffece6]",
    textColor: "text-[#ff5a2c]",
    icon: "/images/casestudydetails/financial-profit.svg",
    title: "Organic search drives 51% of all web traffic and 40% of revenue",
  },
  {
    value: 200,
    suffix: "%",
    bg: "bg-[#fff6da]",
    textColor: "text-[#a18b00]",
    icon: "/images/casestudydetails/bar-graph.svg",
    title: "Organic search drives 51% of all web traffic and 40% of revenue",
  },
  {
    value: 300,
    suffix: "%",
    bg: "bg-[#ffe0e0]",
    textColor: "text-[#ff3b3b]",
    icon: "/images/casestudydetails/promotion.svg",
    title: "Organic search drives 51% of all web traffic and 40% of revenue",
  },
];

export default function Result() {
  const [counts, setCounts] = useState(resultsData.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 } // triggers when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [started]);

  useEffect(() => {
    if (started) {
      resultsData.forEach((item, index) => {
        let start = 0;
        const end = item.value;
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start += 1;
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = start;
            return newCounts;
          });
          if (start === end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 flex justify-center"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          The Results
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Wrapper to center the grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {resultsData.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-xl p-6 text-left`}
            >
              <Image
                src={item.icon}
                alt="Result Icon"
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                {counts[index]}
                {item.suffix}
              </h3>
              <p className={item.textColor}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
