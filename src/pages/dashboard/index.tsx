import React, { useContext } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import CreateContactModal from "../../components/Modals/ModalContacts/createContact";

import EditContactModal from "../../components/Modals/ModalContacts/updateContact";
import { ContactsContext } from "../../providers/contactsProvider";

const Dashboard = () => {
  const { isModalCreateContactOpen, isModalEditContactOpen} =
    useContext(ContactsContext);

  return (
    <div>
      {isModalCreateContactOpen && (
        <CreateContactModal />
      )}

      {isModalEditContactOpen  && (
        <EditContactModal />
      )}
      <Header />
      <Main />
    </div>
  );
};

export default Dashboard;
