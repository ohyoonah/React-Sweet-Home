import styled from "styled-components";
import { useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
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
  @media only screen and (max-width: 1256px) {
    padding: 0 3rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const InfiniteLoad = () => {
  const getItemPage = async (page = 1, options = {}) => {
    const res = await axios.get(
      `/store/category.json?v=2&order=popular&page=${page}&per=24`,
      options
    );
    return res.data.selected_products;
  };

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error,
  } = useInfiniteQuery("/items", ({ page = 1 }) => getItemPage(page), {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  const intObserver = useRef();
  const lastItemRef = useCallback(
    (item) => {
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((items) => {
        if (items[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (item) intObserver.current.observe(item);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (status === "error")
    return <p className="center">Error: {error.message}</p>;

  const content = data?.pages.map((pg) => {
    return pg.map((item, index) => {
      if (pg.length === index + 1) {
        return <InfiniteItem ref={lastItemRef} key={index} item={item} />;
      }
      return <InfiniteItem key={index} item={item} />;
    });
  });

  return (
    <InfiniteBlock>
      <div className="title">
        <h2>인기상품</h2>
        <span>더보기</span>
      </div>
      <div className="items">
        {content}
        {isFetchingNextPage && <p>Loading...</p>}
      </div>
    </InfiniteBlock>
  );
};

export default InfiniteLoad;
