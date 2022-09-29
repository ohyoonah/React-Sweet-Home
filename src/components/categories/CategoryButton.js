import styled from "styled-components";
import { useState, useEffect } from "react";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

const CategoryBlock = styled.div`
  padding: 0 8rem;
  background: white;
  max-width: 1440px;
  margin: 0 auto;
`;

const CategoryButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90px;
  img {
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const CategoryButton = () => {
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
      <h2>카테고리</h2>
      <CategoryButtonBlock>
        {category
          .sort((a, b) => a.id - b.id)
          .filter((data) => data.id <= 10)
          .map((data) => {
            return (
              <ButtonItemBlock key={data.id}>
                <img src={data.image} alt={data.image} />
                <span>{data.name}</span>
              </ButtonItemBlock>
            );
          })}
      </CategoryButtonBlock>
    </CategoryBlock>
  );
};

export default CategoryButton;
