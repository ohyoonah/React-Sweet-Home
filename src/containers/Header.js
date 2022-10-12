import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import SubHeader from "../components/header/SubHeader";
import Banner from "../components/header/Banner";
import { useState, useEffect } from "react";

const HeaderBlock = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Header = ({ menuClick, menuOpen }) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const onScroll = () => {
    setScrollHeight(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderBlock>
      <Banner className={scrollHeight < 50 ? "visible" : "hidden"} />
      <MainHeader menuClick={menuClick} menuOpen={menuOpen} />
      <SubHeader menuOpen={menuOpen} />
    </HeaderBlock>
  );
};

export default Header;
