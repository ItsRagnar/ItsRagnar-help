// Styled Components
import styled from "styled-components";

// Components
import Nav from "./Nav/Nav";
import Welcome from "./Welcome/Welcome";
import Carousel from "./Carousel/Carousel";
import Mint from "./Mint/Mint";
import Roadmap from "./Roadmap/Roadmap";
import Form from "./Form/Form";
import Faq from "./Faq/Faq";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";

interface Props {
  minter: any;
}

const Main = (props: Props) => {
  const x = window.innerWidth;

  return (
    <Wrapper>
      <Nav />
      <Welcome />
      <Carousel />
      <Mint minter={props.minter} />
      <Roadmap />
      <Form />
      <Faq />
      <Team />
      <Footer />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div``;
