import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`;

const Title = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: "Poppins-Bold";
  font-size: 18px;
`;

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`;

function Review(props) {
  const { score, title, description } = props.attributes;

  return (
    <Card>
      <Title className="title">{title}</Title>
      <Description className="description">{description}</Description>
    </Card>
  );
}

export default Review;
