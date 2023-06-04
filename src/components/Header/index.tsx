import React, { useContext } from "react";
import { UserContext } from "../../providers/userProvider";

const Header = () => {
  const { logout } = useContext(UserContext);
  return (
    <section>
      <div>
        <img src="" alt="Logo" />
        <button type="button" title="Deslogar" onClick={logout}>
          <img src="" alt="Sair" />
        </button>
      </div>
    </section>
  );
};

export default Header;
