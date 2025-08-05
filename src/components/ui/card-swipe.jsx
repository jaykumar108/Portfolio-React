import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/effect-cards"
import { EffectCards } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

export const CardSwipe = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
   display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  `
  return (
    <div className="w-full">
      <style>{css}</style>
      <div className="w-full">
        <Swiper
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          effect={"cards"}
          grabCursor={true}
          loop={true}
          slidesPerView={"auto"}
          rewind={true}
          cardsEffect={{
            slideShadows: slideShadows,
          }}
          modules={[EffectCards, Autoplay, Pagination, Navigation]}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full rounded-3xl">
                <img
                  src={image.src}
                  className="w-full h-full rounded-xl object-cover"
                  alt={image.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
