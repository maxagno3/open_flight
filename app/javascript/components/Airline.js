import axios from "axios";
import React, { useEffect, useState } from "react";
import AirlineHeader from "./AirlineHeader";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";
import Review from "./Review";
import uuid from "react-uuid";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Main = styled.div`
  padding-left: 50px;
`;

const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;

function Airline(props) {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    // api/v1/airlines/united-airlines
    // airlines/:slug
    const { slug } = props.match.params;
    const url = `/api/v1/airlines/${slug}`;
    axios
      .get(url)
      .then(({ data }) => setAirline(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;

    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const airline_id = airline.id;

    axios
      .post(`/api/v1/reviews`, { review, airline_id })
      .then(({ data }) => {
        const reviews = [...airline.reviews, data.new_review];
        setAirline({ ...airline, reviews });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((res) => console.log(res));
  };

  let reviews = airline.reviews?.map((item) => {
    return <Review key={uuid()} attributes={item} />;
  });

  return (
    <Wrapper>
      <Column>
        <Main>
          <AirlineHeader attributes={airline} review={airline.reviews} />
          {reviews}
        </Main>
      </Column>
      <Column>
        <ReviewForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          attributes={airline}
          review={review}
        />
      </Column>
    </Wrapper>
  );
}

export default Airline;
