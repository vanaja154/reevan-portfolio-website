"use client";

export default function BlogHeaderSection() {
  return (
    <section className="bg-[#fdf5f4] py-16 mt-10 lg:mt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Breadcrumb */}
        <p className="text-base text-gray-600 mb-4">
          All Blog Posts{" "}
          <span className="text-orange-500 font-medium">/ Marketing</span>
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          How to increase your ROI through <br /> scientific SEM?
        </h1>
      </div>
    </section>
  );
}
