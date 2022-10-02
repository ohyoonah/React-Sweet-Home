import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import Header from "./Header";
import Slider from "./Slider";
import Product from "./Product";
import Store from "./Store";
import Category from "./Category";
import SideMenu from "../components/header/SideMenu";

const MainBlock = styled.div`
  background: white;
  ${(props) =>
    props.menuOpen &&
    css`
      opacity: 0.3;
      overflow: hidden;
      height: 100vh;
    `}
`;

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClick = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <SideMenu menuOpen={menuOpen} />
      <MainBlock menuOpen={menuOpen}>
        <Header menuOpen={menuOpen} menuClick={menuClick} />
        <Slider />
        <Store />
        <Product />
        <Category />
      </MainBlock>
    </>
  );
};

export default Main;
