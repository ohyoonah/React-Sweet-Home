import styled from "styled-components";
import { useState, useEffect } from "react";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { categoryData } from "./categoryData";

const CategoryBlock = styled.div`
  background: white;
  margin: 0 auto;
  padding: 0 4rem;
  max-width: 1256px;
`;

const CategoryButtonBlock = styled.div`
  .body {
    display: flex;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0;
    width: 100%;
  }
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
  @media only screen and (max-width: 1024px) {
    border: 1px solid var(--light-gray);
    padding: 1rem;
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
