import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiHome2Line, RiStoreLine, RiTruckLine } from "react-icons/ri";
import SideItem from "./SideItem";

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
    padding: 1rem;
    border-bottom: 1px solid var(--light-gray);
  }

  .main-section {
    width: 100%;
    padding: 0 1rem;
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
    padding: 0 1rem;
    padding-top: 1.5rem;
    span {
      margin-right: 1rem;
      font-size: 0.9rem;
    }
  }
  ${(props) => props.menuOpen && `display: flex`}
`;

const data = [
  {
    title: "커뮤니티",
    icon: <RiHome2Line />,
    list: [
      { title: "홈" },
      { title: "팔로잉" },
      { title: "사진" },
      { title: "집들이" },
      { title: "노하우" },
      { title: "전문가집들이" },
      { title: "셀프가이드" },
      { title: "질문과답변" },
      { title: "3D인테리어" },
      { title: "이벤트" },
    ],
  },
  {
    title: "스토어",
    icon: <RiStoreLine />,
    list: [
      { title: "스토어홈" },
      { title: "카테고리" },
      { title: "베스트" },
      { title: "오늘의딜" },
      { title: "취향발견" },
      { title: "연휴반짝세일" },
      { title: "오!굿즈" },
      { title: "빠른배송" },
      { title: "프리미엄" },
      { title: "기획전" },
    ],
  },
  {
    title: "이사/시공/수리",
    icon: <RiTruckLine />,
    list: [
      { title: "홈" },
      { title: "인테리어시공" },
      { title: "이사" },
      { title: "설치수리" },
      { title: "우리동네아파트" },
    ],
  },
];

const SideMenu = ({ menuOpen }) => {
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
        {data.map((item, index) => (
          <SideItem key={index} item={item} />
        ))}
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
