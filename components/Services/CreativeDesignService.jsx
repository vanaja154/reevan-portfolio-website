// components/CreativeDesignService.jsx
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function CreativeDesignService() {
  const services = [
    {
      title: "Websites Design",
      description:
        "We create comprehensive and sophisticated yet simple to use interfaces for your web app.",
      icon: "/images/Services/web.svg",
    },
    {
      title: "Mobile Apps Design",
      description:
        "We create comprehensive and sophisticated yet simple to use interfaces for your web app.",
      icon: "/images/Services/mobile-app.svg",
    },
    {
      title: "UX/UI Design",
      description:
        "We create comprehensive and sophisticated yet simple to use interfaces for your web app.",
      icon: "/images/Services/ui.svg",
    },
    {
      title: "Branding",
      description:
        "We create comprehensive and sophisticated yet simple to use interfaces for your web app.",
      icon: "/images/Services/design-tools.svg",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We make the collaboration of people and interface more intensive and
            exciting.
          </h2>
          <Link href="/contact" passHref>
            <button className="mt-8 px-6 py-3 border border-orange-500 text-orange-500 rounded-full flex items-center gap-2 hover:bg-orange-50 transition">
              Need a Designer <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Design Service
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-6 flex justify-between items-start hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {service.title}
                    </h4>
                    <p className="text-gray-500 text-sm mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="bg-orange-100 p-2 rounded-full">
                  <ArrowRight className="text-orange-500" size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
