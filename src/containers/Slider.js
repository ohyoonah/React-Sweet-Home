import styled from "styled-components";
import ImageSlider from "../components/slide/ImageSlider";

const SliderBlock = styled.div`
  width: 100%;
`;

const Slider = () => {
  return (
    <SliderBlock>
      <ImageSlider />
    </SliderBlock>
  );
};

export default Slider;
