"use client";

export default function TypographyPalette() {
  const colors = [
    { name: "Night Black", hex: "#000000" },
    { name: "Cornflower Blue", hex: "#7F95D1" },
    { name: "Tickle Me Pink", hex: "#FF82A9" },
    { name: "Spanish Pink", hex: "#FFC0BE" },
    { name: "Misty Rose", hex: "#FFEBE7" },
  ];

  return (
    <section className="bg-[#fafafa] py-10 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-36">
        
        {/* Typography Section */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-6">
            Typography
          </h3>

          {/* Font Samples */}
          <div className="flex items-center gap-8 mb-10">
            <div>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Poppins]">
                Aa
              </p>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                Poppins<br />Bold
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-normal font-[Roboto]">
                Aa
              </p>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                Roboto<br />Regular
              </p>
            </div>
          </div>

          {/* Example Text */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-[Poppins]">
            Lorem ipsum dolor sit amet
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-[Poppins] mt-2">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mt-4 text-gray-600 font-[Roboto] text-sm sm:text-base lg:text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.
          </p>
        </div>

        {/* Color Palette Section */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-6">
            Color palette
          </h3>

          <div className="space-y-5 sm:space-y-6">
            {colors.map((color, index) => (
              <div key={index} className="flex items-center gap-4 sm:gap-6">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-gray-300 flex-shrink-0"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">
                    {color.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
