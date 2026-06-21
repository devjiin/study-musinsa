import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
import { Navigation } from "swiper/modules";

const swiperParams: SwiperOptions = {
  modules: [Navigation],
  slidesPerView: 3,
  navigation: true,
  // loop: true
};

export default function MainBanner({ mainBanners }) {
  return (
    <Swiper {...swiperParams}>
      {mainBanners.map((banner) => {
        const { bannerId, imageUrl, imageCaption } = banner;
        <SwiperSlide key={bannerId}>
          <a className="link__banner">
            <Image src={imageUrl} alt="" />
            <div className="box__fig-caption">
              <p className="text">{imageCaption.text1}</p>
              <span className="text__sub">{imageCaption.text2}</span>
            </div>
          </a>
        </SwiperSlide>;
      })}
    </Swiper>
  );
}
