import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" />  
      <Route path="/register" />
      {/* <Route element={<ProtectedRoutes />}> */}
         <Route path="/dashboard" />
      {/* </Route> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
