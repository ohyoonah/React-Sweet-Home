import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideMenuBlock = styled.div`
  display: none;
  position: fixed;
  top: 0;
  z-index: 2;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  overflow-y: auto;
  padding: 1.5rem 1rem;
  background: white;
  .top-section {
    width: 100%;
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 1rem;
    .logo-buttons {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        font-size: 1.6rem;
        letter-spacing: -4px;
        font-family: "Jal_Onuel";
        margin-right: 1.5rem;
        min-width: 80px;
      }
      span {
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--blue);
        letter-spacing: -1px;
      }
    }
    .login-buttons {
      display: flex;
      justify-content: space-between;
      button {
        width: 48%;
        height: 45px;
        font-weight: 700;
        border-radius: 5px;
        border: 1px solid var(--blue);
        cursor: pointer;
      }
      .login {
        color: var(--blue);
        background: white;
      }
      .register {
        color: white;
        background: var(--blue);
      }
    }
  }
  .nav-section {
    width: 100%;
    padding: 1rem 0;
    margin-top: 0.5rem;
    border-bottom: 1px solid var(--light-gray);
    button {
      background: transparent;
      border: none;
      font-size: 1rem;
      font-weight: 700;
      padding: 0.5rem 0;
      cursor: pointer;
    }
    ul {
      /* display: none; */
      ${(props) => (props.visible ? `display: flex` : `display: none`)}
    }
    li {
      margin-bottom: 1.3rem;
      font-size: 0.9rem;
    }
  }
  .main-section {
    width: 100%;
    border-bottom: 1px solid var(--light-gray);
    ul {
      padding: 0.5rem;
    }
    li {
      font-size: 0.9rem;
      &:not(:last-child) {
        margin-bottom: 1.3rem;
      }
    }
  }
  .bottom-section {
    width: 100%;
    padding-top: 1.5rem;
    span {
      margin-right: 1rem;
      font-size: 0.9rem;
    }
  }
  ${(props) => props.menuOpen && `display: flex`}
`;

const SideMenu = ({ menuOpen }) => {
  const [visible, setVisible] = useState(false);

  return (
    <SideMenuBlock menuOpen={menuOpen}>
      <div className="top-section">
        <div className="logo-buttons">
          <Link to="/" className="logo">
            오늘의집
          </Link>
          <span>앱다운로드 {">"}</span>
        </div>
        <div className="login-buttons">
          <button className="login">로그인</button>
          <button className="register">회원가입</button>
        </div>
      </div>
      <div className="nav-section">
        <div className="main-button">
          <button onClick={() => setVisible(!visible)}>
            {visible ? "커뮤니티 down" : "커뮤니티 up"}
          </button>
          <ul visible={visible}>
            <li>홈</li>
            <li>팔로잉</li>
            <li>사진</li>
            <li>집들이</li>
            <li>노하우</li>
            <li>전문가집들이</li>
            <li>셀프가이드</li>
            <li>질문과답변</li>
            <li>3D인테리어</li>
            <li>이벤트</li>
          </ul>
        </div>
        <div className="main-button">
          <button onClick={(prev) => setVisible(!prev)}>스토어</button>
          <ul visible={visible}>
            <li>스토어홈</li>
            <li>카테고리</li>
            <li>베스트</li>
            <li>오늘의딜</li>
            <li>취향발견</li>
            <li>연휴반짝세일</li>
            <li>오!굿즈</li>
            <li>빠른배송</li>
            <li>프리미엄</li>
            <li>기획전</li>
          </ul>
        </div>
        <div className="main-button">
          <button onClick={(prev) => setVisible(!prev)}>이사/시공/수리</button>
          <ul visible={visible}>
            <li>홈</li>
            <li>인테리어시공</li>
            <li>이사</li>
            <li>설치수리</li>
            <li>우리동네아파트</li>
          </ul>
        </div>
      </div>
      <div className="main-section">
        <ul>
          <li>마이페이지</li>
          <li>나의 쇼핑</li>
          <li>스크랩북</li>
          <li>알림</li>
          <li>이벤트</li>
          <li>사진 올리기</li>
          <li>집들이 글쓰기</li>
          <li>노하우 글쓰기</li>
          <li>상품 리뷰 쓰기</li>
          <li>시공 전문가 리뷰 쓰기</li>
          <li>인테리어 질문하기</li>
          <li>고객센터</li>
        </ul>
      </div>
      <div className="bottom-section">
        <span>전문가 신청</span>
        <span>판매자 신청</span>
      </div>
    </SideMenuBlock>
  );
};

export default SideMenu;
