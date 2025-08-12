"use client";
export default function HeroSection() {
  return (
    <section className="bg-[#ffeaea] mt-10 py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Content */}
        <div className="md:w-1/3 text-center md:text-left">
          <span className="inline-block bg-white text-orange-500 px-4 py-1 rounded-full text-sm mb-4">
            Hello, I&apos;m
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Emily Olivia
          </h1>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            UI/UX and Graphic Designer
          </h2>
          <p className="text-gray-600 mb-6">
            Senior Graphic and UI/UX Designer. I help global brands with digital products on web, mobile, and connected platforms.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
            Hire Me →
          </button>
        </div>

        {/* Center Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="images/freelancer.png"
            alt="Emily Olivia"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Info Cards */}
        <div className="md:w-1/3 space-y-20  pl-8">
          {/* Card 1 */}
          <div className="flex items-center gap-6">
            <div className="bg-white rounded-full p-4 shadow-md">
              <img
                src="/images/briefcase.png"
                alt="Experience"
                className="h-10 w-10"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">08+</h3>
              <p className="text-gray-600 text-sm leading-tight">
                Years Industry <br />
                Experience Web and <br />
                Graphic Design
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-6">
            <div className="bg-white rounded-full p-4 shadow-md">
              <img
                src="/images/websites.png"
                alt="Websites"
                className="h-10 w-10"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">250+</h3>
              <p className="text-gray-600 text-sm leading-tight">
                Creative Website Delivered <br />
                to World Wide
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-6">
            <div className="bg-white rounded-full p-4 shadow-md">
              <img
                src="/images/happyclients.png"
                alt="Satisfaction"
                className="h-10 w-10"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600 text-sm leading-tight">
                Client Satisfaction With <br />
                On-time Delivery
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
