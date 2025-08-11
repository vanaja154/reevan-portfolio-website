"use client";

export default function BlogFullPage() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-3xl mx-auto px-4">
        {/* === First Blog Section === */}
        <div className="rounded-lg overflow-hidden mb-4">
          <img
            src="/images/Blogdetails/laptop.jpg" // replace with your first image path
            alt="Laptop and coffee on colorful desk"
            className="w-full object-cover"
          />
        </div>

        <div className="flex justify-between items-center text-sm mb-4">
          <div className="space-x-2">
            <span className="text-orange-500">#Marketing</span>
            <span className="text-orange-500">#Seo</span>
          </div>
          <div className="text-gray-500">
            By <span className="text-gray-700">John Doe</span> • 4 days ago
          </div>
        </div>

        <p className="text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Website – The quickest way to take your business online
        </h2>

        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>A Logical Roadmap</li>
          <li>Crucial Business Information</li>
          <li>Social Media Integration</li>
          <li>A Mobile-Ready Version</li>
          <li>Heading and tagline or USP</li>
          <li>Testimonials and social proof</li>
          <li>Optimise website speed and performance</li>
          <li>Contact Information and Clear Navigation</li>
          <li>Ability to easily update title tag and meta description</li>
        </ul>

        <p className="text-gray-600 mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* === Second Blog Section === */}
        <div className="rounded-lg overflow-hidden mb-2">
          <img
            src="/images/Blogdetails/cup.jpg" // replace with your second image path
            alt="Online marketing concept with coffee"
            className="w-full object-cover"
          />
        </div>

        <p className="text-center text-gray-500 text-sm mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Preparing for the perfect brand strategy.
        </h2>

        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <h3 className="font-semibold text-gray-800 mb-2">
          1. The most downloaded graphic resource
        </h3>
        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <h3 className="font-semibold text-gray-800 mb-2">
          2. The most downloaded graphic resource
        </h3>
        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <h3 className="font-semibold text-gray-800 mb-2">
          3. The most downloaded graphic resource
        </h3>
        <p className="text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <p className="text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <p className="text-gray-600 mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* Back to Blogs Button */}
        <div className="text-center">
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition">
            Back to Blogs
          </button>
        </div>
      </div>
    </section>
  );
}
