import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { BsCart, BsChevronDown } from 'react-icons/bs';

const MainHeadBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--light-gray);  
  padding: 0 3rem;
`;

const HeaderContentsBlock = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 8rem;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin: 0 auto;

  .logo {
    font-size: 1.6rem;
    letter-spacing: -4px;
    font-family: 'Jal_Onuel';
    margin-right: 1.3rem;
  }

  .search {
    position: relative;
    width: 300px;
    height: 40px;
    display: flex;
    margin-left: 1rem;
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      padding-left: 45px;
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
    font-size: 1.6rem;
    margin-right: 0.8rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    .button:not(:last-child) {
      margin-right: 0.5rem;
      padding-right: 0.5rem;
    }
    .login,
    .register {
      border-right: 1px solid var(--middle-gray);
    }
  }

  .write-button {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    line-height: 40px;
    background: var(--blue);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
      background: var(--dark-blue);
    }
  }
`;

const NavLinkStyle = styled(NavLink)`
  margin-right: 1.4rem;
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

const MainHeader = () => {
  return (
    <MainHeadBlock>
      <HeaderContentsBlock>
        <Link to="/" className="logo">오늘의집</Link>
        <nav>
          <NavLinkStyle to="/community" className={({isActive}) => (isActive && "active")}>커뮤니티</NavLinkStyle>
          <NavLinkStyle to="/store" className={({isActive}) => (isActive && "active")}>스토어</NavLinkStyle>
          <NavLinkStyle to="/experts" className={({isActive}) => (isActive && "active")}>이사/시공/수리</NavLinkStyle>
        </nav>
        <div className='search'>
          <MdSearch className='search-icon' />
          <input placeholder='스토어 검색' />
        </div>
        <Link to="cart" className='cart'><BsCart className='cart-icon'/></Link>
        <div className="buttons">
          <Link to="login" className='login button'>로그인</Link>
          <Link to="register" className='register button'>회원가입</Link>
          <Link to="center" className='center button'>고객센터</Link>
        </div>
        <button className="write-button">글쓰기</button>
      </HeaderContentsBlock>
    </MainHeadBlock>
  )
}

export default MainHeader;