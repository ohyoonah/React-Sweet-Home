import styled, { css } from "styled-components";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const SideItemBlock = styled.div`
  .sub-title {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    font-size: 1rem;
    font-weight: 700;
    margin: 1rem 0;
    svg:first-child {
      font-size: 1.5rem;
    }
    svg:last-child {
      font-size: 1.2rem;
      transition: transform 0.2s;
      ${(props) => props.active && `transform: rotate(180deg);`}
    }
    span {
      flex: 1;
      text-align: start;
      margin-left: 0.5rem;
    }
  }

  .sub-contents {
    display: flex;
    height: 0;
    overflow: hidden;
    ${(props) =>
      props.active &&
      css`
        padding: 0.7rem 1.5rem;
        height: 100%;
      `}
    div {
      font-size: 0.9rem;
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }
  }
`;

const SideItem = ({ item }) => {
  const [active, setActive] = useState(false);

  if (item.list) {
    return (
      <SideItemBlock active={active}>
        <div className="sub-title" onClick={() => setActive(!active)}>
          {item.icon}
          <span>{item.title}</span>
          <RiArrowDownSLine active={active} />
        </div>
        <div className="sub-contents" active={active}>
          <div>
            {item.list.map((li, index) => (
              <SideItem item={li} key={index} />
            ))}
          </div>
        </div>
      </SideItemBlock>
    );
  } else {
    return <SideItemBlock active={active}>{item.title}</SideItemBlock>;
  }
};

export default SideItem;
