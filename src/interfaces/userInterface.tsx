export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface iRegisterData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  image: string;
}

export interface iUserData extends iRegisterData {
  id: number;
}

export interface iApiError {
  response: {
    data: string;
  };
}

export interface iUserContextProvider {
  user: iUserData | null;
  loading: boolean;
  loginSubmit: (data: iLoginData) => void;
  registerSubmit: (data: iRegisterData) => void;
  logout: () => void;
  editUser: (userId: number, userEditedData: iUserData) => void;
  deleteUser: (userId: number) => void;
}
