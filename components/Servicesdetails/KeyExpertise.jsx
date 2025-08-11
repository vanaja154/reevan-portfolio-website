// components/KeyExpertise.jsx
import React from "react";

export default function KeyExpertise() {
  const services = [
    {
      icon: "/images/Servicesdetails/mobile-app.svg", // replace with actual icon path
      title: "App Development",
      description:
        "Our software house has been recognised by google for outstanding android application quality.",
    },
    {
      icon: "/images/Servicesdetails/website.svg",
      title: "Web Development",
      description:
        "At Reevan, We offer pixel perfect responsive website design services which are built around aesthetics and usability.",
    },
    {
      icon: "/images/Servicesdetails/buy-online.svg",
      title: "eCommerce Service",
      description:
        "Reevan’s product design services cover entire product design lifecycle, From prototyping to fully functional design.",
    },
    {
      icon: "/images/Servicesdetails/digital.svg",
      title: "Digital Marketing",
      description:
        "Increase conversions. Increase leads. Increase sales. Increase revenue. That's digital marketing services from Reevan.",
    },
    {
      icon: "/images/Servicesdetails/design-tools.svg",
      title: "Product Design",
      description:
        "Our highly experienced designers comprehend your vision and business objectives in order to create the designs.",
    },
    {
      icon: "/images/Servicesdetails/cloud.svg",
      title: "Cloud Services",
      description:
        "Our highly experienced designers comprehend your vision and business objectives in order to create the designs.",
    },
  ];

  return (
    <section className="bg-[#FDEEEE] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Our Key Expertise
        </h2>
        <p className="mt-2 text-gray-600">
          Explore our range of prowess in website design and development
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg text-left relative"
            >
              <div className="absolute -top-6 left-6 bg-white p-3 rounded-xl shadow-md">
                <img src={service.icon} alt={service.title} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-8">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
