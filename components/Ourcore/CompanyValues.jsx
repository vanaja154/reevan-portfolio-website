// components/CompanyValues.jsx
import Image from "next/image";

export default function CompanyValues() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div>
          <Image
            src="/images/Ourcore/business-plan-office.jpg" // Replace with your image path in /public
            alt="Team Collaboration"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right - Main Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Effectiveness without values is a tool without a purpose.
          </h2>
          <p className="text-gray-700 mb-4">
           We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
          </p>
          <p className="text-gray-700">
            Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development. We stay updated with the technology to build innovative digital products that meet client requirements across multiple business verticals and domains by housing some of the best professionals in the industry.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Innovation */}
        <div>
          <h3 className="text-xl font-bold mb-2">Innovation</h3>
          <p className="text-gray-700">
            We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
           Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.
          </p>
        </div>

        {/* Creativity */}
        <div>
          <h3 className="text-xl font-bold mb-2">Creativity</h3>
          <p className="text-gray-700">
           We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.
          </p>
        </div>

        {/* Commitment */}
        <div>
          <h3 className="text-xl font-bold mb-2">Commitment</h3>
          <p className="text-gray-700">
            We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.
          </p>
        </div>

        {/* Efficiency */}
        <div>
          <h3 className="text-xl font-bold mb-2">Efficiency</h3>
          <p className="text-gray-700">
           We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.
          </p>
        </div>

        {/* Passion */}
        <div>
          <h3 className="text-xl font-bold mb-2">Passion</h3>
          <p className="text-gray-700">
      We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.
          </p>
        </div>

        {/* Respect */}
        <div>
          <h3 className="text-xl font-bold mb-2">Respect for All</h3>
          <p className="text-gray-700">
            We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.
          </p>
        </div>

         {/* Teamwork */}
        <div>
          <h3 className="text-xl font-bold mb-2">Teamwork</h3>
          <p className="text-gray-700">
            We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.
          </p>
        </div>

         {/* Patriotism */}
        <div>
          <h3 className="text-xl font-bold mb-2">Patriotism</h3>
          <p className="text-gray-700">
            We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.
          </p>
        </div>

         {/* Customer is King */}
        <div>
          <h3 className="text-xl font-bold mb-2">Customer is King</h3>
          <p className="text-gray-700">
            We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development.
          </p>
        </div>
      </div>
    </section>
  );
}
