"use client";

import React from 'react';
import CustomButton from "@/utils/CustomButton"; // Make sure path is correct
import Image from "next/image";
import Link from "next/link";
import HighlightedText from '@/utils/HighlightedText';

export default function AppDevelopmentServiceSection() {
  const services = [
    {
      id: 1,
      title: "Android Development",
      description: "Our software house has been recognized by Google for outstanding Android application quality.",
      icon: "/images/android.png",
    },
    {
      id: 2,
      title: "iOS Development",
      description: "We create high-performance, secure, and scalable iOS apps using Swift and Objective-C.",
      icon: "/images/apple.png",
    },
    {
      id: 3,
      title: "Hybrid App Development",
      description: "Build cross-platform apps with React Native & Flutter for faster delivery and lower cost.",
      icon: "/images/graphic.png",
    },
    {
      id: 4,
      title: "Wearable Development",
      description: "Create seamless experiences for Apple Watch, Wear OS, and other wearable platforms.",
      icon: "/images/physics.png",
    },
    {
      id: 5,
      title: "UI/UX Designing",
      description: "User-centered design with wireframing, prototyping, and pixel-perfect UI implementation.",
      icon: "/images/graphic.png",
    },
    {
      id: 6,
      title: "Web App Development",
      description: "Full-stack web applications with modern frameworks like React, Next.js, and Node.js.",
      icon: "/images/physics.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Tagline */}
        <p className="text-sm font-bold text-orange-500 mb-2 text-center">REEVAN SERVICES</p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          We build modern{" "}
          <HighlightedText underlineColor="bg-orange-300">
            creative mobile
          </HighlightedText>{" "}
          experiences.
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex items-start justify-start mb-4">
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={40}
                  height={40}
                  className="rounded-full shadow-md mr-4"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Read More Link */}
              <Link href={`/services/${service.id}`}>
                <span className="text-orange-500 font-medium hover:underline cursor-pointer">
                  Read More →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}