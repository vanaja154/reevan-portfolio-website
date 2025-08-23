"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "We don't just build websites, we build websites that SELLS",
    image: "/images/Design/webdesign.svg",
  },
  {
    title: "UI/UX Design",
    description: "We don't just build websites, we build websites that SELLS",
    image: "/images/Design/ui.svg",
  },
  {
    title: "Content Marketing",
    description: "We don't just build websites, we build websites that SELLS",
    image: "/images/Design/content.svg",
  },
  {
    title: "Digital Marketing",
    description: "We don't just build websites, we build websites that SELLS",
    image: "/images/Design/digital.svg",
  },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          See What We Can <span className="text-red-500">Do for You</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition"
            variants={card}
          >
            <div className="mb-4 flex justify-center">
              <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-500 mb-4">{service.description}</p>
            <a
              href="/services"
              className="text-red-500 font-medium hover:underline inline-flex items-center gap-1"
            >
              Read More <span>→</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
