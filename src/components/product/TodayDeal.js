import { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import DealItem from './DealItem';

const TodayDealBlock = styled.div`
  background-color: yellow;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 8rem;
  h2 {
    padding: 1rem 0;
  }
`

const TodayDeal = () => {
  const [deals, setDeals] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://ohou.se/store.json?v=5&wedding=true');
      setDeals(res.data.today_deals)
      console.log(res.data.today_deals)
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <TodayDealBlock>
      <h2>오늘의딜</h2>
      {/* <DealItem deal={deals}/> */}
      {/* {deals.map((deal) => {
        return <DealItem key={deal.production.id} deal={deal}/>
      })} */}
    </TodayDealBlock>
  );
};

export default TodayDeal;