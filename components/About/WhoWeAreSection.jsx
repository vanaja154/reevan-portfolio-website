"use client";

import Image from "next/image";
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

export default function WhoWeAreSection() {
  const headingLines = [
    "We are a creative",
    "digital agency based in India.",
  ];

  const paragraphLines = [
    "We are a team of top talent delivering enterprise solutions globally. We evolve with the advancement in technology because we believe in making our technology as your innovation.",
    "Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development. We stay updated with the technology to build innovative digital products that meet client requirements across multiple business verticals and domains by housing some of the best professionals in the industry.",
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 mt-10 lg:mt-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Section with Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Small Title */}
          <motion.div
            className="flex items-center gap-2 mb-4"
            variants={item}
          >
            <span className="uppercase tracking-wider font-semibold text-orange-500 text-sm">
              Who We Are
            </span>
          </motion.div>

          {/* Heading Lines */}
          <div className="mb-4">
            {headingLines.map((line, idx) => (
              <motion.h2
                key={idx}
                variants={item}
                className="text-4xl font-extrabold text-gray-900 leading-snug"
              >
                {line.includes("creative") ? (
                  <>
                    We are a{" "}
                    <span className="relative">
                      <span className="relative z-10">creative</span>
                      <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-200 -z-10"></span>
                    </span>{" "}
                    digital agency based in India.
                  </>
                ) : (
                  line
                )}
              </motion.h2>
            ))}
          </div>

          {/* Paragraph Lines */}
          <div>
            {paragraphLines.map((line, idx) => (
              <motion.p
                key={idx}
                variants={item}
                className={`text-gray-600 leading-relaxed ${idx === 0 ? "mt-6" : "mt-4"}`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/building-mockup.jpg"
            alt="Reevan Company Building"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
