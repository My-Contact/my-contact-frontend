import React, { useContext } from "react";
import { ContactsContext } from "../../../providers/contactsProvider";
import ModalBase from "../ModalBase";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iContactDataRequest } from "../../../interfaces/contactsInterface";
import { StyleFormPage } from "../../../styles/StyleFormPages";
import { updateContactsSchema } from "../../../schemas/contactsSchema";

const EditContactModal = () => {
  const { setModalDeleteContactOpen, editContact, deleteContact } =
    useContext(ContactsContext);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<iContactDataRequest>({
    mode: "onBlur",
    resolver: yupResolver(updateContactsSchema),
  });

  const onSubmit: SubmitHandler<iContactDataRequest> = (data: any) => {
    const { confirmation, ...body } = data;
    editContact(body);
  };

  return (
    <ModalBase onClose={setModalDeleteContactOpen} title={"Modal de Editar Contato"}>
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
            <button type="submit">Salvar Alterações</button>
            <button
              type="button"
              onClick={() => {
                deleteContact();
              }}
            >
              Deletar Contato
            </button>
          </form>
        </section>
      </StyleFormPage>
    </ModalBase>
  );
};

export default EditContactModal;
