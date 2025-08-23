"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PortfolioDetailsHero() {
  const headingLines = ["Furniture iOS app kit developed"];
  const paragraphLines = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content with Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Small Title */}
          <motion.div
            className="flex items-center gap-2 text-orange-500 font-medium uppercase tracking-wide text-sm mb-3"
            variants={item}
          >
            <Briefcase size={18} />
            <span>Portfolio Details</span>
          </motion.div>

          {/* Heading */}
          <div>
            {headingLines.map((line, idx) => (
              <motion.h2
                key={idx}
                variants={item}
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug"
              >
                {line}
              </motion.h2>
            ))}
          </div>

          {/* Paragraph */}
          <div className="mt-4">
            {paragraphLines.map((line, idx) => (
              <motion.p
                key={idx}
                variants={item}
                className="text-gray-600 mb-6"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Link */}
          <motion.a
            href="#"
            variants={item}
            className="text-gray-900 font-medium flex items-center gap-2 hover:text-orange-500 transition cursor-pointer"
          >
            Go to App Store →
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/Portfolio/port-details.png" 
            alt="Furniture iOS App Kit"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
