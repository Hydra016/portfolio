import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Fade } from "react-reveal";
import CarouselItem from "./CarouselItem";
import AmazeMe from '../../public/AmazeMe.png';
import ImperiaOrganic from '../../public/ImperiaOrganic.png';
import SmartDriver from '../../public/SmartDriver.jpg';
import VetrinaLive from '../../public/VetrinaLive.png';
import Physio from '../../public/Physio.png';
import HouseApp from '../../public/houseApp.png';

const Carousel = () => {
  return (
    <div className="carousel">
      <Fade duration={1500}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <CarouselItem myImage={AmazeMe} projectGithubLink={'https://github.com/Hydra016/AmazeMe'} projectLink={'https://amaze-me-gamma.vercel.app/'} title='AmazaMe' content='AmazeMe is a sleek and modern e-commerce website built with SvelteKit that offers a seamless shopping experience. With a wide range of products and cool animations, it provides an engaging and interactive user interface. Users can browse through different product categories and view product details, including descriptions, images, and prices. The website features a smooth cart functionality that allows users to add products to their cart, view the contents, and proceed to checkout. With its visually appealing design, free API integration, and attention-grabbing animations, AmazeMe offers a unique and enjoyable shopping experience. ' />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <CarouselItem myImage={ImperiaOrganic} projectGithubLink={'https://github.com/Hydra016/Admin-Imperia-Frontend'} projectLink={'https://github.com/Hydra016/Admin-Imperia-Frontend'} title='Imperia Organic Admin' content={`Imperia Organic Admin is an admin application that provides a user-friendly interface for performing CRUD operations (Create, Read, Update, Delete) on data, along with authentication features such as sign-in, sign-up, and super user privileges. Built using Node.js, MongoDB, and Express.js for the backend, and React.js and JavaScript for the frontend, the website offers a modern and responsive UI for seamless interaction. The website is designed for Imperia Organic admins to manage data efficiently, with robust authentication and authorization mechanisms in place. The website's core features include CRUD operations, user authentication, and super user privileges, making it a powerful tool for managing data and user accounts.`}/>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <CarouselItem myImage={SmartDriver} projectGithubLink={'https://github.com/Hydra016/smart-driver'} projectLink={'https://devpost.com/software/smart-driver'} title='Smart Driver' content={`This application was developed for Hackathon which took place in my university in 2022, it was developed using React Native. It tracks a user's speed by sending speed data from their mobile device to a server through websockets. The server applies machine learning (ML) algorithms to process the data and sends back structured responses. The processed data is displayed on a website as graphs, providing visual representations of the speed data. The application enables real-time speed tracking and analysis, making it useful for various applications such as fitness tracking, transportation management, and safety monitoring.`}  />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <CarouselItem myImage={VetrinaLive} projectGithubLink={'https://github.com/Hydra016/Vetrina-Live'} projectLink={'https://hydra016.github.io/Vetrina-Live/'}  title='VetrinaLive Clone' content={`Vetrina Live's Clone is an e-commerce website that is developed using React.js and styled using Material UI. The website serves as a replica of Vetrina Live, a popular e-commerce platform, providing a similar user interface and functionality. The website offers a seamless online shopping experience with a wide range of products, intuitive navigation, and a visually appealing interface. Material UI, a popular UI library for React.js, is used for styling, ensuring a modern and responsive design. The website is designed to mimic the features and user experience of Vetrina Live, making it a suitable choice for those seeking to create a similar e-commerce platform.`} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <CarouselItem myImage={Physio} projectGithubLink={'https://github.com/Hydra016/AI-Physiotherapist'} projectLink={'https://ai-physiotherapist.vercel.app/'}  title='AI Physiotherapist' content={`
Introducing PhysioTrack, the ultimate physiotherapy app designed to revolutionize your rehabilitation journey. This comprehensive solution offers personalized exercise plans, progress tracking, integration with wearable devices, and a convenient communication channel with your physiotherapist. With PhysioTrack, you can monitor your progress, receive tailored workouts, gather valuable data from wearables, and stay connected with your physiotherapist for ongoing support. Say hello to a seamless and effective physiotherapy experience with PhysioTrack.`} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <CarouselItem myImage={HouseApp} projectGithubLink={'https://github.com/Hydra016/house-app'}  title='Property Helper' content={`Property helper is an app which helps users to list, search and manage different properties across amsterdam. It supports filter, search and all the other functionalities required for best experience for a property application.`} />
          </SwiperSlide>
        </Swiper>
      </Fade>
    </div>
  );
};

export default Carousel;
