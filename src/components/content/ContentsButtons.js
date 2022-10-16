import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

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

const ContentsButtons = () => {
  const [contentsButton, setContentsButton] = useState(null);

  useEffect(() => {
    axios.get("/api/getItemApi.js").then((res) => {
      setContentsButton(res.data.shortcuts);
    });
  }, []);

  return (
    <StoreBlock>
      <StoreButtonBlock>
        {contentsButton &&
          contentsButton.map(({ id, image_url, label, badge_text }) => (
            <ButtonItemBlock key={id}>
              <img src={image_url} alt={label} />
              <span>{label}</span>
              {badge_text && <span className="hot">{badge_text}</span>}
            </ButtonItemBlock>
          ))}
      </StoreButtonBlock>
    </StoreBlock>
  );
};
export default ContentsButtons;
