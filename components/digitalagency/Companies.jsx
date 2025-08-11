import Image from "next/image";

export default function Companies() {
  const companies = [
    { name: "Foxhub", logo: "/images/Design/log1.png" },
    { name: "Asgardia", logo: "/images/Design/logo2.png" },
    { name: "Aven", logo: "/images/Design/logo3.png" },
    { name: "Circle", logo: "/images/Design/logo4.png" },
    { name: "CodeLab", logo: "/images/Design/logo5.png" },
    { name: "Earth 2.0", logo: "/images/Design/logo6.png" },
    { name: "Foxhub2", logo: "/images/Design/logo4.png" },
    { name: "Goldline", logo: "/images/Design/logo2.png" },
    { name: "Hexa", logo: "/images/Design/logo5.png" },
    { name: "Hexlab", logo: "/images/Design/log1.png" },
    { name: "Ideaa", logo: "/images/Design/logo6.png" },
    { name: "Kanba", logo: "/images/Design/logo3.png" },
    { name: "Kyan", logo: "/images/Design/log1.png" },
    { name: "LightAI", logo: "/images/Design/logo5.png" },
    { name: "Liva", logo: "/images/Design/logo3.png" },
    { name: "Muzica", logo: "/images/Design/logo6.png" },
    { name: "Nirastate", logo: "/images/Design/log1.png" },
    { name: "Solaytic", logo: "/images/Design/logo5.png" },
    { name: "Treva", logo: "/images/Design/logo2.png" },
    { name: "Zootv", logo: "/images/Design/logo4.png" },
    { name: "Utosia", logo: "/images/Design/logo6.png" },
    { name: "Velocity9", logo: "/images/Design/log1.png" },
  ];

  return (
    <section className="py-16 bg-pink-50 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        We Work With <span className="text-red-500">Great Companies</span> of All Sizes
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 mb-12">
        Reevan started its operation in the year 1999. We are Worldwide, based Web, App and Digital Marketing Company. Our main Domain is Web Design, App Development, Digital Marketing, Product Design and Cloud Services. Customer Satisfaction and the Highest rate of Customer Repeatability make us one of the pioneers in the field. So, what are you waiting for? Let us discuss your ideas and our innovation in detail because catering your requirement and converting it into a final product is our main goal.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {companies.map((company) => (
          <div
            key={company.name}
            className="bg-white rounded-md shadow p-4 flex items-center justify-center"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
