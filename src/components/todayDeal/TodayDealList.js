import { useState, useEffect } from "react";
import styled from "styled-components";
import TodayDealItem from "./TodayDealItem";
import axios from "axios";

const TodayDealBlock = styled.div`
  padding: 0 4rem;
  max-width: 1256px;
  margin: 0 auto;
  margin-bottom: 5rem;
  justify-content: space-between;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      letter-spacing: -2px;
      font-size: 1.3rem;
    }
    span {
      color: var(--red);
      cursor: pointer;
      font-weight: 700;
      &:hover {
        color: var(--light-red);
      }
    }
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .deal-button {
    display: none;
  }
  @media only screen and (max-width: 1256px) {
    padding: 0 3rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    .deal-button {
      display: block;
      width: 100%;
      height: 50px;
      border: none;
      font-size: 1rem;
      font-weight: 700;
      color: var(--gray);
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

const TodayDealList = () => {
  const [todayDeal, setTodayDeal] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { today_deal },
      } = await axios.get("/api");
      setTodayDeal(today_deal.today_deals);
    };
    getData();
  }, []);

  return (
    <TodayDealBlock>
      <div className="title">
        <h2>오늘의딜</h2>
        <span>더보기</span>
      </div>
      {todayDeal && (
        <div className="items">
          {todayDeal.map((item, index) => (
            <TodayDealItem key={index} item={item} />
          ))}
        </div>
      )}
      <button className="deal-button">오늘의딜 더보기{">"}</button>
    </TodayDealBlock>
  );
};

export default TodayDealList;
