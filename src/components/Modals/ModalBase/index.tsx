import React, { ReactNode } from "react";
import { ModalContainerStyled } from "../ModalContacts/style";
import { ModalBaseStyled } from "./style";

type ModalBaseProps = {
  onClose(value: boolean): void;
  children: ReactNode;
  title?: string;
};

const ModalBase: React.FC<ModalBaseProps> = ({ onClose, title, children }) => {
  return (
    <ModalBaseStyled className="modal">
      <ModalContainerStyled className="modal-content">
        <header>
          <h1>{title}</h1>
          <button
            className="modal-close"
            type="button"
            onClick={() => {
              onClose(false);
            }}
          >
            X
          </button>
        </header>
        {children}
      </ModalContainerStyled>
    </ModalBaseStyled>
  );
};

export default ModalBase;
