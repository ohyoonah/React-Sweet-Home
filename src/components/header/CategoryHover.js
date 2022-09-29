import styled from "styled-components";
import { useState, useEffect } from "react";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

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
`;

const CategoryHover = () => {
  const [category, setCategory] = useState([]);
  const collectionRef = collection(db, "category");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);
      setCategory(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getData();
  }, [collectionRef]);

  return (
    <CategoryBlock>
      <ButtonBlock>
        {category
          .sort((a, b) => a.id - b.id)
          .map((data) => {
            return (
              <ButtonItemBlock key={data.id}>
                <img src={data.image} alt={data.image} />
                <span>{data.name}</span>
              </ButtonItemBlock>
            );
          })}
      </ButtonBlock>
    </CategoryBlock>
  );
};

export default CategoryHover;
