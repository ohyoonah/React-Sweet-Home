import styled from "styled-components";
import { useState, useEffect } from "react";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { categoryData } from "./categoryData";

const CategoryBlock = styled.div`
  background: white;
`;

const CategoryButtonBlock = styled.div`
  max-width: 1256px;
  margin: 0 auto;
  h2 {
    padding: 0 4rem;
    letter-spacing: -2px;
    font-size: 1.3rem;
    @media only screen and (max-width: 768px) {
      padding: 0 1rem;
    }
  }
  .body {
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media only screen and (max-width: 1024px) {
      padding: 0;
      width: 100%;
      justify-content: start;
    }
  }
`;

const ButtonItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90px;
  height: 100px;
  font-weight: 700;
  img {
    margin-bottom: 10px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1024px) {
    border: 1px solid var(--light-gray);
    padding: 1rem;
    width: 20%;
    height: 100%;
    img {
      width: 50%;
      margin: 0 auto;
      padding: 1rem 0;
    }
    span {
      margin-bottom: 0.5rem;
    }

    @media only screen and (max-width: 768px) {
      width: 25%;
      padding: 1.5rem;
      font-size: 0.8rem;
    }
  }
`;

// const CategoryButton = () => {
//   const [category, setCategory] = useState([]);
//   const collectionRef = collection(db, "category");

//   useEffect(() => {
//     const getData = async () => {
//       const data = await getDocs(collectionRef);
//       setCategory(data.docs.map((doc) => ({ ...doc.data() })));
//     };
//     getData();
//   }, [collectionRef]);

//   return (
//     <CategoryBlock>
//       <h2>카테고리</h2>
//       <CategoryButtonBlock>
//         {category
//           .sort((a, b) => a.id - b.id)
//           .filter((data) => data.id <= 10)
//           .map((data) => {
//             return (
//               <ButtonItemBlock key={data.id}>
//                 <img src={data.image} alt={data.image} />
//                 <span>{data.name}</span>
//               </ButtonItemBlock>
//             );
//           })}
//       </CategoryButtonBlock>
//     </CategoryBlock>
//   );
// };
const CategoryButton = () => {
  return (
    <CategoryBlock>
      <CategoryButtonBlock>
        <h2>카테고리</h2>
        <div className="body">
          {categoryData
            .filter(({ id }) => id < 10)
            .map(({ id, image, name }) => {
              return (
                <ButtonItemBlock key={id}>
                  <img src={image} alt={image} />
                  <span>{name}</span>
                </ButtonItemBlock>
              );
            })}
        </div>
      </CategoryButtonBlock>
    </CategoryBlock>
  );
};

export default CategoryButton;
