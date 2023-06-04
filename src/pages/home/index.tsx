import React from "react";
import { Link } from "react-router-dom";
import { StyleHome } from "./style";

function Home() {
  return (
    <StyleHome>
      <h1>My Contacts</h1>
      <p>Seus contatos salvos e seguros</p>
      <div>
        <Link to="/login" className="page-login">Login</Link>
        <p>ou</p>
        <Link to="/register" className="page-register">Register</Link>
      </div>
    </StyleHome>
  );
}

export default Home;
