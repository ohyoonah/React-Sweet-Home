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
  const ref = useRef();

  const menuClick = () => {
    setMenuOpen(true);
  };

  const onCloseMenu = (e) => {
    if (menuOpen && ref.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", onCloseMenu);
    return () => {
      window.removeEventListener("mousedown", onCloseMenu);
    };
  }, []);

  return (
    <>
      {menuOpen ? (
        <>
          <SideMenu menuOpen={menuOpen} menuClick={menuClick} />
          <Overlay ref={ref} />
          <MainBlock menuOpen={menuOpen}>
            <Header menuOpen={menuOpen} menuClick={menuClick} />
            <Slider />
            <Store />
            <Product />
            <Category />
          </MainBlock>
        </>
      ) : (
        <MainBlock menuOpen={menuOpen}>
          <Header menuOpen={menuOpen} menuClick={menuClick} />
          <Slider />
          <Store />
          <Product />
          <Category />
        </MainBlock>
      )}
    </>
  );
};

export default Main;
