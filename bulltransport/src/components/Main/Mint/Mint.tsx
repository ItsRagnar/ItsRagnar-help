// Styled Components
import styled from "styled-components";

// Components
import MintInfo from "./MintInfo/MintInfo";
import MintButton from "./MintButton/MintButton";

interface Props {
  minter: any;
}

const Mint = (props: Props) => {
  return (
    <Wrapper id="mint">
      {/* CHANGE SRC TO NEW IMAGE */}
      <MintInfo />
      <MintButton minter={props.minter} />
    </Wrapper>
  );
};

export default Mint;

const Wrapper = styled.div`
  padding: 40px 0;
  height: min-content;
  z-index: 1000;
  margin: 0 auto;
  margin-top: 50px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 550px;
  @media only screen and (max-width: 575px) {
    width: 95%;
  }

  .change {
    width: 100%;
    height: 275px;
  }

  border: 1px solid #3BDEFF;
  border-radius: 10px;
`;
