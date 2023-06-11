import React, { useContext, useEffect, useState } from "react";
import ContainerListContacts from "../ContainerListContacts/ContainerListContacts";
import { StyleMain } from "./style";
import imgProfile from "../../assets/imgs/user.svg";
import { UserContext } from "../../providers/userProvider";

const Main = () => {
  const { user, getUserId } = useContext(UserContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = (userId?: string) => {
    setModalOpen(true);
  };

  useEffect(() => {
    getUserId(Number(localStorage.getItem("@USERID")));
  }, []);

  return (
    <StyleMain>
      <div className="container-perfil">
        <img src={user?.image} alt="Imagem de perfil" />
        <div>
          <h3>{user?.name}</h3>
          <button onClick={() => openModal()}>Editar perfil</button>
        </div>
      </div>
      <ContainerListContacts />
    </StyleMain>
  );
};

export default Main;
