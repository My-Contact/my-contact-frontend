import React from "react";
import imgProfile from "../../assets/imgs/user.svg";
import iconAddContact from "../../assets/imgs/add-contact.svg";
import iconListContacts from "../../assets/imgs/list-contacts1.svg";
import iconSearch from "../../assets/imgs/search2.svg";
import { StyleContainerList } from "./style";

const ContainerListContacts = () => {
  return (
    <StyleContainerList>
      <header>
        <form>
          <input type="text" placeholder="Pesquisar contatos..." />
          <button>
            <img src={iconSearch} alt="Search" />
          </button>
        </form>
        <div>
          <button>
            <img src={iconListContacts} alt="Lista de contatos" />
          </button>
          <button>
            <img src={iconAddContact} alt="Novo contato" />
          </button>
        </div>
      </header>
      <main>
        {/* se não tiver contatos, "Adicione novos contatos" */}
        <ul>
          <li>
            <button>
              <img src={imgProfile} alt="Contato1" />
              <p>Nome do contato</p>
            </button>
          </li>
        </ul>
      </main>
    </StyleContainerList>
  );
};

export default ContainerListContacts;
