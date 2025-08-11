"use client";

import Image from "next/image";

export default function BadgesSection() {
  const badges = [
    {
      id: 1,
      name: "Top App Developer",
      description: "Genuine Quality",
      imageUrl: "/images/top-it.png", 
    },
    {
      id: 2,
      name: "Top App Developer",
      description: "Genuine Quality",
      imageUrl: "/images/top-it.png", 
    },
    {
      id: 3,
      name: "Top App Developer",
      description: "Genuine Quality",
      imageUrl: "/images/top-it.png", 
    },
    {
      id: 4,
      name: "Top App Developer",
      description: "Genuine Quality",
      imageUrl: "/images/top-it.png", 
    },
    {
      id: 5,
      name: "Top App Developer",
      description: "Genuine Quality",
      imageUrl: "/images/top-it.png", 
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {badges.map((badge) => (
            <div key={badge.id} className="text-center">
              {/* Badge Image */}
              <Image
                src={badge.imageUrl}
                alt={badge.name}
                width={100}
                height={100}
                className="mx-auto mb-2"
              />

              {/* Text */}
              <div>
                <p className="text-lg font-bold text-gray-900">{badge.name}</p>
                <p className="text-base text-gray-600">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}