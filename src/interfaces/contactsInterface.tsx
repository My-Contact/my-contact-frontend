export interface iApiError {
  response: {
    data: string;
  };
}

export interface iContactsProviderProps {
  children: React.ReactNode;
}

export interface iContactDataRequest {
  name: string;
  email: string;
  phone: string;
  image: string;
}

export interface iContactData extends iContactDataRequest {
  id: number;
}

export type iListContacts = iContactData[];

export interface iContactsContextProvider {
  contact: iContactData | null;
  listContacts: iListContacts | null;
  loading: boolean;
  isModalCreateContactOpen:boolean;
  setModalCreateContactOpen: (boolean: boolean) => void;
  selectedContactId: string;
  setSelectedContactId: (contactId: string) => void;
  getListContacts(): Promise<void>;
  getContactId: (contactId: number) => void;
  createContact: (data: iContactDataRequest) => void;
  editContact: (contactsEditedData: iContactData) => void;
  deleteContact: () => void;
  isModalEditContactOpen: boolean; 
  setModalEditContactOpen: (boolean: boolean) => void;
  isModalDeleteContactOpen: boolean; 
  setModalDeleteContactOpen: (boolean: boolean) => void;
}
