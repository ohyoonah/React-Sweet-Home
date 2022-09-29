import { useState, useEffect } from "react";
import styled from "styled-components";
import DealItem from "./DealItem";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

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
  const [deal, setDeal] = useState([]);
  const dealRef = collection(db, "today_deal");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(dealRef);
      setDeal(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getData();
  }, [dealRef]);

  const onToggle = (id) => {
    setDeal(
      deal.map((data) =>
        data.id === id ? { ...data, check: !data.check } : data
      )
    );
  };

  return (
    <TodayDealBlock>
      <div className="title">
        <h2>오늘의딜</h2>
        <span>더보기</span>
      </div>
      <div className="items">
        {deal
          .sort((a, b) => a.id - b.id)
          .map((data) => (
            <DealItem key={data.id} data={data} onToggle={onToggle} />
          ))}
      </div>
    </TodayDealBlock>
  );
};

export default TodayDeal;
