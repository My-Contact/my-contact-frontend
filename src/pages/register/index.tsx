import React from "react";

const Register: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de registro aqui
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <div>
          <label>Nome:</label>
          <input id="name" placeholder="Insira seu nome" type="name" />
        </div>
        <div>
          <label>Email:</label>
          <input id="email" placeholder="Insira seu email" type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input id="password" placeholder="Insira sua senha" type="password" />
        </div>
        <div>
          <label>Confirmar Password:</label>
          <input
            id="confirmPassword"
            placeholder="Insira sua senha novamente"
            type="password"
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            id="phone"
            placeholder="Insira seu telefone ou celular"
            type="phone"
          />
        </div>
        <div>
          <label>Imagem de perfi:</label>
          <input
            id="image"
            placeholder="Insira a url da sua imagem de perfil"
            type="url"
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <section>
        <img src="" alt="" />
      </section>
    </div>
  );
};

export default Register;
