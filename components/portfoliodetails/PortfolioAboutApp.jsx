
"use client";

export default function PortfolioAboutApp() {
  const techs = [
    { name: "iOS", icon: "/images/apple.png" },
    { name: "Android", icon: "/images/android.png" },
    { name: "Flutter", icon: "/images/flutterio-icon.png" },
    { name: "Java", icon: "/images/java.png" },
    { name: "React Native", icon: "/images/physics.png" },
    { name: "Python", icon: "/images/python.png" },
    // { name: "Java", icon: "/images/java.png" },
    // { name: "Swift", icon: "/images/swift.png" },
    // { name: "PWA", icon: "/images/pwa.png" },
  ];

  return (
    <section className="py-16 bg-[#fff6f5]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-left">
          About App
        </h2>

        {/* Layout Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Text */}
          <div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <p className="text-gray-600">
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>

          {/* Right Icons */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-6  text-center">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 rounded-xl  p-4 hover:shadow-md transition"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-12 w-12 object-contain"
                />
                <p className="text-sm font-medium text-gray-800">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

