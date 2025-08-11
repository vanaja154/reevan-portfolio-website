// components/WhoWeAreSection.jsx
import Image from "next/image";

export default function WhoWeAreSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:mt-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="uppercase tracking-wider font-semibold text-orange-500 text-sm">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            We are a <span className="relative">
              <span className="relative z-10">creative</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-200 -z-10"></span>
            </span>{" "}
            digital agency based in India.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We are a team of top talent delivering enterprise solutions globally. We evolve with
            the advancement in technology because we believe in making our technology as your
            innovation.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our experts provide a wide range of services including app design, web development,
            digital marketing, ecommerce solutions and cloud development. We stay updated with
            the technology to build innovative digital products that meet client requirements
            across multiple business verticals and domains by housing some of the best
            professionals in the industry.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/building-mockup.jpg" 
            alt="Reevan Company Building"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
