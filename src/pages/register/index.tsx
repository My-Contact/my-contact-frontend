import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { iRegisterData } from "../../interfaces/userInterface";
import { registerSchema } from "./registerSchema";
import { UserContext } from "../../providers/userProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<iRegisterData>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });
  const { registerSubmit } = useContext(UserContext);

  const onSubmit: SubmitHandler<iRegisterData> = (data: any) => {
    const { confirmation, ...body } = data;
    registerSubmit(body);
  };

  return (
    <div>
      <section>
        <img src="" alt="" />
        <h3>Já tem cadastro?</h3>
        <Link to="/login">Ir para login</Link>
        <h3>Não quer usar sua conta?</h3>
        <Link className="homePage" to="/">
          Voltar para a home
        </Link>
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Registro</h2>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            {...register("name")}
            placeholder="Insira seu nome"
            type="text"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            {...register("email")}
            placeholder="Insira seu email"
            type="email"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            {...register("password")}
            placeholder="Insira sua senha"
            type="password"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label htmlFor="passwordConfirmation">Confirmar Password:</label>
          <input
            id="passwordConfirmation"
            {...register("passwordConfirmation")}
            placeholder="Insira sua senha novamente"
            type="password"
          />
          {errors.passwordConfirmation && (
            <span>{errors.passwordConfirmation.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input
            id="phone"
            {...register("phone")}
            placeholder="Insira seu telefone ou celular"
            type="text"
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div>
          <label htmlFor="image">Imagem de perfil:</label>
          <input
            id="image"
            {...register("image")}
            placeholder="Insira a url da sua imagem de perfil"
            type="url"
          />
          {errors.image && <span>{errors.image.message}</span>}
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
