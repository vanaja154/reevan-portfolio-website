"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AppScreensSwipe from "@/utils/AppScreensSwipe";

export default function AppScreens() {
  const images = [
    "/images/Portfolio/appui-1.png",
    "/images/Portfolio/appui-2.png",
    "/images/Portfolio/appui-3.png",
    "/images/Portfolio/appui-2.png",
    "/images/Portfolio/appui-1.png",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          <span className="text-black">App</span>{" "}
          <span className="text-black">Screens</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa.
        </p>

        {/* Carousel */}
        {/* <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, reverseDirection: true, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={src}
                  alt={`App screen ${index + 1}`}
                  className="max-h-[500px] w-auto rounded-xl shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <AppScreensSwipe />
      </div>
    </section>
  );
}
