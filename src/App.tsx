import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RoutesApp } from "./routes/routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { UserProvider } from "./providers/userProvider";
import { ContactsProvider } from "./providers/contactsProvider";

export function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <UserProvider>
          <ContactsProvider>
            <ToastContainer autoClose={1000} />
            <RoutesApp />
          </ContactsProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
