import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SubHeadBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--light-gray);  
  padding: 0 3rem;
  background: white;
`;

const SubContentsBlock = styled.div`
  height: 50px;
  width: 100%;
  padding: 0 8rem;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin: 0 auto;
`;

const NavLinkStyle = styled(NavLink)`
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 0.7rem 0.3rem;
  color: var(--light-black);
  &.active {
    color: var(--blue);
    font-weight: bold;
    border-bottom: 3px solid var(--blue);
  }
  &:hover {
    color: var(--blue);
  }
`;

const SubHeader = () => {
  return (
    <SubHeadBlock>
      <SubContentsBlock>
        <nav>
          <NavLinkStyle to="/store" className={({isActive}) => (isActive && "active")}>스토어홈</NavLinkStyle>
          <NavLinkStyle to="/store/category" className={({isActive}) => (isActive && "active")}>카테고리</NavLinkStyle>
          <NavLinkStyle to="/store/rank" className={({isActive}) => (isActive && "active")}>베스트</NavLinkStyle>
          <NavLinkStyle to="/store/deal" className={({isActive}) => (isActive && "active")}>오늘의딜</NavLinkStyle>
          <NavLinkStyle to="/store/sale" className={({isActive}) => (isActive && "active")}>리빙빅세일</NavLinkStyle>
          <NavLinkStyle to="/store/special" className={({isActive}) => (isActive && "active")}>주말반짝특가</NavLinkStyle>
          <NavLinkStyle to="/store/goods" className={({isActive}) => (isActive && "active")}>오!굿즈</NavLinkStyle>
          <NavLinkStyle to="/store/quick" className={({isActive}) => (isActive && "active")}>빠른배송</NavLinkStyle>
          <NavLinkStyle to="/store/premium" className={({isActive}) => (isActive && "active")}>프리미엄</NavLinkStyle>
          <NavLinkStyle to="/store/showroom" className={({isActive}) => (isActive && "active")}>기획전</NavLinkStyle>
        </nav>
      </SubContentsBlock>
    </SubHeadBlock>
  )
}

export default SubHeader;