export default function HireDevelopersSection() {
  return (
    <section className="bg-[#fff6f4] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Hire world-class{" "}
            <span >Developers</span> for your Project
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto md:mx-0">
            We have a dexterity team of designers & developers that works on clients projects
            excellently and delivers the project on timeline.
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-base font-medium transition">
            Start Your Project →
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Portfolio/developers.png"
            alt="Hire Developers"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
