import styled from "styled-components";

export const StyleHome = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;

  h1 {
    font-size: var(--font-size-36);
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    a {
      width: 80%;
      padding: 10px;
      color: var(--color-white);
      border-radius: var(--radius-4);
      box-shadow: 0px 2px 2px 1px var(--color-grey-80);
      transition: background-color 0.3s ease;

      &:hover {
        color: var(--primary-color-100);
        background-color: var(--primary-color-10);
        border: 1px solid var(--primary-color-50);
        box-shadow: 0px 1px 5px 1px var(--primary-color-50);
      }
    }

    .page-login {
      background-color: var(--primary-color-100);
    }

    .page-register {
      background-color: var(--primary-color-50);
    }

    @media (min-width: 700px) {
      max-width: 400px;
    }
  }
`;
