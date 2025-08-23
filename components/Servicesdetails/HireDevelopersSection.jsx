// components/HireDevelopersSection.jsx
import Image from 'next/image';
import Link from "next/link";

export default function HireDevelopersSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

        {/* Left Content */}
        <div className="max-w-xl text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Hire world-class <span className="">developers</span> for your project
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We have a dexterity team of designers & developers that works on clients projects
            excellently and delivers the project on timeline.
          </p>

          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium shadow-lg cursor-pointer">
                Talk to our experts →
              </button>
            </Link>
            <span className="text-gray-500">or</span>
            <a href="tel:+911234567890" className="text-orange-500 font-semibold hover:underline">
              Call Us +91 1234 567 890
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 md:ml-12 flex-shrink-0">
          <Image
            src="/images/Servicesdetails/developers.svg" // Place your image in /public
            width={500} // Set your desired width
            height={400} // Set your desired height
            alt="Customer Support Illustration"
            className="w-full max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
