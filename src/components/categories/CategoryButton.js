import styled from "styled-components";
import { categoryData } from "./categoryData";

const CategoryBlock = styled.div`
  padding: 0 8rem;
  background: white;
  max-width: 1440px;
  margin: 0 auto;
`

const CategoryButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90px;
  img {
    margin-bottom: 10px;
  }
`

const CategoryButton = () => {
  return (
    <CategoryBlock>
      <h2>카테고리</h2>
      <CategoryButtonBlock >
      {categoryData
        .filter(({id}) => id < 10)
        .map(({id, image, name}) => {
          return (
            <ButtonItemBlock key={id}>
              <img src={image} alt={image} />
              <span>{name}</span>
            </ButtonItemBlock>
          )
        })
      }
      </CategoryButtonBlock>
    </CategoryBlock>
  )
}

export default CategoryButton;