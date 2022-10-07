import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteItem from "./InfiniteItem";

const InfiniteBlock = styled.div`
  padding: 0 4rem;
  max-width: 1256px;
  margin: 5rem auto;
  justify-content: space-between;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      letter-spacing: -2px;
      font-size: 1.3rem;
    }
    span {
      color: var(--red);
      cursor: pointer;
      font-weight: 700;
      &:hover {
        color: var(--light-red);
      }
    }
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .deal-button {
    display: none;
  }
  @media only screen and (max-width: 1256px) {
    padding: 0 3rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    .deal-button {
      display: block;
      width: 100%;
      height: 50px;
      border: none;
      font-size: 1rem;
      font-weight: 700;
      color: var(--gray);
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

const InfiniteLoad = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("/store/category.json?v=2&order=popular&page=1&per=24v=2&")
      .then((res) => {
        setProduct(res.data.selected_products);
        console.log(res.data.selected_products);
      });
  }, []);

  return (
    <InfiniteBlock>
      <div className="title">
        <h2>인기상품</h2>
        <span>더보기</span>
      </div>
      {product && (
        <div className="items">
          {product.map((item, index) => (
            <InfiniteItem key={index} item={item} />
          ))}
        </div>
      )}
    </InfiniteBlock>
  );
};

export default InfiniteLoad;
