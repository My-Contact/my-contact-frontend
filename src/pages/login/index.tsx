import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { iLoginData } from "../../interfaces/userInterface";
import { loginSchema } from "./loginShema";
import { UserContext } from "../../providers/userProvider";
import imgLogin from "../../assets/imgs/img-login.png";
import { StyleFormPage } from "../../styles/StyleFormPages";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });
  const { loginSubmit, loading } = useContext(UserContext);
  const onSubmit: SubmitHandler<iLoginData> = (data: any) => loginSubmit(data);

  return (
    <StyleFormPage>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input
              id="email"
              placeholder="Insira seu email"
              type="email"
              {...register("email")}
            />
          </div>
          {errors.email && <span>{errors.email.message}</span>}
          <div>
            <label>Password:</label>
            <input
              id="password"
              placeholder="Insira sua senha"
              type="password"
              {...register("password")}
            />
          </div>
          {errors.password && <span>{errors.password.message}</span>}
          <button type="submit">Entrar</button>
        </form>
        <div>
          <h4>Novo por aqui?</h4>
          <Link to="/register">Cadastre-se</Link>
          <h4>Não quer usar sua conta?</h4>
          <Link className="homePage" to="/">
            Voltar para a home
          </Link>
        </div>
      </section>
      <img src={imgLogin} alt="Agenda de contatos" />
    </StyleFormPage>
  );
};

export default Login;
