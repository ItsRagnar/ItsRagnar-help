// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Components
import FaqItem from "./FaqItem/FaqItem";

const Faq = () => {
  return (
    <Fragment>
      <div id="faq"></div>
      <Wrapper>

      </Wrapper>
    </Fragment>
  );
};

export default Faq;

const Wrapper = styled.div`
  &&&&&&& {
    width: 100%;
    height: max-content;

    padding: 0 25px;
    padding-top: 100px;

    color: #fff;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .header {
      font-size: 2.25rem;
      padding-bottom: 30px;
    }
  }
`;
