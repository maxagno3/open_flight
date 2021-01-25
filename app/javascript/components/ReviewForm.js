import React from "react";
import styled from "styled-components";

const Field = styled.div`
  border-radius: 4px;

  input {
    width: 96%;
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`;

const ReviewWrapper = styled.div`
  background: white;
  padding: 20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom: 80px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: 100vh;
  padding-top: 100px;
  background: black;
  padding-right: 80px;
`;

const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;
  padding: 12px 12px;
  border: 1px solid #71b406;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`;

const ReviewHeadline = styled.div`
  font-size: 20px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff;
`;

function ReviewForm(props) {
  return (
    <ReviewWrapper>
      <form onSubmit={props.handleSubmit}>
        <ReviewHeadline>
          Have an experience with {props.attributes.name}? Share your review
        </ReviewHeadline>
        <Field>
          <input
            type="text"
            name="title"
            placeholder="Review title"
            onChange={props.handleChange}
            value={props.review.title}
          />
        </Field>
        <Field>
          <input
            type="text"
            name="description"
            placeholder="Review description"
            onChange={props.handleChange}
            value={props.review.description}
          />
        </Field>
        <Field>
          <div className="rating-container">
            <div className="rating-title-text">Rate this Airlines</div>
            [Star rating goes here.]
          </div>
        </Field>
        <SubmitBtn type="submit">Submit your review</SubmitBtn>
      </form>
    </ReviewWrapper>
  );
}

export default ReviewForm;
