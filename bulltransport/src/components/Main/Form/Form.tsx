// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

const Form = () => {
  return (
    <Wrapper>

    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  padding: 0 20px;
  padding-top: 100px;

  margin: 0 auto;

  //
  width: 600px;
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
  //

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    width: 100%;

    input {
      background-color: #3e3e3e;
      color: #fff;
      border: none;
      outline: none;
      padding: 20px;
      width: 100%;
      font-size: 1.1rem;
      border-radius: 0px;
    }

    .button {
      width: 100%;
      height: 100px;
      font-size: 1.5rem;
      background-color: #c89fff;
      border-radius: 10px;
      height: 60px;
      color: #fff;

      text-align: center;

      display: flex;
      justify-content: center;
    }
  }

  .header {
    text-align: center;
    font-size: 2.25rem;
    padding-bottom: 50px;
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
  }
`;
