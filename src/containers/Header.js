import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import SubHeader from "../components/header/SubHeader";

const HeaderBlock = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Header = ({ menuClick, menuOpen }) => {
  return (
    <HeaderBlock>
      <MainHeader menuClick={menuClick} />
      <SubHeader menuOpen={menuOpen} />
    </HeaderBlock>
  );
};

export default Header;
