import React from "react";

const ContainerListContacts = () => {
  return (
    <div>
      <header>
        <form>
          <input type="text" placeholder="Pesquisar contatos..." />
          <button>
            <img src="" alt="Search" />
          </button>
        </form>
        <div>
          <button>
            <img src="" alt="Lista de contatos" />
          </button>
          <button>
            <img src="" alt="Novo contato" />
          </button>
        </div>
      </header>
      <main>
        {/* se não tiver contatos, "Adicione novos contatos" */}
        <ul>
          <li>
            <button>
              <img src="" alt="Contato1" />
              <p>
                Nome: <span>Nome do contato</span>
              </p>
            </button>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default ContainerListContacts;
