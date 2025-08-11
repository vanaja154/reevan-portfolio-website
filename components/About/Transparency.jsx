// components/Transparency.jsx

import React from 'react';

const Transparency = function() {
  const services = [
    {
      title: "Client-centric Approach",
      description: "Our software house has been recognised by google for outstanding android application quality.",
      icon: "👥"  // Replace with corresponding icon
    },
    {
      title: "Service Delivered in Time",
      description: "Our software house has been recognised by google for outstanding android application quality.",
      icon: "⏰"  // Replace with corresponding icon
    },
    {
      title: "Effective Collaboration",
      description: "Our software house has been recognised by google for outstanding android application quality.",
      icon: "🤝"  // Replace with corresponding icon
    },
    {
      title: "Employee Benefits",
      description: "Our software house has been recognised by google for outstanding android application quality.",
      icon: "👨‍👩‍👦"  // Replace with corresponding icon
    },
    {
      title: "Team Work",
      description: "Our software house has been recognised by google for outstanding android application quality.",
      icon: "🛠️"  // Replace with corresponding icon
    },
    {
      title: "Quality of Service",
      description: "Our software house has been recognised by google for outstanding android application quality.",
      icon: "👍"  // Replace with corresponding icon
    },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-5">Transparency and Ethics</h2>
      <p className="text-center mb-10">Lipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(function(service) {
          return (
            <div key={service.title} className="bg-white shadow-md rounded-lg p-5 text-center">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transparency;
