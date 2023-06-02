import React from "react";

const Login: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de login aqui
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input id="email" placeholder="Insira seu email" type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input id="password" placeholder="Insira sua senha" type="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <section>
        <img src="" alt="" />
      </section>
    </div>
  );
};

export default Login;
