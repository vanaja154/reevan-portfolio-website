"use client";

import { motion } from "framer-motion";

export default function CustomCard({
  title,
  subtitle,
  tags = [],
  authorName,
  authorCompany,
  authorImage,
  mainImage,
  imagePosition = "left",
  customElement,
}) {
  const isImageLeft = imagePosition === "left";

  // Parent container variant
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  // Individual item animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center gap-8 ${
        isImageLeft ? "" : "md:flex-row-reverse"
      }`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Image Section */}
      <motion.div
        className="md:w-1/2 w-full overflow-hidden rounded-xl shadow-lg"
        variants={fadeUp}
      >
        <img
          src={mainImage}
          alt={title}
          className="w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="md:w-1/2 w-full"
        variants={fadeUp}
      >
        {/* Tags */}
        <motion.div className="flex flex-wrap gap-2 text-sm text-orange-500 font-medium" variants={fadeUp}>
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h3 className="text-2xl md:text-3xl font-bold mt-2" variants={fadeUp}>
          {title}
        </motion.h3>

        {/* Subtitle or Custom Element */}
        <motion.div className="mt-3" variants={fadeUp}>
          {customElement ? customElement : <p className="text-gray-500">{subtitle}</p>}
        </motion.div>

        {/* Author */}
        <motion.div className="flex items-center gap-3 mt-6" variants={fadeUp}>
          <img
            src={authorImage}
            alt={authorName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{authorName}</p>
            <p className="text-sm text-gray-500">{authorCompany}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
