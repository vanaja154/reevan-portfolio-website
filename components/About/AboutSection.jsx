// components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Title Section */}
        <div>
          <p className="text-orange-500 font-medium uppercase tracking-wide mb-2">
            About Reevan?
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            The Reevan
          </h2>
        </div>

        {/* Right Content Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Reevan is a full-service web, app and digital marketing company based in India.
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our experts provide a wide range of services including app design, web development,
            digital marketing, ecommerce solutions and cloud development. We stay updated with the
            technology to build innovative digital products that meet client requirements across
            multiple business verticals and domains by housing some of the best professionals in
            the industry. To transform the concepts to design, concluding with full executions, we
            also stay updated with the latest trending technologies. And we evolve with the
            advancement in technology because we believe in making our technology as your
            innovation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            To learn more about our approach to business and work, feel free to hop on over to our
            Open Contact Page.
          </p>

          {/* Stats Section */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="font-semibold text-gray-700">Complete Projects</p>
              <p className="text-3xl font-extrabold text-orange-500">7500+</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Happy Clients</p>
              <p className="text-3xl font-extrabold text-orange-500">3500+</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Expert Team</p>
              <p className="text-3xl font-extrabold text-orange-500">540+</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Success Years</p>
              <p className="text-3xl font-extrabold text-orange-500">20+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
