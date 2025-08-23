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

export default function WebsiteHero() {
  const headingLines = [
    "We build a unique website",
    "to convert visitors into customers",
  ];

  const paragraphLines = [
    "Hire website developers from us to establish a strong online presence",
    "that will concrete your path toward success.",
  ];

  return (
    <section className="bg-[#fff4f2] lg:mt-16 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between py-16">

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
            className="text-orange-500 font-semibold mb-3"
          >
            INDIA'S HIGHEST RATED WEB DEVELOPMENT COMPANY
          </motion.p>

          {/* Heading Lines */}
          <div className="mb-4">
            {headingLines.map((line, index) => (
              <motion.h1
                key={index}
                variants={item}
                className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Paragraph Lines */}
          <div className="mb-6 max-w-lg">
            {paragraphLines.map((line, index) => (
              <motion.p
                key={index}
                variants={item}
                className="text-gray-600"
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
              Let’s discuss →
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <Image
            src="/images/Servicesdetails/web.svg"
            alt="Web Development Illustration"
            width={600}
            height={600}
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
