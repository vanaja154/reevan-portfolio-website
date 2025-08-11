// components/IndustriesWeServe.jsx
import Image from "next/image";

export default function IndustriesWeServe() {
  const industries = [
    { name: "Real estate", icon: "/images/Services/house.svg" },
    { name: "Tour & Travels", icon: "/images/Services/travel-case.svg" },
    { name: "Education", icon: "/images/Services/education.svg" },
    { name: "Transport", icon: "/images/Services/taxi.svg" },
    { name: "Event", icon: "/images/Services/event.svg" },
    { name: "eCommerce", icon: "/images/Services/eCommerce.svg" },
    { name: "Game", icon: "/images/Services/Game.svg" },
    { name: "Healthcare", icon: "/images/Services/healthcare.svg" },
    { name: "Finance", icon: "/images/Services/money-growth.svg" },
    { name: "Restaurant", icon: "/images/Services/Restaurant.svg" },
    { name: "On-Demand", icon: "/images/Services/demand.svg" },
    { name: "Grocery", icon: "/images/Services/groceries.svg" },
  ];

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">Industries We Serve</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Our design process follows a proven approach. We begin with a deep understanding
        of your needs and create a planning template.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.name}
                width={48} // adjust for bigger icon
                height={48}
              />
            </div>
            <span className="text-lg font-semibold text-gray-800">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
