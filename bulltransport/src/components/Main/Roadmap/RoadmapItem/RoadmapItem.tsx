// Styled Components
import styled from "styled-components";

interface Props {
  align?: any;
  img?: any;
  title?: any;
  info?: any;
  rotateImage?: any;
}

const RoadmapItem = (props: Props) => {
  return (
    <Wrapper align={props.align} rotateImage={props.rotateImage}>
      <div className="img">
        <img src={props.img} alt="" />
        <div className="line"></div>
      </div>

      <div className="content">
        <p className="title">{props.title}</p>
        <p className="info">{props.info}</p>
      </div>
    </Wrapper>
  );
};

export default RoadmapItem;

const Wrapper = styled.div<{ align: any; rotateImage: any }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;

  @media only screen and (max-width: 580px) {
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }

  text-align: left;

  //
  transform: ${(props) => (props.align === "left" ? "" : " scaleX(-1);")};
  @media only screen and (max-width: 810px) {
    transform: ${(props) => (props.align === "left" ? "" : " scaleX(1);")};

    transform: translateX(-62.5px);
  }

  @media only screen and (max-width: 580px) {
    transform: translateX(0);
  }
  //

  .content {
    color: #fff;
    width: 350px;

    //
    @media only screen and (max-width: 810px) {
      width: 400px;
    }

    @media only screen and (max-width: 580px) {
      width: 350px;
    }

    @media only screen and (max-width: 540px) {
      padding-left: 0px;
      width: 325px;
    }

    @media only screen and (max-width: 510px) {
      padding-left: 0px;
      width: 300px;
    }

    @media only screen and (max-width: 480px) {
      padding-left: 20px;
      width: 100%;
    }
    //

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    position: relative;

    //
    transform: ${(props) => (props.align === "left" ? "" : " scaleX(-1);")};
    @media only screen and (max-width: 810px) {
      transform: ${(props) => (props.align === "left" ? "" : "scaleX(1);")};
    }
    //

    .title {
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
      font-weight: 500;
      color: #fff;
    }
    .info {
      color: #8f8f8f;
      font-size: 1.1rem;

      line-height: 31px;
      font-family: acumin-pro-wide, sans-serif;
    }
  }

  .img {
    display: flex;
    align-items: center;

    //
    transform: ${(props) =>
      props.align === "left" ? "translateX(125px)" : "translateX(125px)"};

    @media only screen and (max-width: 580px) {
      transform: ${(props) =>
        props.align === "left" ? "translateX(0px)" : "translateX(0px)"};
    }
    //

    img {
      //  border-radius: 50%;

      // height: 100%;

      transform: ${(props) => props.rotateImage && "scaleX(-1);"};

      //
      width: 150px;
      @media only screen and (max-width: 810px) {
        width: 75px;
        transform: ${(props) => props.rotateImage && "scaleX(1);"};
      }
      //
    }

    .line {

      }
    }
  }
`;
