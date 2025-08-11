// components/AwardsSection.jsx
import Image from "next/image";

export default function AwardsSection() {
  const awards = [
    {
      img: "/images/topseobrands01.png",
      title: "Platinum Winner design award",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "/images/topseobrands01.png",
      title: "Great design award 2021",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "/images/topseobrands01.png",
      title: "Best brand award 2021",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "/images/topseobrands01.png",
      title: "Good app developer 2020–21",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Heading */}
          <div className="flex flex-col justify-center">
            <p className="text-orange-500 uppercase font-medium tracking-wide">
              HONORS
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
              Awards & <br /> Achievements
            </h2>
          </div>

          {/* Right Side - Awards Grid Centered */}
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 gap-8 items-stretch">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-start h-full w-full"
                >
                  <Image
                    src={award.img}
                    alt={award.title}
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {award.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                    {award.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
