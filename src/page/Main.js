import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import Header from "../containers/Header";
import Slider from "../containers/Slider";
import Content from "../containers/Content";
import TodayDeal from "../containers/TodayDeal";
import Category from "../containers/Category";
import SideMenu from "../components/header/SideMenu";
import Product from "../containers/Product";

const MainBlock = styled.div`
  background: white;
  ${({ menuOpen }) =>
    menuOpen &&
    css`
      opacity: 0.5;
      overflow: hidden;
      height: 100vh;
      pointer-events: none;
    `};
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background: black;
`;

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  const menuClick = () => {
    setMenuOpen(true);
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [ref]);

  return (
    <>
      {menuOpen && (
        <>
          <SideMenu ref={ref} menuOpen={menuOpen} menuClick={menuClick} />
          <Overlay />
        </>
      )}
      <MainBlock menuOpen={menuOpen}>
        <Header menuOpen={menuOpen} menuClick={menuClick} />
        <Slider />
        <Content />
        <TodayDeal />
        <Category />
        <Product />
      </MainBlock>
    </>
  );
};

export default Main;
