// components/AgencyIntroSection.jsx
import Image from "next/image";
export default function AgencyIntroSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-orange-500 font-semibold uppercase tracking-wide mb-4">
            WHY US
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            We are a <span className="relative">
              <span className="relative z-10">creative</span>
              <span className="absolute left-0 bottom-0 w-full h-2 bg-orange-200 z-0"></span>
            </span>{" "}
            digital agency <br /> based in India.
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We are a team of top talent delivering enterprise solutions globally.
            We evolve with the advancement in technology because we believe in
            making our technology as your innovation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our experts provide a wide range of services including app design,
            web development, digital marketing, ecommerce solutions and cloud
            development. We stay updated with the technology to build innovative
            digital products that meet client requirements across multiple business
            verticals and domains by housing some of the best professionals in the
            industry.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Whychooseus/business-plan-office.jpg" // Place your image in /public
              width={300} // Set your desired width
              height={200} // Set your desired height
              alt="Team High Five"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
