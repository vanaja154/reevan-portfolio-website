"use client";

export default function Technologies() {
  const techs = [
    { name: "iOS", icon: "/images/apple.png" },
    { name: "Android", icon: "/images/android.png" },
    { name: "Flutter", icon: "/images/flutterio-icon.png" },
    { name: "Java", icon: "/images/java.png" },
    { name: "React Native", icon: "/images/physics.png" },
    { name: "Python", icon: "/images/apple.png" },
    { name: "Java", icon: "/images/java.png" },
    { name: "Swift", icon: "/images/swift.png" },
    { name: "PWA", icon: "/images/pwa.png" },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          <span className="relative inline-block">
            <span className="relative z-10">Technologies</span>
            <span className="absolute bottom-1 left-0 w-full h-2 bg-[#ffc5b2] z-0 rounded-sm"></span>
          </span>{" "}
          we work with
        </h2>

        {/* First Row: Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
          {techs.slice(0, 6).map((tech, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 w-full h-36 flex flex-col items-center justify-center shadow hover:shadow-md transition"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-10 w-10 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-800">{tech.name}</p>
            </div>
          ))}
        </div>

        {/* Second Row: Wrap and Center */}
        <div className="flex justify-center gap-6 flex-wrap">
          {techs.slice(6).map((tech, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 w-[150px] h-36 flex flex-col items-center justify-center shadow hover:shadow-md transition"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-10 w-10 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-800 text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
