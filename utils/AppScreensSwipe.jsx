import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AppScreensSwipe() {
    const images = [
        "/images/Portfolio/appui-1.png",
        "/images/Portfolio/appui-2.png",
        "/images/Portfolio/appui-3.png",
        "/images/Portfolio/appui-2.png",
        "/images/Portfolio/appui-1.png",
      ];
  return (
    <div>
       <Swiper
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
        </Swiper>
    </div>
  )
}
