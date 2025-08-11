'use client';

import Image from "next/image";

export default function Result() {
  return (
    <section className="bg-white py-12 flex justify-center">
    <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          The Results
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      {/* Wrapper to center the grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-[#e8e9ff] rounded-xl p-6 text-left">
          <Image
            src="/images/casestudydetails/sales-funnel.svg"
            alt="Conversion Trophy"
            width={40}
            height={40}
            className="mb-4"
          />
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">220%</h3>
          <p className="text-[#5555a5]">
            Organic search drives 51% of all web traffic and 40% of revenue
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#ffece6] rounded-xl p-6 text-left">
          <Image
            src="/images/casestudydetails/financial-profit.svg"
            alt="Revenue Growth"
            width={40}
            height={40}
            className="mb-4"
          />
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">150%</h3>
          <p className="text-[#ff5a2c]">
            Organic search drives 51% of all web traffic and 40% of revenue
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#fff6da] rounded-xl p-6 text-left">
          <Image
            src="/images/casestudydetails/bar-graph.svg"
            alt="Traffic Growth"
            width={40}
            height={40}
            className="mb-4"
          />
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">200%</h3>
          <p className="text-[#a18b00]">
            Organic search drives 51% of all web traffic and 40% of revenue
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#ffe0e0] rounded-xl p-6 text-left">
          <Image
            src="/images/casestudydetails/promotion.svg"
            alt="Marketing Impact"
            width={40}
            height={40}
            className="mb-4"
          />
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">300%</h3>
          <p className="text-[#ff3b3b]">
            Organic search drives 51% of all web traffic and 40% of revenue
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
