// components/HelpSection.jsx
"use client";

export default function HelpSection() {
  const cards = [
    {
      image: "/images/Contact2/to-do-list.svg", // replace with your actual image path
      title: "Communicate Your Requirements",
      description:
        "Our software house has been recognised by google for outstanding android application quality.",
    },
    {
      image: "/images/Contact2/policy.svg", // replace with your actual image path
      title: "Understanding the Requirement",
      description:
        "Our software house has been recognised by google for outstanding android application quality.",
    },
    {
      image: "/images/Contact2/contract.svg", // replace with your actual image path
      title: "Reevan Respect the Client Needs",
      description:
        "Our software house has been recognised by google for outstanding android application quality.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          We’re Here to Help
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Lipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
