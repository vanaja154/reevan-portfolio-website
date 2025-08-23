"use client";

import Image from "next/image";
import Cards from "../Casestudy/Cards";
export default function CardsDetails() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          More case studies
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Cards */}
        <Cards />
      </div>
    </section>
  );
}
