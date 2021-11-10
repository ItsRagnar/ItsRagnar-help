// Styled Components
import styled from "styled-components";

// Components
import FooterSocials from "./FooterSocials/FooterSocials";

const Footer = () => {
  return (
    <Wrapper>
      <FooterSocials />
      <div className="copyright">
        <p className="info">Blissful Bulls NFT</p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  height: max-content;

  margin-top: 50px;

  .copyright {
    padding: 25px;
    color: #fff;
    text-align: center;
  }
`;
