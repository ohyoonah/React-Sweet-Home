import styled, { css } from "styled-components";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";

const BannerBlock = styled.div`
  display: block;
  width: 100%;
  height: 50px;
  background: #00bbff;
  z-index: 100;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
  }
  svg {
    position: absolute;
    right: 15px;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
  ${(props) =>
    props.close &&
    css`
      display: none;
    `}

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Banner = () => {
  const [close, setClose] = useState(false);

  return (
    <BannerBlock close={close}>
      <img
        src="https://bucketplace-v2-development.s3.amazonaws.com/uploads/store/banners/store_top_banners/164718394900874613.png"
        alt="배너 이미지"
      />
      <CgClose onClick={() => setClose(true)} />
    </BannerBlock>
  );
};

export default Banner;
