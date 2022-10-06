import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

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
`;

const SliderBlock = styled(Slider)`
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  overflow-x: hidden;
  position: relative;
  .slick-arrow {
    width: 40px;
    height: 40px;
    background: black;
  }
  .slick-next {
    position: absolute;
    bottom: 0;
    right: -10px;
  }
  .slick-prev {
    position: absolute;
    bottom: 0;
    left: -10px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0;
    width: 100%;
    justify-content: start;
  }
`;

const ButtonItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  justify-content: center;
  img {
    width: 90px;
    margin: 0 auto;
    cursor: pointer;
  }
  span {
    display: inline-block;
    margin-top: 10px;
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
// const CategoryButton = () => {
//   return (
//     <CategoryBlock>
//       <CategoryButtonBlock>
//         <h2>카테고리</h2>
//         <div className="body">
//           {categoryData
//             .filter(({ id }) => id < 10)
//             .map(({ id, image, name }) => {
//               return (
//                 <ButtonItemBlock key={id}>
//                   <img src={image} alt={image} />
//                   <span>{name}</span>
//                 </ButtonItemBlock>
//               );
//             })}
//         </div>
//       </CategoryButtonBlock>
//     </CategoryBlock>
//   );
// };
const CategoryButton = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios.get("/api").then((res) => {
      setCategory(res.data.categories);
    });
  }, []);

  const settings = {
    infinite: false,
    slidesToScroll: 5,
    slidesToShow: 10,
    arrow: true,
    speed: 500,
    draggable: false,
  };

  return (
    <CategoryBlock>
      <CategoryButtonBlock>
        <h2>카테고리</h2>
        <SliderBlock {...settings}>
          {category &&
            category.map(({ id, image_url, title }) => {
              return (
                <ButtonItemBlock key={id}>
                  <img src={image_url} alt={title} />
                  <span>{title}</span>
                </ButtonItemBlock>
              );
            })}
        </SliderBlock>
      </CategoryButtonBlock>
    </CategoryBlock>
  );
};

export default CategoryButton;
