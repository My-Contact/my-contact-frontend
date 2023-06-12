import React, { useContext } from "react";
import { StyleFormPage } from "../../../styles/StyleFormPages";
import ModalBase from "../ModalBase";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerContactsSchema } from "../../../schemas/contactsSchema";
import { ContactsContext } from "../../../providers/contactsProvider";
import { iContactDataRequest } from "../../../interfaces/contactsInterface";


const CreateContactModal = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<iContactDataRequest>({
    mode: "onBlur",
    resolver: yupResolver(registerContactsSchema),
  });
  const { createContact, setModalCreateContactOpen } = useContext(ContactsContext);

  const onSubmit: SubmitHandler<iContactDataRequest> = (data: any) => {
    const { confirmation, ...body } = data;
    createContact(body);
  };

  return (
    <ModalBase onClose={setModalCreateContactOpen} title="Modal de Criar Contato">
      <StyleFormPage>
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
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
        </section>
      </StyleFormPage>
    </ModalBase>
  );
};

export default CreateContactModal;
