import styled from "styled-components";

export const ModalBaseStyled = styled.div`
  align-items: center;
  animation: show-background 0.8s ease;
  background-color: rgba(0, 0, 0, 0.76);
  backdrop-filter: blur(4px);
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  z-index: 3;
  width: 100%;
  -webkit-animation: show-background 0.8s ease;

  @-webkit-keyframes show-background {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: rgba(0, 0, 0, 0.76);
    }
  }

  @keyframes show-background {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: rgba(0, 0, 0, 0.76);
    }

}
`;
