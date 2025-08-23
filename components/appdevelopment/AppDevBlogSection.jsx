"use client";

import React from "react";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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

const blogPosts = [
  {
    id: 1,
    image: "/images/blog-img-1.jpg",
    date: "12 March 21",
    readTime: "5 Min Read",
    title: "Best Technology for Mobile Application Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: 2,
    image: "/images/blog-img-2.jpg",
    date: "12 March 21",
    readTime: "5 Min Read",
    title: "Exploring the Key Features of Laravel 7 Framework",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: 3,
    image: "/images/blog-img-3.jpg",
    date: "12 March 21",
    readTime: "5 Min Read",
    title: "Best Technology for Mobile Application Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
  },
];

export default function AppDevBlogSection() {
  return (
    <section className="bg-[#ffe3d9] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-[#ff5b2e] font-medium uppercase mb-2">
          Latest From Blog
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#333] mb-3">
          Read stories, tips, and our opinions on{" "}
          <span className="text-[#1e1e1e]">everything</span>
        </h2>
        <p className="text-[#555] max-w-2xl mx-auto mb-10">
          Get updated with the latest trends in technology and know how your
          business can benefit from these technologies.
        </p>

        {/* Animated Blog Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden text-left transition hover:shadow-lg"
              variants={card}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-[#1e1e1e] mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
