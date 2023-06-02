import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section>
        <h1>My Contacts</h1>
        <p>Seus contatos salvos e seguros</p>
      </section>
      <section>
        <img src="" alt="" />
      </section>
      <section>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
