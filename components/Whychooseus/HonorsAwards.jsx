// components/HonorsAwards.jsx
import Image from "next/image";

export default function HonorsAwards() {
  const awardsData = [
    {
      img: "/images/Whychooseus/platinumwinner.png", // replace with your actual image path
      title: "Platinum Winner design award",
      description:
        "Lipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/images/Whychooseus/greataward.png",
      title: "Great design award 2020 – 2021",
      description:
        "Lipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/images/Whychooseus/bestaward.png",
      title: "Best Design brand award 2021",
      description:
        "Lipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/images/Whychooseus/goodaward.png",
      title: "Good app developer 2020 – 2021",
      description:
        "Lipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <p className="text-orange-500 uppercase tracking-wide font-semibold">
          Honors
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Awards & Achievements
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 text-center transition"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={award.img}
                alt={award.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {award.title}
            </h3>
            <p className="text-gray-500 text-sm">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
