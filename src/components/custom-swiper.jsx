import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCube, EffectCreative} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-creative";
import PropTypes from "prop-types";

const CustomSwiper = ({
  images,
  effect = "creative",
  grabCursor = true,
  centeredSlides = true,
  slidesPerView = 1,
  direction = "horizontal",
  loop = true,
  creativeEffectOptions = {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  cubeEffectOptions = {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  autoplayOptions = {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed = 1500,
}) => {
  return (
    <div className='carousel-container'>
      <Swiper
        effect={effect}
        grabCursor={grabCursor}
        centeredSlides={centeredSlides}
        slidesPerView={slidesPerView}
        direction={direction}
        loop={loop}
        creativeEffect={creativeEffectOptions}
        cubeEffect={cubeEffectOptions}
        autoplay={autoplayOptions}
        speed={speed}
        modules={[Autoplay, EffectCube, EffectCreative]}
        className='swiper_container'>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img decoding='async' src={image} alt={`imagen-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

CustomSwiper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  effect: PropTypes.string,
  grabCursor: PropTypes.bool,
  centeredSlides: PropTypes.bool,
  slidesPerView: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  loop: PropTypes.bool,
  creativeEffectOptions: PropTypes.object,
  cubeEffectOptions: PropTypes.object,
  autoplayOptions: PropTypes.object,
  speed: PropTypes.number,
};

export default CustomSwiper;
