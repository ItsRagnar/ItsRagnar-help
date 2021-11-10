// Styled Components
import styled from "styled-components";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  title?: any;
  info?: any;
  pre?: any;
}

const FaqItem = (props: Props) => {
  return (
    <Wrapper>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="icon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="title">{props.title}</p>
        </AccordionSummary>
        <AccordionDetails>
          {props.pre ? (
            <pre className="info">{props.info}</pre>
          ) : (
            <p className="info">{props.info}</p>
          )}
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  );
};

export default FaqItem;

const Wrapper = styled.div`
  &&&&&&& {
    .accordion {
      background-color: #c89fff;
      color: #fff;
      text-align: left;
      border-radius: 10px;

      display: flex !important;
      flex-direction: column;
      justify-content: center !important;
      align-items: space-between !important;

      padding: 0 20px;

      .MuiAccordionDetails-root {
        padding-left: 0px;
      }

      //
      width: 800px;
      @media only screen and (max-width: 825px) {
        width: 90vw;
      }
      //

      .icon {
        fill: #fff;
        transform: scale(1.5);
      }

      .title {
        font-size: 1.5rem;
      }

      .info {
        font-size: 1.1rem;
        font-family: "Roboto", sans-serif;
      }
    }
  }
`;
