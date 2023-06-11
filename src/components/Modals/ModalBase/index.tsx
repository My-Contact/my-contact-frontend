import React, { ReactNode } from "react";

type ModalBaseProps = {
  onClose(value: boolean): void;
  children: ReactNode;
};

const ModalBase: React.FC<ModalBaseProps> = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" type="button" onClick={()=> {onClose(false)}}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalBase;
