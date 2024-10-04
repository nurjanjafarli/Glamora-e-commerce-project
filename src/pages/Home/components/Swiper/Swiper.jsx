
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import style from './Swiper.module.css'
import { useTranslation } from "react-i18next";
export default () => {
  const {t}=useTranslation();
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }} 
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className={style.slider1}>
          {" "}
       
          <p>{t("home1.home1-yazi1")}</p>
          <h1>{t("home1.home1-yazi2")}</h1>
          <Link to="/shop"><button>{t("home1.home1-yazi3")}</button></Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.slider2}>
        <p>{t("home1.home1-yazi4")}</p>
          <h1>{t("home1.home1-yazi5")}</h1>
          <Link to="/shop"><button>{t("home1.home1-yazi3")}</button></Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
