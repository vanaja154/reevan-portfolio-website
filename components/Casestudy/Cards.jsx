import Image from "next/image";

export default function Cards() {
  const caseStudies = [
    {
      id: 1,
      image: "/images/Casestudy/case-study-1.jpg",
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
    {
      id: 2,
      image: "/images/Casestudy/case-study-3.jpg",
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
    {
      id: 3,
      image: "/images/Casestudy/case-study-4.jpg",
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
    {
      id: 4,
      image: "/images/Casestudy/case-study-3.jpg",
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
    {
      id: 5,
      image: "/images/Casestudy/case-study-1.jpg",
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
    {
      id: 6,
      image: "/images/Casestudy/case-study-4.jpg",
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
  ];

  return (
    <section className="w-full flex justify-center py-12 ">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((caseItem) => (
          <div
            key={caseItem.id}
            className="rounded-xl overflow-hidden shadow-sm group cursor-pointer"
          >
            {/* Image + Title Overlay */}
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl transform transition-transform duration-500 ease-in-out group-hover:scale-110 active:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg drop-shadow-md">
                {caseItem.title}
              </div>
            </div>

            {/* Footer Section */}
            <div className="flex items-center justify-between p-4 bg-white rounded-b-xl shadow-md">
              {/* Logo (Left) */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/Casestudy/mycarto.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>

              {/* Brand + Link (Right side, stacked vertically) */}
              <div className="flex flex-col items-end">
                <span className="font-bold text-gray-800">{caseItem.brand}</span>
                <a
                  href="#"
                  className="text-red-500 font-medium hover:underline text-sm"
                >
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
