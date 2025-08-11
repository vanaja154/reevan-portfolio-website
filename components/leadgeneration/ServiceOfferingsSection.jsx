import React from "react";
import Image from "next/image";

const services = [
  {
    title: "App Development",
    description:
      "Our software house has been recognised by google for outstanding android application quality.",
    icon: "/images/mobile-app.png",
  },
  {
    title: "Web Development",
    description:
      "At Reevan, We offer pixel perfect responsive website design services which are built around aesthetics and usability.",
    icon: "/images/mobile-app.png",
  },
  {
    title: "eCommerce Service",
    description:
      "Reevan’s product design services cover entire product design lifecycle, From prototyping to fully functional design.",
    icon: "/images/mobile-app.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Increase conversions. Increase leads. Increase sales. Increase revenue. That's digital marketing services from Reevan.",
    icon: "/images/mobile-app.png",
  },
  {
    title: "Product Design",
    description:
      "Our highly experienced designers comprehend your vision and business objectives in order to create the designs.",
    icon: "/images/mobile-app.png",
  },
  {
    title: "Cloud Services",
    description:
      "Our highly experienced designers comprehend your vision and business objectives in order to create the designs.",
    icon: "/images/mobile-app.png",
  },
];

export default function ServiceOfferingsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          See what we can do for <span className="text-orange-500">you</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm p-6 text-left hover:shadow-md transition"
            >
              <div className="inline-block p-3 bg-white rounded-xl shadow-md mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-sm font-semibold text-gray-900 hover:underline"
              >
                Read More <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
