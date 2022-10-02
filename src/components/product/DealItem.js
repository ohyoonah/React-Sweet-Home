import styled from "styled-components";
import { BsBookmarkFill } from "react-icons/bs";

const ItemBlock = styled.div`
  width: 25%;
  padding: 1rem 0.5rem;
  cursor: pointer;
  span {
    color: var(--gray);
  }
  .image {
    max-height: 270px;
    overflow: hidden;
    margin-bottom: 0.3rem;
    border-radius: 5px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      &:hover {
        transform: scale(1.1);
        transition: transform 0.5s;
      }
    }
    .mark {
      z-index: 100;
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 1.5rem;
      color: #ffffff84;
    }
  }

  .body {
    padding: 0 0.5rem;
    font-size: 0.8rem;
    .brand {
      display: inline-block;
      margin-bottom: 0.3rem;
      font-size: 0.7rem;
    }
    .discount {
      color: var(--blue);
      font-weight: 600;
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }
    .price {
      color: var(--black);
      font-weight: 600;
      font-size: 1.2rem;
    }
    .star {
      margin-right: 0.3rem;
      color: var(--black);
      font-weight: 600;
      span {
        color: var(--blue);
      }
    }
    .review_count {
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
  @media only screen and (max-width: 1024px) {
    width: 33%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid var(--light-gray);
    }
    .image {
      width: 45%;
      height: 300px;
    }
    .body {
      width: 55%;
    }
  }
`;

// const DealItem = ({ data, onToggle }) => {
//   return (
//     <ItemBlock>
//       <div className="image">
//         <img src={data.img} alt={data.title} />
//         {data.check ? (
//           <BsBookmarkFill
//             onClick={() => onToggle(data.id)}
//             className="mark"
//             style={{ color: "var(--blue)" }}
//           />
//         ) : (
//           <BsBookmarkFill onClick={() => onToggle(data.id)} className="mark" />
//         )}
//       </div>
//       <span className="brand">{data.brand}</span>
//       <span className="title">{data.title}</span>
//       <div>
//         <span className="discount">{data.discount}</span>
//         <span className="price">{data.price}</span>
//       </div>
//       <div>
//         <span className="star">
//           <span>★</span> {data.star}
//         </span>
//         <span className="review_count">리뷰 {data.review}</span>
//       </div>
//     </ItemBlock>
//   );
// };

const DealItem = ({ data, onToggle }) => {
  const { id, title, brand, img, discount, price, star, review, check } = data;

  return (
    <ItemBlock>
      <div className="image">
        <img src={img} alt={title} />
        {check ? (
          <BsBookmarkFill
            onClick={() => onToggle(id)}
            className="mark"
            style={{ color: "var(--blue)" }}
          />
        ) : (
          <BsBookmarkFill onClick={() => onToggle(id)} className="mark" />
        )}
      </div>
      <div className="body">
        <span className="brand">{brand}</span>
        <span className="title">{title}</span>
        <div>
          <span className="discount">{discount}</span>
          <span className="price">{price}</span>
        </div>
        <div>
          <span className="star">
            <span>★</span> {star}
          </span>
          <span className="review_count">리뷰 {review}</span>
        </div>
      </div>
    </ItemBlock>
  );
};

export default DealItem;
