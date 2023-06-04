import styled from "styled-components";

export const StyleHeader = styled.section`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 5px 2px var(--color-grey-70);

  div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: var(--font-size-36);
    }

    button {
      img {
        width: 40px;
      }
    }

    @media (min-width: 700px) {
      width: 60%;
    }
  }
`;
