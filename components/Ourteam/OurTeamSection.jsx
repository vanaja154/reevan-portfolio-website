// components/OurTeamSection.jsx
"use client";

import Image from "next/image";
import { FaUsers } from "react-icons/fa";
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

export default function OurTeamSection() {
  const headingLines = [
    "Teamwork is the ability to work together",
    "toward a common vision",
  ];

  const paragraphLines = [
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    "Aenean massa. Cum sociis natoque penatibus et magnis.",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:mt-10 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content — line-by-line animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-4"
        >
          <motion.div variants={item} className="flex items-center gap-2 mb-2">
            <FaUsers className="text-orange-500 text-xl" />
            <span className="text-orange-500 font-medium uppercase tracking-wide">
              Our Team
            </span>
          </motion.div>

          <div className="leading-snug">
            {headingLines.map((line, i) => (
              <motion.h2
                key={i}
                variants={item}
                className={`text-4xl font-extrabold text-gray-900 ${i === 0 ? "" : "mt-1"}`}
              >
                {line}
              </motion.h2>
            ))}
          </div>

          <div className="text-gray-600">
            {paragraphLines.map((line, i) => (
              <motion.p key={i} variants={item} className={`${i === 0 ? "mt-2" : "mt-1"}`}>
                {line}
              </motion.p>
            ))}
          </div>

          <motion.a
            variants={item}
            href="#"
            className="inline-flex items-center text-gray-800 font-medium hover:underline pt-2"
          >
            Join Our Team →
          </motion.a>
        </motion.div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Ourteam/team.jpg"
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
