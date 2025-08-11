import Image from "next/image";
// import expertiseImage from "@/public/your-image.png"; // replace with your image path

export default function ExpertiseSection() {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Top section with image + heading */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Design/our expertise.jpg"
            alt="Expertise Illustration"
            width={500}
            height={400}
            className="rounded-md"
          />
        </div>
        {/* Heading and description */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-500">Expertise.</span>
          </h2>
          <p className="text-gray-700 mb-4">
            We are a team of top talent delivering enterprise solutions globally.
            We evolve with the advancement in technology because we believe in
            making our technology as your innovation.
          </p>
          <p className="text-gray-700">
            Our experts provide a wide range of services including app design,
            web development, digital marketing, ecommerce solutions, and cloud
            development. We stay updated with the technology to build innovative
            digital products that meet client requirements across multiple
            business verticals and domains by housing some of the best
            professionals in the industry.
          </p>
        </div>
      </div>

      {/* 3 services below */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Customer Satisfaction.
          </h3>
          <p className="text-gray-700 mb-2">
            We are a team of top talent delivering enterprise solutions globally.
            We evolve with the advancement in technology because we believe in
            making our technology as your innovation.
          </p>
          <p className="text-gray-700">
            Our experts provide a wide range of services including app design,
            web development, digital marketing, ecommerce solutions, and cloud
            development.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Marketing Strategies
          </h3>
          <p className="text-gray-700 mb-2">
            We are a team of top talent delivering enterprise solutions globally.
            We evolve with the advancement in technology because we believe in
            making our technology as your innovation.
          </p>
          <p className="text-gray-700">
            Our experts provide a wide range of services including app design,
            web development, digital marketing, ecommerce solutions, and cloud
            development.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            After-Sales Service.
          </h3>
          <p className="text-gray-700 mb-2">
            We are a team of top talent delivering enterprise solutions globally.
            We evolve with the advancement in technology because we believe in
            making our technology as your innovation.
          </p>
          <p className="text-gray-700">
            Our experts provide a wide range of services including app design,
            web development, digital marketing, ecommerce solutions, and cloud
            development.
          </p>
        </div>
      </div>
    </section>
  );
}
