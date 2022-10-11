import styled from "styled-components";
import React, { useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";

const ContentsBlock = styled.div`
  width: 25%;
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
`;

const ItemBlock = styled.div`
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
    .special-price {
      display: block;
      color: var(--red);
      font-weight: 800;
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
  @media only screen and (max-width: 768px) {
    .image {
      width: 100%;
      max-height: 100%;
    }
  }
`;

const InfiniteItem = React.forwardRef(({ item }, ref) => {
  const [check, setCheck] = useState(false);
  const {
    image_url,
    brand_name,
    name,
    original_price,
    selling_price,
    review_avg,
    review_count,
    is_special_price,
  } = item;

  const discount = Math.floor(
    ((original_price - selling_price) / original_price) * 100
  );

  const itemBody = (
    <ItemBlock>
      <div className="image">
        <img src={image_url} alt={brand_name} />
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
        <span className="brand">{brand_name}</span>
        <span className="title">{name}</span>
        <div>
          {is_special_price && (
            <span className="special-price">파격 세일중!</span>
          )}
          {discount ? <span className="discount">{discount}%</span> : null}
          <span className="price">
            {selling_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
        <div>
          <span className="star">
            <span>★</span> {review_avg}
          </span>
          <span className="review_count">리뷰 {review_count}</span>
        </div>
      </div>
    </ItemBlock>
  );

  return ref ? (
    <ContentsBlock ref={ref}>{itemBody}</ContentsBlock>
  ) : (
    <ContentsBlock>{itemBody}</ContentsBlock>
  );
});

export default InfiniteItem;
