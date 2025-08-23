"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "App Development",
    description:
      "Our software house has been recognised by google for outstanding android application quality.",
    icon: "/images/mobile-app.png",
  },
  {
    title: "Web Development",
    description:
      "At Reevan, We offer pixel perfect responsive website design services which are built around aesthetics and usability.",
    icon: "/images/mobile-app.png",
  },
  {
    title: "eCommerce Service",
    description:
      "Reevan’s product design services cover entire product design lifecycle, From prototyping to fully functional design.",
    icon: "/images/mobile-app.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Increase conversions. Increase leads. Increase sales. Increase revenue. That's digital marketing services from Reevan.",
    icon: "/images/mobile-app.png",
  },
  {
    title: "Product Design",
    description:
      "Our highly experienced designers comprehend your vision and business objectives in order to create the designs.",
    icon: "/images/mobile-app.png",
  },
  {
    title: "Cloud Services",
    description:
      "Our highly experienced designers comprehend your vision and business objectives in order to create the designs.",
    icon: "/images/mobile-app.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServiceOfferingsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-gray-900"
        >
          See what we can do for <span className="text-orange-500">you</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-gray-500 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor.
        </motion.p>

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-50 rounded-2xl shadow-sm p-6 text-left hover:shadow-md transition"
            >
              <div className="inline-block p-3 bg-white rounded-xl shadow-md mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <a
                href="/services"
                className="mt-4 inline-flex items-center text-sm font-semibold text-gray-900 hover:underline"
              >
                Read More <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
