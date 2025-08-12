'use client';

import Image from 'next/image';
import React from 'react';

export default function BrandPackages() {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-20">
          <h2 className="w-full text-center text-xl font-semibold text-[#111827] mb-2">
            The World's Top Brands Trust Us
          </h2>
          <Image src="/images/Graphics/eptcor.png" alt="Eptcor" width={100} height={40} />
          <Image src="/images/Graphics/julako.png" alt="Julako" width={100} height={40} />
          <Image src="/images/Graphics/bhvr.png" alt="Benedu" width={100} height={40} />
          <Image src="/images/Graphics/mycarto.png" alt="MyCarto" width={100} height={40} />
          <Image src="/images/Graphics/Reegnu.png" alt="Reegnu" width={100} height={40} />
          <Image src="/images/Graphics/circlio.png" alt="Circlio" width={100} height={40} />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Text Block */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-[#111827] leading-tight mb-6">
              Get a complete brand package<br />ready to go
            </h2>
            <p className="text-[#6B7280] text-lg mb-8">
              Reevan started its operation in the year 1999. We are Worldwide, based Web, App and
              Digital Marketing Company. Our main Domain is Web Design, App Development, Digital
              Marketing, Product Design and Cloud Services. Customer Satisfaction and the Highest
              rate of Customer Repeatability make us one of the pioneers in the field. So, what are
              you waiting for? Let us discuss your ideas and our innovation in detail because
              catering your requirement and converting it into a final product is our main goal.
            </p>
            <div className="flex gap-4 items-center">
              <button className="bg-white border border-[#FF6D42] text-[#FF6D42] px-6 py-3 rounded-full font-medium hover:bg-[#FF6D42] hover:text-white transition-all text-sm">
                Get a Quote →
              </button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#FF6D42] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">▶</span>
                </div>
                <span className="text-[#374151] font-medium">Watch Video</span>
              </div>
            </div>
          </div>

          {/* Right Image Full Width */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/Graphics/logo1.png"
              alt="Logo 1"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
