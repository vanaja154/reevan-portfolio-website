"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function StandardFeatures() {
  const features = [
    {
      title: "GPS Tracking devices are enabled with real-time monitoring",
      content:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    },
    {
      title: "Flexible Project settings",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      title: "Integrated Store Publishing",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      title: "Visual Layout Components",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
    {
      title: "Dynamic Components (feed via the CMS)",
      content:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    },
    {
      title: "Shopping Cart and Payments",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    },
    {
      title: "GPS Tracking devices are enabled with real-time monitoring",
      content:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    },
    {
      title: "Flexible Project settings",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      title: "Integrated Store Publishing",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      title: "Visual Layout Components",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
    {
      title: "Dynamic Components (feed via the CMS)",
      content:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    },
    {
      title: "Shopping Cart and Payments",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    },
  ];

  // Track which index is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="">Standard</span> Features List
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <div key={index} className=" border-gray-200">
              {/* Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFeature(index)}
              >
                <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </div>

              {/* Content */}
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">{feature.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
