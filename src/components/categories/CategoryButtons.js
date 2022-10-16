import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { settings } from "./sliderSettings";
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
    @media only screen and (max-width: 1024px) {
      padding: 0 3rem;
    }
    @media only screen and (max-width: 768px) {
      padding: 0 1rem;
    }
  }
  .body {
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media only screen and (max-width: 1024px) {
      padding: 0;
      width: 100%;
      justify-content: start;
    }
  }
`;

const ButtonItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  justify-content: center;
  img,
  svg {
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
    height: 180px;
    img {
      width: 50%;
      margin: 0 auto;
    }
    span {
      margin-bottom: 0.5rem;
    }
    &.more-button {
      height: 180px;
      background: var(--light-gray);
      svg {
        font-size: 3rem;
      }
      cursor: pointer;
      ${({ more }) =>
        more &&
        css`
          display: none;
        `}
    }
  }
  @media only screen and (max-width: 768px) {
    width: 25%;
    padding: 1.5rem;
    font-size: 0.8rem;
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
    height: 100%;
    opacity: 0.3;
    z-index: 1;
    position: absolute;
    bottom: 0;
    color: var(--dark-gray);
    background: white;
  }
  .slick-next {
    right: 55px;
  }
  .slick-prev {
    left: 55px;
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;

const CategoryButton = () => {
  const [category, setCategory] = useState(null);
  const [width, setWidth] = useState(window.innerWidth < 1024 ? true : false);
  const [more, setMore] = useState(false);

  const screenChange = (e) => {
    const matches = e.matches;
    setWidth(matches);
  };

  useEffect(() => {
    const mql = window.matchMedia("screen and (max-width:1024px)");
    mql.addEventListener("change", screenChange);
    return () => mql.removeEventListener("change", screenChange);
  }, []);

  useEffect(() => {
    axios.get("/api/getItemApi").then((res) => {
      setCategory(res.data.categories);
    });
  }, []);

  return (
    <CategoryBlock>
      <CategoryButtonBlock>
        <h2>카테고리</h2>
        {width ? (
          <div className="body">
            {category &&
              category.slice(0, 9).map(({ id, image_url, title }) => {
                return (
                  <ButtonItemBlock key={id}>
                    <img src={image_url} alt={title} />
                    <span>{title}</span>
                  </ButtonItemBlock>
                );
              })}
            <ButtonItemBlock
              more={more}
              className="more-button"
              onClick={() => setMore(true)}
            >
              <HiOutlinePlus />
              <span>더보기</span>
            </ButtonItemBlock>
            {more &&
              category.slice(9).map(({ id, image_url, title }) => {
                return (
                  <ButtonItemBlock key={id}>
                    <img src={image_url} alt={title} />
                    <span>{title}</span>
                  </ButtonItemBlock>
                );
              })}
          </div>
        ) : (
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
        )}
      </CategoryButtonBlock>
    </CategoryBlock>
  );
};

export default CategoryButton;
