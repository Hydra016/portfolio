import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Fade } from "react-reveal";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Fade duration={1500}>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          grabCursor= {true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          freeMode={true}
          speed={1000}
        >
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/256/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="soft skill" />
            <span className="skill-list-slide-text">MongoDB</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/256/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-bold-tal-revivo.png" alt="soft skill" />
            <span className="skill-list-slide-text">Vue JS</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/256/external-nuxt-js-a-free-and-open-source-web-application-framework-logo-filled-tal-revivo.png" alt="soft skill" />
            <span className="skill-list-slide-text">Nuxt JS</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://img.icons8.com/material-rounded/256/js.png" alt="soft skill" />
            <span className="skill-list-slide-text">Next JS</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://img.icons8.com/wired/256/svetle.png" alt="soft skill" />
            <span className="skill-list-slide-text">Svelte Kit</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://cdn-icons-png.flaticon.com/512/5968/5968550.png" alt="soft skill" />
            <span className="skill-list-slide-text">Sass</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://img.icons8.com/ios-filled/256/react-native.png" alt="soft skill" />
            <span className="skill-list-slide-text">React Native</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://img.icons8.com/ios-filled/256/php-logo.png" alt="soft skill" />
            <span className="skill-list-slide-text">PHP</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://img.icons8.com/ios-filled/256/wordpress.png" alt="soft skill" />
            <span className="skill-list-slide-text">Wordpress</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://cdn-icons-png.flaticon.com/512/5815/5815809.png" alt="soft skill" />
            <span className="skill-list-slide-text">My SQL</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://img.icons8.com/ios-filled/256/angularjs.png" alt="soft skill" />
            <span className="skill-list-slide-text">Angular JS</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill-list-slide">
            <img className="skill-list-slide-img" src="https://img.icons8.com/ios-filled/256/docker.png" alt="soft skill" />
            <span className="skill-list-slide-text">Docker</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </Fade>
    </div>
  );
};

export default SkillList;
