import React from "react";
import "./index.css";

type modalProps = {
  isModalOpen: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
};

const Modal = ({ isModalOpen, closeModal, children }: modalProps) => {
  return (
    <>
      {isModalOpen && (
        <>
          <div
            className="select-modal-backdrop"
            onClick={() => closeModal(false)}
          ></div>
          <div className="select-modal">{children}</div>
        </>
      )}
    </>
  );
};

export default Modal;
