import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Fade } from "react-reveal";

const StrongSkillList = () => {
  return (
    <div className="strong-skill-list">
      <Fade duration={1500}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          speed={1000}
        >
          <SwiperSlide>
            <div className="strong-skill-list-slide skill-list-slide">
              <span className="box-text">JavaScript</span>
              <img
                className="box-icon"
                src="https://cdn-icons-png.flaticon.com/512/1/1492.png"
              />
              <span className="box-text">Professional</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="strong-skill-list-slide skill-list-slide">
              <span className="box-text">TypeScript</span>
              <img
                className="box-icon"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968566.png"
              />
              <span className="box-text">Professional</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="strong-skill-list-slide skill-list-slide">
              <span className="box-text">ReactJS</span>
              <img
                className="box-icon"
                src="https://cdn-icons-png.flaticon.com/512/9440/9440705.png"
              />
              <span className="box-text">Professional</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="strong-skill-list-slide skill-list-slide">
              <span className="box-text">NodeJS</span>
              <img
                className="box-icon"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968526.png"
              />
              <span className="box-text">Professional</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="strong-skill-list-slide skill-list-slide">
              <span className="box-text">CSS</span>
              <img
                className="box-icon"
                src="https://cdn-icons-png.flaticon.com/512/732/732007.png"
              />
              <span className="box-text">Professional</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="strong-skill-list-slide skill-list-slide">
              <span className="box-text">HTML</span>
              <img
                className="box-icon"
                src="https://cdn-icons-png.flaticon.com/512/1051/1051328.png"
              />
              <span className="box-text">Professional</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </Fade>
    </div>
  );
};

export default StrongSkillList;
