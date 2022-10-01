import { useState, useEffect } from "react";
import styled from "styled-components";
import DealItem from "./DealItem";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { dealData } from "./dealData";

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
  @media only screen and (max-width: 1256px) {
    padding: 0 3rem;
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

const TodayDeal = () => {
  const [mark, setMark] = useState(dealData);

  const onToggle = (id) => {
    setMark(
      mark.map((data) =>
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
        {mark.map((data) => (
          <DealItem key={data.id} data={data} onToggle={onToggle} />
        ))}
      </div>
    </TodayDealBlock>
  );
};

export default TodayDeal;
