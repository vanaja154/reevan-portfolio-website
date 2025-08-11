// components/FeaturesRow.jsx
"use client";

export default function FeaturesRow() {
  const features = [
    {
      img: "/images/Contact2/world.svg", // replace with your actual image path
      title: "Work at Your Time Zone",
    },
    {
      img: "/images/Contact2/conversation.svg", // replace with your actual image path
      title: "Easy & Timely Communication",
    },
    {
      img: "/images/Contact2/tech-support.svg", // replace with your actual image path
      title: "Support Available at 24 Hours",
    },
    {
      img: "/images/Contact2/rate.svg", // replace with your actual image path
      title: "Ratings 4.9 out of 8,500 Clients",
    },
    {
      img: "/images/Contact2/awards.svg", // replace with your actual image path
      title: "Award Wining Service and Support",
    },
  ];

  return (
    <section className="bg-[#ffd9cc] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />
              <p className="text-gray-700 font-semibold leading-tight">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
