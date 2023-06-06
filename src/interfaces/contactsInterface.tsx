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
  getContactId: (contactId: number) => void;
  createContact: (data: iContactDataRequest) => void;
  editContact: (contactsId: number, contactsEditedData: iContactData) => void;
  deleteContact: (contactsId: number) => void;
}
