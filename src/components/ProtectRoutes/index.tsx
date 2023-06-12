import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("@TOKEN");
 
  return token ? <Outlet /> : <Navigate to="/" />;
};
