import styled from "styled-components";

export const StyleContainerList = styled.div`
  width: 85%;
  max-width: 600px;
  max-height: 350px;
  overflow-y: auto;
  margin: 30px auto;
  border: 1px solid var(--color-grey-70);
  border-radius: var(--radius-1);
  padding: 0 5px;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: var(--color-grey-60);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-70);
    border-radius: 4px;
  }

  img {
    width: 30px;
    object-fit: cover;
  }

  header {
    width: 100%;
    padding: 10px 5px;
    border-bottom: 1px solid var(--color-grey-70);
    display: flex;
    justify-content: space-between;
    gap: 10px;

    form {
      width: 80%;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      border: 1px solid var(--color-grey-70);
      border-radius: var(--radius-3);

      input {
        width: 90%;
        border-radius: var(--radius-3);
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      gap: 5px;
    }
  }

  main {
    ul {
      margin: 10px 5px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      li {
        border-bottom: 0.5px solid var(--color-grey-70);

        button {
          display: flex;
          gap: 10px;
          align-items: center;

          img {
            border-radius: 50%;
          }
        }
      }
    }
  }

  @media (min-width: 700px) {
    img {
      width: 40px;
    }

    header {
      form {
        padding: 0 15px;
        border-radius: var(--radius-4);
      }
    }
  }
`;
