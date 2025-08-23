// components/PricingSection.js
"use client";

import { FaDollarSign } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
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

export default function PricingSection() {
  // Split into lines so you can animate each separately
  const headingLines = [
    "Looking for our Services",
    "Standard Pricing?",
  ];

  const paragraphLines = [
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aenean commodo ligula eget dolor. Aenean massa.",
    "Cum sociis natoque penatibus et magnis.",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 mt-10 lg:mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        
        {/* Left Content with Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1"
        >
          {/* Small Title */}
          <motion.div variants={item} className="flex items-center space-x-2 mb-4">
            <FaDollarSign className="text-orange-500" />
            <span className="text-orange-500 font-medium tracking-wide uppercase">
              Our Pricing
            </span>
          </motion.div>

          {/* Animated Heading */}
          <div className="leading-snug mb-6">
            {headingLines.map((line, i) => (
              <motion.h2
                key={i}
                variants={item}
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                {line}
              </motion.h2>
            ))}
          </div>

          {/* Animated Paragraph */}
          <div className="text-gray-600 mb-6 max-w-lg">
            {paragraphLines.map((line, i) => (
              <motion.p key={i} variants={item} className="mt-1">
                {line}
              </motion.p>
            ))}
          </div>

          {/* Link */}
          <motion.a
            variants={item}
            href="#"
            className="inline-flex items-center text-gray-800 font-medium hover:underline"
          >
            Talk to our Experts <span className="ml-2">→</span>
          </motion.a>
        </motion.div>

        {/* Right Image (static) */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Pricing/hr-girl.jpg"
            alt="Customer Support"
            className="rounded-2xl shadow-lg w-[28rem] md:w-[36rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
