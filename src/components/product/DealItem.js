import styled from "styled-components";
import { BsBookmarkFill } from "react-icons/bs";

const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding: 0 0.8rem;
  cursor: pointer;
  span {
    color: var(--gray);
  }
  .image {
    height: 270px;
    overflow: hidden;
    margin-bottom: 0.5rem;
    border-radius: 5px;
    position: relative;
    .mark {
      z-index: 100;
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 1.5rem;
      color: #ffffff84;
    }
  }
  img {
    width: 100%;
    height: 100%;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
  .brand {
    font-size: 0.8rem;
  }
  .title {
    font-size: 0.9rem;
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
`;

const DealItem = ({ data, onToggle }) => {
  return (
    <ItemBlock>
      <div className="image">
        <img src={data.img} alt={data.title} />
        {data.check ? (
          <BsBookmarkFill
            onClick={() => onToggle(data.id)}
            className="mark"
            style={{ color: "var(--blue)" }}
          />
        ) : (
          <BsBookmarkFill onClick={() => onToggle(data.id)} className="mark" />
        )}
      </div>
      <span className="brand">{data.brand}</span>
      <span className="title">{data.title}</span>
      <div>
        <span className="discount">{data.discount}</span>
        <span className="price">{data.price}</span>
      </div>
      <div>
        <span className="star">
          <span>★</span> {data.star}
        </span>
        <span className="review_count">리뷰 {data.review}</span>
      </div>
    </ItemBlock>
  );
};

export default DealItem;
