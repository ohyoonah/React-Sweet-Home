import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagesData } from "./imagesData";
import { useState, useEffect } from "react";

const SliderBlock = styled(Slider)`
  text-align: center;
  overflow-x: hidden;
  .slick-dots {
    position: absolute;
    bottom: 2rem;
    color: white;
    @media only screen and (max-width: 1024px) {
      bottom: 1rem;
    }
  }
`;

const ImageBlock = styled.img`
  height: 380px;
  object-fit: cover;
  max-width: 1918px;
  @media only screen and (max-width: 1024px) {
    height: 270px;
  }
  @media only screen and (max-width: 768px) {
    height: 440px;
  }
`;

const ImageSlider = () => {
  const [width, setWidth] = useState(window.innerWidth < 768 ? true : false);

  const screenChange = (e) => {
    const matches = e.matches;
    setWidth(matches);
  };

  useEffect(() => {
    const mql = window.matchMedia("screen and (max-width:768px)");
    mql.addEventListener("change", screenChange);
    return () => mql.removeEventListener("change", screenChange);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      {width ? (
        <SliderBlock {...settings}>
          {imagesData.map(({ id, name, image2 }) => (
            <ImageBlock key={id} src={image2} alt={name} />
          ))}
        </SliderBlock>
      ) : (
        <SliderBlock {...settings}>
          {imagesData.map(({ id, name, image }) => (
            <ImageBlock key={id} src={image} alt={name} />
          ))}
        </SliderBlock>
      )}
    </div>
  );
};

export default ImageSlider;
