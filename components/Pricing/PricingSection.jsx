// components/PricingSection.js
import { FaDollarSign } from "react-icons/fa";

export default function PricingSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          {/* Small Title */}
          <div className="flex items-center space-x-2 mb-4">
            <FaDollarSign className="text-orange-500" />
            <span className="text-orange-500 font-medium tracking-wide uppercase">
              Our Pricing
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            Looking for our Services <br /> Standard Pricing?
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6 max-w-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis.
          </p>

          {/* Link */}
          <a
            href="#"
            className="inline-flex items-center text-gray-800 font-medium hover:underline"
          >
            Talk to our Experts
            <span className="ml-2">→</span>
          </a>
        </div>

        {/* Right Image */}
       <div className="flex-1 flex justify-center">
          <img
            src="/images/Pricing/hr-girl.jpg"
            alt="Customer Support"
            className="rounded-2xl shadow-lg w-[28rem] md:w-[36rem] object-cover"
         />
        </div>
      </div>
    </section>
  );
}
