"use client";

import Image from "next/image";
export default function Cards() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          More case studies
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative">
              <Image
                src="/images/fashion1.jpg"
                alt="Luxe Apparel Growth"
                width={500}
                height={400}
                className="object-cover w-full h-[350px]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-semibold">
                  How NovaWear Boosted Revenue by 220% Through Social Campaigns
                </p>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  src="/icons/shop-logo.png"
                  alt="ShopLink Logo"
                  width={24}
                  height={24}
                />
                <span className="font-bold">ShopLink</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">NovaWear</p>
                <a href="#" className="text-orange-500 text-sm">
                  View Case Study
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative">
              <Image
                src="/images/fashion2.jpg"
                alt="Summer Style Campaign"
                width={500}
                height={400}
                className="object-cover w-full h-[350px]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-semibold">
                  How SunDress Co. Increased Engagement by 185% in Summer Season
                </p>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  src="/icons/shop-logo.png"
                  alt="ShopLink Logo"
                  width={24}
                  height={24}
                />
                <span className="font-bold">ShopLink</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">SunDress Co.</p>
                <a href="#" className="text-orange-500 text-sm">
                  View Case Study
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative">
              <Image
                src="/images/food.jpg"
                alt="Gourmet Brand Growth"
                width={500}
                height={400}
                className="object-cover w-full h-[350px]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-semibold">
                  How Flavorio Expanded Its Market by 150% via Influencer Marketing
                </p>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  src="/icons/shop-logo.png"
                  alt="ShopLink Logo"
                  width={24}
                  height={24}
                />
                <span className="font-bold">ShopLink</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Flavorio</p>
                <a href="#" className="text-orange-500 text-sm">
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
