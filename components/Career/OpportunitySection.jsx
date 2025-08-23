"use client";

import Image from "next/image";
import Link from "next/link";
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

export default function OpportunitySection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mt-10 lg:mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">

        {/* Left Side - Text with Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Title Row */}
          <motion.div
            className="flex items-center gap-2 mb-4"
            variants={item}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7v10M4 7l8 5 8-5M20 7v10M4 17l8-5 8 5"
              />
            </svg>
            <span className="text-orange-500 font-medium tracking-wide">
              CAREER
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={item}
            className="text-4xl font-extrabold text-gray-900 leading-snug mb-4"
          >
            Opportunities don't happen,{" "}
            <span className="text-gray-900">you create them.</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={item}
            className="text-gray-600 mb-6"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
            et magnis.
          </motion.p>

          {/* Button */}
          <Link href="/contact">
            <motion.button
              variants={item}
              className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300 cursor-pointer"
            >
              Join Our Team <span>→</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/interview.jpg"
            alt="Interview discussion"
            width={550}
            height={380}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
