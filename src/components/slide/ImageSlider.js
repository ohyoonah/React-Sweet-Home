import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";

const SliderBlock = styled(Slider)`
  text-align: center;
  overflow-x: hidden;
  .slick-dots {
    position: absolute;
    bottom: 2rem;
    @media only screen and (max-width: 1024px) {
      bottom: 1rem;
    }
  }
  .slick-dots li button:before {
    color: var(--light-gray);
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
    height: 320px;
  }
`;

const ImageSlider = () => {
  const [width, setWidth] = useState(window.innerWidth < 768 ? true : false);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { banners },
      } = await axios.get("/api/getItemApi");
      setImages(banners);
    };
    getData();
  }, []);

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
          {images &&
            images.map(({ id, badge_title, mobile_image }) => (
              <ImageBlock key={id} src={mobile_image.url} alt={badge_title} />
            ))}
        </SliderBlock>
      ) : (
        <SliderBlock {...settings}>
          {images &&
            images.map(({ id, badge_title, pc_image }) => (
              <ImageBlock key={id} src={pc_image.url} alt={badge_title} />
            ))}
        </SliderBlock>
      )}
    </div>
  );
};

export default ImageSlider;
