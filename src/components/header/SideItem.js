import styled, { css } from "styled-components";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const SideItemBlock = styled.div`
  .sub-title {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    svg:first-child {
      font-size: 1.5rem;
    }
    .arrow {
      font-size: 1.2rem;
      ${(props) => props.active && `transform: rotate(180deg);`}
    }
    span {
      flex: 1;
      text-align: start;
      margin-left: 0.5rem;
    }
  }

  ul {
    display: flex;
    height: 0;
    overflow: hidden;
    display: flex;
    ${(props) =>
      props.active &&
      css`
        height: 100%;
      `}
  }
  li {
    margin-bottom: 1.3rem;
    font-size: 0.9rem;
  }
`;

const SideItem = ({ item }) => {
  const [active, setActive] = useState(false);

  console.log(active);

  if (item.list) {
    return (
      <SideItemBlock active={active}>
        <div className="sub-title" onClick={() => setActive(!active)}>
          {item.icon}
          <span>{item.title}</span>
          <RiArrowDownSLine className="arrow" active={active} />
        </div>
        <ul className="sub-contents" active={active}>
          <li>
            {item.list.map((li, index) => (
              <SideItem item={li} key={index} />
            ))}
          </li>
        </ul>
      </SideItemBlock>
    );
  } else {
    return <SideItemBlock active={active}>{item.title}</SideItemBlock>;
  }
};

export default SideItem;
