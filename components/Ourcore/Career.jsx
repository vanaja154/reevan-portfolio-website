// components/Career.jsx
import CustomButton from "@/utils/CustomButton";
import Image from "next/image";

export default function Career() {
  return (
    <section className="bg-[#fff6f4] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-orange-500 font-medium tracking-wide">CAREER</p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            <span className="">Teamwork</span>{" "}
            is the ability to work together toward a common vision.
          </h2>

          {/* Custom Button */}
          <CustomButton
            title="Join Our Team →"
            href="/contact"
            containerStyles="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2"
          />
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-lg h-[400px]">
          <Image
            src="/images/Ourcore/teamwork.svg"
            alt="Team working together"
            width={800}
            height={600}
          />
        </div>

      </div>
    </section>
  );
}
