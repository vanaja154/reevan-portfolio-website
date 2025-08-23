'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function GraphicHeroSection() {
  return (
    <section className="bg-[#2D0070] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:mt-10 lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="text-white max-w-xl">
          {/* Animated Heading */}
          <motion.h2
            className="text-4xl font-extrabold leading-tight mb-6"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariant}
          >
            Get an amazing logo for<br /> your startup in{' '}
            <span className="text-white">2 hours.</span>
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            className="text-white/80 text-lg mb-8"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariant}
          >
            Reevan solve the world's biggest problems with Expertise.<br />
            Reevan helps global brand with digital products on web, mobile<br />
            and connected platforms.
          </motion.p>

          {/* Custom Button with Link */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={textVariant}
          >
            <Link href="/contact">
              <button className="bg-[#FF6D42] text-white font-medium px-6 py-3 rounded-full hover:bg-[#e75c2f] transition-all text-sm">
                Let’s Talk →
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/images/Graphics/cup.png"
            alt="Product packaging"
            width={500}
            height={400}
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
