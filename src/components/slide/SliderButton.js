import styled from "styled-components";
import { imagesData } from "./imagesData";

const SliderButtonBlock = styled.div`
  padding: 0 13rem;
  background: white;
`

const SliderUl = styled.ul`
  height: 40px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid var(--middle-gray);
  border-left: 1px solid var(--middle-gray);
  border-bottom: 1px solid var(--middle-gray);
`;

const SliderLi = styled.li`
  display: flex;
  list-style: none;
  text-align: center;
  line-height: 40px;
  padding-right: 1rem;
  /* flex: 1; */
  &:not(:last-child) {
    border-right: 1px solid var(--middle-gray);
  }
`;

const SliderButton = () => {
  return (
    <SliderButtonBlock>
      <SliderUl>
        {imagesData.map
          (({id, name}) => {
            return <SliderLi>{name}</SliderLi>
          })}
      </SliderUl>
    </SliderButtonBlock>
  )
};

export default SliderButton;