"use client";

import { FaMobileAlt, FaGlobe, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurServicesSection() {
  const cards = [
    {
      icon: <FaMobileAlt size={28} />,
      title: "750 +",
      subtitle: "Mobile Apps Developed",
    },
    {
      icon: <FaGlobe size={28} />,
      title: "3500 +",
      subtitle: "Web site Developed",
    },
    {
      icon: <FaShoppingCart size={28} />,
      title: "200 +",
      subtitle: "eCommerce Store Develop",
    },
  ];

  return (
    <section className="bg-[#fff5f3] lg:mt-10 py-20">
      <div className="container mx-auto px-6 md:px-16 text-center">
        {/* Animated Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            variants={textVariant}
            className="text-orange-500 font-semibold uppercase tracking-wide mb-3"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            variants={textVariant}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug"
          >
            <span className="px-1">Reevan</span>, A web development agency in
            India
            <br />
            where experience meets innovation.
          </motion.h2>
          <motion.p
            variants={textVariant}
            className="text-gray-600 max-w-3xl mx-auto mt-4"
          >
            We are a team of top talent delivering enterprise solutions globally.
            we evolve with the advancement in technology because we believe in
            making our technology as your innovation.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-col md:flex-row gap-6 justify-center"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-6 w-full md:w-[300px]"
            >
              <div className="bg-orange-500 text-white p-4 rounded-full">
                {card.icon}
              </div>
              <div className="text-left">
                <p className="text-xl font-extrabold text-gray-900">
                  {card.title}
                </p>
                <p className="text-gray-600 text-sm">{card.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
