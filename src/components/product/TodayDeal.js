import { useState, useEffect } from "react";
import styled from "styled-components";
import DealItem from "./DealItem";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { dealData } from "./dealData";
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

// const TodayDeal = () => {
//   const [deal, setDeal] = useState([]);
//   const dealRef = collection(db, "today_deal");

//   useEffect(() => {
//     const getData = async () => {
//       const data = await getDocs(dealRef);
//       setDeal(data.docs.map((doc) => ({ ...doc.data() })));
//     };
//     getData();
//   }, [dealRef]);

//   const onToggle = (id) => {
//     setDeal(
//       deal.map((data) =>
//         data.id === db.id ? { ...data, check: !data.check } : data
//       )
//     );
//   };

//   return (
//     <TodayDealBlock>
//       <div className="title">
//         <h2>오늘의딜</h2>
//         <span>더보기</span>
//       </div>
//       <div className="items">
//         {deal
//           .sort((a, b) => a.id - b.id)
//           .map((data) => (
//             <DealItem key={data.id} data={data} onToggle={onToggle} />
//           ))}
//       </div>
//     </TodayDealBlock>
//   );
// };

// const TodayDeal = () => {
//   const [mark, setMark] = useState(dealData);

//   const onToggle = (id) => {
//     setMark(
//       mark.map((data) =>
//         data.id === id ? { ...data, check: !data.check } : data
//       )
//     );
//   };

//   return (
//     <TodayDealBlock>
//       <div className="title">
//         <h2>오늘의딜</h2>
//         <span>더보기</span>
//       </div>
//       <div className="items">
//         {mark.map((data) => (
//           <DealItem key={data.id} data={data} onToggle={onToggle} />
//         ))}
//       </div>
//       <button className="deal-button">오늘의딜 더보기{">"}</button>
//     </TodayDealBlock>
//   );
// };

const TodayDeal = () => {
  const [deal, setDeal] = useState(null);

  useEffect(() => {
    axios.get("/api").then((res) => {
      setDeal(res.data.today_deal.today_deals);
    });
  }, []);

  return (
    <TodayDealBlock>
      <div className="title">
        <h2>오늘의딜</h2>
        <span>더보기</span>
      </div>
      {deal && (
        <div className="items">
          {deal.map((item, index) => (
            <DealItem key={index} item={item} />
          ))}
        </div>
      )}
      <button className="deal-button">오늘의딜 더보기{">"}</button>
    </TodayDealBlock>
  );
};

export default TodayDeal;
