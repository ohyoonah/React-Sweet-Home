import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

const SliderBlock = styled(Slider)`
  text-align: center;
  overflow-x: hidden;
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
  const [image, setImage] = useState([]);
  const collectionRef = collection(db, "image_slider");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);
      setImage(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getData();
  }, [collectionRef]);

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
    dots: false,
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
          {image.map(({ id, name, image2 }) => (
            <ImageBlock key={id} src={image2} alt={name} />
          ))}
        </SliderBlock>
      ) : (
        <SliderBlock {...settings}>
          {image.map(({ id, name, image }) => (
            <ImageBlock key={id} src={image} alt={name} />
          ))}
        </SliderBlock>
      )}
    </div>
  );
};

export default ImageSlider;
