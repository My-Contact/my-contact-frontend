import React from "react";
import ContainerListContacts from "../ContainerListContacts/ContainerListContacts";

const Main = () => {
  return (
    <section>
      <div>
        <img src="" alt="Imagem de perfil" />
        <h3>Nome do Fulano</h3>
        <button>Editar perfil</button>
      </div>
      <ContainerListContacts />
    </section>
  );
};

export default Main;
