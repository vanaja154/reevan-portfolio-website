"use client";

import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Instagram, 
  Globe2, 
  Plane, 
  Building2 
} from "lucide-react";

export default function AppDevCountries() {
  const locations = [
    {
      id: 1,
      name: "India",
      address: "Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur, Rajasthan 123456",
      icon: <Building2 className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 2,
      name: "Dubai",
      address: "Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur, Rajasthan 123456",
      icon: <Globe2 className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 3,
      name: "UK",
      address: "Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur, Rajasthan 123456",
      icon: <Plane className="w-6 h-6 text-pink-500" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Global Presence</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-gray-50 p-6 rounded-lg  hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon + Country */}
              <div className="flex items-center justify-center gap-2 mb-4">
                {location.icon}
                <h3 className="text-xl font-bold text-gray-800 relative inline-block">
                  {location.name}
                  <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-orange-500 rounded"></span>
                </h3>
              </div>

              {/* Address */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{location.address}</p>

              {/* Contact Icons */}
              <div className="flex justify-center gap-5">
                <MapPin className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer transition" />
                <PhoneCall className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer transition" />
                <Mail className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer transition" />
                <Instagram className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}