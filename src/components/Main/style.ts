import styled from "styled-components";

export const StyleMain = styled.section`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .container-perfil {
    width: 85%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 10px;

    img {
      width: 60px;
      object-fit: cover;
    }

    div {
      text-align: left;
    }
  }
`;
