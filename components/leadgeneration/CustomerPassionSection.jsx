import React from "react";
import Image from "next/image";

const CustomerPassionSection = () => {
  return (
    <section className="bg-[#fef4f2] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
          We are very passionate about developing
          <br className="hidden sm:block" /> the business of our customers
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Reevan build my startup business a great website that really helps
          current and potential customers get a good feel for my company. Lorem
          ipsum dolor sit amet.
        </p>

        {/* Image */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/teamwork.png"
            alt="Passionate team working"
            width={1000}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerPassionSection;
