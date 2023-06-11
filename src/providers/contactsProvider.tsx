import { createContext, useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  iApiError,
  iContactsContextProvider,
  iContactData,
  iContactDataRequest,
  iListContacts,
  iContactsProviderProps,
} from "../interfaces/contactsInterface";
import { api } from "../service/api";

export const ContactsContext = createContext<iContactsContextProvider>(
  {} as iContactsContextProvider
);

export const ContactsProvider = ({ children }: iContactsProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [listContacts, setListContacts] = useState<iListContacts>([]);
  const [contact, setContact] = useState<iContactData | null>(null);
  const [isModalCreateContactOpen, setModalCreateContactOpen] = useState(false);
  const [isModalEditContactOpen, setModalEditContactOpen] = useState(false);
  const [isModalDeleteContactOpen, setModalDeleteContactOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState("");
  const headers = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
    },
  };


  const getContactId = async (contactId: number) => {
    try {
      setLoading(true);
      const response = await api.get(`contacts/${contactId}`, headers);
      const contactForId = response.data;
      setListContacts(contactForId);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getListContacts = async () => {
    try {
      const response = await api.get("contacts", headers);
      setLoading(true);
      setListContacts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const createContact = async (data: iContactDataRequest) => {
    try {
      setLoading(true);
      await api.post("/contacts", data, headers);
      toast.success("Contato criado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      const apiError = error as AxiosError<iApiError>;
      let message = apiError.response?.data;
      console.log(error);
      toast.error(`Desculpe, algo deu errado! ${message}`);
    } finally {
      setLoading(false);
    }
  };

  const editContact = async (
    iContactDataRequest: iContactDataRequest
  ) => {
    try {
      const response = await api.patch(
        `/contacts/${selectedContactId}`,
        iContactDataRequest,
        headers
      );
      setContact(response.data);
      setModalEditContactOpen(false)
      toast.success("Contato atualizado.");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async () => {
    try {
      await api.delete(`/contacts/${selectedContactId}`, headers);
      toast.success("Contato deletado com sucesso.");
      setModalEditContactOpen(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        contact,
        listContacts,
        loading,
        selectedContactId,
        setSelectedContactId,
        isModalCreateContactOpen,
        setModalCreateContactOpen,
        getListContacts,
        getContactId,
        createContact,
        editContact,
        deleteContact,
        isModalEditContactOpen, setModalEditContactOpen,isModalDeleteContactOpen, setModalDeleteContactOpen,

      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
