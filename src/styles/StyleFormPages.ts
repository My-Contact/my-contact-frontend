import styled from "styled-components";

export const StyleFormPage = styled.main`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  section {
    width: 100%;
    max-width: 500px;
    padding: 30px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    form {
      width: 90%;
      margin: 0 auto;
      
      div {
        padding: 10px 0px 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        border-bottom: 1px solid var(--color-grey-70);
      }

      span {
        grid-column: 1 / span 2;
        color: red;
        font-size: var(--font-size-12);
      }

      button {
        width: 100%;
        margin: 15px 0;
        padding: 10px;
        background-color: var(--primary-color-100);
        color: var(--color-white);
        border-radius: var(--radius-4);
        box-shadow: 0px 2px 3px 1px var(--color-grey-80);
        transition: background-color 0.3s ease;
        font-weight: bold;

        &:hover {
          color: var(--primary-color-100);
          background-color: var(--primary-color-10);
          border: 1px solid var(--primary-color-50);
          box-shadow: 0px 1px 5px 1px var(--primary-color-50);
        }
      }
    }

    h4 {
      font-size: var(--font-size-14);
    }

    a {
      font-size: var(--font-size-12);
      color: var(--secundary-color-100);
    }
  }

  img {
    display: none;
  }

  @media (min-width: 700px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;

    section {
      width: 100%;
      padding: 0;

      input {
        width: 100%;
      }
    }

    img {
      width: 100%;
      max-height: 100%;
      display: block;
      object-fit: cover;
    }
  }
`;
