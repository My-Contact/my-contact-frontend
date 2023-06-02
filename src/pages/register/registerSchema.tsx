import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(4, "A senha precisa ter no minimo 4 caracteres"),
    // .matches(/(?=.*?[a-z])/i, "Precisa ter pelo menos 1 letra")
    // .matches(/(?=.*?[0-9])/, "Precisa ter pelo menos 1 numero"),
    passwordConfirmation: yup
    .string()
    .test("password", "As senhas precisam ser iguais", function (value) {
      return this.parent.password === value;
    }),
    phone: yup.string().required("Email obrigatório").min(11),
    image: yup.string(),
});
