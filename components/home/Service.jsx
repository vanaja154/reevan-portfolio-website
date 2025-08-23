"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/utils/ServiceCard";

export default function Service() {
  const services = [
    {
      title: "App Development",
      description: "We don't just build websites, we build websites that SELLS",
      image: "/images/prototype.png",
      bgColor: "bg-orange-100",
    },
    {
      title: "Web Design",
      description: "We don't just build websites, we build websites that SELLS",
      image: "/images/appdevelop.png",
      bgColor: "bg-pink-100",
    },
    {
      title: "UI/UX Design",
      description: "We don't just build websites, we build websites that SELLS",
      image: "/images/graphic.png",
      bgColor: "bg-blue-100",
    },
    {
      title: "Digital Marketing",
      description: "We don't just build websites, we build websites that SELLS",
      image: "/images/stracture.png",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Awesome Services</h2>
      <p className="text-center text-gray-500 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor.
      </p>

      {/* Parent Container with Scroll Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Runs animation once when 20% visible
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
              bgColor={service.bgColor}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
