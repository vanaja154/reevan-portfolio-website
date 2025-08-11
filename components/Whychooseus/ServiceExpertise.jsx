// components/ServiceExpertise.jsx
import Image from "next/image";
import React from "react";

export default function ServiceExpertise() {
  return (
    <section className="bg-[#faefed] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/Whychooseus/team-business.jpg" // place your image in public folder with this name
              alt="Expertise Illustration"
              width={500}
              height={400}
              className="rounded-xl"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-red-500">Expertise.</span>
            </h2>
            <p className="mb-4 text-gray-700">
              We are a team of top talent delivering enterprise solutions
              globally. we evolve with the advancement in technology because we
              believe in making our technology as your innovation.
            </p>
            <p className="text-gray-700">
              Our experts provide a wide range of services including app design,
              web development, digital marketing, ecommerce solutions and cloud
              development. We stay updated with the technology to build
              innovative digital products that meet client requirements across
              multiple business verticals and domains by housing some of the
              best professionals in the industry.
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* Card 1 */}
          <div>
            <h3 className="text-lg font-bold mb-2">
              Customer Satisfaction.
            </h3>
            <p className="mb-4 text-gray-700">
              We are a team of top talent delivering enterprise solutions
              globally. we evolve with the advancement in technology because we
              believe in making our technology as your innovation.
            </p>
            <p className="text-gray-700">
              Our experts provide a wide range of services including app design,
              web development, digital marketing, ecommerce solutions and cloud
              development.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <h3 className="text-lg font-bold mb-2">
              Marketing Strategies
            </h3>
            <p className="mb-4 text-gray-700">
              We are a team of top talent delivering enterprise solutions
              globally. we evolve with the advancement in technology because we
              believe in making our technology as your innovation.
            </p>
            <p className="text-gray-700">
              Our experts provide a wide range of services including app design,
              web development, digital marketing, ecommerce solutions and cloud
              development.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <h3 className="text-lg font-bold mb-2">
              After-Sales Service.
            </h3>
            <p className="mb-4 text-gray-700">
              We are a team of top talent delivering enterprise solutions
              globally. we evolve with the advancement in technology because we
              believe in making our technology as your innovation.
            </p>
            <p className="text-gray-700">
              Our experts provide a wide range of services including app design,
              web development, digital marketing, ecommerce solutions and cloud
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
