import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { iLoginData } from "../../interfaces/userInterface";
import { loginSchema } from "./loginShema";
import { UserContext } from "../../providers/userProvider";

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
    <div>
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
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            id="password"
            placeholder="Insira sua senha"
            type="password"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Entrar</button>
      </form>
      <section>
        <img src="" alt="" />
        <h3>Novo por aqui?</h3>
        <Link to="/register">Cadastre-se</Link>
        <h3>Não quer usar sua conta?</h3>
        <Link className="homePage" to="/">
          Voltar para a home
        </Link>
      </section>
    </div>
  );
};

export default Login;
