import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route element={<ProtectedRoutes />}> */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* </Route> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
