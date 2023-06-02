import { Navigate, Route, Routes } from "react-router-dom";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/register" />
      <Route path="/login" />
      {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/users" />
        <Route path="/contacts" />
      {/* </Route> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
