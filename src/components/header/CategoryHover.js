import styled from "styled-components";
import { categoryData } from "../categories/categoryData";

const CategoryBlock = styled.div`
  background: white;
  height: 150px;
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  padding: 0.5rem 3rem;
  border: 1px solid var(--light-gray);
`;

const ButtonBlock = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  /* overflow-x: scroll; */
`;

const ButtonItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 600;
  width: 100px;
  margin-right: 2rem;
  &:first-child {
    margin-left: 8rem;
  }
  img {
    margin-bottom: 10px;
  }
`

const CategoryHover = () => {
  return (
    <CategoryBlock>
      <ButtonBlock>
        {categoryData.map(({id, name, image}) => {
          return (
            <ButtonItemBlock key={id}>
              <img src={image} alt={image} />
              <span>{name}</span>
            </ButtonItemBlock>
          )
        })}
      </ButtonBlock>
    </CategoryBlock>
  )
}

export default CategoryHover;