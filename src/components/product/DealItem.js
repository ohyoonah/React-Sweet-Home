import styled from "styled-components";

const DealItemBlock = styled.div`
  
`;

const DealItem = ({deal}) => {
  const { image_url, brand_name, title, selling_price, review_avg, review_count} = deal;
  return (
    <DealItemBlock>
      <div className="thumbnail">
        <img src={image_url} alt="" />
      </div>
    
    </DealItemBlock>
  )
}

export default DealItem;