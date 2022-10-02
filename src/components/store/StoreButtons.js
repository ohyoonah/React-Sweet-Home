import styled from "styled-components";

const StoreBlock = styled.div`
  background: white;
  width: 100%;
  padding: 0 4rem;
  max-width: 1256px;
  margin: 2rem auto;
  @media only screen and (max-width: 1256px) {
    padding: 1rem 3rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    margin: 0 auto;
  }
`;

const StoreButtonBlock = styled.div`
  display: flex;
  justify-content: space-around;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding: 1rem 0;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ButtonItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 65px;
  position: relative;
  img {
    margin-bottom: 10px;
    border-radius: 16px;
    display: inline-block;
  }
  .hot {
    background: var(--red);
    color: white;
    border-radius: 16px;
    width: 40px;
    height: 23px;
    line-height: 23px;
    font-size: 1rem;
    position: absolute;
    top: -6px;
    right: -10px;
  }
  @media only screen and (max-width: 768px) {
    width: 20%;
    padding: 0.5rem;
    font-size: 0.9rem;
    img {
      border-radius: 32px;
    }
    .hot {
      top: 0;
      right: 0;
    }
  }
`;

const StoreButtons = () => {
  return (
    <StoreBlock>
      <StoreButtonBlock>
        <ButtonItemBlock>
          <img
            src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-166350239688239560.png/512/none"
            alt="가을이불"
          />
          <span>가을이불</span>
          <span className="hot">HOT</span>
        </ButtonItemBlock>
        <ButtonItemBlock>
          <img
            src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-166350248032781537.png/512/none"
            alt="인기조명"
          />
          <span>인기조명</span>
        </ButtonItemBlock>
        <ButtonItemBlock>
          <img
            src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-166350257885485547.png/512/none"
            alt="캠핑용품"
          />
          <span>캠핑용품</span>
        </ButtonItemBlock>
        <ButtonItemBlock>
          <img
            src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-166323713270774383.png/512/none"
            alt="오!굿즈"
          />
          <span>오!굿즈</span>
          <span className="hot">HOT</span>
        </ButtonItemBlock>
        <ButtonItemBlock>
          <img
            src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-165897119196068570.png/512/none"
            alt="빠른배송"
          />
          <span>빠른배송</span>
        </ButtonItemBlock>
        <ButtonItemBlock>
          <img
            src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-166210679567973116.png/512/none"
            alt="프리미엄"
          />
          <span>프리미엄</span>
        </ButtonItemBlock>
        <ButtonItemBlock>
          <img
            src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-166210684424160457.png/512/none"
            alt="리퍼마켓"
          />
          <span>리퍼마켓</span>
        </ButtonItemBlock>
        <ButtonItemBlock>
          <img
            src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-166323737414564631.png/512/none"
            alt="신상특가"
          />
          <span>신상특가</span>
        </ButtonItemBlock>
        <ButtonItemBlock>
          <img
            src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-166374132774022994.png/512/none"
            alt="푸드마켓"
          />
          <span>푸드마켓</span>
          <span className="hot">HOT</span>
        </ButtonItemBlock>
        <ButtonItemBlock>
          <img
            src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-166350263716986634.png/512/none"
            alt="취향발견"
          />
          <span>취향발견</span>
        </ButtonItemBlock>
      </StoreButtonBlock>
    </StoreBlock>
  );
};

export default StoreButtons;
