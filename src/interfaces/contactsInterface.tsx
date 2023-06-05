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
    listContacts: Array<iContactData>;
    loading: boolean;
    createContact: (data: iContactDataRequest) => void;
    editcontacts: (contactsId: number, contactsEditedData: iContactData) => void;
    deletecontacts: (contactsId: number) => void;
}
