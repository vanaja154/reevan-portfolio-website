// components/CaseStudyGrid.jsx
import Image from "next/image";

export default function Cards() {
  const caseStudies = [
    {
      id: 1,
      image: "/images/case1.jpg", // replace with actual image path
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
    {
      id: 2,
      image: "/images/case2.jpg", // replace with actual image path
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
    {
      id: 3,
      image: "/images/case3.jpg", // replace with actual image path
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
    {
      id: 4,
      image: "/images/case4.jpg", // replace with actual image path
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
    {
      id: 5,
      image: "/images/case5.jpg", // replace with actual image path
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
    {
      id: 6,
      image: "/images/case6.jpg", // replace with actual image path
      title: "How GlamorWear Boosted 220% More Online Sales",
      brand: "GlamorWear",
    },
  ];

  return (
    <section className="w-full flex justify-center py-12 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((caseItem) => (
          <div key={caseItem.id} className="rounded-xl overflow-hidden shadow-sm">
            <div className="relative w-full h-72">
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg">
                {caseItem.title}
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-b-xl shadow-md">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo-cart.png" // replace with actual logo path
                  alt="Logo"
                  width={24}
                  height={24}
                />
                <span className="font-bold text-gray-800">{caseItem.brand}</span>
              </div>
              <a
                href="#"
                className="text-red-500 font-medium hover:underline"
              >
                View Case Study
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
