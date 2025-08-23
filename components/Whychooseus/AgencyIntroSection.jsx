"use client";

import Image from "next/image";
import Link from "next/link";
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

export default function AgencyIntroSection() {
  const headingLines = [
    "We are a creative digital agency",
    "based in India.",
  ];

  const paragraphLines = [
    "We are a team of top talent delivering enterprise solutions globally.",
    "Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions, and cloud development.",
    "We stay updated with technology to build innovative digital products that meet client requirements across multiple business verticals."
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">

        {/* Left Content with Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1"
        >
          {/* Small Title */}
          <motion.p
            variants={item}
            className="text-orange-500 font-semibold uppercase tracking-wide mb-4"
          >
            WHY US
          </motion.p>

          {/* Heading Lines */}
          <div className="mb-6">
            {headingLines.map((line, index) => (
              <motion.h2
                key={index}
                variants={item}
                className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
              >
                {line}
              </motion.h2>
            ))}
          </div>

          {/* Paragraph Lines */}
          <div className="mb-6 text-gray-600 leading-relaxed">
            {paragraphLines.map((line, index) => (
              <motion.p
                key={index}
                variants={item}
                className="mb-4"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Button */}
          <Link href="/contact" passHref>
            <motion.button
              variants={item}
              className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              Request Quote →
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Whychooseus/business-plan-office.jpg"
              width={400}
              height={300}
              alt="Team High Five"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
