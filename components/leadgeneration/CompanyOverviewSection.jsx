import Image from "next/image";

export default function CompanyOverviewSection() {
  return (
    <section className="bg-[#FFF5F2] py-16 px-6 lg:px-20">
      {/* Top Brands */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <Image src="/images/Graphics/eptcor.png" alt="Eptcor" width={100} height={40} />
        <Image src="/images/Graphics/julako.png" alt="Julako" width={100} height={40} />
        <Image src="/images/Graphics/bhvr.png" alt="Benedu" width={100} height={40} />
        <Image src="/images/Graphics/mycarto.png" alt="MyCarto" width={100} height={40} />
        <Image src="/images/Graphics/Reegnu.png" alt="Reegnu" width={100} height={40} />
        <Image src="/images/Graphics/circlio.png" alt="Circlio" width={100} height={40} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-red-500 font-semibold uppercase">We are Reevan</p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            <span className="text-red-600">Top-rated</span> Web And Mobile App Development Company
          </h2>
          <p className="text-gray-600">
            Reevan started its operation in the year 1999. We are Worldwide, based Web, App and Digital Marketing Company. Our main Domain is Web Design, App Development, Digital Marketing, Product Design and Cloud Services.
          </p>
          <p className="text-gray-600">
            Customer Satisfaction and the Highest rate of Customer Repeatability make us one of the pioneers in the field. So, what are you waiting for? Let us discuss your ideas and our innovation in detail because catering your requirement and converting it into a final product is our main goal.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-white border border-red-500 text-red-500 px-6 py-3 rounded-full shadow hover:bg-red-50 transition">About Us</button>
            <button className="flex items-center gap-2 text-red-500 hover:text-red-600 transition">
              ▶ Watch Video
            </button>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="lg:w-1/2 bg-white rounded-lg shadow p-8">
          <h3 className="text-2xl font-bold mb-6">Let’s Scale Your Brand, Together</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="border-b border-gray-300 p-2 outline-none" />
              <input type="email" placeholder="Email Address" className="border-b border-gray-300 p-2 outline-none" />
              <input type="text" placeholder="Contact Number" className="border-b border-gray-300 p-2 outline-none" />
              <input type="text" placeholder="Skype" className="border-b border-gray-300 p-2 outline-none" />
              <input type="text" placeholder="Subject" className="border-b border-gray-300 p-2 outline-none" />
              <select className="border-b border-gray-300 p-2 outline-none">
                <option>Interested in</option>
              </select>
            </div>
            <textarea placeholder="Message" className="w-full border-b border-gray-300 p-2 outline-none"></textarea>
            <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full transition">Send your inquiry →</button>
            <p className="text-xs text-gray-500 text-center">We hate spam, and we respect your privacy.</p>
          </form>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h4 className="text-2xl font-bold text-red-600">$20M</h4>
          <p className="text-gray-600">Total Revenue Generated Across Our Service</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h4 className="text-2xl font-bold text-red-600">220%</h4>
          <p className="text-gray-600">Annual Average Profit of Our Customers</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h4 className="text-2xl font-bold text-red-600">120%</h4>
          <p className="text-gray-600">Growing the Business of Our Customers</p>
        </div>
      </div>
    </section>
  );
}
