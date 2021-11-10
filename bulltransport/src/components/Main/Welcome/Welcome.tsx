// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

// Components
import WelcomeBackground from "./WelcomeBackground/WelcomeBackground";

const Welcome = () => {
  return (
    <Wrapper>
      <WelcomeBackground />
      <h1 className="header">Blissful Bulls</h1>
      <p className="info">
        Welcome to the minting page for Blissful Bulls! 
        
      </p>
      <Button className="button" variant="contained">
        Minting on November 13th!
      </Button>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  height: 375px;
  text-align: center;
  padding: 0 25px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  .header {
    color: #fff;

    @media only screen and (max-width: 655px) {
      width: 350px;
    }
  }

  .info {
    color: #3BDEFF;
    font-size: 1.25rem;
    line-height: 25px;
  }

  .button {
    background-color: #3BDEFF;
    width: 300px;
    height: 70px;
    font-size: 1.25rem;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #c89fff;
    }
  }
`;
