import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import {imagesData} from "./imagesData";

const SliderBlock = styled(Slider)`
  text-align: center;
  .slick-dots {
    position: absolute;
    bottom: 2rem;
    color: white;
  }
`

const ImageBlock = styled.img`
  height: 380px;
  max-width: 1918px;
`

const ImageSlider = () => {
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
      <SliderBlock {...settings}>
        {imagesData.map(({id, name, image}) =>
          <ImageBlock key={id} src={image} alt={name} />
        )}
      </SliderBlock>
    </div>
  );
}

export default ImageSlider;