import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <IoIosArrowDropleftCircle />
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <IoIosArrowDroprightCircle />
  </button>
);

export const settings = {
  infinite: false,
  slidesToScroll: 5,
  slidesToShow: 10,
  arrows: true,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
  speed: 500,
  draggable: false,
};
