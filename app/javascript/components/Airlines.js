import axios from "axios";
import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import AirlineGrid from "./AirlineGrid";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
`;

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

function Airlines() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    // Get all of our airlines from api
    // Update airlines in our state
    axios
      .get("/api/v1/airlines")
      .then(({ data }) => setAirlines(data))
      .catch((err) => console.log(err));
  }, [airlines.length]);

  const grid = airlines.map((item) => (
    <AirlineGrid key={uuid()} attributes={item}>
      {item.name}
    </AirlineGrid>
  ));

  return (
    <Home>
      <Header>
        <h1>Open flights</h1>
        <Subheader>Honest, unbiased flight reviews.</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  );
}

export default Airlines;
