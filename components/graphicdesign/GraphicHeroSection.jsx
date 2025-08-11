'use client';

import Image from 'next/image';

export default function GraphicHeroSection() {
  return (
    <section className="bg-[#2D0070] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:mt-10 lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-white max-w-xl">
          <h2 className="text-4xl font-extrabold leading-tight mb-6">
            Get an amazing logo for<br /> your startup in <span className="text-white">2 hours.</span>
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Reevan solve the world's biggest problems with Expertise.<br />
            Reevan helps global brand with digital products on web, mobile<br />
            and connected platforms.
          </p>
          <button className="bg-[#FF6D42] text-white font-medium px-6 py-3 rounded-full hover:bg-[#e75c2f] transition-all text-sm">
            Let's Talk →
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/Graphics/cup.png"
            alt="Product packaging"
            width={500}
            height={400}
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
