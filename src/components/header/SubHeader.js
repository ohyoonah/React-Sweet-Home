import styled from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CategoryHover from './CategoryHover';

const SubHeadBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--light-gray);  
  padding: 0 4rem;
  background: white;
  position: relative;
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
  margin-right: 0.8rem;
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
  span {
    background: var(--red);
    color: white;
    border-radius: 50%;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 0.8rem;
    text-align: center;
    margin-left: 3px;
  }
`;

const SubHeader = () => {
  const [visible, setVisible] = useState(false);

  return (
    <SubHeadBlock>
      <SubContentsBlock>
        <nav>
          <NavLinkStyle to="/store" className={({isActive}) => (isActive && "active")}>스토어홈</NavLinkStyle>
          <NavLinkStyle 
            to="/store/category" 
            className={({isActive}) => (isActive && "active")} 
            onMouseOver={() => setVisible(true)}
            onMouseOut={() => setVisible(false)}
          >카테고리
          </NavLinkStyle>
          <NavLinkStyle to="/store/rank" className={({isActive}) => (isActive && "active")}>베스트</NavLinkStyle>
          <NavLinkStyle to="/store/deal" className={({isActive}) => (isActive && "active")}>오늘의딜</NavLinkStyle>
          <NavLinkStyle to="/store/sale" className={({isActive}) => (isActive && "active")}>
            리빙빅세일
            <span>N</span>
          </NavLinkStyle>
          <NavLinkStyle to="/store/special" className={({isActive}) => (isActive && "active")}>
            주말반짝특가
            <span>N</span>
          </NavLinkStyle>
          <NavLinkStyle to="/store/goods" className={({isActive}) => (isActive && "active")}>
            오!굿즈
            <span>N</span>
          </NavLinkStyle>
          <NavLinkStyle to="/store/quick" className={({isActive}) => (isActive && "active")}>빠른배송</NavLinkStyle>
          <NavLinkStyle to="/store/premium" className={({isActive}) => (isActive && "active")}>
            프리미엄
            <span>N</span>
          </NavLinkStyle>
          <NavLinkStyle to="/store/showroom" className={({isActive}) => (isActive && "active")}>기획전</NavLinkStyle>
        </nav>
        {visible && <CategoryHover />}
      </SubContentsBlock>
    </SubHeadBlock>
  )
}

export default SubHeader;