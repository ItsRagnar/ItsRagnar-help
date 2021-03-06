// Styled Components
import styled from "styled-components";

const MintHeader = () => {
  return (
    <Wrapper>
      <p className="info">
        Enter the amount of Luna Stars
        <br />
        you would like to mint.
      </p>
    </Wrapper>
  );
};

export default MintHeader;

const Wrapper = styled.div`
  height: max-content;
  width: 100%;
  padding: 0 25px;
  color: #254290;

  .header {
    font-size: 2.25rem;
  }

  .info {
    font-size: 1.375rem;
    padding-top: 20px;
  }

  img {
    position: absolute;
    top: 35px;
    right: -75px;
    transform: scale(0.5);

    @media only screen and (max-width: 535px) {
      top: 65px;
    }

    @media only screen and (max-width: 425px) {
      top: 75px;
    }
  }
`;
