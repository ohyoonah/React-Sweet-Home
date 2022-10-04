import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const MainHeadBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--light-gray);
  @media screen and (max-width: 768px) {
    ${(props) => props.moveScroll && `display: none;`}
  }
`;

const HeaderContentsBlock = styled.div`
  overflow: hidden;
  height: 80px;
  width: 100%;
  padding: 0 4rem;
  max-width: 1256px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin: 0 auto;

  .menu-icon {
    display: none;
    font-size: 1.5rem;
  }

  .logo {
    font-size: 1.6rem;
    letter-spacing: -4px;
    font-family: "Jal_Onuel";
    margin-right: 1.5rem;
    min-width: 80px;
  }

  nav {
    min-width: 320px;
    flex: 1;
    padding-left: 0.7rem;
  }

  .button-block {
    display: flex;
    justify-content: space-between;
    .search {
      flex: 1;
      position: relative;
      width: 320px;
      height: 40px;
      display: flex;
      .search-input {
        position: absolute;
        width: 100%;
        height: 100%;
        padding-left: 50px;
        font-size: 1rem;
        border-radius: 5px;
        outline: none;
        border: 1px solid var(--middle-gray);
      }
      .search-icon {
        position: absolute;
        top: 5px;
        left: 13px;
        z-index: 1;
        font-size: 2rem;
      }
    }
    .cart {
      align-self: center;
      font-size: 1.5rem;
      margin: 0 1.5rem;
    }
    .buttons {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      .login,
      .register {
        border-right: 1px solid var(--middle-gray);
        padding-right: 10px;
      }
      .write-button {
        width: 100%;
        max-width: 90px;
        padding: 0 1rem;
        height: 40px;
        border: none;
        border-radius: 5px;
        background: var(--blue);
        color: white;
        font-size: 0.9rem;
        font-weight: 600;
        &:hover {
          background: var(--dark-blue);
        }
      }
    }
  }

  @media only screen and (max-width: 1256px) {
    padding: 0 3rem;
    nav {
      flex: 1.5;
    }
    .button-block {
      flex: 1;
      .cart {
        margin: 0 0.8rem;
      }
      .buttons {
        .register {
          border-right: none;
          padding-left: 10px;
        }
        .center {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .button-block {
      .search {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    height: 50px;
    justify-content: space-between;
    text-align: center;
    .menu-icon {
      display: block;
      cursor: pointer;
    }
    .logo {
      flex: 1;
      margin: 0;
    }
    nav {
      display: none;
    }
    .button-block {
      flex: none;
      .cart {
        margin: 0;
      }
      .buttons {
        display: none;
      }
    }
  }
`;

const NavLinkStyle = styled(NavLink)`
  margin-right: 1.3rem;
  font-size: 1.1rem;
  font-weight: bold;
  &.active {
    color: var(--blue);
    font-weight: bold;
  }
  &:hover {
    color: var(--blue);
  }
`;

const MainHeader = ({ menuClick }) => {
  const [moveScroll, setMoveScroll] = useState(false);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setMoveScroll(true);
    } else {
      setMoveScroll(false);
    }
  };

  useEffect(() => {
    if (window.matchMedia("screen and (max-width:768px)")) {
      window.addEventListener("wheel", handleScroll);
    }
  }, []);

  return (
    <MainHeadBlock moveScroll={moveScroll}>
      <HeaderContentsBlock>
        <AiOutlineMenu className="menu-icon" onClick={() => menuClick()} />
        <Link to="/" className="logo">
          오늘의집
        </Link>
        <nav>
          <NavLinkStyle
            to="/community"
            className={({ isActive }) => isActive && "active"}
          >
            커뮤니티
          </NavLinkStyle>
          <NavLinkStyle
            to="/"
            className={({ isActive }) => isActive && "active"}
          >
            스토어
          </NavLinkStyle>
          <NavLinkStyle
            to="/experts"
            className={({ isActive }) => isActive && "active"}
          >
            이사/시공/수리
          </NavLinkStyle>
        </nav>
        <div className="button-block">
          <div className="search">
            <MdSearch className="search-icon" />
            <input className="search-input" placeholder="스토어 검색" />
          </div>
          <Link to="cart" className="cart">
            <BsCart className="cart-icon" />
          </Link>
          <div className="buttons">
            <Link to="login" className="login button">
              로그인
            </Link>
            <Link to="register" className="register button">
              회원가입
            </Link>
            <Link to="center" className="center button">
              고객센터
            </Link>
            <button className="write-button">글쓰기</button>
          </div>
        </div>
      </HeaderContentsBlock>
    </MainHeadBlock>
  );
};

export default MainHeader;
