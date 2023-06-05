import React, { useContext } from "react";
import ContainerListContacts from "../ContainerListContacts/ContainerListContacts";
import { StyleMain } from "./style";
import imgProfile from "../../assets/imgs/user.svg";
import { UserContext } from "../../providers/userProvider";

const Main = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  
  return (
    <StyleMain>
      <div className="container-perfil">
        <img src={user?.image} alt="Imagem de perfil" />
        <div>
          <h3>{user?.name}</h3>
          <button>Editar perfil</button>
        </div>
      </div>
      <ContainerListContacts />
    </StyleMain>
  );
};

export default Main;
