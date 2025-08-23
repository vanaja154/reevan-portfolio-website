// components/CaseStudies.jsx
export default function CaseStudies() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
       backgroundImage: "url('/images/portfolio/office.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fff] opacity-60"></div>
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl lg:mt-20 mt-10 font-extrabold text-gray-800">
          Case Studies
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
        </p>
      </div>
    </section>
  );
}
