// components/OurServicesSection.jsx
import { FaMobileAlt, FaGlobe, FaShoppingCart } from "react-icons/fa";

export default function OurServicesSection() {
  return (
    <section className="bg-[#fff5f3] py-20">
      <div className="container mx-auto px-6 md:px-16 text-center">
        
        {/* Heading */}
        <p className="text-orange-500 font-semibold uppercase tracking-wide mb-3">
          OUR SERVICES
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          <span className="px-1">Reevan</span>, A web development agency in India<br />
          where experience meets innovation.
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement 
          in technology because we believe in making our technology as your innovation.
        </p>

        {/* Service Cards */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-6 w-full md:w-[300px]">
            <div className="bg-orange-500 text-white p-4 rounded-full">
              <FaMobileAlt size={28} />
            </div>
            <div className="text-left">
              <p className="text-xl font-extrabold text-gray-900">750 +</p>
              <p className="text-gray-600 text-sm">Mobile Apps Developed</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-6 w-full md:w-[300px]">
            <div className="bg-orange-500 text-white p-4 rounded-full">
              <FaGlobe size={28} />
            </div>
            <div className="text-left">
              <p className="text-xl font-extrabold text-gray-900">3500 +</p>
              <p className="text-gray-600 text-sm">Web site Developed</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-6 w-full md:w-[300px]">
            <div className="bg-orange-500 text-white p-4 rounded-full">
              <FaShoppingCart size={28} />
            </div>
            <div className="text-left">
              <p className="text-xl font-extrabold text-gray-900">200 +</p>
              <p className="text-gray-600 text-sm">eCommerce Store Develop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
