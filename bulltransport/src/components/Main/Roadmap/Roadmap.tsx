// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Components
import RoadmapItem from "./RoadmapItem/RoadmapItem";

const Roadmap = () => {
  return (
    <Fragment>
      <Wrapper id="roadmap">
        <p className="header">Road Map</p>

        <div className="">
          <div className=""></div>
        </div>

        <div className="items">
          <RoadmapItem
          align={"left"}
            title={"Stage 1"}
            info={`The 800 Blissful Bulls launches on the Solana blockchain and the community decides the minting price!`}
          />
          <RoadmapItem
            align={"right"}
            title={"Stage 2"}
            info={`The Blissful Bulls gets listed on the secondary marketplaces.`}
            rotateImage={true}
          />
          <RoadmapItem
            align={"left"}
            title={"Stage 3"}
            info={`50% of royalties will go to a community wallet. The community will vote every week on what the SOL will be used for!`}
          />
          <RoadmapItem
            align={"right"}
            title={"Stage 4"}
            info={`A weekly floor-raffle will be introduced!`}
          />
         <RoadmapItem
            align={"left"}
            title={"Stage 5"}
            info={`A female collection will be introduced to give our male bulls some company!`}
          />
          <RoadmapItem
            align={"right"}
            title={"Stage 6"}
            info={`The two genders decide that they want to be a family and the Baby Bulls will be born!`}
          />
           <RoadmapItem
            align={"left"}
            title={"Stage 7"}
            info={`The Blissful Bulls keep growing and the Roadmap 2.0 with future events will be released!`}
          />
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Roadmap;

const Wrapper = styled.div`
  width: 100%;
  color: #fff;
  padding: 0 25px;
  padding-top: 150px;

  .header {
    text-align: center;
    font-size: 2.25rem;
    padding-bottom: 50px;
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
  }

  .line-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;

    width: 100%;
    height: 100%;
    z-index: -1;

    //
    @media only screen and (max-width: 810px) {
      width: 500px;
      margin: 0 auto;
    }

    @media only screen and (max-width: 580px) {
      width: 100%;
    }
    //
  }

  .roadmap-line {
    width: 5px;

    border-radius: 20px;
    background-color: #3e3e3e;

    //
    height: 1100px;
    @media only screen and (max-width: 810px) {
      height: 1050px;
    }
    @media only screen and (max-width: 580px) {
      height: 1150px;
    }
    @media only screen and (max-width: 450px) {
      height: 1150px;
    }
    @media only screen and (max-width: 410px) {
      height: 1150px;
    }
    @media only screen and (max-width: 390px) {
      height: 1250px;
    }
    //

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    //
    @media only screen and (max-width: 810px) {
      left: 91px;
    }

    @media only screen and (max-width: 580px) {
      left: 130px;
    }
    //
  }

  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`;
