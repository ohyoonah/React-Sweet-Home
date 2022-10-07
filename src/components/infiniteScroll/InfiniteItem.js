import styled from "styled-components";
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

const InfiniteItem = ({ item }) => {
  // const [check, setCheck] = useState(false);
  const { image_url, brand_name, name } = item;

  return (
    <ItemBlock>
      <div className="image">
        <img src={image_url} alt={brand_name} />
      </div>
      <div className="body">
        <span className="brand">{brand_name}</span>
        <span className="title">{name}</span>
      </div>
    </ItemBlock>
  );
};

export default InfiniteItem;
