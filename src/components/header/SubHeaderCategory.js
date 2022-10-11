import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const CategoryBlock = styled.div`
  background: white;
  height: 170px;
  width: 100%;
  position: absolute;
  left: 0;
  border: 1px solid var(--light-gray);
`;

const ButtonBlock = styled.div`
  display: flex;
  margin: 0 auto;
  overflow-x: auto;
  position: relative;
`;

const ButtonItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  width: 100px;
  padding: 0.3rem;
  padding-bottom: 0;
  margin: 1rem 0;

  &:first-child {
    margin-left: 10%;
    @media screen and (max-width: 1256px) {
      margin-left: 2rem;
    }
  }
  img {
    margin-bottom: 10px;
  }
`;

const CategoryHover = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios.get("/api").then((res) => {
      setCategory(res.data.categories);
    });
  }, []);

  return (
    <CategoryBlock>
      <ButtonBlock>
        {category &&
          category.map(({ id, image_url, title }) => {
            return (
              <ButtonItemBlock key={id}>
                <img src={image_url} alt={title} />
                <span>{title}</span>
              </ButtonItemBlock>
            );
          })}
      </ButtonBlock>
    </CategoryBlock>
  );
};

export default CategoryHover;
