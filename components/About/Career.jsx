import Image from "next/image";
import Link from "next/link";
export default function Career() {
  return (
    <section className="bg-[#fff6f4] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-orange-500 font-medium tracking-wide">CAREER</p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            <span >Collaboration</span>{" "}
            is the art of combining skills to achieve a shared mission.
          </h2>
          <Link href="/contact">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 cursor-pointer">
              Join Our Team <span>→</span>
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-lg h-[400px]">
          <Image
            src="/images/teamwork.png"
            alt="Team working together"
            width={800}
            height={600}
          />
        </div>

      </div>
    </section>
  );
}
