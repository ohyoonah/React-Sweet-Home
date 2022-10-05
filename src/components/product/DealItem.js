import styled from "styled-components";
import { BsBookmarkFill } from "react-icons/bs";
import { useState } from "react";

const ItemBlock = styled.div`
  width: 25%;
  padding: 1rem 0.5rem;
  cursor: pointer;
  span {
    color: var(--gray);
  }
  .d-day {
    position: absolute;
    top: 10px;
    left: 10px;
    background: var(--red);
    color: white;
    border-radius: 5px;
    padding: 0.3rem;
    font-size: 0.8rem;
    font-weight: 700;
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

// const DealItem = ({ data, onToggle }) => {
//   const { id, title, brand, img, discount, price, star, review, check } = data;

//   return (
//     <ItemBlock>
//       <div className="image">
//         <img src={img} alt={title} />
//         {check ? (
//           <BsBookmarkFill
//             onClick={() => onToggle(id)}
//             className="mark"
//             style={{ color: "var(--blue)" }}
//           />
//         ) : (
//           <BsBookmarkFill onClick={() => onToggle(id)} className="mark" />
//         )}
//       </div>
//       <div className="body">
//         <span className="brand">{brand}</span>
//         <span className="title">{title}</span>
//         <div>
//           <span className="discount">{discount}</span>
//           <span className="price">{price}</span>
//         </div>
//         <div>
//           <span className="star">
//             <span>★</span> {star}
//           </span>
//           <span className="review_count">리뷰 {review}</span>
//         </div>
//       </div>
//     </ItemBlock>
//   );
// };

const DealItem = ({ item }) => {
  const [check, setCheck] = useState(false);
  const { title, production, end_at, start_at, sub_images } = item;
  const discount = Math.floor(
    ((production.original_price - production.selling_price) /
      production.original_price) *
      100
  );
  const dDay = Math.floor(
    (Date.parse(end_at) - Date.now()) / (1000 * 60 * 60 * 24)
  );

  return (
    <ItemBlock>
      <div className="image">
        <img src={production.image_url} alt={title} />
        <div className="d-day">{dDay}일 남음</div>
        {check ? (
          <BsBookmarkFill
            // onClick={() => onToggle(production.id)}
            className="mark"
            style={{ color: "var(--blue)" }}
          />
        ) : (
          <BsBookmarkFill className="mark" />
        )}
      </div>
      <div className="body">
        <span className="brand">{production.brand.name}</span>
        <span className="title">{title}</span>
        <div>
          {discount ? <span className="discount">{discount}%</span> : null}
          <span className="price">{production.selling_price}</span>
        </div>
        <div>
          <span className="star">
            <span>★</span> {production.review_avg}
          </span>
          <span className="review_count">리뷰 {production.review_count}</span>
        </div>
      </div>
    </ItemBlock>
  );
};

export default DealItem;
