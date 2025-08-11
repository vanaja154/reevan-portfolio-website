import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="bg-[#fdecea] py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 leading-snug mb-6">
              First page visibility for explosive results.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/images/casestudydetails/graph.jpg"
              alt="SEO Statistics Charts"
              width={500}
              height={350}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16">
          <blockquote className="text-2xl font-extrabold text-gray-900 leading-snug">
            <span className="text-orange-500 text-4xl">“</span>
            It's much easier to double your business by doubling your conversion
            rate than by doubling your traffic
            <span className="text-orange-500 text-4xl">”</span>
          </blockquote>

          {/* Author */}
          <div className="flex items-center mt-6">
            <Image
              src="/images/seo-expert.jpg"
              alt="SEO Expert"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="font-bold text-gray-900">Riya Kapoor</p>
              <p className="text-sm text-gray-600">SEO Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
