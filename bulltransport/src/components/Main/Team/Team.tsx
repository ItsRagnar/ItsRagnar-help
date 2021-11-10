// Styled Components
import styled from "styled-components";

// Components
import TeamMember from "./TeamMember/TeamMember";

const Team = () => {
  return (
    <Wrapper>

    </Wrapper>
  );
};

export default Team;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 50px;

  @media only screen and (min-width: 625px) {
    padding: 0 25px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  .header {
    font-size: 2.25rem;
    color: #fff;
  }

  .team {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;

    &-single {
      gap: 0;
      flex-wrap: nowrap;
      align-items: center;

      //   display: block;
      //  width: 100%;
    }
  }
`;
