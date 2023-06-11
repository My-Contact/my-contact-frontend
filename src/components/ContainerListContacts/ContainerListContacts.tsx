import React, { useContext, useEffect } from "react";
import imgProfile from "../../assets/imgs/user.svg";
import iconAddContact from "../../assets/imgs/add-contact.svg";
import iconListContacts from "../../assets/imgs/list-contacts1.svg";
import iconSearch from "../../assets/imgs/search2.svg";
import { StyleContainerList } from "./style";
import { ContactsContext } from "../../providers/contactsProvider";


const ContainerListContacts = () => {
  const { listContacts, getListContacts, setModalCreateContactOpen, setSelectedContactId, setModalEditContactOpen } = useContext(ContactsContext);

  const openModal = (
    type: "create" | "edit",
    contactId?: string
  ) => {
    if(type === "create") {
      setModalCreateContactOpen(true);
    } else if(type=== "edit" && contactId) {
      setModalEditContactOpen(true)
      setSelectedContactId(contactId)
    } 
  };


  useEffect(() => {
    getListContacts();
  }, []);

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
          <button onClick={getListContacts}>
            <img src={iconListContacts} alt="Lista de contatos" />
          </button>
          <button onClick={() => openModal("create")}>
            <img src={iconAddContact} alt="Novo contato" />
          </button>
        </div>
      </header>
      <main>
        {listContacts && listContacts.length > 0 ? (
          <ul>
            {listContacts?.map((contact) => {
              const { id, name, phone } = contact;
              return (
                <li key={id}>
                  <button onClick={() => openModal("edit", id.toString())}>
                    <img src={imgProfile} alt={name} />
                    <p>{name}</p>
                    <p>{phone}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Adicione novos contatos...</p>
        )}
      </main>
    </StyleContainerList>
  );
};

export default ContainerListContacts;
