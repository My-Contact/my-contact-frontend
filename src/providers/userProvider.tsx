import { createContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  iApiError,
  iLoginData,
  iRegisterData,
  iUserContextProvider,
  iUserData,
  iUserProviderProps,
} from "../interfaces/userInterface";
import { api } from "../service/api";

export const UserContext = createContext<iUserContextProvider>(
  {} as iUserContextProvider
);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<iUserData | null>(null);
  const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
    },
  };

  useEffect(() => {
    const getUserId = async (userId: number) => {
      try {
        setLoading(true);
        const response = await api.get(`users/${userId}`, headers);
        const userProfile = response.data;
        setUser(userProfile);
        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUserId(Number(localStorage.getItem("@USERID")));
  }, []);

  const loginSubmit = async (data: iLoginData) => {
    try {
      setLoading(true);
      const response = await api.post("login", data);
      console.log(response);

      localStorage.setItem("@TOKEN", response.data.userAuth.token);
      localStorage.setItem("@USERID", response.data.userAuth.userId);
      toast.success("Login efetuado!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("E-mail ou senha incorretos!");
    } finally {
      setLoading(false);
    }
  };

  const registerSubmit = async (data: iRegisterData) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Cadastro feito com sucesso!");
      navigate("/login");
    } catch (error) {
      const apiError = error as AxiosError<iApiError>;
      let message = apiError.response?.data;
      console.log(error);
      toast.error(`Desculpe, algo deu errado! ${message}`);
    } finally {
      setLoading(false);
    }
  };

  const editUser = async (userId: number, userEditedData: iUserData) => {
    try {
      const response = await api.patch(
        `/users/${userId}`,
        userEditedData,
        headers
      );
      setUser(response.data);
      toast.success("Dados do usuário atualizados.");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId: number) => {
    try {
      await api.delete(`/users/${userId}`, headers);
      toast.success("Usuário deletado com sucesso.");
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        loginSubmit,
        registerSubmit,
        logout,
        editUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
