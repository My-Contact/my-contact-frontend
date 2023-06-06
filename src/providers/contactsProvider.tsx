import { createContext, useEffect, useState } from "react";
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
  const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
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

  useEffect(() => {
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
    getListContacts();
  }, [listContacts]);

  const createContact = async (data: iContactDataRequest) => {
    try {
      setLoading(true);
      await api.post("/contacts", data);
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
    contactId: number,
    iContactDataRequest: iContactDataRequest
  ) => {
    try {
      const response = await api.patch(
        `/contacts/${contactId}`,
        iContactDataRequest,
        headers
      );
      setContact(response.data);
      toast.success("Contato atualizado.");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (contactId: number) => {
    try {
      await api.delete(`/contacts/${contactId}`, headers);
      toast.success("Contato deletado com sucesso.");
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
        getContactId,
        createContact,
        editContact,
        deleteContact,
      }}
    >
      { children }
    </ContactsContext.Provider>
  );
};
