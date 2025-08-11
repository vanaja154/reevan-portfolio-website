import Image from "next/image";

export default function LeadHeroSection() {
  return (
    <section className="relative flex flex-col-reverse lg:mt-10 lg:flex-row items-center justify-between px-6 py-16 bg-white">
      {/* Left content */}
      <div className="max-w-xl text-center lg:text-left space-y-6 z-10">
        <p className="text-red-500 font-medium">Full-time Dedicated Agency</p>
        <h1 className="text-4xl lg:text-5xl font-bold">
          <span className="text-red-600">Your Full-Funnel </span>{" "}
          <span className="text-gray-900"> Growth Marketing Agency</span>
        </h1>
        <p className="text-gray-600">
          Reevan solve the world's biggest problems with Expertise. Reevan helps
          global brand with digital products on web, mobile and connected platforms.
        </p>
        <button className="mt-6 inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full shadow hover:bg-red-600 transition">
          Let&apos;s Talk
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Right main image only */}
      <div className="w-full lg:w-1/2 flex justify-center relative mb-10 lg:mb-0">
        <Image
          src="/images/Design/hero.svg"
          alt="Web Design Illustration"
          width={500}
          height={500}
          className="w-3/4 h-auto rounded shadow"
        />
      </div>
    </section>
  );
}