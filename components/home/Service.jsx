import ServiceCard from '@/utils/ServiceCard';
import React from 'react'

export default function Service() {
  const services = [
    {
      title: "App Development",
      description: "We don't just build websites, we build websites that SELLS",
      image: "/images/prototype.png",
      bgColor: "bg-orange-100", 
    },
    {
      title: "Web Design",
      description: "We don't just build websites, we build websites that SELLS",
      image: "/images/appdevelop.png",
      bgColor: "bg-pink-100", 
    },
    {
      title: "UI/UX Design",
      description: "We don't just build websites, we build websites that SELLS",
      image: "/images/graphic.png",
      bgColor: "bg-blue-100", 
    },
    {
      title: "Digital Marketing",
      description: "We don't just build websites, we build websites that SELLS",
      image: "/images/stracture.png",
      bgColor: "bg-purple-100", 
    },
  ];
  return (
     <section className="py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Awesome Services</h2>
      <p className="text-center text-gray-500 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </section>
  )
}

