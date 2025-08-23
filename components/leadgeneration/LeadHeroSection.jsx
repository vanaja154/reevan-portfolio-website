"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function LeadHeroSection() {
  return (
    <section className="relative flex flex-col-reverse mt-10 lg:mt-10 lg:flex-row items-center justify-between px-6 py-16 bg-white">
      {/* Left content */}
      <motion.div
        className="max-w-xl text-center lg:text-left space-y-6 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-red-500 font-medium"
          variants={lineVariants}
        >
          Full-time Dedicated Agency
        </motion.p>

        <motion.h1
          className="text-4xl lg:text-5xl font-bold"
          variants={lineVariants}
        >
          <span className="text-red-600">Your Full-Funnel </span>
          <span className="text-gray-900"> Growth Marketing Agency</span>
        </motion.h1>

        <motion.p className="text-gray-600" variants={lineVariants}>
          Reevan solve the world's biggest problems with Expertise. Reevan helps
          global brand with digital products on web, mobile and connected
          platforms.
        </motion.p>


        <motion.div variants={lineVariants}>
          <Link href="/contact" passHref>
            <motion.button
              className="mt-6 inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full shadow hover:bg-red-600 transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk <span className="ml-2">→</span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right main image only */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center relative mb-10 lg:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/images/Design/hero.svg"
          alt="Web Design Illustration"
          width={500}
          height={500}
          className="w-3/4 h-auto rounded shadow"
        />
      </motion.div>
    </section>
  );
}
