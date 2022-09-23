import styled from "styled-components";
import ImageSlider from "../components/slide/ImageSlider";
import SliderButton from "../components/slide/SliderButton";

const SliderBlock = styled.div`
  width: 100%;
`

const Slider = () => {
  return (
    <SliderBlock>
      <ImageSlider />
      <SliderButton />
    </SliderBlock>
  )
}

export default Slider;