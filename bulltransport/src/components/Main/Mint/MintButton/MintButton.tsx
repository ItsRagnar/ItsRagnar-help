// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

interface Props {
  minter: any;
}

const MintButton = (props: Props) => {
  return <Wrapper>{props.minter}</Wrapper>;
};

export default MintButton;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 25px;

  .button {
    width: 100%;
    height: 100px;
    font-size: 1.5rem;
    background-color: #3BDEFF;
    border-radius: 10px;
    height: 60px;

    &:hover {
      background-color: #254290;
    }
  }
`;
