// components/WebsiteHero.jsx
import Image from 'next/image';

export default function WebsiteHero() {
  return (
    <section className="bg-[#fff4f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between py-16">
        
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-orange-500 font-semibold mb-3">
            INDIA'S HIGHEST RATED WEB DEVELOPMENT COMPANY
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            We build a unique website to convert visitors into customers
          </h1>
          <p className="text-gray-600 mb-6 max-w-lg">
            Hire website developers from us to establish a strong online presence
            that will concrete your path toward success.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Let’s discuss →
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
              <Image
                 src="/images/Servicesdetails/web.svg"
                 alt="Web Development Illustration"
                 width={600} // Set your desired width
                 height={600} // Set your desired height
                 className="w-full max-w-md md:max-w-lg"
              />
          </div>

      </div>
    </section>
  );
}
