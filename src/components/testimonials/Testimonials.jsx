import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  },
  {
    avatar: AVTR2,
    name: "Shatte Wale",
    review:
      "Lorem ipsum dolor sit amet. Sed dolores fuga sed quos totam in reiciendis beatae eos repellat molestiae aut laborum modi aut deleniti architecto? Et error voluptatem ut sunt culpa eos culpa ipsa. Id omnis assumenda ut nostrum ",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Ad sint sequi est modi vitae in voluptatibus omnis et necessitatibus totam eum itaque molestiae est nemo quod qui nemo obcaecati? Et ipsum necessitatibus sed omnis nostrum sed corporis magni. Aut quia perspiciatis in nemo harum in aliquam.",
  },
  {
    avatar: AVTR4,
    name: "Alice McBrown",
    review:
      "dolor et doloremque excepturi ex dolores enim et dolorem doloremque qui rerum quibusdam. Non dolor maxime aut galisum distinctio eum voluptatem laborum ut quia eligendi non assumenda officiis id maiores recusandae eos enim asperiores.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="pict" />
              </div>
              <h5>{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
