import * as yup from "yup";

export const registerContactsSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  phone: yup.string().required("Email obrigatório").min(11),
  image: yup.string(),
});
