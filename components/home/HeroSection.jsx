"use client";
import Link from "next/link";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <section className="bg-[#ffeaea] mt-10 py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Content (line-by-line) */}
        <motion.div
          className="md:w-1/3 text-center md:text-left"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span
            variants={item}
            className="inline-block bg-white text-orange-500 px-4 py-1 rounded-full text-sm mb-4"
          >
            Hello, I&apos;m
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
          >
            Emily Olivia
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-lg font-semibold text-gray-800 mb-4"
          >
            UI/UX and Graphic Designer
          </motion.h2>

          <motion.p variants={item} className="text-gray-600 mb-6">
            Senior Graphic and UI/UX Designer. I help global brands with digital
            products on web, mobile, and connected platforms.
          </motion.p>

          <Link href="/contact" passHref>
            <motion.button
              variants={item}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Hire Me →
            </motion.button>
          </Link>
        </motion.div>

        {/* Center Image (fade + subtle scale) */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="images/freelancer.png"
            alt="Emily Olivia"
            className="max-w-full h-auto"
          />
        </motion.div>

        {/* Right Info Cards (staggered) */}
        <motion.div
          className="md:w-1/3 space-y-20 pl-8"
          variants={cardsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1 */}
          <motion.div variants={cardItem} className="flex items-center gap-6">
            <div className="bg-white rounded-full p-4 shadow-md">
              <img
                src="/images/briefcase.png"
                alt="Experience"
                className="h-10 w-10"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">08+</h3>
              <p className="text-gray-600 text-sm leading-tight">
                Years Industry <br />
                Experience Web and <br />
                Graphic Design
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardItem} className="flex items-center gap-6">
            <div className="bg-white rounded-full p-4 shadow-md">
              <img
                src="/images/websites.png"
                alt="Websites"
                className="h-10 w-10"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">250+</h3>
              <p className="text-gray-600 text-sm leading-tight">
                Creative Website Delivered <br />
                to World Wide
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardItem} className="flex items-center gap-6">
            <div className="bg-white rounded-full p-4 shadow-md">
              <img
                src="/images/happyclients.png"
                alt="Satisfaction"
                className="h-10 w-10"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600 text-sm leading-tight">
                Client Satisfaction With <br />
                On-time Delivery
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
