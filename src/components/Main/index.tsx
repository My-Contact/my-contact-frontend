import React from "react";
import ContainerListContacts from "../ContainerListContacts/ContainerListContacts";
import { StyleMain } from "./style";
import imgProfile from "../../assets/imgs/user.svg";

const Main = () => {
  return (
    <StyleMain>
      <div className="container-perfil">
        <img src={imgProfile} alt="Imagem de perfil" />
        <div>
          <h3>Nome do Fulano</h3>
          <button>Editar perfil</button>
        </div>
      </div>
      <ContainerListContacts />
    </StyleMain>
  );
};

export default Main;
