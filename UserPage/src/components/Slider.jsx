import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";

const Slider = () => {
  const slides = [
    <SwiperSlide key="1">
      <div className="banner-top2">
        <div className="banner-info-wthree">
          <h3>Nike</h3>
          <p>See how good they feel.</p>
        </div>
      </div>
    </SwiperSlide>,
    <SwiperSlide key="2">
      <div className="banner-top3">
        <div className="banner-info-wthree">
          <h3>Heels</h3>
          <p>For All Walks of Life.</p>
        </div>
      </div>
    </SwiperSlide>,
    <SwiperSlide key="3">
      <div className="banner-top">
        <div className="banner-info-wthree">
          <h3>Sneakers</h3>
          <p>See how good they feel.</p>
        </div>
      </div>
    </SwiperSlide>,
    <SwiperSlide key="4">
      <div className="banner-top1">
        <div className="banner-info-wthree">
          <h3>Adidas</h3>
          <p>For All Walks of Life.</p>
        </div>
      </div>
    </SwiperSlide>,
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {slides}
    </Swiper>
  );
};

export default Slider;
