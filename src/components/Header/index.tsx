import React, { useContext } from "react";
import { UserContext } from "../../providers/userProvider";
import { StyleHeader } from "./style";
import iconLogout from "../../assets/imgs/logout1.svg"

const Header = () => {
  const { logout } = useContext(UserContext);
  return (
    <StyleHeader>
      <div>
        <h1>My Contacts</h1>
        <button type="button" title="Deslogar" onClick={logout}>
          <img src={iconLogout} alt="Sair" />
        </button>
      </div>
    </StyleHeader>
  );
};

export default Header;
