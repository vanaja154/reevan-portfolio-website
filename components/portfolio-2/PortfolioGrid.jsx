import React from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Creative and minimal clothing label design",
    tags: ["UX", "UI", "Graphic Design"],
    image: "/images/Portfolio/portfolio-1.jpg",
  },
  {
    id: 2,
    title: "Creative business card design service",
    tags: ["UX", "UI", "Graphic Design"],
    image: "/images/Portfolio/portfolio-3.jpg",
  },
  {
    id: 3,
    title: "Furniture iOS app kit design development",
    tags: ["UX", "UI", "Graphic Design"],
    image: "/images/Portfolio/portfolio-1.jpg",
  },
  {
    id: 4,
    title: "Creative and minimal clothing label design",
    tags: ["UX", "UI", "Graphic Design"],
    image: "/images/Portfolio/portfolio-3.jpg",
  },
  {
    id: 5,
    title: "Creative business card design service",
    tags: ["UX", "UI", "Graphic Design"],
    image: "/images/Portfolio/portfolio-3.jpg",
  },
  {
    id: 6,
    title: "Furniture iOS app kit design development",
    tags: ["UX", "UI", "Graphic Design"],
    image: "/images/Portfolio/portfolio-1.jpg",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-xl lg:p-1 sm:p-1 md:p-1"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">
                {item.tags.join(", ")}
              </p>
              <h3 className="mt-1 font-semibold text-gray-900 hover:text-orange-500 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
