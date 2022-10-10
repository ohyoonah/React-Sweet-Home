import { useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import InfiniteItem from "./InfiniteItem";

const Example = () => {
  const getItemPage = async (page = 1, options = {}) => {
    const res = await axios.get(
      `/store/category.json?v=2&order=popular&page=${page}`,
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
  const lastPostRef = useCallback(
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
    return pg.map((item, i) => {
      if (pg.length === i + 1) {
        return <InfiniteItem ref={lastPostRef} key={item.id} item={item} />;
      }
      return <InfiniteItem key={item.id} item={item} />;
    });
  });

  return (
    <>
      {content}
      {isFetchingNextPage && <p>Loading...</p>}
    </>
  );
};

export default Example;
