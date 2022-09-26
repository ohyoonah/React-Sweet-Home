import { useState } from 'react';
import styled from "styled-components";
import DealItem from './DealItem';
import { dealData } from "./dealData";

const TodayDealBlock = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: 5rem;
  padding: 0 8rem;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: var(--red);
      margin-right: 2rem;
      cursor: pointer;
      &:hover {
        color: var(--light-red);
      }
    }
  }
  .items {
    display: flex;
  }
`;

const TodayDeal = () => {
  const [mark, setMark] = useState(dealData);

  const onToggle = (id) => {
    setMark(mark.map((data) => (
      data.id === id ? 
      { ...data, check: !data.check} : data
    )));
  }

  return (
    <TodayDealBlock>
      <div className='title'>
        <h2>오늘의딜</h2>
        <span>더보기</span>
      </div>
      <div className='items'>
        {mark.map((data) => (
          <DealItem
            key={data.id}
            data={data}
            onToggle={onToggle}
          />
        ))}
      </div>
    </TodayDealBlock>
  );
};

export default TodayDeal;