import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { iRegisterData } from "../../interfaces/userInterface";
import { registerSchema } from "./registerSchema";
import { UserContext } from "../../providers/userProvider";
import { Link } from "react-router-dom";
import imgLogin from "../../assets/imgs/img-register.png";
import { StyleFormPage } from "../../styles/StyleFormPages";

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
    <StyleFormPage>
      <img src={imgLogin} alt="Agenda de contatos" />
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastro</h2>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              {...register("name")}
              placeholder="Insira seu nome"
              type="text"
            />
          </div>
          {errors.name && <span>{errors.name.message}</span>}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              {...register("email")}
              placeholder="Insira seu email"
              type="email"
            />
          </div>
          {errors.email && <span>{errors.email.message}</span>}
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              {...register("password")}
              placeholder="Insira sua senha"
              type="password"
            />
          </div>
          {errors.password && <span>{errors.password.message}</span>}
          <div>
            <label htmlFor="passwordConfirmation">Confirmar Password:</label>
            <input
              id="passwordConfirmation"
              {...register("passwordConfirmation")}
              placeholder="Insira sua senha novamente"
              type="password"
            />
          </div>
          {errors.passwordConfirmation && (
            <span>{errors.passwordConfirmation.message}</span>
          )}
          <div>
            <label htmlFor="phone">Telefone:</label>
            <input
              id="phone"
              {...register("phone")}
              placeholder="Insira seu telefone"
              type="text"
            />
          </div>
          {errors.phone && <span>{errors.phone.message}</span>}
          <div>
            <label htmlFor="image">Imagem de perfil:</label>
            <input
              id="image"
              {...register("image")}
              placeholder="Insira a url da sua imagem"
              type="url"
            />
          </div>
          {errors.image && <span>{errors.image.message}</span>}
          <button type="submit">Registrar</button>
        </form>
        <div>
          <h3>Já tem cadastro?</h3>
          <Link to="/login">Ir para login</Link>
          <h3>Não quer usar sua conta?</h3>
          <Link className="homePage" to="/">
            Voltar para a home
          </Link>
        </div>
      </section>
    </StyleFormPage>
  );
};

export default Register;
