// Styled Components
import styled from "styled-components";

const MintInfo = () => {
  return (
    <Wrapper>
      <div className="content">
        <p className="price">
          <span>0.25</span> SOL Each
        </p>

        <p className="remaining">
          Coming soon! Luna NFTs!{" "}
        </p>
      </div>
    </Wrapper>
  );
};

export default MintInfo;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  text-align: center;
  padding: 0 25px;
  color: #fff;

  display: flex;
  flex-direction: column;
  gap: 30px;

  .content {
    background-color: #3BDEFF;
    border-radius: 10px;
    padding: 12px;
    .heading {
      font-size: 1.5rem;
    }

    .price {
      font-size: 2.25rem;

      span {
        font-weight: 700;
      }
    }

    .remaining {
      font-size: 1.5rem;
    }
  }
`;
