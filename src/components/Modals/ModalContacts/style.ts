import styled from "styled-components";

export const ModalContainerStyled = styled.div`
  align-items: center;
  background-color: #ffff;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: fixed;
  z-index: 3;
  width: 80%;
  max-height: 90%;
  padding: 20px 0;

  header {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 24px;
    }

    button {
      color: var(--primary-color-100);
      background-color: var(--primary-color-10);
      padding: 10px;
      border-radius: 50%;
    }
  }

  main {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      width: 100%;
      margin: 0 auto;

      section {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
          width: 100%;
        }

        button {
            width: 80%;
        }
      }
    }
  }
`;
