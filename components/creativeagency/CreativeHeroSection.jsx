"use client";

import CustomButton from "@/utils/CustomButton";
import { motion } from "framer-motion";

export default function CreativeHeroSection() {
  const headingLines = [
    "Creativity Can Light",
    "Your Brand"
  ];

  const subHeadingLines = [
    "Reevan solves the world's biggest problems with expertise.",
    "Reevan helps global brands with digital products on web, mobile, and connected platforms."
  ];

  // Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen md:h-[600px] flex items-center"
      style={{ backgroundImage: "url('/images/office-team.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container (Aligned to Left) */}
      <motion.div
        className="z-10 ml-8 sm:ml-16 md:ml-24 lg:ml-32 max-w-lg lg:max-w-xl text-white"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <div className="mb-4">
          {headingLines.map((line, index) => (
            <motion.h1
              key={index}
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              {line}
            </motion.h1>
          ))}
        </div>

        {/* Subheading */}
        <div className="mb-6 text-gray-100">
          {subHeadingLines.map((line, index) => (
            <motion.p
              key={index}
              variants={item}
              className="text-base sm:text-lg md:text-xl"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <motion.div variants={item}>
          <CustomButton
            title="view your profile →"
            href="/portfolio-2"
            containerStyles="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
            textStyles=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
